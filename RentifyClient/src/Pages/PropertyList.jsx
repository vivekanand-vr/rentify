import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SortProperties from '../Components/SortProperties';
import PropertyCard from '../Components/PropertyCard';
import PropertySearch from '../Components/PropertySearch';
import ShimmerCard from "../Components/ShimmerCard";
import Pagination from '../Components/Pagination';
import { TbMoodSad } from "react-icons/tb";
import { API_ENDPOINTS } from '../Services/Endpoints';

const PropertiesList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortCriteria, setSortCriteria] = useState('');
  const propertiesPerPage = 8;

  // Fetching properties with all the criterias
  const fetchProperties = (page, search = '', sort = '') => {
    setLoading(true);
    const params = new URLSearchParams({
      page: page - 1,
      size: propertiesPerPage,
      search: search,
      sort: sort
    });
    
    // Passing all the paramaters as query parameters
    axios.get(`${API_ENDPOINTS.property.getAll}?${params.toString()}`)
      .then(response => {
        setProperties(response.data.content);
        setTotalPages(response.data.totalPages);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        console.error('Error fetching properties:', error);
      });
  };

  // Fetching properties on page change, sorting, and searching
  useEffect(() => {
    fetchProperties(currentPage, searchKeyword, sortCriteria);
  }, [currentPage, searchKeyword, sortCriteria]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
    setCurrentPage(1);
  };

  const handleSort = (criteria) => {
    setSortCriteria(criteria);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen">
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
      
      <SortProperties onSort={handleSort} />
      
      <div className="flex flex-wrap gap-3 mx-auto p-3 max-w-screen-2xl justify-center md:justify-normal">
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => <ShimmerCard key={index} />)
        ) : (
          properties.length > 0 ? (
            properties.map(property => (
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
      
      {properties.length > 0 && (
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages}
          onPageChange={handlePageChange} 
        />
      )}
    </div>
  );
}

export default PropertiesList;