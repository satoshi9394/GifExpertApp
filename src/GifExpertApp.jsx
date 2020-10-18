import React, { useState } from 'react'

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
  const handleAdd = () => {
    const newSerie = 'HunterX';
    // setCategories([ newSerie, ...categories ]);
    setCategories( cats => [ newSerie, ...cats ]);
  }

  return (
    <div>
      <h2>GifExpertApp</h2>
      <hr/>
      <button onClick={handleAdd}>Agregar</button>
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
