import React, { useState } from 'react';

const SortProperties = ({ onSort }) => {
  const [dropDown, setDropDown] = useState(false);

  const toggleDropDown = () => setDropDown(!dropDown);
  const closeDropDown = () => setDropDown(false);

  const handleSortClick = (criteria) => {
    onSort(criteria);
    closeDropDown();
  };

  return (
    <div className="relative left-6 md:left-0 md:ml-52 mt-3">
      <button onClick={toggleDropDown}
        className="text-white rounded-md bg-blue-700 hover:bg-gray-500 border border-gray-300 p-2">
        Sort By
      </button>

      {dropDown && (
        <ul className="text-sm md:text-base absolute left-0 mt-2 w-72  bg-slate-200 shadow-lg z-50 rounded-md">
          <li onClick={() => handleSortClick('datePosted,desc')} className="px-3 py-2 border-b border-gray-300 hover:bg-gray-500 hover:text-white cursor-pointer">
            Posted On (Newest First)
          </li>
          <li onClick={() => handleSortClick('datePosted,asc')} className="px-3 py-2 border-b border-gray-300 hover:bg-gray-500 hover:text-white cursor-pointer">
            Posted On (Oldest First)
          </li>
          <li onClick={() => handleSortClick('rent,asc')} className="px-3 py-2 border-b border-gray-300 hover:bg-gray-500 hover:text-white cursor-pointer">
            Rent (Low to High)
          </li>
          <li onClick={() => handleSortClick('rent,desc')} className="px-3 py-2 border-b border-gray-300 hover:bg-gray-500 hover:text-white cursor-pointer">
            Rent (High to Low)
          </li>
        </ul>
      )}
    </div>
  );
};

export default SortProperties;
