import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';
import PropTypes from 'prop-types';

const GifGrid = ({category}) => {

  const { data: images , loading} = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn animate__delay-1">{category}</h3>
      {
        loading && <p className="animate__animated animate__flash animate__delay-1">Loading...</p>
      }
      <div className="card-grid">
        {
          images.map( img => (
            <GifGridItem 
              key={img.id}
              { ...img }
            />
          ))
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}

export default GifGrid
