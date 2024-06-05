import React, { useState } from 'react';
import { MdCloudUpload, MdDelete } from 'react-icons/md';

export const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleDragOver = (event) => { event.preventDefault(); };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleFiles(files);
  };

  const handleClick = (e) => { e.stopPropagation(); document.getElementById('image-input').click(); };

  const handleChange = (event) => { const files = event.target.files; handleFiles(files); };

  const handleFiles = (files) => {
    if (files && files[0]) {
        const file = files[0];
        setFileName(file.name);
        const reader = new FileReader();

        reader.onload = (e) => { setSelectedImage(e.target.result); };
        reader.readAsDataURL(file);
    }
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    setSelectedImage(null);
    setFileName('');
  };

  return (
    <div>
      <div className="image-uploader-container" onClick={handleClick} onDragOver={handleDragOver} onDrop={handleDrop} >
        <input id="image-input" type="file" accept="image/*" onChange={handleChange} hidden />
        {!selectedImage ? (
          <div className="upload-placeholder">
            <MdCloudUpload size={60} />
            <p>Click to browse files or drop image here</p>
          </div>
        ) : (
          <img src={selectedImage} alt="Uploaded" className="uploaded-image" />
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
