import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from '../Components/PropertyCard';
import PropertySearch from '../Components/PropertySearch';
import ShimmerCard from "../Components/ShimmerCard";
import Pagination from '../Components/Pagination';
import { TbMoodSad } from "react-icons/tb";
import { filterProperties } from '../Services/Utils';
import { API_ENDPOINTS } from '../Services/Endpoints';

const PropertiesList = () => {
  const [properties, setProperties] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 8;

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
  }, []);

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
        
        {/* Hero Section */}
        <section className="relative w-full h-80 md:h-[440px] bg-cover bg-center"
          style={{ backgroundImage: 'url(src/Assets/BG-3.jpg)' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-5xl font-bold md:mb-4">Find Your Perfect Stay</h1>
              <p className="md:text-lg mb-6">Explore our listings to find the perfect home for you.</p>
              <PropertySearch searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} onSearch={handleSearch} />
            </div>
          </div>
        </section>

        <div className="flex flex-wrap gap-3 mx-auto p-3 max-w-screen-2xl justify-center md:justify-normal">
            {loading ? ( Array.from({ length: 8 }).map((_, index) => <ShimmerCard key={index} />)) :
             ( currentProperties.length > 0 ? (
                currentProperties.map(property => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                  />
                ))
              ) : (
                <div className='w-full flex justify-center m-5'>
                  <h4 className='flex items-center text-base font-semibold'>Sorry, no properties available <TbMoodSad className='ml-1' /></h4> 
                </div>
              )
            )}
        </div>
          { 
            (filteredProperties.length > 0) &&
             <Pagination currentPage={currentPage} totalItems={filteredProperties.length} itemsPerPage={propertiesPerPage} onPageChange={handlePageChange} />
          }
      </div>
  );
}

export default PropertiesList;
