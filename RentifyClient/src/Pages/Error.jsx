import React from 'react'
import space from '../Assets/space.png';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  return (
    <body>
      <div className="error-page">
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
        <img alt='space' src={space} />
        <div className="error-container">
          <h1 className="error-heading"> 404 Error</h1>
          <p className="error-subheading">Looks like the page you were looking for is no longer here.</p>
          <button onClick={() => navigate('/')} >Home</button>
        </div>
      </div>
    </body>
  )
}

export default Error