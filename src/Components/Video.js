import React from 'react';


const VideoBackground = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden text-black">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="src/Assets/Images/vid1.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
    </div>
  );
};

export default VideoBackground;