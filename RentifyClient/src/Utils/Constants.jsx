// Cloudinary Image API
export const PROPERTY_IMAGE = `https://res.cloudinary.com/${import.meta.env.VITE_APP_CLOUDINARY_CLOUD_NAME}/image/upload/`;

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

// USER Endpoints
export const LOGIN_USER    = `${BASE_URL}/user/login`;
export const SIGNIN_USER   = `${BASE_URL}/user/signin`;
export const OWNER_DETAILS = `${BASE_URL}/user/`;
export const UPDATE_USER   = `${BASE_URL}/user`;

// PROPERTY Endpoints
export const ADD_PROPERTY    = `${BASE_URL}/properties`;
export const UPDATE_PROPERTY = `${BASE_URL}/properties`;
export const DELETE_PROPERTY = `${BASE_URL}/properties/`;
export const GET_PROPERTIES  = `${BASE_URL}/properties`;
export const GET_MY_PROPERTIES = `${BASE_URL}/properties/owner/`;
