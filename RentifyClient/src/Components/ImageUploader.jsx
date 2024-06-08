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
      <div className="image-uploader-container" onClick={handleClick} onDragOver={handleDragOver} onDrop={handleDrop}>
        <input id="image-input" type="file" accept="image/*" onChange={handleChange} hidden />
        {!selectedImage ? (
          <div className="upload-placeholder">
            <MdCloudUpload size={60} />
            <p>Click to browse files or drop image here</p>
          </div>
        ) : (
          <img className="uploaded-image" src={selectedImage} alt={fileName} />
        )}
      </div>
      {selectedImage && (
        <div className="file-details">
          <span className="file-name">{fileName}</span>
          <MdDelete size={20} className="delete-icon" onClick={handleDelete} />
        </div>
      )}
    </div>
  );
};
