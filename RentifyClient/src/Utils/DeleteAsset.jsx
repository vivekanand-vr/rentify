import axios from 'axios';
import CryptoJS from 'crypto-js';

export const deleteAsset = (publicId) => {
  const cloudName = import.meta.env.VITE_APP_CLOUDINARY_CLOUD_NAME;
  const apiKey = import.meta.env.VITE_APP_CLOUDINARY_API_KEY;
  const apiSecret = import.meta.env.VITE_APP_CLOUDINARY_API_SECRET;

  const timestamp = Math.round(new Date().getTime() / 1000);
  const stringToSign = `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
  const signature = CryptoJS.SHA1(stringToSign).toString(CryptoJS.enc.Hex);

  const formData = new URLSearchParams();
  formData.append('public_id', publicId);
  formData.append('api_key', apiKey);
  formData.append('timestamp', timestamp);
  formData.append('signature', signature);

  return axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`, formData)
    .then(response => {
      console.log('Image deleted:', response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Error deleting from Cloudinary:', error);
      throw error;
    });
};