import React /*, { useState, useEffect } */ from 'react'
import { useFetchGifs } from './hooks/useFetchGifs'
// import GifGridItem from './GifGridItem';
// import getGifs from './helpers/getGifs';

const GifGrid = ({category}) => {

  /* const [images, setImages] = useState([])
  useEffect( () => {
    getGifs(category)
      .then(imgs => setImages(imgs))
  }, [ category ]) */
  const {loading} = useFetchGifs();



  return (
    <>
      <h3>{category}</h3>
      { loading ? 'Cargando...' : 'Data Cargada'}
      {/* <div className="card-grid">
        {
          images.map( img => (
            <GifGridItem 
              key={img.id}
              { ...img }
            />
          ))
        }
      </div> */}
    </>
  )
}

export default GifGrid
