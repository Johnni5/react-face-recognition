import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './logo.css';

const Logo = () => {
  return (
    <div className="ma4 mt0" style={{ display: 'flex' }}>
      <Tilt className="Tilt br2 shadow-2">
        <div
          className="Tilt-inner pa3"
          style={{
            width: '150px',
            height: '150px',
          }}
        >
          <img
            src={brain}
            alt="logo"
            style={{
              paddingTop: '5px',
              width: '100px',
              height: '100px',
            }}
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
