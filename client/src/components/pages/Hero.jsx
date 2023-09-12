
import React from 'react';

export const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${require('../../images/rally.jpg')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80vh',
    width: '100vw',
  };

  const headingStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '6rem',
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    textAlign: 'left',
    paddingTop: '10vh',
    paddingLeft: '25vh',
  };

  const heading1Style = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '4rem',
    fontWeight: 'bold',
    color: 'orange',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    textAlign: 'left',
    paddingLeft: '30vh',
  };

  return (
    <div style={heroStyle}>
      <div>
        <h1 style={headingStyle}> Meet<span style={{color: 'orange',fontSize: '3rem'}}>wise</span></h1>
        <h2 style={heading1Style}>𝓜𝓪𝓴𝓲𝓷𝓰 𝓜𝓮𝓶𝓸𝓻𝓲𝓮𝓼, 𝓞𝓷𝓮 𝓔𝓿𝓮𝓷𝓽 𝓐𝓽 𝓐 𝓣𝓲𝓶𝓮</h2>
      </div>
    </div>
  );
};

