import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../Actions/userActions';
import axios from 'axios';

const MyProfile = () => {
  const user = useSelector(state => state.user);
  const userId = useSelector(state => state.login.userId);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`http://localhost:9999/Rentify/user/${userId}`)
      .then(response => {
        dispatch(setUser(response.data));
      })
      .catch(error => {
        console.error('There was an error fetching the user details:', error);
      });
  }, [dispatch, userId]);

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
          <label>Mobile:</label>
          <div className="profile-value">{user.phoneNumber}</div>
        </div>
        
      </div>
      <button onClick={() => window.location.href = '/my-properties'}>View My Properties</button>
    </div>
  );
}

export default MyProfile;
