import React, { useState } from 'react'
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);


  // const handleAdd = () => {
    // const newSerie = 'HunterX';
    // setCategories([ newSerie, ...categories ]);
    // setCategories( cats => [ newSerie, ...cats ]);
  // }

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory/>
      <hr/>
      <ol>
        {
          categories.map( category => {
            return <li key={ category }> { category }</li>
          })
        }
      </ol>
    </div>
  );
}

export default GifExpertApp
