import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from '../Components/PropertyCard';
import PropertySearch from '../Components/PropertySearch';
import ShimmerCard from "../Components/ShimmerCard";
import Pagination from '../Components/Pagination';
import { useSelector } from 'react-redux';
import { TbMoodSad } from "react-icons/tb";
import { filterProperties } from '../Services/FilterProperties';
import { API_ENDPOINTS } from '../Services/Endpoints';

const PropertiesList = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const [properties, setProperties] = useState([]);
  const [expandedPropertyId, setExpandedPropertyId] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 4;

  useEffect(() => {
    axios.get(API_ENDPOINTS.property.getAll)
      .then(response => {
        setProperties(response.data);
        setFilteredProperties(response.data); 
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        console.error('There was an error fetching the properties:', error);
      })
  }, [isLoggedIn]);

  const handleExpand = (propertyId) => {
    setExpandedPropertyId(propertyId === expandedPropertyId ? null : propertyId);
  };

  const handleSearch = () => {
    const result = filterProperties(properties, searchKeyword);
    setFilteredProperties(result);
    setCurrentPage(1); // Reset to first page after search
  };

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
      <div className="min-h-screen">
        <PropertySearch
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
          onSearch={handleSearch}
        />
        <div className="flex flex-wrap justify-center gap-y-6 gap-x-6 mb-4 mx-2 p-3">
            {loading ? ( Array.from({ length: 10 }).map((_, index) => <ShimmerCard key={index} />)) :
             (
              currentProperties.length > 0 ? (
                currentProperties.map(property => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    isLoggedIn={isLoggedIn}
                    isExpanded={property.id === expandedPropertyId}
                    onExpand={handleExpand}
                  />
                ))
              ) : (
                <div className='w-full flex justify-center m-5'>
                  <h4 className='flex items-center text-base font-semibold'>Sorry, no properties available <TbMoodSad className='ml-1' /></h4> 
                </div>
              )
            )}
        </div>
          { (filteredProperties.length > 0) &&
             <Pagination currentPage={currentPage} totalItems={filteredProperties.length} itemsPerPage={propertiesPerPage} onPageChange={handlePageChange} />
          }
      </div>
  );
}

export default PropertiesList;
