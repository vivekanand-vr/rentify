import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from '../Components/PropertyCard';
import PropertySearch from '../Components/PropertySearch';
import ShimmerCard from "../Components/ShimmerCard";
import { filterProperties } from '../Utils/FilterProperties';
import { useSelector } from 'react-redux';
import { TbMoodSad } from "react-icons/tb";

const PropertiesList = () => {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);
  const [properties, setProperties] = useState([]);
  const [expandedPropertyId, setExpandedPropertyId] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }, []);

  const handleExpand = (propertyId) => {
    setExpandedPropertyId(propertyId === expandedPropertyId ? null : propertyId);
  };

  const handleSearch = () => {
    const result = filterProperties(properties, searchKeyword);
    setFilteredProperties(result);
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
            // Render 10 shimmer cards while loading
            Array.from({ length: 10 }).map((_, index) => <ShimmerCard key={index} />)
          ) : (
            filteredProperties.length > 0 ? (
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
              <div className='message-div'>
                <h4>Sorry, no properties available <TbMoodSad /></h4> 
              </div>
            )
          )}
        </div>
      </div>
    </body>
  );
}

export default PropertiesList;
