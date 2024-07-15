import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../custom.css';

const Home = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/properties');
    }
    return (
        <div className="w-full p-4 overflow-hidden bg-[url('./Assets/home2.jpg')] md:bg-[url('./Assets/home1.jpg')] bg-cover bg-center min-h-[84vh] md:h-screen flex items-center justify-center">
            <div className="-mt-20 w-96 bg-[rgba(0,0,0,0.7)] text-center p-3 rounded-lg md:w-[900px]">
                <h1 className="text-2xl text-white font-sans font-bold my-3 md:text-[4rem]">Renting Made Simple</h1>
                    <p className="text-md text-white md:text-2xl font-sans md:mt-10">
                    We simplify the rental process for both property owners and tenants. 
                    In the post-pandemic world, the demand for real estate has surged, especially in cities with high populations and IT offices. <br /><br />
                    RENTIFY aims to bridge the gap between property owners and tenants by providing a platform where they can easily connect based on their requirements.
                    </p>
                <div className="flex justify-center mt-4">
                    <button className='text-sm md:text-base p-2.5 text-white md:w-1/5 bg-blue-700 rounded-md hover:bg-slate-700' onClick={handleOnClick}>View Properties</button>
                </div>
            </div>
        </div>

      );
};

export default Home;
