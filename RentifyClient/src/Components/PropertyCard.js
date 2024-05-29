import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PropertyCard = ({ property, isLoggedIn, isExpanded, onExpand }) => {
  const [ownerDetails, setOwnerDetails] = useState(null);

  useEffect(() => {
    if (isExpanded && isLoggedIn) {
      // Fetch owner details from the backend
      axios.get(`http://localhost:9999/Rentify/user/${property.ownerId}`)
        .then(response => setOwnerDetails(response.data))
        .catch(error => console.error('There was an error fetching the owner details:', error));
    }
  }, [isExpanded, isLoggedIn, property.ownerId]);

  const handleViewDetails = () => {
    if (isLoggedIn) {
      onExpand(property.id);
    } else {
      // Redirect to login if not logged in
      window.location.href = '/login';
    }
  };

  return (
    <div className="property-card">
      <h4>{property.name}</h4>
      <p>{property.city}, {property.state}, {property.country}</p>
      <p>Area: {property.area} square ft.</p>
      <p className='rent'>Rent: ₹{property.rent}/month</p>
      
      <button onClick={handleViewDetails}>
        {isExpanded ? 'Hide Details' : 'More Details'}
      </button>
      {isExpanded && ownerDetails && (
        <div className="owner-details">
        <h5>Additional Details:</h5>
        <p>{property.description}</p>
        <br />
        <h5>Owner Contact</h5>
          <p>Email : {ownerDetails.email}</p>
          <p>Phone : {ownerDetails.phoneNumber}</p>
        </div>
      )}
    </div>
  );
}

export default PropertyCard;
