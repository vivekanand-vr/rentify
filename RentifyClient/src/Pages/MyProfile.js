import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../Actions/userActions';
import { toast } from "react-toastify";
import { FaEdit } from 'react-icons/fa';
import axios from 'axios';

const MyProfile = () => {
  const user = useSelector(state => state.user);
  const userId = useSelector(state => state.login.userId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleEditClick = () => {
    setEditMode(true);
  }
  const handleCancelClick = () => {
    setEditMode(false);
    setFormData(user); // If cancelled set the FormData back to default values.
  }
  const handleSaveClick = () => {
    /* Update the User Details in the backend */
    axios.put(`http://localhost:9999/Rentify/user`, formData)
    .then(response =>{
      dispatch(setUser(response.data));
      toast.success("Profile Details Updated Sucessfully.")
      setEditMode(false);
    })
    .catch(error =>{
      console.error('There was an error updating the UserDetails', error);
      toast.error('There was an error updating the UserDetails');
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

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
      <div className='profile-header'>
          { editMode ? (<h2>EDIT DETAILS</h2>) : (<h2>MY PROFILE</h2>) }
          { !editMode && <FaEdit className="edit-icon" onClick={handleEditClick} /> }
      </div>
      <div className="profile-details">
        <div className="profile-row">
          <label>First Name:</label>
          {editMode ? (
            <input type="text" name="firstName" className="profile-value" value={formData.firstName} onChange={handleChange} /> 
            ) : ( <div className="profile-value">{user.firstName}</div> )
          }
        </div>

        <div className="profile-row">
          <label>Last Name:</label>
          {editMode ? (
            <input type="text" name="lastName" className="profile-value" value={formData.lastName} onChange={handleChange} />
            ) : ( <div className="profile-value">{user.lastName}</div> )
          }
        </div>

        <div className="profile-row">
          <label>Email:</label>
          {editMode ? (<div className="profile-value-disabled">{user.email}</div> ) :
                      (<div className="profile-value">{user.email}</div>)}
        </div>

        <div className="profile-row">
          <label>City:</label>
          {editMode ? (
            <input type="text" name="city" className="profile-value" value={formData.city} onChange={handleChange} />
            ) : ( <div className="profile-value">{user.city}</div> )
          }
        </div>

        <div className="profile-row">
          <label>Mobile:</label>
          {editMode ? (<div className="profile-value-disabled">{user.phoneNumber}</div> ) :
                      (<div className="profile-value">{user.phoneNumber}</div>)}
        </div>
      </div>

      <div className='button-container'>
        {editMode ? (
          <>
            <button onClick={handleCancelClick}>Cancel</button>
            <button onClick={handleSaveClick}>Save</button>
          </>
        ) : (
          <>
            <button onClick={() => navigate('/properties')}>Back</button>
            <button onClick={() => navigate('/my-properties')}>My Properties</button>
          </>
        )}
      </div>
    </div>
  );
}

export default MyProfile;
