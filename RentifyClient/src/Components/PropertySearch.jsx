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
    <div className="flex justify-center mt-[30px]">
      <div className="flex items-center w-[700px] border-1 border-gray-400">
      <input
        type="text"
        className="flex-1 p-2.5 rounded-tl rounded-bl"
        placeholder="Search by property name, city, state, country"
        value={searchKeyword}
        onChange={handleInputChange}
      />
        <button onClick={handleSearchClick} 
                className="bg-[#1F51FF] border text-[white] cursor-pointer flex items-center p-2.5 rounded-tr rounded-br border-solid border-[#514e4e] hover:bg-[#0056b3]">
          Search <FaSearch className='ml-1.5' />
        </button>
      </div>
    </div>
  );
}

export default PropertySearch;
