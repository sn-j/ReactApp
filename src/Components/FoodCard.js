import React from 'react'

function FoodCard() {
  const data = [
    {
      "strMeal": "Baked salmon with fennel & tomatoes",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/1548772327.jpg",
      "idMeal": "959"
    },
    {
      "strMeal": "Cajun spiced fish tacos",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
      "idMeal": "819"
    },
    {
      "strMeal": "Escovitch Fish",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/1520084413.jpg",
      "idMeal": "944"
    },
    {
      "strMeal": "Fish fofos",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg",
      "idMeal": "43"
    },
    {
      "strMeal": "Fish pie",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
      "idMeal": "802"
    },
    {
      "strMeal": "Fish Stew with Rouille",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg",
      "idMeal": "918"
    },
    {
      "strMeal": "Garides Saganaki",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg",
      "idMeal": "276"
    },
    {
      "strMeal": "Grilled Portuguese sardines",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/lpd4wy1614347943.jpg",
      "idMeal": "530"
    },
    {
      "strMeal": "Honey Teriyaki Salmon",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
      "idMeal": "525"
    },];

  return (
    <div className='bg-gray-400 p-4'>
      <h1 className='text-center text-3xl font-mono text-white mb-4 font-bold underline-offset-1'>Welcome to my Resturent</h1>
      <div className='grid grid-cols-4 gap-3'>
        {data.map((val, i) => {
          return <div className='bg-fuchsia-500 p-3 rounded-md shadow-lg shadow-teal-700'>
            <h1 className='text-justify font-semibold font-serif text-white'>{data[i].strMeal}</h1>
            <img src={data[i].strMealThumb} alt="avatar" className='w-80 rounded-lg mt-2 mb-2 font-bold' />
            <p className='text-center font-bold text-white'> Price: {data[i].idMeal}</p>
          </div>
        })}
      </div>

    </div>
  )
}

export default FoodCard
