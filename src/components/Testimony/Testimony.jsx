import React from 'react'
import './Testimony.css'

const Testimony = (props) => {
  return (
    <div className='photography-container'>

        <img src={props.image} className='photography-image' alt={props.alt} />
        
        <div className='photography-text-container'>
            <h2 className='photography-name'>"{props.name}"</h2>
            <h3 className='photography-camera'>{props.camera}</h3>
            <p className='photography-text'>{props.text}</p>
        </div>

    </div>
  )
}

export default Testimony