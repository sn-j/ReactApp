import React from 'react'
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

  const meal = {
    "idMeal": "52771",
    "strMeal": "Spicy Arrabiata Penne",
    "strCategory": "Vegetarian",
    "strArea": "Italian",
    "strInstructions": "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
    "strTags": "Pasta,Curry",
    "strYoutube": "https://www.youtube.com/watch?v=1IszT_guI08",
    "strIngredient1": "penne rigate",
    "strIngredient2": "olive oil",
    "strIngredient3": "garlic",
    "strIngredient4": "chopped tomatoes",
    "strIngredient5": "red chile flakes",
    "strIngredient6": "italian seasoning",
    "strIngredient7": "basil",
    "strIngredient8": "Parmigiano-Reggiano",
    "strMeasure1": "1 pound",
    "strMeasure2": "1/4 cup",
    "strMeasure3": "3 cloves",
    "strMeasure4": "1 tin ",
    "strMeasure5": "1/2 teaspoon",
    "strMeasure6": "1/2 teaspoon",
    "strMeasure7": "6 leaves",
    "strMeasure8": "spinkling",
  };

  let nav = useNavigate();
  return (
    <>
      <div className='p-10 bg-indigo-500 text-black h-[100vh] cursor-pointer' >
        <div className='shadow-lg shadow-red-200 w-[30%] px-14 py-3 bg-gray-300' onClick={() => nav(`/Details/${meal.idMeal}`, { state: meal })}>
          <h1 className='text-xl font-bold'>{meal.strMeal}</h1>
          <div>
            <img className='w-[380px] h-[260px] my-4 rounded-md' src={meal.strMealThumb} />
            <p className='text-lg '>{`${meal.strInstructions.substring(0, 30)} ...`}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
