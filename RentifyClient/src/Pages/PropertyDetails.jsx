import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropertyDetailsShimmer from '../Components/PropertyDetailsShimmer';
import { API_ENDPOINTS, PROPERTY_IMAGE } from '../Services/Endpoints';
import { LuIndianRupee, PiMoneyWavy, RiSofaLine, RxDimensions, PiBuildings, MdOutlineLocationOn, TbReportMoney,FaCheck,
         RiContractLine, MdBalcony,  PiBathtubLight, PiSecurityCameraBold, PiWheelchair, IoCompassOutline, TbSunElectricity, 
         FaCar, FaTimes, BsStars, CgGym } from '../Services/Icons';



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

  if (property == null) return (<PropertyDetailsShimmer />);

  const imageUrl = PROPERTY_IMAGE + property.imageId;

  return (
    <div className='min-h-screen p-2 md:p-0'>
      <div className="max-w-6xl mx-auto my-3 p-3 bg-white border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-semibold mb-1">{property.name}</h2>
        <p className="flex items-center md:text-lg mb-2"><MdOutlineLocationOn className='mx-1' /> {property.location}</p>

        <img className="w-full h-68 object-cover rounded-md mb-4" src={imageUrl} alt={property.name} />

        <div className="text-sm md:text-base grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          <div className="flex items-center space-x-2 pb-1 border-b border-slate-200">
            <p className="flex items-center font-semibold w-1/2"> Property Type <PiBuildings className='ml-1' /> </p>
            <p className='w-3/4'> {property.propertyType} {property.bedrooms} BHK </p>
          </div>

          <div className="flex items-center space-x-2 pb-1 border-b border-slate-200">
            <p className="flex items-center font-semibold w-1/2"> Area <RxDimensions className="ml-1" /> </p>
            <p className="w-3/4"> {property.area} sq. ft. </p>
          </div>

          <div className="flex items-center space-x-2 pb-1 border-b border-slate-200">
            <p className="flex items-center font-semibold w-1/2"> Furnishing <RiSofaLine className="ml-1" /> </p>
            <p className="w-3/4"> {property.additionalDetails.furnishing} </p>
          </div>

          <div className="flex items-center space-x-2 pb-1 border-b border-slate-200">
            <p className="flex items-center font-semibold w-1/2"> Rent <PiMoneyWavy className="ml-1" /> </p>
            <p className="flex items-center w-3/4"> <LuIndianRupee /> {property.rent} </p>
          </div>
        </div>

        <div className='text-sm md:text-base'>
          <p className="flex items-center font-semibold mb-1 pb-1 border-b border-slate-200"> Highlights <BsStars className="ml-1" /></p>
          <p className='mb-4'>{property.additionalDetails.highlights}</p>
        </div>
        
        <h3 className='font-nunito text-center font-bold mb-4 text-xl md:text-2xl'>ADDITIONAL DETAILS</h3>

        <div className="text-sm md:text-base grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          <div className="flex items-center space-x-2 pb-1 border-b border-slate-200">
            <p className="flex items-center font-semibold w-1/2"> Deposit <TbReportMoney className="ml-1" /> </p>
            <p className="flex items-center w-3/4"> <LuIndianRupee /> {property.additionalDetails.deposit} </p>
          </div>

          <div className="flex items-center space-x-2 pb-1 border-b border-slate-200">
            <p className="flex items-center font-semibold w-1/2"> Balcony <MdBalcony className='ml-1' /> </p>
            <p className="w-3/4"> {property.additionalDetails.balcony} </p>
          </div>

          <div className="flex items-center space-x-2 pb-1 border-b border-slate-200">
            <p className="flex items-center font-semibold w-1/2"> Bathrooms <PiBathtubLight className="ml-1" /> </p>
            <p className="w-3/4"> {property.additionalDetails.bathrooms} </p>
          </div>

          <div className="flex items-center space-x-2 pb-1 border-b border-slate-200">
            <p className="flex items-center font-semibold w-1/2"> Facing Direction <IoCompassOutline className="ml-1" /> </p>
            <p className="w-3/4"> {property.additionalDetails.facingDirection} </p>
          </div>

          <div className="flex items-center space-x-2 pb-1 border-b border-slate-200">
            <p className="flex items-center font-semibold w-1/2"> Accessibility <PiWheelchair className='ml-1' /> </p>
            <p className="w-3/4">
              {property.additionalDetails.accessibility ? 'Yes' : 'No'}
            </p>
          </div>

          <div className="flex items-center space-x-2 pb-1 border-b border-slate-200">
            <p className="flex items-center font-semibold w-1/2"> Utilities <TbSunElectricity className='ml-1' /> </p>
            <p className="w-3/4">
              {property.additionalDetails.utilities ? (
                <span className="flex items-center space-x-2">
                  <FaCheck className="text-green-500 mr-1" /> Yes
                </span>
              ) : (
                <span className="flex items-center space-x-2">
                  <FaTimes className="text-red-500 mr-1" /> No
                </span>
              )}
            </p>
          </div>

          <div className="flex items-center space-x-2 pb-1 border-b border-slate-200">
            <p className="flex items-center font-semibold w-1/2"> Security <PiSecurityCameraBold className='ml-1' /> </p>
            <p className="w-3/4">
              {property.additionalDetails.security ? (
                <span className="flex items-center space-x-2">
                  <FaCheck  className="text-green-500 mr-1" /> Yes
                </span>
              ) : (
                <span className="flex items-center space-x-2">
                  <FaTimes className="text-red-500 mr-1" /> No
                </span>
              )}
            </p>
          </div>

          <div className="flex items-center space-x-2 pb-1 border-b border-slate-200">
            <p className="flex items-center font-semibold w-1/2"> Lease Terms <RiContractLine className='ml-1' /> </p>
            <p className="w-3/4"> {property.additionalDetails.leaseTerms} </p>
          </div>

          <div className="flex items-center space-x-2 pb-1 border-b border-slate-200">
            <p className="flex items-center font-semibold w-1/2"> Car Parking <FaCar className='ml-1' /> </p>
            <p className="w-3/4">
              {property.additionalDetails.carParking ? (
                <span className="flex items-center space-x-2">
                  <FaCheck className="text-green-500 mr-1" /> Yes
                </span>
              ) : (
                <span className="flex items-center space-x-2">
                  <FaTimes className="text-red-500 mr-1" /> No
                </span>
              )}
            </p>
          </div>

          <div className="flex items-start space-x-2 pb-1 border-b border-slate-200">
            <p className="flex items-center font-semibold w-1/2">Amenities <CgGym className='ml-1' /> </p>
            <ul className="w-3/4 list-disc">
              {property.additionalDetails.amenities.split(',').map((amenity, index) => (
                <li key={index} className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  {amenity.trim()}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          className="px-3 py-2 bg-blue-700 text-white text-sm md:text-base rounded-md hover:bg-blue-800"
          onClick={handleContactOwner}
        >
          {showOwnerDetails ? "Hide Owner Details" : "Get Owner Details"}
        </button>

        {showOwnerDetails && ownerDetails && (
          <div className="mt-4 p-4 bg-emerald-600 text-white border border-gray-400 rounded-md">
            <h3 className="text-lg md:text-2xl font-semibold md:mb-2">Owner Contact</h3>
            <p className='text-sm md:text-base my-1'>
              <span className='font-semibold mr-1'>Name :</span> {ownerDetails.firstName} {ownerDetails.lastName} 
            </p>
            <p className='text-sm md:text-base my-1'>
              <span className='font-semibold mr-2'>Email :</span> {ownerDetails.email}
            </p>
            <p className='text-sm md:text-base my-1'>
              <span className='font-semibold mr-1'>Phone :</span> {ownerDetails.phoneNumber}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetails;