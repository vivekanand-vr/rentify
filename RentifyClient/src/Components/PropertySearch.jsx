import React from 'react';
import { FaSearch } from 'react-icons/fa';

const PropertySearch = ({ searchKeyword, setSearchKeyword, onSearch }) => {
  const handleInputChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch();
  };

  return (
    <div className="property-search-container">
      <div className="property-search">
        <input
          type="text"
          placeholder="Search by property name, city, state, country"
          value={searchKeyword}
          onChange={handleInputChange}
        />
        <button onClick={handleSearchClick} className="search-button">
          Search <FaSearch />
        </button>
      </div>
    </div>
  );
}

export default PropertySearch;
