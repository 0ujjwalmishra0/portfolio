import React from 'react';
import cv from '../../assets/resume_meenal.pdf';

import './button.scss';

const DownloadButton = () => {
    return (
        <div>
        <a href= {cv} download className='btn'>Download CV</a>
      </div>
    );
  };
  
  
  export default DownloadButton;