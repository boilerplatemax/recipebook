import React, {useState, useEffect} from 'react';
import './CSS/App.css';
import RecipeList from './components/RecipeList';
import RecipeEdit from './components/RecipeEdit';
import { v4 as uuidv4 } from 'uuid';

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY= 'cookingWithReact.recipes'

function App() {
  const [selectedRecipeId,setSelectedRecipeId] = useState()
  
  
  const [recipes, setRecipes] = useState(() => { 
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON == null) {
      return sampleRecipes
    } else {
      return JSON.parse(recipeJSON)
    }
  })

  const selectedRecipe = recipes.find(recipe =>recipe.id===selectedRecipeId)
useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(recipes))
},[recipes])

const RecipeContextValue= {
  handleRecipeAdd,
  handleRecipeDelete,
  handleRecipeSelect,
  handleRecipeChange
}

function handleRecipeAdd(){
  const newRecipe ={
    id: uuidv4(),
    name: '',
    servings: 1,
    cooktime: '',
    instructions: '',
    ingredients: [
      {
        id:uuidv4(), name: '', amount: ''
      }
    ]
  }
  setSelectedRecipeId(newRecipe.id)
  setRecipes([...recipes, newRecipe])
}
function handleRecipeChange(id, recipe){
  const newRecipes = [...recipes]
  const index = newRecipes.findIndex(r => r.id ===id)
  newRecipes[index] = recipe
  setRecipes(newRecipes)

}

function handleRecipeDelete(id){
  if(selectedRecipeId != null && selectedRecipeId ===id){
    setSelectedRecipeId(undefined)
  }
  setRecipes(recipes.filter(recipe => recipe.id !=id))
}

function handleRecipeSelect(id){
  setSelectedRecipeId(id)
}
  
  return (
    <RecipeContext.Provider value={RecipeContextValue}>
      <RecipeList 
        recipes={recipes}
      />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}
    </RecipeContext.Provider>
  );
  
}
const sampleRecipes =[
  {id:1,
  name:'Chicken',
  servings: 3,
  cooktime: '1:45',
  instructions: '1. Defrost chicken\n2. Season the chicken\n3. Cook chicken\n4. Enjoy chicken',
  ingredients:[
    {
      id:1,
      name:'chicken',
      amount:'2 lbs'
    },
    {
      id:2,
      name:'salt',
      amount:'1 Tbs'
    },
  ]
  },
  {id:2,
    name:'Pork',
    servings: 4,
    cooktime: '0:45',
    instructions: '1. Defrost pork\n2. Season the pork\n3. Cook pork\n4. Enjoy pork',
    ingredients:[
      {
        id:1,
        name:'Pork',
        amount:'3 lbs'
      },
      {
        id:2,
        name:'Paprika',
        amount:'1 Tbs'
      },
    ]
    }
]

export default App;
