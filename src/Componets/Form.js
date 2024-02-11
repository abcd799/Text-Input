import React from 'react'

function Form(props) {
    
  
  const handleInputChange=(event)=>{
    props.setText(event.target.value);
  }
  return (
    <>
    <h1>Enter Your Text Here...</h1>
    <input type="text" value={props.text} onChange={handleInputChange} />
    </>
  )
}

export default Form