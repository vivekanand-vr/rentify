import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../custom.css';

const Home = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/properties');
    }
    return (
        <div className="w-full overflow-hidden bg-[url('./Assets/Home.jpg')] bg-cover bg-center h-[84vh] md:h-screen">
            <div className="relative flex justify-center items-center md:h-[500px] md:mt-28">
                <div className="w-80 mt-12 bg-[rgba(0,0,0,0.7)] text-center p-4 rounded-lg md:w-[900px]">
                    <h1 className="text-2xl text-white font-sans font-bold my-3 md:text-[4rem]">Renting Made Simple</h1>
                    <p className="text-md text-white md:text-2xl font-sans md:mt-10">
                        We simplify the rental process for both property owners and tenants. 
                        In the post-pandemic world, the demand for real estate has surged, especially in cities with high populations and IT offices. <br />
                        RENTIFY aims to bridge the gap between property owners and tenants by providing a platform where they can easily connect based on their requirements.
                    </p>
                <div className="flex justify-center mt-4">
                    <button className='text-sm md:text-base mt-3.5 mx-2 p-2 md:p-3 text-white m-1/2 md:w-1/4 bg-blue-600 border-none rounded-md hover:bg-slate-700'
                            onClick={handleOnClick}>View Properties</button>
                </div>
                </div>
            </div>
        </div>
      );
};

export default Home;
