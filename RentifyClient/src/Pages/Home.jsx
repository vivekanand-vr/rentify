import React, { useState, useEffect } from 'react';
import Testimonials from "../Components/Testimonials";
import PropertyCard from '../Components/PropertyCard';
import ShimmerCard from "../Components/ShimmerCard";
import { useNavigate } from 'react-router-dom';
import { FaAward } from '../Services/Icons';
import { API_ENDPOINTS } from '../Services/Endpoints';
import { awards, milestones } from '../Services/Constants';
import apiClient  from "../Services/ApiClient";
import '../custom.css';
import 'animate.css';

function Milestones(){
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold">Our Milestones</h2>
        <p className="mt-3 text-lg md:text-2xl">We are proud to be recognized for our exceptional service.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl">
        {milestones.map((milestone, index) => (
          <div key={index} className="bg-cyan-950 text-white text-center p-6 sm:p-8 rounded-md shadow-md">
            <h3 className="text-3xl md:text-5xl font-bold">{milestone.count}</h3>
            <p className="mt-2 text-xl md:text-2xl font-semibold">{milestone.title}</p>
            <p className="mt-2 text-sm md:text-base">{milestone.description}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-10 text-2xl md:text-4xl font-bold">Awards</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl">
        {awards.map((award, index) => (
          <div key={index} className="bg-neutral-100 p-8 sm:p-10 rounded-md h-64 border-2 border-black shadow-md flex flex-col justify-center">
            <h3 className="flex text-xl font-bold">
              <FaAward className="size-14 mr-4" /> {award.title}
            </h3>
            <p className="mt-3 text-sm md:text-base">{award.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

function RecentListings(){
  const [recentProperties, setRecentProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/properties');
  };

  useEffect(() => {
    apiClient.get(API_ENDPOINTS.property.getLatest)
      .then(response => {
        setRecentProperties(response.data);
        setLoading(false); 
      })
      .catch(error => {
        setLoading(false);
        console.error('There was an error fetching the properties:', error);
      })
  }, []);

  return(
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <div>
          <h2 className="mt-10 text-center text-3xl md:text-5xl font-bold">Recent Listings</h2>
          <p className="text-center mt-3 text-lg md:text-2xl">Check out the latest properties added to our platform.</p>

          {/* Recent Properties */}
          <div className="flex flex-wrap gap-3 mx-auto p-3 max-w-screen-2xl justify-center md:justify-normal">
            { loading ? ( Array.from({ length: 4 }).map((_, index) => <ShimmerCard key={index} />)) : 
                        ( recentProperties.map(property => (
                            <PropertyCard key={property.id} property={property} /> ))
                        )}
          </div>
        </div>
        <button className='px-4 my-6 text-sm md:text-xl p-3 border-2 border-black rounded-md hover:bg-cyan-950 hover:text-white hover:-translate-y-2 duration-300 ease-in-out' 
                    onClick={handleOnClick}> View All 
        </button>
      </div>
  );
};


const Home = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/properties');
  };

  return (
    <div className='font-nunito'>
       
       {/* First Section: Half Black Background, Half Image */}
       <div className="flex h-screen font-nanum animate__animated animate__fadeIn flex-col md:flex-row">
          <div className="h-screen w-full md:w-3/5 bg-cyan-950 flex items-center justify-center text-white p-6 bg-cover bg-[url('./Assets/BG-2.jpg')] md:bg-none">
            <div className="text-center -mt-40 md:mt-0">
              <h1 className="text-2xl font-bold md:text-6xl animate__animated animate__fadeInDown">
                Renting Made Simple
              </h1>
              <p className="text-md md:text-2xl mt-6 tracking-wide animate__animated animate__fadeInDown">
                Rentify makes renting easy for both property owners and tenants. <br />
                Our platform connects users based on their needs, meeting the high demand in busy cities.
              </p>
              <button className="mt-6 md:text-xl font-bold p-3 border-2 border-white rounded-md hover:bg-white hover:text-cyan-950 hover:-translate-y-2 duration-300 ease-in-out"
                onClick={handleOnClick} >
                View Properties
              </button>
            </div>
          </div>
          <div className="hidden md:block w-2/5 bg-cover bg-[url('./Assets/BG-1.jpg')]"></div>
      </div>
      
      {/* Milestones and Awards Section */}
        <Milestones />

      {/* Recent Property Uploads Section */}
        <RecentListings />

      {/* Testimonials Section */}
      <div className="bg-zinc-200 py-14">
        <Testimonials />
      </div>

    </div>
  );
};

export default Home;
