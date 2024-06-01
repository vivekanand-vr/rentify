import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AddProperty = () => {

  /* Getting the Login details from store */
  const userId = useSelector(state => state.login.userId);
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);

  const [formData, setFormData] = useState({
    name: '',
    city: '',
    state: '',
    country: '',
    description: '',
    area: '',
    rent: '',
    ownerId: userId, 
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      setError('Please log in to add a property.');
      return;
    }

    axios.post('http://localhost:9999/Rentify/properties', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        setSuccess(true);
        setTimeout(() => {
          navigate('/');
        }, 2000);
      })
      .catch((error) => {
        setError('There was an error adding the property.');
      });
  };

  if (!isLoggedIn) { return <p>Please log in to add a property.</p>; }

  return (
    <div className="form-page">
      <div className="add-property-container">

        <h2>ADD PROPERTY DETAILS</h2>

        {error && <div className="error">{error}</div>}
        {success && <div className="success">Property added successfully!</div>}

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
  );
};

export default AddProperty;
