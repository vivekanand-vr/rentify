import React from 'react'
import space from '../Assets/space.png';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center h-[84vh] md:h-screen bg-gradient-to-b from-[#1b2735] to-[#090a0f] overflow-hidden">
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <img className="w-56 md:w-96" alt="space" src={space} />
      <div className="text-center text-white">
          <h1 className="text-4xl md:text-9xl [text-shadow:#ffef00_1px_0_10px] font-semibold">404 Error</h1>
          <p className="text-lg md:text-2xl m-2 p-2">Looks like the page you were looking for is no longer here.</p>
          <button className="text-base md:text-xl w-24 md:w-28 text-white bg-green-700 border mt-2 p-1 md:p-2 rounded border-white hover:bg-slate-600"
                  onClick={() => navigate('/')}>Home</button>
      </div>
    </div>
  )
}

export default Error