import React, { useState } from 'react'
//components
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {

  const [categories, setCategories] = useState(defaultCategories);


  // const handleAdd = () => {
    // const newSerie = 'HunterX';
    // setCategories([ newSerie, ...categories ]);
    // setCategories( cats => [ newSerie, ...cats ]);
  // }

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr/>
      <ol>
        {
          categories.map( category => 
            <GifGrid 
              category={category} 
              key={category}
            />
          )
        }
      </ol>
    </div>
  );
}

export default GifExpertApp
