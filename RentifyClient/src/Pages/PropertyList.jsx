import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from '../Components/PropertyCard';
import PropertySearch from '../Components/PropertySearch';
import ShimmerCard from "../Components/ShimmerCard";
import { useSelector } from 'react-redux';
import { TbMoodSad } from "react-icons/tb";
import Pagination from '../Components/Pagination';
import { filterProperties } from '../Utils/FilterProperties';

const PropertiesList = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const [properties, setProperties] = useState([]);
  const [expandedPropertyId, setExpandedPropertyId] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 4;

  useEffect(() => {
    axios.get('http://localhost:9999/Rentify/properties')
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
    <body>
      <div className="home-page">
        <PropertySearch
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
          onSearch={handleSearch}
        />
        <div className="property-list">
          {loading ? (
            Array.from({ length: 10 }).map((_, index) => <ShimmerCard key={index} />)
          ) : (
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
              <div className='message-div'>
                <h4>Sorry, no properties available <TbMoodSad /></h4> 
              </div>
            )
          )}
        </div>
        <Pagination
          currentPage={currentPage}
          totalItems={filteredProperties.length}
          itemsPerPage={propertiesPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </body>
  );
}

export default PropertiesList;
