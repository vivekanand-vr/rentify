import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TbHomeStar } from "react-icons/tb";
import { FcAdvertising } from "react-icons/fc";
import axios from 'axios';
import PropertyCard2 from '../Components/PropertyCard2';
import { API_ENDPOINTS } from '../Services/Endpoints';

const MyPropertyList = () => {
  const userId = useSelector((state) => state.userData.id);
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
        <h2 className="font-nunito mt-4 ml-6 text-3xl md:text-4xl font-extrabold flex flex-center">MY PROPERTIES <TbHomeStar className='ml-1.5' /></h2>
        <div className="flex flex-wrap gap-3 p-3">
          {properties.length > 0 ? (
            properties.map(property => (
              <PropertyCard2 key={property.id} property={property} onDelete={handleDelete} />
            ))
          ) : ( <h5>You haven't posted any property ads. Go ahead and post your first ad! <FcAdvertising className='inline ml-1 -mt-1 size-5' /></h5> )}
        </div>
      </div>
    </div>
  );
}

export default MyPropertyList;