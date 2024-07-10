import React from 'react'
import space from '../Assets/space.png';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  return (
      <div className="flex [background:radial-gradient(ellipse_at_bottom,#1b2735_0%,#090a0f_100%)] overflow-hidden min-h-screen items-center justify-center">
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
        <img className='mt-[-100px] w-[400px]' alt='space' src={space} />
        <div className="mt-[-100px] text-center text-[whitesmoke]">
          <h1 className="[text-shadow:#ffef00_1px_0_10px] text-9xl m-0"> 404 Error</h1>
          <p className="text-[2rem] m-0">Looks like the page you were looking for is no longer here.</p>
          <button className='text-xl min-w-[100px] text-[white] bg-green-600 border mt-[25px] p-2.5 rounded-[5px] border-solid border-[white] hover:bg-slate-600'
                  onClick={() => navigate('/')} >Home</button>
        </div>
      </div>
  )
}

export default Error