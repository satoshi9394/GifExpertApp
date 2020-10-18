import React, { useState } from 'react'

const AddCategoris = () => {
  const [inputValue, setinputValue] = useState('Hola Mundo');

  const handleInpuntChanges = ( e ) => {
    const newValue = e.target.value;
    setinputValue(newValue)
  } 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit hecho');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={ inputValue }
        onChange={ handleInpuntChanges }
      />
    </form>
  )
}

export default AddCategoris;
