import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../custom.css';

const Home = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/properties');
    }
    return (
        <body className="w-full h-screen overflow-hidden bg-[url('./Assets/Home.jpg')] bg-cover bg-center">
            <div className="relative flex mt-[-100px] justify-center items-center h-full">
                <div className="bg-[rgba(0,0,0,0.7)] max-w-[900px] text-center p-5 rounded-[10px]">
                    <h1 className='text-[white] font-extrabold text-[4rem]'>Renting Made Simple</h1>
                    <p className='text-[white] text-2xl'>
                        We simplify the rental process for both property owners and tenants. 
                        In the post-pandemic world, the demand for real estate has surged, especially in cities with high populations and IT offices. <br />
                        RENTIFY aims to bridge the gap between property owners and tenants by providing a platform where they can easily connect based on their requirements.
                    </p>
                    <button className='landing-page-button' onClick={handleOnClick}>View Properties</button>
                </div>
            </div>
        </body>
      );
};

export default Home;
