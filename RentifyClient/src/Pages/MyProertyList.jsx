import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TbHomeStar } from "react-icons/tb";
import { FcAdvertising } from "react-icons/fc";
import axios from 'axios';
import PropertyCard2 from '../Components/PropertyCard2';
import { API_ENDPOINTS } from '../Services/Endpoints';

const MyPropertyList = () => {
  const userId = useSelector(state => state.user.id);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get(API_ENDPOINTS.property.getByOwner + userId)
      .then(response => setProperties(response.data))
      .catch(error => console.error('There was an error fetching the properties:', error));
  }, [userId]);

  const handleDelete = (propertyId) => {
    setProperties(properties.filter(property => property.id !== propertyId));
  };

  return (
    <div className='min-h-screen'>
      <div className='my-properties'>
        <h2 className="mt-4 ml-[10px] text-4xl font-semibold flex flex-center">MY PROPERTIES <TbHomeStar className='ml-1.5' /></h2>
        <div className="flex flex-wrap gap-[20px] p-[20px]">
          {properties.length > 0 ? (
            properties.map(property => (
              <PropertyCard2 key={property.id} property={property} onDelete={handleDelete} />
            ))
          ) : ( <h5 className='flex items-center'>You haven't posted any property ads. Go ahead and post your first ad! <FcAdvertising className='ml-1 -mt-1 size-5' /></h5> )}
        </div>
      </div>
    </div>
  );
}

export default MyPropertyList;