import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

const ImageUpload = () => {
  const [file, setFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('http://localhost:3000/candidate/upload', {
        method: 'POST',
        body: formData,
      });

      // Handle the response accordingly
      console.log(response);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <Dropzone onDrop={onDrop} accept="image/*">
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag & drop an image here, or click to select one</p>
          </div>
        )}
      </Dropzone>
      {file && (
        <div>
          <p>Selected File: {file.name}</p>
          <button onClick={uploadImage}>Upload</button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
