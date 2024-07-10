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
    <div className="border bg-[white] w-[420px] relative shadow-[0_4px_8px_rgba(0,0,0,0.2)] 
                    [transition:transform_0.2s_ease,box-shadow_0.2s_ease] mt-2.5 p-[15px] rounded-md border-solid
                  border-[rgb(181,177,177)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] hover:scale-[1.025]">
      
      <h4 className='mt-0 mb-2 mx-0 text-2xl font-semibold'>{property.name}</h4>

      <p className='text-[#333] -mt-2 mb-2' id='location'>
        {property.city}, {property.state}, {property.country}
      </p>

      <img className='w-full h-[250px] mx-0 my-2 rounded-sm '
           src={imageUrl} alt='property' />
    
      <p className='text-[#333] mx-0 my-1 flex items-center'>
        <span className='font-semibold flex items-center mr-1'>Property Type: </span>
           {property.propertyType} {property.bedrooms} BHK 
      </p>

      <p className='text-[#333] mx-0 my-1 flex items-center'>
        <span className='font-semibold flex items-center'>Area <RxDimensions className='mx-1' /></span> 
          {property.area} square ft.
      </p>
      
      <p className='text-[#333] mx-0 my-1 flex items-center'>
        <span className='font-semibold flex items-center'>Furnishing <RiSofaLine className='mx-1' /></span> 
          {property.furnishing} 
      </p>
      
      <p className='text-[#333] mx-0 my-1 flex items-center'>
        <span className='font-semibold flex items-center'>Rent:</span> <LuIndianRupee className='ml-1' />
          {property.rent} &nbsp; &nbsp; 
        <span className='font-semibold flex items-center'>Deposit:</span> <LuIndianRupee className='ml-1' />{property.deposit}
      </p>
       
      <button className='text-[white] w-[calc(50%_-_20px)] bg-sky-600 transition-all duration-[0.2s] ease-[ease] shadow-[0_8px_15px_rgba(0,0,0,0.2)] mt-[15px] px-3 py-2 rounded-[5px] border-[none] hover:bg-[#2a3536] hover:text-[white] hover:shadow-[0_15px_25px_rgba(0,0,0,0.4)]'
              onClick={handleViewDetails}>
        {isExpanded ? 'Hide Details' : 'More Details'}
      </button>

      {isExpanded && ownerDetails && (
        <div className="bg-[#f9f9f9] mt-3 p-3 border-t-[#008080] border-t border-solid">
        <h5 className='text-xl font-semibold'>Additional Details:</h5>
        <p>{property.description}</p>
        <br />
        <h5 className='text-xl font-semibold'>Owner Contact</h5>
          <p className='text-[#333] my-1'>Name :  {ownerDetails.firstName} {ownerDetails.lastName} </p>
          <p className='text-[#333] my-1'>Email :&nbsp; {ownerDetails.email}</p>
          <p className='text-[#333] my-1'>Phone : {ownerDetails.phoneNumber}</p>
        </div>
      )}
    </div>
  );
}

export default PropertyCard;
