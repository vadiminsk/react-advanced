import React from 'react';

const styles = {
  background: 'lightblue',
};

const Card = (props) => {
  return (
    <div style={styles} className='card'>
      {props.children}
    </div>
  );
};

export default Card;
