import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategoris = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState('');

  const handleInpuntChanges = ( e ) => {
    const newValue = e.target.value;
    setinputValue(newValue)
    console.log('llamado el handleInpuntChanges')
  } 
  const handleSubmit = (e) => {
    e.preventDefault();
    if ( inputValue.trim().length > 2 ) {
      setCategories(cats => [ inputValue, ...cats ]);
      setinputValue('');
    }
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

AddCategoris.prototype = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategoris;
