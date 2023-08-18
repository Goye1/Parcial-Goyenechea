import React, { useState } from 'react'
import './App.css'

function Card({nombre,apellido}) {
    return (
     <React.Fragment>
        <div className="white-border">
            <h2>{nombre}</h2>
            <h1>{apellido}</h1>
        </div>
     </React.Fragment>
    );
  }
  
  export default Card;
  