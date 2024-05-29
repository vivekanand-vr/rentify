import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from '../Components/PropertyCard';
import PropertySearch from '../Components/PropertySearch';
import { filterProperties } from '../Utils/FilterProperties'

const PropertiesList = ({ isLoggedIn }) => {
  const [properties, setProperties] = useState([]);
  const [expandedPropertyId, setExpandedPropertyId] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9999/Rentify/properties')
      .then(response => {
        setProperties(response.data);
        setFilteredProperties(response.data); 
      })
      .catch(error => console.error('There was an error fetching the properties:', error));
  }, []); // Empty array is passed as we want the function to repeat at every render

  const handleExpand = (propertyId) => {
    setExpandedPropertyId(propertyId === expandedPropertyId ? null : propertyId);
  };

  const handleSearch = () => {
    const result = filterProperties(properties, searchKeyword);
    setFilteredProperties(result);
  };

  return (
    <div className="home-page">
      <PropertySearch
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        onSearch={handleSearch}
      />
      <div className="property-list">
        {filteredProperties.length > 0 ? (
          filteredProperties.map(property => (
            <PropertyCard
              key={property.id}
              property={property}
              isLoggedIn={isLoggedIn}
              isExpanded={property.id === expandedPropertyId}
              onExpand={handleExpand}
            />
          ))
        ) : (
          <p>No properties match the current search criteria.</p>
        )}
      </div>
    </div>
  );
}

export default PropertiesList;
