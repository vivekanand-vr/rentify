import React from 'react';
import { Link } from 'react-router-dom';
import { LuIndianRupee,  MdLocationOn } from '../Services/Icons';
import { PROPERTY_IMAGE } from '../Services/Endpoints';

const PropertyCard = ({ property }) => {

  // Split the location string and remove the postal code part
  const locationWithoutPostalCode = property.location.split(' - ')[0];
  const imageUrl = PROPERTY_IMAGE + property.imageId;
  
  return (
    <div className="text-sm bg-white relative mt-2.5 p-2 rounded-md border-1 border-slate-400 w-[360px]">
      <img className='w-full h-54 mx-0 rounded-sm md:h-[250px] [transition:transform_0.2s_ease] hover:scale-105'
           src={imageUrl} alt='property' />

      <div className='p-2'>
        <h4 className='text-lg mb-2 mx-1 font-semibold'>{property.name}</h4>
        <p className='flex items-center -mt-2 mb-2' id='location'>
          <MdLocationOn className='mr-1 text-green-600 md:text-xl' /> {locationWithoutPostalCode} 
        </p>

        <p className='mx-1 my-1'>
          <span className='font-semibold'> {property.propertyType} {property.bedrooms} BHK </span> - {property.additionalDetails.highlights}
        </p>

        <p className='font-semibold mx-1 my-1 mb-3 flex items-center'>
          <LuIndianRupee /> {property.rent} / month
        </p>
        
        <Link to={`/property/${property.id}`} className='text-white bg-blue-700 my-2 px-3 py-2 rounded-md border-none hover:bg-slate-700'>
          More Details
        </Link>
        
      </div> 
    </div>
  );
}

export default PropertyCard;
