import React, { useState } from 'react';

const PureCompF = () => {
  const [name, setName] = useState('Vadim');

  console.log('render');

  return (
    <>
      <h3>{name}</h3>
      <button onClick={() => setName('Vadim')}>Click</button>
    </>
  );
};

export default PureCompF;
