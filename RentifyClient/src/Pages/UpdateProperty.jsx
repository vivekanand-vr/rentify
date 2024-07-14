import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { toast } from "react-toastify";
import { API_ENDPOINTS } from '../Services/Endpoints';

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
    axios.put(API_ENDPOINTS.property.update, formData)
      .then(response => {
        toast.success("Property details updated successfully.")
        setTimeout(() => { navigate('/my-properties'); }, 2000);
      })
      .catch(error => {
        toast.error('There was an error updating the property.');
        console.error(error);
      });
  };

  return (
      <div className="flex justify-center mx-[auto] my-3 p-3">
        <div className="bg-white p-3 border-1 border-black rounded-lg w-[600px]">
          <h2 className='text-center font-bold mb-3 text-3xl md:text-4xl'>UPDATE PROPERTY DETAILS</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className='block ml-2 mb-1 font-medium'>Name:</label>
              <input className='w-[calc(100%-20px)] p-2 border-1 border-slate-400 rounded-sm ml-2'
                     type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <label className='block ml-2 mb-1 font-medium'>City:</label>
              <input className='w-[calc(100%-20px)] p-2 border-1 border-slate-400 rounded-sm ml-2' 
                     type="text" name="city" value={formData.city} onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <label className='block ml-2 mb-1 font-medium'>State:</label>
              <input className='w-[calc(100%-20px)] p-2 border-1 border-slate-400 rounded-sm ml-2'
                     type="text" name="state" value={formData.state} onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <label className='block ml-2 mb-1 font-medium'>Country:</label>
              <input className='w-[calc(100%-20px)] p-2 border-1 border-slate-400 rounded-sm ml-2'
                     type="text" name="country" value={formData.country} onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <label className='block ml-2 mb-1 font-medium'>Area:</label>
              <input className='w-[calc(100%-20px)] p-2 border-1 border-slate-400 rounded-sm ml-2'
                     type="number" name="area" value={formData.area} onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <label className='block ml-2 mb-1 font-medium'>Rent:</label>
              <input className='w-[calc(100%-20px)] p-2 border-1 border-slate-400 rounded-sm ml-2'
                     type="number" name="rent" value={formData.rent} onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <label className='block ml-2 mb-1 font-medium'>Deposit Amount:</label>
              <input className='w-[calc(100%-20px)] p-2 border-1 border-slate-400 rounded-sm ml-2'
                     type="number" name="deposit" value={formData.deposit} onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <label className='block ml-2 mb-1 font-medium'>Number of Bedrooms:</label>
              <input className='w-[calc(100%-20px)] p-2 border-1 border-slate-400 rounded-sm ml-2'
                     type="number" name="bedrooms" value={formData.bedrooms} onChange={handleChange} min="1" max="10" required />
            </div>

            <div className="mb-4">
              <label className='block ml-2 mb-1 font-medium'>Property Type:</label>
              <select className='w-[calc(100%-20px)] p-2 border-1 border-slate-400 rounded-sm ml-2'
                      name="propertyType" value={formData.propertyType} onChange={handleChange} required>
                <option value="" disabled>Select property type</option>
                <option value="Apartment">Apartment</option>
                <option value="Independent House/Villa">Independent House/Villa</option>
                <option value="Gated Community Villa">Gated Community Villa</option>
              </select>
            </div>

            <div className="mb-4">
              <label className='block ml-2 mb-1 font-medium'>Furnishing:</label>
              <select className='w-[calc(100%-20px)] p-2 border-1 border-slate-400 rounded-sm ml-2'
                      name="furnishing" value={formData.furnishing} onChange={handleChange} required>
                <option value="" disabled>Select furnishing</option>
                <option value="Furnished">Furnished</option>
                <option value="Semi-furnished">Semi-furnished</option>
                <option value="Unfurnished">Unfurnished</option>
              </select>
            </div>

            <div className="mb-4">
              <label className='block ml-2 mb-1 font-medium'>Description:</label>
              <textarea className='w-[calc(100%-20px)] p-2 border-1 border-slate-400 rounded-sm ml-2'
                        name="description" value={formData.description} onChange={handleChange} required />
            </div>

            <div className='flex justify-center space-x-5 mb-2'>
              <button className='w-2/5 p-2 md:p-3 bg-green-600 text-white border-[none] rounded-md cursor-pointer 
                                 hover:bg-slate-600'
                      onClick={() => navigate('/my-properties')}>Cancel</button>
              <button className='w-[calc(50%-10px)] md:w-2/5 p-2 md:p-3 bg-green-600 text-white border-[none] rounded-md cursor-pointer 
                                 hover:bg-slate-600'
                      type="submit">Update Property</button>
            </div>

          </form>
        </div>
      </div>
  );
};

export default UpdateForm;
