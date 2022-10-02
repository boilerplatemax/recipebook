import React,{useContext, useEffect} from 'react'
import IngredientList from './IngredientList'
import { RecipeContext } from '../App'

export default function Recipe(props) {
  const {handleRecipeDelete,handleRecipeSelect}=useContext(RecipeContext)

  const {
    id,
    name,
    cooktime,
    servings,
    instructions,
    ingredients
    }=props
  
  useEffect(()=>{
  //function
  return()=>{
  //unmountFunction
  }
  },[])

  return (
    <div className='recipe'>
      <div className='recipe__header'>
        <h3 className='recipe__title'>{name}</h3>
          <div>
            <button
            className='btn btn--primary mr-1'
            onClick={()=>handleRecipeSelect(id)}>Edit</button>
            <button 
            className='btn btn--danger mr-1'
            onClick={()=>handleRecipeDelete(id)}
            >
              Delete
            </button>
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
