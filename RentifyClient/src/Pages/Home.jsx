import React from 'react';
import Testimonials from "../Components/Testimonials";
import { useNavigate } from 'react-router-dom';
import '../custom.css';

const Home = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/properties');
  };

  return (
    <div className="p-4 overflow-hidden bg-[url('./Assets/home2.jpg')] md:bg-[url('./Assets/home1.jpg')] bg-cover bg-center min-h-[84vh] md:h-screen flex flex-col items-center justify-center">
      <div className="font-nunito bg-[rgba(0,0,0,0.7)] text-center p-6 rounded-lg max-w-4xl md:p-10">
        <h1 className="text-2xl text-white font-bold md:text-5xl">Renting Made Simple</h1>
        <p className="text-md text-white md:text-2xl font-nunito md:mt-6">
          Rentify makes renting easy for both property owners and tenants. Our platform connects users based on their needs, meeting the high demand in busy cities.
        </p>
        <div className="flex justify-center mt-6">
          <button className='text-sm md:text-xl p-3 text-white md:w-1/4 bg-blue-700 rounded-md hover:bg-slate-700' onClick={handleOnClick}>View Properties</button>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-4xl font-bold">600+</span>
            <span className="text-lg md:text-xl">Properties Listed</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-4xl font-bold">5000+</span>
            <span className="text-lg md:text-xl">Registered Users</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-4xl font-bold">1200+</span>
            <span className="text-lg md:text-xl">Bookings Done</span>
          </div>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
