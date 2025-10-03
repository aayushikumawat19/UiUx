import React, { useState } from 'react';

const UploadPhoto = ({ onImageChange }) => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState('');
  const [error, setError] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setError('File size should not exceed 2MB.');
        setImage(null);
        setImageName('');
      } else {
        setError('');
        setImageName(file.name);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
          onImageChange(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-5 bg-gray-50 rounded-lg shadow-md">
      <label htmlFor="imageUpload" className="cursor-pointer text-center mb-2">
        <div className="w-30 h-30 border-2 border-dashed border-blue-600 rounded-full flex items-center justify-center mb-2">
          {image ? (
            <img src={image} alt="Uploaded" className="w-full h-full object-cover rounded-full" />
          ) : (
            <span className="text-4xl text-blue-600">+</span>
          )}
        </div>
        Upload photo
      </label>
      <input
        type="file"
        id="imageUpload"
        accept=".jpg,.jpeg,.png"
        onChange={handleImageChange}
        className="hidden"
      />
      {imageName && <p className="mt-2 text-gray-800 text-sm">{imageName}</p>}
      <div className="mt-2 text-gray-600 text-xs text-center">
        <p>Allowed format: <span className="font-bold text-blue-600">JPG, JPEG, PNG</span></p>
        <p>Max file size: <span className="font-bold text-red-500">2MB</span></p>
      </div>
      {error && <p className="text-red-500 text-xs mt-1 text-center">{error}</p>}
    </div>
  );
};

export default UploadPhoto;
