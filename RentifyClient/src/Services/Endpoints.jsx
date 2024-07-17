const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

export const API_ENDPOINTS = {
  user: {
      login: `${BASE_URL}/user/login`,
      signin: `${BASE_URL}/user/signin`,
      details: `${BASE_URL}/user/`,
      update: `${BASE_URL}/user`,
  },
  property: {
      add: `${BASE_URL}/properties`,
      details: `${BASE_URL}/properties/`,
      getAll: `${BASE_URL}/properties`,
      getByOwner: `${BASE_URL}/properties/owner/`,
      update: `${BASE_URL}/properties`,
      delete: `${BASE_URL}/properties/`,
  },
};

// Cloudinary Image API
export const PROPERTY_IMAGE = `https://res.cloudinary.com/${import.meta.env.VITE_APP_CLOUDINARY_CLOUD_NAME}/image/upload/`;
