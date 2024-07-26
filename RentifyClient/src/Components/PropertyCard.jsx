import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LuIndianRupee, RiSofaLine, RxDimensions, MdOutlineLocationOn } from '../Services/Icons';
import { API_ENDPOINTS, PROPERTY_IMAGE } from '../Services/Endpoints';
import axios from 'axios';

const PropertyCard = ({ property, isLoggedIn, isExpanded, onExpand }) => {
  const [ownerDetails, setOwnerDetails] = useState(null);
  const navigate = useNavigate();

  // Split the location string and remove the postal code part
  const locationWithoutPostalCode = property.location.split(' - ')[0];
  const imageUrl = PROPERTY_IMAGE + property.imageId;
  
  useEffect(() => {
    if (isExpanded && isLoggedIn) {
      // Fetch owner details from the backend
      axios.get(API_ENDPOINTS.user.details + property.ownerId)
        .then(response => setOwnerDetails(response.data))
        .catch(error => console.error('There was an error fetching the owner details:', error));
    }
  }, [isExpanded, isLoggedIn, property.ownerId]);

  const handleViewDetails = () => {
    if (isLoggedIn) {
      onExpand(property.id);
    } else {
      // Redirect to login if not logged in
      navigate('/login');
    }
  };

  return (
    <div className="text-sm bg-white relative mt-2.5 p-2 rounded-md border-1 border-slate-400 w-[360px]">
      <img className='w-full h-54 mx-0 rounded-sm md:h-[250px] [transition:transform_0.2s_ease] hover:scale-105'
           src={imageUrl} alt='property' />

      <div className='p-2'>
        <h4 className='text-lg mb-2 mx-0 font-semibold'>{property.name}</h4>
        <p className='flex items-center -mt-2 mb-2 text-red-600 ' id='location'>
          <MdOutlineLocationOn className='mr-1 md:text-xl' /> {locationWithoutPostalCode} 
        </p>

        <p className='mx-0 my-1'>
          <span className='font-semibold'> {property.propertyType} {property.bedrooms} BHK </span> - {property.additionalDetails.highlights}
        </p>

        <p className='font-semibold mx-0 my-1 mb-3 flex items-center text-green-700'>
          <LuIndianRupee /> {property.rent} / month
        </p>
        
        <Link
          to={`/property/${property.id}`} className='text-white bg-blue-700 my-2 px-3 py-2 rounded-md border-none hover:bg-slate-700'>
          More Details
        </Link>
      </div> 
    </div>
  );
}

export default PropertyCard;
