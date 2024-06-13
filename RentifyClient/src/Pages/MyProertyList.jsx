import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TbHomeStar } from "react-icons/tb";
import { FcAdvertising } from "react-icons/fc";
import axios from 'axios';
import PropertyCard2 from '../Components/PropertyCard2';
import { GET_MY_PROPERTIES } from '../Utils/Constants';

const MyPropertyList = () => {
  const userId = useSelector(state => state.user.id);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get(GET_MY_PROPERTIES + userId)
      .then(response => setProperties(response.data))
      .catch(error => console.error('There was an error fetching the properties:', error));
  }, [userId]);

  const handleDelete = (propertyId) => {
    setProperties(properties.filter(property => property.id !== propertyId));
  };

  return (
    <body>
      <div className='my-properties'>
        <h2 className="my-properties-heading">MY PROPERTIES <TbHomeStar className='h-icon' /></h2>
        <div className="my-properties-page">
          {properties.length > 0 ? (
            properties.map(property => (
              <PropertyCard2 key={property.id} property={property} onDelete={handleDelete} />
            ))
          ) : ( <h5>You haven't posted any property ads. Go ahead and post your first ad! <FcAdvertising className='h-icon' /></h5> )}
        </div>
      </div>
    </body>
  );
}

export default MyPropertyList;