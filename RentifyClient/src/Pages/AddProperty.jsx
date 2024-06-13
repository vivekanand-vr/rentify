import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { ImageUploader } from '../Components/ImageUploader';
import { API_ENDPOINTS } from '../Services/Endpoints';

const AddProperty = () => {

  /* Getting the Login details from store */
  const userId = useSelector(state => state.user.id);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    state: '',
    country: '',
    description: '',
    area: '',
    rent: '',
    deposit: '',
    bedrooms: '',
    propertyType: '',
    furnishing: '',
    imageId: '',
    ownerId: userId,
  });

  const handleImageUpload = (imageId) => {
    setFormData({ ...formData, imageId });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      toast.error('Please log in to add a property.');
      return;
    }

    axios.post(API_ENDPOINTS.property.add, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        toast.success("Property added successfully.")
        setTimeout(() => { navigate('/properties'); }, 2000);
        console.log(formData);
      })
      .catch((error) => {
        toast.error('There was an error adding the property.');
      });
  };

  if (!isLoggedIn) { return <p>Please log in to add a property.</p>; }

  return (
    <body>
      <div className="form-page">
        <div className="add-property-container">

          <h2>ADD PROPERTY DETAILS</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>City:</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>State:</label>
              <input type="text" name="state" value={formData.state} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label>Country:</label>
              <input type="text" name="country" value={formData.country} onChange={handleChange} required />
            </div>

            <div className='form-group'>
              <label>Property Image:</label>
              <ImageUploader onImageUpload={handleImageUpload} />
            </div>
            
            <div className="form-group">
              <label>Description:</label>
              <textarea name="description" value={formData.description} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Area (in square ft):</label>
              <input type="number" name="area" value={formData.area} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Rent (per month):</label>
              <input type="number" name="rent" value={formData.rent} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Deposit Amount:</label>
              <input type="number" name="deposit" value={formData.deposit} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Number of Bedrooms:</label>
              <input type="number" name="bedrooms" value={formData.bedrooms} onChange={handleChange} min="1" max="10" required />
            </div>

            <div className="form-group">
              <label>Property Type:</label>
              <select name="propertyType" value={formData.propertyType} onChange={handleChange} required>
                <option value="" disabled>Select property type</option>
                <option value="Apartment">Apartment</option>
                <option value="Independent House/Villa">Independent House/Villa</option>
                <option value="Gated Community Villa">Gated Community Villa</option>
              </select>
            </div>

            <div className="form-group">
              <label>Furnishing:</label>
              <select name="furnishing" value={formData.furnishing} onChange={handleChange} required>
                <option value="" disabled>Select furnishing</option>
                <option value="Furnished">Furnished</option>
                <option value="Semi-furnished">Semi-furnished</option>
                <option value="Unfurnished">Unfurnished</option>
              </select>
            </div>

            <div className="form-group">
              <label>Owner ID:</label>
              <input type="text" name="ownerId" value={formData.ownerId} readOnly />
            </div>

            <div>
              <button onClick={() => navigate('/properties')}>Cancel</button>
              <button type="submit">Add Property</button>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
};

export default AddProperty;
