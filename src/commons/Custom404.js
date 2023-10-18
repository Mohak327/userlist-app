// components/Custom404.js
import React from 'react';

const Custom404 = () => {
  return (
    <div style={{height: 'calc(100vh - 60px)'}} className="flex justify-center text-center">
      <h1 style={{ fontSize: '32px' }} className='mb-2 text-2xl font-semibold'>404</h1>
      <div className="flex items-center justify-center mb-4">
          <h1 style={{ fontSize: '32px', fontWeight: 200 }} className='mb-2 text-2xl'>&nbsp;|&nbsp;</h1>
      </div>
      <div className="flex items-center justify-center mb-4">
        <p>This page could not be found.</p>
      </div>
    </div>
  );
};

export default Custom404;
