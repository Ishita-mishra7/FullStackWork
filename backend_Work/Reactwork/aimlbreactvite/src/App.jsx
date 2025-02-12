import React from 'react'
import Student from './Student';
import logo from './assets/me.jpeg';
import StudentState from './StudentState';
import ImageManipulation from './ImageManipulation';

function App() {
  let a=20;
  let mystyle={
    backgroundColor:'cyan',color:'black',border:'10px solid red',height:'100px',
  }
  return (
    <div>
      <ImageManipulation/>
    </div>
  )
}

export default App

