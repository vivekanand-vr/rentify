import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PropertyCard2 = ({ property, onDelete }) => {
  const navigate = useNavigate();

  const handleUpdate = () => {
    // Send the Property object to UpdateProperty Component as a state variable
    navigate(`/update-property`, { state: { property } });
  };


  const handleDelete = () => {
    axios.delete(`http://localhost:9999/Rentify/properties/${property.id}`)
      .then(() => onDelete(property.id))
      .catch(error => console.error('There was an error deleting the property:', error));
  };

  return (
    <div className="property-card">
      <h3>{property.name}</h3>
      <p>{property.city}, {property.state}, {property.country}</p>
      <p>Price: ₹{property.rent}/month</p>
      <p>Area: {property.area} square ft.</p>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default PropertyCard2;
