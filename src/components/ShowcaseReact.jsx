import React, {useState} from 'react';

function Showcase() {
  const [name,setName]=useState('DEVO');
    
  return (
    <div>Hello {name}. Welcome to the React Showcase component.</div>
  )
}

export default Showcase;