import React from 'react'
import IngredientList from './IngredientList'
export default function Recipe(props) {
  const {
    name,
    cooktime,
    servings,
    instructions,
    ingredients
    }=props
  return (
    <div className='recipe'>
      <div className='recipe__header'>
        <h3 className='recipe__title'>{name}</h3>
          <div>
            <button className='btn btn--primary mr-1'>Edit</button>
            <button className='btn btn--danger mr-1'>Delete</button>
          </div>
        </div>
        <div className='recipe__row'>
          <span className='recipe__label'>
            Cook Time
          </span>
          <span className='recipe__value'>
            {cooktime}
          </span>
        </div>
        <div className='recipe__row'>
          <span className='recipe__label'>
            Servings
          </span>
          <span className='recipe__value'>
            {servings}
          </span>
        </div>
        <div className='recipe__row'>
          <span className='recipe__label'>
            Instructions
          </span>
          <div className='recipe__value recipe__value--indented recipe__instructions'>
            {instructions}
          </div>
        </div>
        <div className='recipe__row'>
          <span className='recipe__label'>
            Ingredients
          </span>
          <div className='recipe__value recipe__value--indented'>
            <IngredientList ingredients={ingredients}/>
          </div>
        </div>
      </div>
  )
}