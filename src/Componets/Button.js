import React from 'react'

function Button(props) {
    const handleLowCase=()=>{
        let newText=props.text.toLowerCase();
        props.setText(newText);
      }
      const handleUperCase=()=>{
        let newText=props.text.toUpperCase();
        props.setText(newText);
      }
      const handleClear=()=>{
        props.setText("");
      }
  return (
    <div className='btn'> 
    <button onClick={handleUperCase}>UperCase</button>
    <button onClick={handleLowCase}>LowerCase</button>
    <button onClick={handleClear}>Clear Text</button>
    </div>
  )
}

export default Button