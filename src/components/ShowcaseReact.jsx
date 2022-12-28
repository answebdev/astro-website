import React,{useState} from 'react'

function Showcase() {
    const [name,setName]=useState('DEVO')
  return (
    <div>Hello {name}</div>
  )
}

export default Showcase;