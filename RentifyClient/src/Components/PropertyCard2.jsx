import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteAsset } from '../Utils/DeleteAsset';
import { LuIndianRupee } from "react-icons/lu";
import { RiSofaLine } from "react-icons/ri";
import { RxDimensions } from "react-icons/rx";
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
    
    // Delete corresponding image from the Cloudinary
    deleteAsset(property.imageId);
  };

  return (
    <div className="property-card">
      <h4>{property.name}</h4>
      <p>{property.city}, {property.state}, {property.country}</p>
      <p><span>Property Type: </span>{property.propertyType} {property.bedrooms} BHK </p>
      <p><span>Area <RxDimensions /></span> {property.area} square ft.</p>
      <p><span>Furnishing <RiSofaLine /></span> {property.furnishing} </p>
      <p><span>Rent:</span> <LuIndianRupee />{property.rent} &nbsp; <span>Deposit:</span> <LuIndianRupee />{property.deposit}</p>
      <div className='button-container'>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default PropertyCard2;
