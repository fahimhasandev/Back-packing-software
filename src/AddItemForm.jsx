import React, { useState } from 'react';
import Button from './Button';

const AddItemForm = () => {
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(item)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        type='text'
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <Button>Add to list</Button>
    </form>   
  );
};

export default AddItemForm;
