import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginUser = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    axios.post('http://localhost:9999/Rentify/user/login', formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.data === 'Register your details first.' || response.data === 'Incorrect password, try again!') {
        setError(response.data);
      } else {
        // Handle successful login
        const [userName, userId] = response.data.split(' '); // Parse the response string
        onLogin(userName, userId);
        setSuccess(true); // Set success message
        setTimeout(() => {
          navigate('/'); // Redirect to home page after 2 seconds
        }, 2000);
      }
    })
    .catch(error => {
      console.error('There was an error logging in:', error);
      setError('An error occurred. Please try again later.');
    });
  };

  return (
    <div className="form-page">
      <div className="login-container">
        <h2>LOGIN</h2>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">Login successful! Redirecting...</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
