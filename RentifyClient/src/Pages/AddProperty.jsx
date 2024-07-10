import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { ImageUploader } from '../Components/ImageUploader';
import { API_ENDPOINTS } from '../Services/Endpoints';

const AddProperty = () => {

  /* Getting the Login details from store */
  const userId = useSelector((state) => state.userData.id);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    state: '',
    country: '',
    description: '',
    area: '',
    rent: '',
    deposit: '',
    bedrooms: '',
    propertyType: '',
    furnishing: '',
    imageId: '',
    ownerId: userId,
  });

  const handleImageUpload = (imageId) => {
    setFormData({ ...formData, imageId });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      toast.error('Please log in to add a property.');
      return;
    }

    axios.post(API_ENDPOINTS.property.add, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        toast.success("Property added successfully.")
        setTimeout(() => { navigate('/properties'); }, 2000);
        console.log(formData);
      })
      .catch((error) => {
        toast.error('There was an error adding the property.');
      });
  };

  if (!isLoggedIn) { return <p>Please log in to add a property.</p>; }

  return (
      <div className="flex justify-center mx-[auto] my-[30px] p-[20px]">
        <div className="bg-white p-[20px] border-[1px] border-[solid] border-[black] rounded-[8px] [box-shadow:0_4px_8px_rgba(0,_0,_0,_0.1)] w-[600px]">

          <h2 className='text-center font-bold mb-3 text-4xl'>ADD PROPERTY DETAILS</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className='block ml-[10px] mb-[5px] font-medium'>Name:</label>
              <input  className='w-[calc(100%-20px)] p-[10px] border-[1px] border-[solid] border-[gray] rounded-[4px] ml-[10px]'
                      type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <label className='block ml-[10px] mb-[5px] font-medium'>City:</label>
              <input className='w-[calc(100%-20px)] p-[10px] border-[1px] border-[solid] border-[gray] rounded-[4px] ml-[10px]'
                     type="text" name="city" value={formData.city} onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <label className='block ml-[10px] mb-[5px] font-medium'>State:</label>
              <input className='w-[calc(100%-20px)] p-[10px] border-[1px] border-[solid] border-[gray] rounded-[4px] ml-[10px]'
                     type="text" name="state" value={formData.state} onChange={handleChange} required />
            </div>
            
            <div className="mb-4">
              <label className='block ml-[10px] mb-[5px] font-medium'>Country:</label>
              <input className='w-[calc(100%-20px)] p-[10px] border-[1px] border-[solid] border-[gray] rounded-[4px] ml-[10px]'
                     type="text" name="country" value={formData.country} onChange={handleChange} required />
            </div>

            <div className='mb-4'>
              <label className='block ml-[10px] mb-[5px] font-medium'>Property Image:</label>
              <ImageUploader onImageUpload={handleImageUpload} />
            </div>
            
            <div className="mb-4">
              <label className='block ml-[10px] mb-[5px] font-medium'>Description:</label>
              <textarea className='w-[calc(100%-20px)] p-[10px] border-[1px] border-[solid] border-[gray] rounded-[4px] ml-[10px]'
                        name="description" value={formData.description} onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <label className='block ml-[10px] mb-[5px] font-medium'>Area (in square ft):</label>
              <input className='w-[calc(100%-20px)] p-[10px] border-[1px] border-[solid] border-[gray] rounded-[4px] ml-[10px]'
                     type="number" name="area" value={formData.area} onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <label className='block ml-[10px] mb-[5px] font-medium'>Rent (per month):</label>
              <input className='w-[calc(100%-20px)] p-[10px] border-[1px] border-[solid] border-[gray] rounded-[4px] ml-[10px]'
                     type="number" name="rent" value={formData.rent} onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <label className='block ml-[10px] mb-[5px] font-medium'>Deposit Amount:</label>
              <input className='w-[calc(100%-20px)] p-[10px] border-[1px] border-[solid] border-[gray] rounded-[4px] ml-[10px]'
                     type="number" name="deposit" value={formData.deposit} onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <label className='block ml-[10px] mb-[5px] font-medium'>Number of Bedrooms:</label>
              <input className='w-[calc(100%-20px)] p-[10px] border-[1px] border-[solid] border-[gray] rounded-[4px] ml-[10px]'
                     type="number" name="bedrooms" value={formData.bedrooms} onChange={handleChange} min="1" max="10" required />
            </div>

            <div className="mb-4">
              <label className='block ml-[10px] mb-[5px] font-medium'>Property Type:</label>
              <select className='w-[calc(100%-20px)] p-[10px] border-[1px] border-[solid] border-[gray] rounded-[4px] ml-[10px]'
                      name="propertyType" value={formData.propertyType} onChange={handleChange} required>
                <option value="" disabled>Select property type</option>
                <option value="Apartment">Apartment</option>
                <option value="Independent House/Villa">Independent House/Villa</option>
                <option value="Gated Community Villa">Gated Community Villa</option>
              </select>
            </div>

            <div className="mb-4">
              <label className='block ml-[10px] mb-[5px] font-medium'>Furnishing:</label>
              <select className='w-[calc(100%-20px)] p-[10px] border-[1px] border-[solid] border-[gray] rounded-[4px] ml-[10px]'
                      name="furnishing" value={formData.furnishing} onChange={handleChange} required>
                <option value="" disabled>Select furnishing</option>
                <option value="Furnished">Furnished</option>
                <option value="Semi-furnished">Semi-furnished</option>
                <option value="Unfurnished">Unfurnished</option>
              </select>
            </div>

            <div className="mb-4">
              <label className='block ml-[10px] mb-[5px] font-medium'>Owner ID:</label>
              <input className='w-[calc(100%-20px)] p-[10px] border-[1px] border-[solid] border-[gray] rounded-[4px] ml-[10px]'
                    type="text" name="ownerId" value={formData.ownerId} readOnly />
            </div>

            <div>
              <button className="w-[calc(50%-20px)] p-[10px] bg-green-600 text-[white] border-[none] rounded-[4px] cursor-pointer ml-[10px] mt-[10px] [transition:all_0.1s_ease] [box-shadow:0_8px_15px_rgba(0,_0,_0,_0.2)]
                                 hover:bg-slate-600" 
                      onClick={() => navigate('/properties')}>Cancel</button>
              <button className="w-[calc(50%-20px)] p-[10px] bg-green-600 text-[white] border-[none] rounded-[4px] cursor-pointer ml-[10px] mt-[10px] [transition:all_0.1s_ease] [box-shadow:0_8px_15px_rgba(0,_0,_0,_0.2)]
                                 hover:bg-slate-600"
                      type="submit">Add Property</button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default AddProperty;
