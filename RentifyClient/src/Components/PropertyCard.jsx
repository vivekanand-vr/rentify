import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuIndianRupee } from "react-icons/lu";
import { RiSofaLine } from "react-icons/ri";
import { RxDimensions } from "react-icons/rx";
import { API_ENDPOINTS, PROPERTY_IMAGE } from '../Services/Endpoints';
import axios from 'axios';

const PropertyCard = ({ property, isLoggedIn, isExpanded, onExpand }) => {
  const [ownerDetails, setOwnerDetails] = useState(null);
  const navigate = useNavigate();
  /*
      For transformations we need to import `AdvancedImage` tag and render image within it.
      Refer "https://cloudinary.com/documentation/react_integration"
   */
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
    <div className="bg-white relative mt-2.5 p-3 [transition:transform_0.2s_ease] rounded-md border-1 border-slate-400 hover:scale-[1.025] w-[420px]">
      
      <h4 className='text-lg mb-2 mx-0 font-semibold md:text-2xl'>{property.name}</h4>
      <p className='text-sm -mt-2 mb-2 md:text-base' id='location'> {property.city}, {property.state}, {property.country} </p>

      <img className='w-full h-45 mx-0 my-2 rounded-sm md:h-[250px] '
           src={imageUrl} alt='property' />
    
      <p className='text-sm md:text-base mx-0 my-1 flex items-center'>
        <span className='font-semibold flex items-center mr-1'>Property Type: </span>
           {property.propertyType} {property.bedrooms} BHK 
      </p>

      <p className='text-sm md:text-base mx-0 my-1 flex items-center'>
        <span className='font-semibold flex items-center'>Area <RxDimensions className='mx-1' /></span> 
          {property.area} square ft.
      </p>
      
      <p className='text-sm md:text-base mx-0 my-1 flex items-center'>
        <span className='font-semibold flex items-center'>Furnishing <RiSofaLine className='mx-1' /></span> 
          {property.furnishing} 
      </p>
      
      <p className='text-sm md:text-base mx-0 my-1 flex items-center'>
        <span className='font-semibold flex items-center'>Rent:</span> <LuIndianRupee className='ml-1' />
          {property.rent} &nbsp; &nbsp; 
        <span className='font-semibold flex items-center'>Deposit:</span> <LuIndianRupee className='ml-1' />{property.deposit}
      </p>
       
      <button className='text-sm md:text-base text-white bg-blue-700 mt-2 px-3 py-2 rounded-md border-[none] hover:bg-slate-700'
              onClick={handleViewDetails}>
        {isExpanded ? 'Hide Details' : 'More Details'}
      </button>

      {isExpanded && ownerDetails && (
        <div className="bg-[#f9f9f9] mt-3 p-2 pt-3 border-t-[#008080] border-t border-solid">
        <h5 className='text-base md:text-xl font-semibold'>Additional Details:</h5>
        <p className='text-sm md:text-base'>{property.description}</p>
        <br />
        <h5 className='text-base md:text-xl font-semibold'>Owner Contact</h5>
          <p className='text-sm md:text-base my-1'>Name :  {ownerDetails.firstName} {ownerDetails.lastName} </p>
          <p className='text-sm md:text-base my-1'>Email :&nbsp; {ownerDetails.email}</p>
          <p className='text-sm md:text-base my-1'>Phone : {ownerDetails.phoneNumber}</p>
        </div>
      )}
    </div>
  );
}

export default PropertyCard;
