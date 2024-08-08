import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteAsset } from '../Services/DeleteAsset';
import { LuIndianRupee, MdLocationOn } from '../Services/Icons';
import { API_ENDPOINTS, PROPERTY_IMAGE } from '../Services/Endpoints';
import axios from 'axios';

const PropertyCard2 = ({ property, onDelete }) => {
  const navigate = useNavigate();
  // Split the location string and remove the postal code part
  const locationWithoutPostalCode = property.location.split(' - ')[0];
  const imageUrl = PROPERTY_IMAGE + property.imageId;

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
    <div className="text-sm bg-white relative mt-2.5 p-2 rounded-md border-1 border-slate-400 w-[360px]">
      
      <img className='w-full h-54 mx-0 rounded-sm md:h-[250px] [transition:transform_0.2s_ease] hover:scale-105'
           src={imageUrl} alt='property' />
      
      <div className='p-2'>
        <h4 className='text-lg mb-2 mx-0 font-semibold'>{property.name}</h4>
        <p className='flex items-center -mt-2 mb-2' id='location'>
          <MdLocationOn className='mr-1 text-green-600 md:text-xl' /> {locationWithoutPostalCode} 
        </p>

        <p className='mx-0 my-1'>
            <span className='font-semibold'> {property.propertyType} {property.bedrooms} BHK </span> - {property.additionalDetails.highlights}
        </p>
        
        <p className='font-semibold mx-0 my-1 flex items-center'>
            <LuIndianRupee /> {property.rent} / month
        </p>

        <div className='text-center text-sm mt-3'>
          <button className='mx-2 p-2 text-white w-2/5 bg-blue-700 border-none rounded-md
                          hover:bg-slate-700' 
                  onClick={handleUpdate}>Update</button>

          <button  className='mx-2 p-2 text-white w-2/5 bg-blue-700 border-none rounded-md 
                            hover:bg-slate-700'
                  onClick={handleDelete}>Delete</button>
        </div>
      </div>
      
    </div>
  );
}

export default PropertyCard2;
