import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Details = () => {

  const { state } = useLocation();
  const { id } = useParams();


  return (
    <>
      <div className='bg-amber-800 text-white px-10 py-8'>
        <div className='flex justify-between'>
          <div>
            <p className='text-xl font-bold mb-4'>{state.strMeal}</p>
            <img className="w-[70%] h-[70%]" src={state.strMealThumb}></img>
            <div className='flex gap-10 mt-4'>
              <p>{state.strCategory}</p>
              <p>{state.strArea}</p>
            </div>

          </div>
          <div className='flex-grow'>
            <table className='w-[100%] mt-24' >
              <thead className='flex flex-row gap-8 text-left w-[50%] justify-between mb-2'>
                <th className='text-lg text-red-200'>Ingredient</th>
                <th className='text-lg text-red-200'>Measure</th>
              </thead>
              <tbody >
                <tr className='flex flex-row w-[50%] justify-between text-left mb-1 gap-10'>
                  <td>{state.strIngredient1}</td>
                  <td>{state.strMeasure1}</td>
                </tr>
                <tr className='flex flex-row w-[50%] justify-between text-left mb-1'>
                  <td>{state.strIngredient2}</td>
                  <td>{state.strMeasure2}</td>
                </tr>
                <tr className='flex flex-row w-[50%] justify-between text-left mb-1'>
                  <td>{state.strIngredient3}</td>
                  <td>{state.strMeasure3}</td>
                </tr>
                <tr className='flex flex-row w-[50%] justify-between text-left mb-1'>
                  <td>{state.strIngredient4}</td>
                  <td>{state.strMeasure4}</td>
                </tr>
                <tr className='flex flex-row w-[50%] justify-between text-left mb-1 gap-10'>
                  <td>{state.strIngredient5}</td>
                  <td>{state.strMeasure5}</td>
                </tr>
                <tr className='flex flex-row w-[50%] justify-between text-left mb-1'>
                  <td>{state.strIngredient6}</td>
                  <td>{state.strMeasure6}</td>
                </tr>
                <tr className='flex flex-row w-[50%] justify-between mb-1'>
                  <td>{state.strIngredient7}</td>
                  <td>{state.strMeasure7}</td>
                </tr>
                <tr className='flex flex-row w-[50%] justify-between text-justify mb-1'>
                  <td>{state.strIngredient8}</td>
                  <td>{state.strMeasure8}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <p className='text-xl font-bold'>Instruction : </p>
          <p className='text-lg'>{state.strInstructions}</p>
        </div>

      </div >
    </>
  )
}

export default Details
