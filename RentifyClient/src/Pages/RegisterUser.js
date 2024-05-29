import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    country: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:9999/Rentify/user/register', formData)
      .then(response => {
        setSuccessMessage('You have registered successfully! Now Login with your credentials');
        setError('');
        setTimeout(() => {
          navigate('/');
        }, 2000); // 2 seconds delay
      })
      .catch(error => {
        console.error('There was an error registering the user:', error);
        setError('There was an error registering the user.');
        setSuccessMessage('');
      });
  };

  return (
    <div className="form-page">
      <div className="register-container">
        <h2>REGISTER YOUR DETAILS</h2>
        {error && <div className="error">{error}</div>}
        {successMessage && <div className="success">{successMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name:</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Country:</label>
            <input type="text" name="country" value={formData.country} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Set Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterUser;