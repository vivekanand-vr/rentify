import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    state: '',
    country: '',
    area: '',
    rent: '',
    description: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:9999/Rentify/properties/${id}`)
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error('Error fetching property details:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the property details in the backend
    axios.put(`http://localhost:9999/Rentify/properties/${id}`, formData)
      .then(response => {
        setSuccessMessage('Property updated successfully!');
        setTimeout(() => {
          navigate('/my-properties');
        }, 2000);
      })
      .catch(error => {
        console.error('Error updating property:', error);
      });
  };

  return (
    <div className="form-page">
      <div className="update-container">
        <h2>UPDATE PROPERTY DETAILS</h2>
        {successMessage && <p>{successMessage}</p>}

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
