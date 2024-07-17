import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LuIndianRupee, TbReportMoney, PiMoneyWavy, RiSofaLine, RxDimensions, PiBuildings, MdOutlineLocationOn, BsStars } from '../Services/Icons';
import { API_ENDPOINTS, PROPERTY_IMAGE } from '../Services/Endpoints';

const PropertyDetails = () => {
  const { pid } = useParams();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const [property, setProperty] = useState(null);
  const [ownerDetails, setOwnerDetails] = useState(null);
  const [showOwnerDetails, setShowOwnerDetails] = useState(false);

  useEffect(() => {
    axios.get(API_ENDPOINTS.property.details + pid)
      .then(response => setProperty(response.data))
      .catch(error => console.error('There was an error fetching the property details:', error));
  }, [pid]);

  const handleContactOwner = () => {
    if (isLoggedIn) {
      if (!showOwnerDetails) {
        axios.get(API_ENDPOINTS.user.details + property.ownerId)
          .then(response => {
            setOwnerDetails(response.data);
            setShowOwnerDetails(true);
          })
          .catch(error => console.error('There was an error fetching the owner details:', error));
      } else {
        setShowOwnerDetails(false);
      }
    } else {
      navigate('/login');
    }
  };

  if(property == null) return(<div>Property Loading</div>)

  const imageUrl = PROPERTY_IMAGE + property.imageId;

  return (
    <div className='min-h-screen p-2 md:p-0'>
      <div className="max-w-4xl mx-auto my-3 p-3 bg-white border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-semibold mb-1">{property.name}</h2>
        <p className="flex items-center md:text-lg mb-2"><MdOutlineLocationOn className='mx-1' /> {property.city}, {property.state}, {property.country}</p>

        <img className="w-full h-68 object-cover rounded-md mb-4" src={imageUrl} alt={property.name} />

        <div className="text-sm md:text-base grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          
          <div className="flex items-center space-x-2 pb-1 border-b border-slate-200">
            <p className="flex items-center font-semibold w-1/2"> Property Type <PiBuildings className='ml-1' /> </p> 
            <p className='w-3/4'> {property.propertyType} {property.bedrooms} BHK </p>
          </div>

          <div className="flex items-center space-x-2 pb-1  border-b border-slate-200">
            <p className="flex items-center font-semibold w-1/2"> Area <RxDimensions className="ml-1" /> </p>
            <p className="w-3/4"> {property.area} sq. ft. </p>
          </div>

          <div className="flex items-center space-x-2 pb-1 border-b border-slate-200">
            <p className="flex items-center font-semibold w-1/2"> Furnishing <RiSofaLine className="ml-1" /> </p>
            <p className="w-3/4"> {property.furnishing} </p>
          </div>

          <div className="flex items-center space-x-2 pb-1 border-b border-slate-200">
            <p className="flex items-center font-semibold w-1/2"> Rent  <PiMoneyWavy className="ml-1"  /> </p>
            <p className="flex items-center w-3/4"> <LuIndianRupee />  {property.rent} </p>
          </div>
          <div className="flex items-center space-x-2 pb-1 border-b border-slate-200">
            <p className="flex items-center font-semibold w-1/2"> Deposit <TbReportMoney className="ml-1"  />  </p>
            <p className="flex items-center w-3/4"> <LuIndianRupee /> {property.deposit} </p>
          </div>

        </div>

        <div className='text-sm md:text-base'>
          <p className="flex items-center font-semibold mb-1 pb-1 border-b border-slate-200"> Highlights <BsStars className="ml-1" /></p>
          <p className='mb-4'>{property.description}</p>
        </div>
        

        <button
          className="px-3 py-2 bg-blue-700 text-white text-sm md:text-base rounded-md hover:bg-blue-800"
          onClick={handleContactOwner}
        >
          {showOwnerDetails ? "Hide Owner Details" : "Get Owner Details"}
        </button>

        {showOwnerDetails && ownerDetails && (
          <div className="mt-4 p-4 bg-zinc-300 border- border-gray-400 rounded-md">
            <h3 className="text-lg md:text-2xl font-semibold md:mb-2">Owner Contact</h3>
            <p className='text-sm md:text-base my-1'>Name :  {ownerDetails.firstName} {ownerDetails.lastName} </p>
            <p className='text-sm md:text-base my-1'>Email :&nbsp; {ownerDetails.email}</p>
            <p className='text-sm md:text-base my-1'>Phone : {ownerDetails.phoneNumber}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetails;
