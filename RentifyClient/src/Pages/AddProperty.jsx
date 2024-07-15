import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { ImageUploader } from '../Components/ImageUploader';
import { API_ENDPOINTS } from '../Services/Endpoints';
import { CgProfile, PiMoneyWavy, RiSofaLine, IoBedOutline, RxDimensions, PiBuildings, MdOutlineHomeWork, 
         IoImageOutline, MdOutlineLocationOn, GrMapLocation, FaGlobeAmericas, PiNoteDuotone, TbReportMoney } from '../Services/Icons';

const AddProperty = () => {
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

  if (!isLoggedIn) {
    return <p>Please log in to add a property.</p>;
  }

  return (
    <div className="flex justify-center mx-auto my-3 p-3">
      <div className="bg-white p-6 border border-black rounded-lg w-full max-w-4xl">
        <h2 className='font-nunito text-center font-bold mb-6 text-2xl md:text-4xl'>ADD PROPERTY DETAILS</h2>
        <form onSubmit={handleSubmit}>
          {/* Two-column layout for name, city, state, country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex items-center space-x-3">
              <label className='flex items-center w-1/4 font-medium'>Name <MdOutlineHomeWork className='ml-1 text-xl' /></label>
              <input className='w-3/4 md:w-5/6 p-2 border-1 border-zinc-300 rounded-md'
                     type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="flex items-center space-x-2">
              <label className='flex items-center w-1/4 font-medium'>City <MdOutlineLocationOn className='ml-1 text-[22px]' /></label>
              <input className='w-3/4 md:w-5/6 p-2 border-1 border-zinc-300 rounded-md'
                     type="text" name="city" value={formData.city} onChange={handleChange} required />
            </div>
            <div className="flex items-center space-x-2">
              <label className='flex items-center w-1/4 font-medium'>State <GrMapLocation className='ml-1 text-xl' /> </label>
              <input className='w-3/4 md:w-5/6 p-2 border-1 border-zinc-300 rounded-md'
                     type="text" name="state" value={formData.state} onChange={handleChange} required />
            </div>
            <div className="flex items-center space-x-2">
              <label className='flex items-center w-2/5 md:w-1/4 font-medium'>Country <FaGlobeAmericas className='ml-1 text-lg' /></label>
              <input className='w-full md:w-4/5 p-2 border-1 border-zinc-300 rounded-md'
                     type="text" name="country" value={formData.country} onChange={handleChange} required />
            </div>
          </div>

          <div className="mb-4">
            <label className='flex items-center mb-2 font-medium'>Property Image <IoImageOutline className='ml-1 text-xl' /></label>
            <ImageUploader onImageUpload={handleImageUpload} />
          </div>

          <div className="mb-4">
            <label className='flex items-center mb-1 font-medium'>Description <PiNoteDuotone className='ml-1 text-xl' /></label>
            <textarea className='w-full p-2 border-1 border-zinc-300 rounded-md'
                      name="description" value={formData.description} onChange={handleChange} required />
          </div>

          {/* Two-column layout for inputs below */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex items-center space-x-2">
              <label className='flex item w-3/5 md:w-1/2 font-medium'>Area (sq. ft.) <RxDimensions className='ml-1 text-xl' /> </label>
              <input className='grow w-3/4 md:w-3/4 p-2 border-1 border-zinc-300 rounded-md'
                     type="number" name="area" value={formData.area} onChange={handleChange} required />
            </div>
            <div className="flex items-center space-x-2">
              <label className='flex items-center w-3/5 md:w-1/3 font-medium'>Rent <PiMoneyWavy className='ml-1 text-xl' /> </label>
              <input className='w-3/4 md:w-3/4 p-2 border-1 border-zinc-300 rounded-md'
                     type="number" name="rent" value={formData.rent} onChange={handleChange} required />
            </div>
            <div className="flex items-center space-x-2">
              <label className='flex items-center w-3/5 md:w-2/4 font-medium'>Deposit <TbReportMoney className='ml-1 text-xl' /> </label>
              <input className='w-3/4 p-2 border-1 border-zinc-300 rounded-md'
                     type="number" name="deposit" value={formData.deposit} onChange={handleChange} required />
            </div>
            <div className="flex items-center space-x-2">
              <label className='flex items-center w-3/5 md:w-1/3 font-medium'>Bedrooms <IoBedOutline className='ml-1 text-xl' /> </label>
              <input className='w-3/4 md:w-3/4 p-2 border-1 border-zinc-300 rounded-md'
                     type="number" name="bedrooms" value={formData.bedrooms} onChange={handleChange} min="1" max="10" required />
            </div>

            <div className="flex items-center space-x-2">
              <label className='flex items-center w-3/5 md:w-1/2 font-medium'>Property Type <PiBuildings className='ml-1 text-xl' /></label>
              <select className='w-3/4 p-2 border-1 border-zinc-300 rounded-md'
                      name="propertyType" value={formData.propertyType} onChange={handleChange} required>
                <option className='text-sm md:text-base' value="" disabled>Select</option>
                <option className='text-sm md:text-base' value="Apartment">Apartment</option>
                <option className='text-sm md:text-base' value="Independent House/Villa">Independent House/Villa</option>
                <option className='text-sm md:text-base' value="Gated Community Villa">Gated Community Villa</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <label className='flex items-center w-3/5 md:w-1/3 font-medium'>Furnishing <RiSofaLine className='ml-1 text-xl' /></label>
              <select className='w-3/4 p-2 border-1 border-zinc-300 rounded-md'
                      name="furnishing" value={formData.furnishing} onChange={handleChange} required>
                <option className='text-sm md:text-base' value="" disabled>Select</option>
                <option className='text-sm md:text-base' value="Furnished">Furnished</option>
                <option className='text-sm md:text-base' value="Semi-furnished">Semi-furnished</option>
                <option className='text-sm md:text-base' value="Unfurnished">Unfurnished</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <label className='flex items-center w-3/5 md:w-2/5 font-medium'>Owner ID <CgProfile className='ml-1 text-xl' /></label>
              <input className='w-3/4 md:w-3/5 p-2 border-1 border-zinc-300 rounded-md cursor-not-allowed'
                    type="text" name="ownerId" value={formData.ownerId} readOnly />
            </div>

          </div>

          <div className='flex justify-center space-x-5 mb-2'>
            <button className="w-2/5 p-2 md:p-3 bg-blue-700 text-white border-none rounded-md cursor-pointer 
                               hover:bg-zinc-700" 
                    onClick={() => navigate('/properties')}>Cancel</button>
            <button className="w-2/5 p-2 md:p-3 bg-blue-700 text-white border-none rounded-md cursor-pointer
                               hover:bg-zinc-700"
                    type="submit">Add Property</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
