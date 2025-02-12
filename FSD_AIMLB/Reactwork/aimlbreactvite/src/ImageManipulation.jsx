import React from 'react'
import './image.css';
import me from './me.jpeg'
function ImageManipulation() {
  return (
    <div className='catdiv'>
      
      <div>
        <img src={me} height={100} width={100} alt='me Image'></img>
      </div>
      <div>

      </div>
      <button>Enhance height</button>
      &nbsp;
      <button>Enhance width</button>
      <button>Image rotate</button>
      <button>Color change</button>
      </div>
  )
}

export default ImageManipulation