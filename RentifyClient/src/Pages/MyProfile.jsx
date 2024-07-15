import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin } from '../Redux/Reducers/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { FaEdit } from 'react-icons/fa';
import { API_ENDPOINTS } from '../Services/Endpoints';
import axios from 'axios';

const MyProfile = () => {
  const user = useSelector((state) => state.userData);
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
      dispatch(userLogin(response.data));
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
    <div className='flex justify-center h-[84vh] md:h-screen'>
      <div className="w-96 md:w-[500px] h-fit bg-white mx-auto my-5 p-4 rounded-lg border-1 border-black">
        <div className='flex justify-center'>
            { editMode ? (<h2 className='font-nunito text-center text-3xl md:text-4xl font-bold'>EDIT DETAILS</h2>) :
                         (<h2 className='font-nunito text-center text-3xl md:text-4xl font-bold'>MY PROFILE</h2>) }
            { !editMode && <FaEdit className="cursor-pointer text-2xl ml-3 mt-1 md:mt-2 text-slate-500 " onClick={handleEditClick} /> }
        </div>
        <div className="flex flex-col mt-3">
          <div className="flex justify-between mb-3">
            <label className='font-semibold text-sm md:text-base w-24 md:w-28 mt-2'>First Name:</label>
            {editMode ? 
              (
                <input type="text" name="firstName" className="text-sm md:text-base grow bg-white p-2 rounded-md border-1 border-slate-400" 
                     value={formData.firstName} onChange={handleChange} /> 
              ) : 
              ( <div className="text-sm md:text-base grow bg-white p-2 rounded-md border-1 border-slate-400">
                      {user.firstName}
                    </div> 
              )
            }
          </div>

          <div className="flex justify-between mb-3">
            <label className='font-semibold text-sm md:text-base w-24 md:w-28 mt-2'>Last Name:</label>
            {editMode ? 
              (
                <input type="text" name="lastName" className="text-sm md:text-base grow bg-white p-2 rounded-md border-1 border-slate-400" 
                       value={formData.lastName} onChange={handleChange} />
              ) : 
              ( <div className="text-sm md:text-base grow bg-white p-2 rounded-md border-1 border-slate-400">{user.lastName}</div> )
            }
          </div>

          <div className="flex justify-between mb-3">
            <label className='font-semibold text-sm md:text-base w-24 md:w-28 mt-2'>Email:</label>
            {editMode ? 
              (
                <div className="text-sm md:text-base text-slate-400 grow bg-gray-100 cursor-not-allowed p-2 rounded-md border-1 border-slate-400">
                             {user.email}
                </div> 
              ) :
              ( <div className="text-sm md:text-base grow bg-white p-2 rounded-md border-1 border-slate-400">{user.email}</div>)}
          </div>

          <div className="flex justify-between mb-3">
            <label className='font-semibold text-sm md:text-base w-24 md:w-28 mt-2'>City:</label>
            {editMode ? 
              (
                  <input type="text" name="city" className="text-sm md:text-base grow bg-white p-2 rounded-md border-1 border-slate-400" 
                         value={formData.city} onChange={handleChange} /> 
              ) :
              ( <div className="text-sm md:text-base grow bg-white p-2 rounded-md border-1 border-slate-400">
                         {user.city}
                  </div> 
              )
            }
          </div>

          <div className="flex justify-between mb-3">
            <label className='font-semibold text-sm md:text-base w-24 md:w-28 mt-2'>Mobile:</label>
            {editMode ? 
              ( <div className="text-sm md:text-base text-slate-400 grow bg-gray-100 cursor-not-allowed p-2 rounded-md border-1 border-slate-400">
                              {user.phoneNumber}
                </div> 
              ) :
              ( <div className="text-sm md:text-base grow bg-white p-2 rounded-md border-1 border-slate-400">
                              {user.phoneNumber}
                </div>
              )
            }
          </div>
        </div>

        <div className='flex justify-center space-x-5 my-1'>
          {editMode ? (
            <>
              <button className='text-sm md:text-base inline-block w-1/2 bg-blue-700 text-white cursor-pointer m-2 px-2 py-2 rounded-md hover:bg-slate-700'
                      onClick={handleCancelClick}>Cancel</button>
              <button className='text-sm md:text-base inline-block w-1/2 bg-blue-700 text-white cursor-pointer m-2 px-2 py-2 rounded-md hover:bg-slate-700'
                      onClick={handleSaveClick}>Save</button>
            </>
          ) : (
            <>
              <button className='text-sm md:text-base inline-block w-1/2 bg-blue-700 text-white cursor-pointer m-2 px-2 py-2 rounded-md hover:bg-slate-700'
                      onClick={() => navigate('/properties')}>Back</button>
              <button className='text-sm md:text-base inline-block w-3/5 bg-blue-700 text-white cursor-pointer m-2 px-2 py-2 rounded-md hover:bg-slate-700'
                      onClick={() => navigate('/my-properties')}>My Properties</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
