import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-content">
        <div className="loader-logo">SG</div>
        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>
        <p className="loader-text">Loading Portfolio...</p>
      </div>
    </div>
  );
};

export default Loader;
