import React from 'react';

const OffsetImageGallery = ({ className, imageUrls = [], maxWidth ='1800px', marginTop }) => {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    maxWidth, // Adjust as needed
    maxHeight: '100px', // Adjust as needed
    margin: '0 auto',
    marginTop,
    
  };

  const imageStyle = (index) => ({
    position: 'absolute',
    top: index === 1 ? '50%' : index === 2 ? '150px' : '0', // Adjust top position for the second image
    left: index === 1 ? '70%' : index === 2 ? '70%': '0', // Adjust left position for the second image
    width: '70%', // Adjust image size as needed
    height: 'auto',
    transform: index === 1 ? 'translate(-50%, 75%)' : 'none', // Offset the second image
    zIndex: index === 1 ? 1 : 0, // Ensure the second image is on top
    border: '2px solid #fff', // Optional: Add a border for better visibility
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add a shadow for depth
  });

  return (
    <div style={containerStyle} className={className}>
      {imageUrls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Image ${index + 1}`}
          style={imageStyle(index)}
        />
      ))}
    </div>
  );
};

export default OffsetImageGallery;