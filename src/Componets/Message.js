import React from 'react'

function Message(props) {
  return (
    <>
    <div className='message'>
    <h3>Details about your text:</h3>
    <p>{props.text.split(" ").length} words and {props.text.length} characters in your text.</p>
    </div>
    </>
  )
}

export default Message