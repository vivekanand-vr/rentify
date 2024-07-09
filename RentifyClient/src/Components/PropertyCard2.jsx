import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteAsset } from '../Services/DeleteAsset';
import { LuIndianRupee } from "react-icons/lu";
import { RiSofaLine } from "react-icons/ri";
import { RxDimensions } from "react-icons/rx";
import { API_ENDPOINTS } from '../Services/Endpoints';
import axios from 'axios';

const PropertyCard2 = ({ property, onDelete }) => {
  const navigate = useNavigate();

  const handleUpdate = () => {
    // Send the Property object to UpdateProperty Component as a state variable
    navigate(`/update-property`, { state: { property } });
  };

  const handleDelete = () => {
    axios.delete(API_ENDPOINTS.property.delete + property.id)
      .then(() => onDelete(property.id))
      .catch(error => console.error('There was an error deleting the property:', error));
    
    // Delete corresponding image from the Cloudinary
    deleteAsset(property.imageId);
  };

  return (
    <div className="border bg-[white] w-[400px] relative shadow-[0_4px_8px_rgba(0,0,0,0.2)] 
    [transition:transform_0.2s_ease,box-shadow_0.2s_ease] mt-2.5 p-[15px] rounded-md border-solid
  border-[rgb(181,177,177)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] hover:scale-[1.025]">
      <h4>{property.name}</h4>

      <p className='text-[#333] mx-0 my-1 flex items-center'>
        <span className='font-semibold flex items-center mr-1'>Property Type: </span>
           {property.propertyType} {property.bedrooms} BHK 
      </p>

      <p className='text-[#333] mx-0 my-1 flex items-center'>
        <span className='font-semibold flex items-center'>Area <RxDimensions className='mx-1' /></span> 
          {property.area} square ft.
      </p>
      
      <p className='text-[#333] mx-0 my-1 flex-row items-center'>
        <span className='font-semibold flex-row'>Furnishing <RiSofaLine className='mx-1' /></span> 
          {property.furnishing} 
      </p>
      
      <p className='text-[#333] mx-0 my-1 flex items-center'>
        <span className='font-semibold flex items-center'>Rent:</span> <LuIndianRupee className='mx-1' />
          {property.rent} &nbsp; 
        <span className='font-semibold flex items-center'>Deposit:</span> <LuIndianRupee className='mx-1' />{property.deposit}
      </p>
      <div className='button-container'>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default PropertyCard2;
