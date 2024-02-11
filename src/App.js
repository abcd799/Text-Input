import React,{useState} from 'react'
import './App.css';
import Form from './Componets/Form';
import Button from './Componets/Button';
import Message from './Componets/Message';

function App() {
  const[text,setText]=useState('');
  return (
    <>
     <div className='container'>
    <Form  text={text} setText={setText}/>
    <Button text={text} setText={setText}/>
    <Message text={text}/>
    </div>
    </>
  );
}


export default App;
