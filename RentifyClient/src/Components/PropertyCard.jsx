import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuIndianRupee } from "react-icons/lu";
import { RiSofaLine } from "react-icons/ri";
import { RxDimensions } from "react-icons/rx";
import { API_ENDPOINTS, PROPERTY_IMAGE } from '../Services/Endpoints';
import axios from 'axios';

const PropertyCard = ({ property, isLoggedIn, isExpanded, onExpand }) => {
  const [ownerDetails, setOwnerDetails] = useState(null);
  const navigate = useNavigate();
  /*
      For transformations we need to import `AdvancedImage` tag and render image within it.
      Refer "https://cloudinary.com/documentation/react_integration"
   */
  const imageUrl = PROPERTY_IMAGE + property.imageId;
  
  useEffect(() => {
    if (isExpanded && isLoggedIn) {
      // Fetch owner details from the backend
      axios.get(API_ENDPOINTS.user.details + property.ownerId)
        .then(response => setOwnerDetails(response.data))
        .catch(error => console.error('There was an error fetching the owner details:', error));
    }
  }, [isExpanded, isLoggedIn, property.ownerId]);

  const handleViewDetails = () => {
    if (isLoggedIn) {
      onExpand(property.id);
    } else {
      // Redirect to login if not logged in
      navigate('/login');
    }
  };

  return (
    <div className="property-card">
      <h4>{property.name}</h4>
      <p id='location'>{property.city}, {property.state}, {property.country}</p>
      <img src={imageUrl} alt='property' />
      <p><span>Property Type: </span>{property.propertyType} {property.bedrooms} BHK </p>
      <p><span>Area <RxDimensions /></span> {property.area} square ft.</p>
      <p><span>Furnishing <RiSofaLine /></span> {property.furnishing} </p>
      <p><span>Rent: </span> <LuIndianRupee />{property.rent} &nbsp; <span>Deposit:</span> <LuIndianRupee />{property.deposit}</p>
       
      <button onClick={handleViewDetails}>
        {isExpanded ? 'Hide Details' : 'More Details'}
      </button>
      {isExpanded && ownerDetails && (
        <div className="owner-details">
        <h5>Additional Details:</h5>
        <p>{property.description}</p>
        <br />
        <h5>Owner Contact</h5>
          <p>Name :  {ownerDetails.firstName} {ownerDetails.lastName} </p>
          <p>Email : {ownerDetails.email}</p>
          <p>Phone : {ownerDetails.phoneNumber}</p>
        </div>
      )}
    </div>
  );
}

export default PropertyCard;
