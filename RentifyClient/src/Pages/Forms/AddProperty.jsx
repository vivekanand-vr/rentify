import apiClient from "../../Services/ApiClient";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { getCurrentDateString } from '../../Services/Utils';
import { ImageUploader } from '../../Components/ImageUploader';
import { API_ENDPOINTS } from '../../Services/Endpoints';
import { CgProfile, PiMoneyWavy, RiSofaLine, RxDimensions, PiBuildings, MdOutlineHomeWork, 
         IoImageOutline, MdLocationOn, GrMapLocation, FaGlobeAmericas, TbReportMoney, PiMapPinSimpleAreaLight,
         RiContractLine, MdBalcony, MdOutlineWatchLater, IoBedOutline, PiBathtubLight, PiSecurityCameraBold,
         PiWheelchair, IoCompassOutline, TbSunElectricity, CgGym, FaCar, BsStars,PiMailbox } from '../../Services/Icons';

const AddProperty = () => {
  const currentDate = getCurrentDateString();
  const userId = useSelector((state) => state.userData.id);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const navigate = useNavigate();

  const [location, setLocation] = useState({
    streetAddress: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
  });

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    area: '',
    rent: '',
    bedrooms: '',
    propertyType: '',
    imageId: '',
    datePosted: currentDate,
    ownerId: userId,
    additionalDetails: {
      age: '',
      bathrooms: '',
      deposit: '',
      balcony: '',
      highlights: '',
      facingDirection: '',
      accessibility: '',
      utilities: '',
      security: '',
      leaseTerms: '',
      carParking: false,
      furnishing: '',
      amenities: '',
    }
  });

  const handleImageUpload = (imageId) => {
    setFormData({ ...formData, imageId });
  };

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setLocation({
      ...location,
      [name]: value,
    });
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData) {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ 
        ...formData, 
        additionalDetails: { 
          ...formData.additionalDetails, 
          [name]: value 
        } 
      });
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ 
      ...formData, 
      additionalDetails: { 
        ...formData.additionalDetails, 
        [name]: checked 
      } 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      toast.error('Please log in to add a property.');
      return;
    }

    // Concat addres as a single string and save it in formData as `location`
    const locationString = `${location.streetAddress}, ${location.city}, ${location.state}, ${location.country} - ${location.postalCode}`;

    const updatedFormData = {
      ...formData,
      location: locationString,
    };

    apiClient.post(API_ENDPOINTS.property.add, updatedFormData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        toast.success("Property added successfully.");
        setTimeout(() => { navigate('/properties'); }, 2000);
        console.log(updatedFormData);
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
        <h2 className='font-nunito text-center font-bold mb-6 text-2xl md:text-3xl'>Add Listing</h2>
        <form onSubmit={handleSubmit}>
          {/* Two-column layout for name, city, state, country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex items-center space-x-3">
              <label className='flex items-center w-2/5 md:w-1/4 font-medium'>Name <MdOutlineHomeWork className='ml-1 text-xl' /></label>
              <input className='w-full md:w-5/6 p-2 border-1 border-zinc-300 rounded-md'
                     type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="flex items-center space-x-2">
              <label className='flex items-center w-2/5 md:w-1/4 font-medium'>Street <PiMapPinSimpleAreaLight className='ml-1 text-xl' /></label>
              <input className='w-full md:w-4/5 p-2 border-1 border-zinc-300 rounded-md'
                     type="text" name="streetAddress" value={location.streetAddress} onChange={handleLocationChange} required />
            </div>

            <div className="flex items-center space-x-2">
              <label className='flex items-center w-2/5 md:w-1/4 font-medium'>City <MdLocationOn className='ml-1 text-[22px]' /></label>
              <input className='w-full md:w-5/6 p-2 border-1 border-zinc-300 rounded-md'
                     type="text" name="city" value={location.city} onChange={handleLocationChange} required />
            </div>

            <div className="flex items-center space-x-2">
              <label className='flex items-center w-3/4 md:w-1/2 font-medium'>Postal Code <PiMailbox className='ml-1 text-xl' /></label>
              <input className='w-4/5 p-2 border-1 border-zinc-300 rounded-md'
                     type="text" name="postalCode" value={location.postalCode} onChange={handleLocationChange} required />
            </div>

            <div className="flex items-center space-x-2">
              <label className='flex items-center w-2/5 md:w-1/4 font-medium'>State <GrMapLocation className='ml-1 text-xl' /> </label>
              <input className='w-full md:w-4/5 p-2 border-1 border-zinc-300 rounded-md'
                     type="text" name="state" value={location.state} onChange={handleLocationChange} required />
            </div>

            <div className="flex items-center space-x-2">
              <label className='flex items-center w-2/5 md:w-1/2 font-medium'>Country <FaGlobeAmericas className='ml-1 text-lg' /></label>
              <input className='w-full md:w-4/5 p-2 border-1 border-zinc-300 rounded-md'
                     type="text" name="country" value={location.country} onChange={handleLocationChange} required />
            </div>
          </div>

          <div className="mb-4">
            <label className='flex items-center mb-2 font-medium'>Property Image <IoImageOutline className='ml-1 text-xl' /></label>
            <ImageUploader onImageUpload={handleImageUpload} />
          </div>

          <div className="mb-4">
            <label className='flex items-center mb-1 font-medium'>Highlights <BsStars className='ml-1 text-xl' /></label>
            <textarea className='w-full p-2 border-1 border-zinc-300 rounded-md'
                      name="highlights" value={formData.additionalDetails.highlights} onChange={handleChange} required />
          </div>

          {/* Two-column layout for inputs below */}
          <h3 className='font-nunito text-center font-bold mb-4 text-xl md:text-2xl'>ADDITIONAL DETAILS</h3>
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
                     type="number" name="deposit" value={formData.additionalDetails.deposit} onChange={handleChange} required />
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
                <option className='text-sm md:text-base' value="Independent House">Independent House</option>
                <option className='text-sm md:text-base' value="Villa">Villa</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <label className='flex items-center w-3/5 md:w-1/3 font-medium'>Furnishing <RiSofaLine className='ml-1 text-xl' /></label>
              <select className='w-3/4 p-2 border-1 border-zinc-300 rounded-md'
                      name="furnishing" value={formData.additionalDetails.furnishing} onChange={handleChange} required>
                <option className='text-sm md:text-base' value="" >Select</option>
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

            <div className="flex items-center space-x-2">
              <label className='flex items-center w-3/5 md:w-1/3 font-medium'>Age <MdOutlineWatchLater className='ml-1 text-xl' /></label>
              <input className='w-3/4 p-2 border-1 border-zinc-300 rounded-md'
                     type="number" name="age" value={formData.additionalDetails.age} onChange={handleChange} required />
            </div>

            <div className="flex items-center space-x-2">
              <label className='flex items-center w-3/5 md:w-1/2 font-medium'>Bathrooms <PiBathtubLight className='ml-1 text-xl' /></label>
              <input className='w-3/4 p-2 border-1 border-zinc-300 rounded-md'
                     type="number" name="bathrooms" value={formData.additionalDetails.bathrooms} onChange={handleChange} min="1" max="10" required />
            </div>

            <div className="flex items-center space-x-2">
              <label className='flex items-center w-3/4 md:w-1/3 font-medium'>Balcony <MdBalcony className='ml-1 text-xl' /></label>
              <select className='w-3/4 p-2 border-1 border-zinc-300 rounded-md' 
                      name="balcony" value={formData.additionalDetails.balcony} onChange={handleChange} required>
                <option className='text-sm md:text-base' value="">Select</option>
                <option className='text-sm md:text-base' value="Yes">Yes</option>
                <option className='text-sm md:text-base' value="No">No</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <label className='flex items-center w-3/4 md:w-1/2 font-medium'>Facing Direction <IoCompassOutline className='ml-1 text-xl' /></label>
              <input className='w-3/4 p-2 border-1 border-zinc-300 rounded-md'
                     type="text" name="facingDirection" value={formData.additionalDetails.facingDirection} onChange={handleChange} required />
            </div>

            <div className="flex items-center space-x-2">
              <label className='flex items-center w-3/5 md:w-1/2 font-medium'>Accessibility <PiWheelchair className='ml-1 text-xl' /></label>
              <input className='w-3/4 p-2 border-1 border-zinc-300 rounded-md'
                     type="text" name="accessibility" value={formData.additionalDetails.accessibility} onChange={handleChange} required />
            </div>

            <div className="flex items-center space-x-2">
              <label className='flex items-center w-3/5 md:w-1/2 font-medium'>Utilities <TbSunElectricity className='ml-1 text-xl' /></label>
              <input className='w-3/4 p-2 border-1 border-zinc-300 rounded-md'
                     type="text" name="utilities" value={formData.additionalDetails.utilities} onChange={handleChange} required />
            </div>

            <div className="flex items-center space-x-2">
              <label className='flex items-center w-3/5 md:w-1/2 font-medium'>Security <PiSecurityCameraBold className='ml-1 text-xl' /></label>
              <input className='w-3/4 p-2 border-1 border-zinc-300 rounded-md'
                     type="text" name="security" value={formData.additionalDetails.security} onChange={handleChange} required />
            </div>

            <div className="flex items-center space-x-2">
              <label className='flex items-center w-3/5 md:w-1/2 font-medium'>Lease Terms <RiContractLine className='ml-1 text-xl' /></label>
              <input className='w-3/4 p-2 border-1 border-zinc-300 rounded-md'
                     type="text" name="leaseTerms" value={formData.additionalDetails.leaseTerms} onChange={handleChange} required />
            </div>

            <div className="flex items-center space-x-2">
              <label className='flex items-center w-3/5 md:w-1/2 font-medium'>Amenities <CgGym className='ml-1 text-xl' /></label>
              <input className='w-3/4 p-2 border-1 border-zinc-300 rounded-md'
                     type="text" name="amenities" value={formData.additionalDetails.amenities} onChange={handleChange} required />
            </div>

            <div className="flex items-center space-x-2">
              <label className='flex items-center  font-medium mr-6 md:mr-10'>Car Parking <FaCar className='ml-1 text-xl' /></label>
              <input className='p-2 border-1 border-zinc-300 rounded-md'
                     type="checkbox" name="carParking" checked={formData.additionalDetails.carParking} onChange={handleCheckboxChange} />
            </div>

          </div>

          <div className='flex justify-center space-x-5 mb-2'>
            <button className="w-2/5 p-2 md:p-3 bg-blue-700 text-white border-none rounded-md cursor-pointer 
                               hover:bg-zinc-700" 
                    onClick={() => navigate('/properties')}>Cancel</button>
            <button className="w-2/5 p-2 md:p-3 bg-blue-700 text-white border-none rounded-md cursor-pointer
                               hover:bg-zinc-700"
                    type="submit">Add Listing</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
