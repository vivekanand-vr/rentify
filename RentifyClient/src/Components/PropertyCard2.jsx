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
    <div className="bg-white relative mt-2.5 p-3 [transition:transform_0.2s_ease] rounded-md border-1 border-slate-400 hover:scale-[1.025] w-[420px]">
      
      <h4 className='text-lg mb-2 mx-0 font-semibold md:text-2xl'>{property.name}</h4>
      <p className='text-sm -mt-2 mb-2 md:text-base' id='location'> {property.city}, {property.state}, {property.country} </p>

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

      <div className='text-center'>
        <button className='text-sm md:text-base mt-3.5 mx-2 p-2 text-white w-[calc(50%-20px)] bg-blue-700 border-none rounded-md
                         hover:bg-slate-700' 
                onClick={handleUpdate}>Update</button>

        <button  className='text-sm md:text-base mt-3.5 mx-2 p-2 text-white w-[calc(50%-20px)] bg-blue-700 border-none rounded-md 
                          hover:bg-slate-700'
                onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default PropertyCard2;
