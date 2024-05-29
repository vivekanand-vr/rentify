import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyProfile = ({ userId }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Fetch user details from the backend API using Axios
    axios.get(`http://localhost:9999/Rentify/user/${userId}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the user details:', error);
      });
  }, [userId]);

  return (
    <div className="profile-page">
      <h2>MY PROFILE</h2>
      <div className="profile-details">
        <div className="profile-row">
          <label>First Name:</label>
          <div className="profile-value">{user.firstName}</div>
        </div>
        <div className="profile-row">
          <label>Last Name:</label>
          <div className="profile-value">{user.lastName}</div>
        </div>
        <div className="profile-row">
          <label>Email:</label>
          <div className="profile-value">{user.email}</div>
        </div>
        <div className="profile-row">
          <label>Country:</label>
          <div className="profile-value">{user.country}</div>
        </div>
        <div className="profile-row">
          <label>Phone Number:</label>
          <div className="profile-value">{user.phoneNumber}</div>
        </div>
      </div>
      <button onClick={() => window.location.href = '/my-properties'}>View My Properties</button>
    </div>
  );
}

export default MyProfile;
