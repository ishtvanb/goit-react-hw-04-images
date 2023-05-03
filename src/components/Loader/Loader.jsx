import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div
      style={{
        width: '70px',
        margin: 'auto',
        display: 'block',
      }}
    >
      <ThreeDots color="#0ead69" size={20} />
    </div>
  );
};

export default Spinner;
