/**
 * Returns the arry after filtering the properties with the search keyword.
 */
export const filterProperties = (properties, keyword) => {
    const lowerKeyword = keyword.toLowerCase();
    return properties.filter(property => {
      return property.name.toLowerCase().includes(lowerKeyword)  ||
             property.location.toLowerCase().includes(lowerKeyword);
    });
  };

// Utility functions to sort properties
const sortByNewestFirst = (properties) => {
  return [...properties].sort((a, b) => new Date(b.datePosted) - new Date(a.datePosted));
};

const sortByOldestFirst = (properties) => {
  return [...properties].sort((a, b) => new Date(a.datePosted) - new Date(b.datePosted));
};

const sortByRentLowToHigh = (properties) => {
  return [...properties].sort((a, b) => parseFloat(a.rent) - parseFloat(b.rent));
};

const sortByRentHighToLow = (properties) => {
  return [...properties].sort((a, b) => parseFloat(b.rent) - parseFloat(a.rent));
};

// Handle sorting based on user's selection
export const handleSort = (type, properties, setProperties) => {
  let sortedProperties;
  if (type === 'Newest First') {
    sortedProperties = sortByNewestFirst(properties);
  } else if (type === 'Oldest First') {
    sortedProperties = sortByOldestFirst(properties);
  } else if (type === 'Rent Low to High') {
    sortedProperties = sortByRentLowToHigh(properties);
  } else if (type === 'Rent High to Low') {
    sortedProperties = sortByRentHighToLow(properties);
  }
  setProperties(sortedProperties);  // Update state with sorted properties
};

/**
 * Returns the current date formatted as YYYY-MM-DD.
 * @returns {string} The formatted date string.
 */
export const getCurrentDateString = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); 
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 *  Helper functions related to Redux, used for storing and retrieving the User-login state from Local Storage.
 */

export const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('userState', serializedState);
  } catch (e) {
    console.error("Could not save state to localStorage", e);
  }
};

export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('userState');
    if (serializedState === null) {
      return undefined; // Let Redux initialize the state
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load state from localStorage", e);
    return undefined;
  }
};
