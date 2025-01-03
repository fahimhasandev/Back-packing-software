import React from 'react';
import Button from './Button';
import secondaryBtns from './constants';

const ButtonGroup = () => {
  return (
    <section className='button-group'>
      {secondaryBtns.map((text) => {
        return (
          <Button key={text} type="secondary">
            {text}
          </Button>
        );  
      })}
    </section>
  );
};

export default ButtonGroup;
