import React, { useState } from 'react';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import axios from 'axios';

export const ImageUploader = ({ onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleDragOver = (event) => { event.preventDefault();};

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleFiles(files);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    document.getElementById('image-input').click();
  };

  const handleChange = (event) => {
    const files = event.target.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    if (files && files[0]) {
      const file = files[0];
      setFileName(file.name);
      uploadToCloudinary(file); // Upload to Cloudinary

      // Preview the local image in state
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadToCloudinary = (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', import.meta.env.VITE_APP_CLOUDINARY_UPLOAD_PRESET);

    axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_APP_CLOUDINARY_CLOUD_NAME}/image/upload`, formData)
      .then(response => {
        const publicId = response.data.public_id;
        // Pass the public ID to the parent component
        onImageUpload(publicId); 
        
      })
      .catch(error => {
        console.error('Error uploading to Cloudinary:', error);
      });
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    setSelectedImage(null);
    setFileName('');
    onImageUpload(null); // Remove the image from the parent component state
  };

  return (
    <div>
      <div className="w-6/7 bg-gray-100 h-60 md:h-96 flex items-center justify-center cursor-pointer text-center mx-auto rounded-md border-1 border-gray-500" 
           onClick={handleClick} onDragOver={handleDragOver} onDrop={handleDrop}>
        
        <input id="image-input" type="file" accept="image/*" onChange={handleChange} hidden />
        
        {!selectedImage ? (
          <div className="flex flex-col items-center text-[gray]">
            <MdCloudUpload className='text-5xl md:text-6xl' />
            <p className='mt-2.5 text-sm md:text-base'>Click to browse files or drop image here</p>
          </div>
        ) : (
          <img className="w-full h-full object-scale-down" src={selectedImage} alt={fileName} />
        )}
  
      </div>
      {selectedImage && (
        <div className="w-[calc(100%-20px)] flex justify-between items-center mx-2.5 my-auto px-2.5 py-[5px] border-t-[#ddd] border-t border-solid">
          <span className="file-name">{fileName}</span>
          <MdDelete size={20} className="cursor-pointer" onClick={handleDelete} />
        </div>
      )}
    </div>
  );
};
