import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard2 from '../Components/PropertyCard2';


const MyPropertyList = ({ userId }) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:9999/Rentify/properties/owner/${userId}`)
      .then(response => setProperties(response.data))
      .catch(error => console.error('There was an error fetching the properties:', error));
  }, [userId]);

  const handleDelete = (propertyId) => {
    setProperties(properties.filter(property => property.id !== propertyId));
  };

  return (
    <div className='my-properties'>
      <h2 className="my-properties-heading">MY PROPERTIES</h2>
      <div className="my-properties-page">
        {properties.length > 0 ? (
          properties.map(property => (
            <PropertyCard2 key={property.id} property={property} onDelete={handleDelete} />
          ))
        ) : (
          <p>No properties available.</p>
        )}
      </div>
    </div>
  );
}

export default MyPropertyList;