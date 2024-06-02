import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const UpdateForm = () => {
  const { pid } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { property } = location.state || {}; // Destructure the property object from location state

  const [formData, setFormData] = useState({
    id: pid,
    name: '',
    city: '',
    state: '',
    country: '',
    area: '',
    rent: '',
    deposit: '',
    propertyType: '', 
    furnishing: '', 
    description: ''
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Set current property details in the formdata to modify
  useEffect(() => {
    setFormData(property); 
  }, [property]); // UseEffect to limit rendering

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:9999/Rentify/properties`, formData)
      .then(response => {
        setSuccess(true);
        setTimeout(() => {
          navigate('/my-properties');
        }, 2000);
      })
      .catch(error => {
        setError('There was an error adding the property.');
        console.error('Error updating property:', error);
      });
  };

  return (
    <div className="form-page">
      <div className="update-container">
        <h2>UPDATE PROPERTY DETAILS</h2>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">Property updated successfully!</div>}

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

          <div className="form-group">
            <label>Area:</label>
            <input type="number" name="area" value={formData.area} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Rent:</label>
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
            <label>Description:</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required />
          </div>

          <div className='button-container'>
            <button onClick={() => navigate('/my-properties')}>Cancel</button>
            <button type="submit">Update Property</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
