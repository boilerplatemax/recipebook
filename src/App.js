import React, {useState} from 'react';
import './CSS/App.css';
import RecipeList from './Components/RecipeList';

function App() {
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
  const [recipes, setRecipes] = useState(sampleRecipes)

  
  return (
    <div className="App">
      <RecipeList recipes={recipes}/>
    </div>
  );
}

export default App;
