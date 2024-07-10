import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../Redux/Actions/userActions';
import { toast } from "react-toastify";
import { FaEdit } from 'react-icons/fa';
import { API_ENDPOINTS } from '../Services/Endpoints';
import axios from 'axios';

const MyProfile = () => {
  const user = useSelector(state => state.user);
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
    axios.put(API_ENDPOINTS.user.update, formData)
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

  return (
    <div className='min-h-screen'>
      <div className="w-[500px] bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)] mx-auto my-[30px] p-4 rounded-lg border-1 border-blue-500">
        <div className='flex justify-center'>
            { editMode ? (<h2 className='text-center text-[34px] font-bold p-2.5'>EDIT DETAILS</h2>) :
                         (<h2 className='text-center text-[34px] font-bold p-2.5'>MY PROFILE</h2>) }
            { !editMode && <FaEdit className="cursor-pointer text-[25px] ml-[5px] mt-[18px]" onClick={handleEditClick} /> }
        </div>
        <div className="flex flex-col mt-3">
          <div className="flex justify-between mb-[15px]">
            <label className='font-bold w-36 mt-2.5'>First Name:</label>
            {editMode ? (
              <input type="text" name="firstName" className="grow bg-white p-2 rounded-[5px] border-1 border-blue-500" 
                     value={formData.firstName} onChange={handleChange} /> 
              ) : ( <div className="grow bg-white p-2 rounded-[5px] border-1 border-blue-500">
                      {user.firstName}
                    </div> )
            }
          </div>

          <div className="flex justify-between mb-[15px]">
            <label className='font-bold w-36 mt-2.5'>Last Name:</label>
            {editMode ? (
              <input type="text" name="lastName" className="grow bg-white p-2 rounded-[5px] border-1 border-blue-500" 
                    value={formData.lastName} onChange={handleChange} />
              ) : 
              ( <div className="grow bg-white p-2 rounded-[5px] border-1 border-blue-500">{user.lastName}</div> )
            }
          </div>

          <div className="flex justify-between mb-[15px]">
            <label className='font-bold w-36 mt-2.5'>Email:</label>
            {editMode ? (<div className="text-[#8e8d8d] grow bg-[#f0f0f0] cursor-not-allowed p-2 rounded-[5px] border-1 border-[#4682B4]">
                             {user.email}
                         </div> ) :
            (<div className="grow bg-white p-2 rounded-[5px] border-1 border-blue-500">{user.email}</div>)}
          </div>

          <div className="flex justify-between mb-[15px]">
            <label className='font-bold w-36 mt-2.5'>City:</label>
            {editMode ? (
              <input type="text" name="city" className="grow bg-white p-2 rounded-[5px] border-1 border-blue-500" 
                     value={formData.city} onChange={handleChange} /> ) 
              :
                ( <div className="grow bg-white p-2 rounded-[5px] border-1 border-blue-500">
                         {user.city}
                  </div> )
            }
          </div>

          <div className="flex justify-between mb-[15px]">
            <label className='font-bold w-36 mt-2.5'>Mobile:</label>
            {editMode ? (<div className="text-[#8e8d8d] grow bg-[#f0f0f0] cursor-not-allowed p-2 rounded-[5px] border-1 border-[#4682B4]">
                              {user.phoneNumber}
                         </div> ) :
                        (<div className="grow bg-white p-2 rounded-[5px] border-1 border-blue-500">
                              {user.phoneNumber}
                         </div>)}
          </div>
        </div>

        <div className='text-center'>
          {editMode ? (
            <>
              <button className='inline-block w-[calc(50%_-_20px)] bg-cyan-700 text-[white] cursor-pointer transition-all duration-[0.2s] ease-[ease] shadow-[0_8px_15px_rgba(0,0,0,0.2)] m-2.5 px-5 py-2.5 rounded-[5px] border-[none] hover:bg-[rgb(8_51_68)]'
                      onClick={handleCancelClick}>Cancel</button>
              <button className='inline-block w-[calc(50%_-_20px)] bg-cyan-700 text-[white] cursor-pointer transition-all duration-[0.2s] ease-[ease] shadow-[0_8px_15px_rgba(0,0,0,0.2)] m-2.5 px-5 py-2.5 rounded-[5px] border-[none] hover:bg-[rgb(8_51_68)]'
                      onClick={handleSaveClick}>Save</button>
            </>
          ) : (
            <>
              <button className='inline-block w-[calc(50%_-_20px)] bg-cyan-700 text-[white] cursor-pointer transition-all duration-[0.2s] ease-[ease] shadow-[0_8px_15px_rgba(0,0,0,0.2)] m-2.5 px-5 py-2.5 rounded-[5px] border-[none] hover:bg-[rgb(8_51_68)]'
                      onClick={() => navigate('/properties')}>Back</button>
              <button className='inline-block w-[calc(50%_-_20px)] bg-cyan-700 text-[white] cursor-pointer transition-all duration-[0.2s] ease-[ease] shadow-[0_8px_15px_rgba(0,0,0,0.2)] m-2.5 px-5 py-2.5 rounded-[5px] border-[none] hover:bg-[rgb(8_51_68)]'
                      onClick={() => navigate('/my-properties')}>My Properties</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
