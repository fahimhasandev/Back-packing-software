import { useState } from 'react';
import { initialItems } from './constants';

const ItemList = () => {
  const [items, setItems] = useState(initialItems);

  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};

function Item({ item }) {
  return (
    <li className='item'>
      <label htmlFor=''>
        <input type='checkbox' checked={item.packed} />
        {item.name}
      </label>
      <button> X </button>
    </li>
  );
}

export default ItemList;
