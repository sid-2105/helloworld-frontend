import React from 'react';
import './Download.css'

const DocumentDownloader = () => {
  const downloadDocument = () => {
    const documentUrl = './brochure.pdf';
    const anchor = document.createElement('a');
    anchor.href = documentUrl;
    anchor.download = 'brochure.pdf';
    anchor.click();
  };

  return (
    <div>
      <span className='downbtn' onClick={downloadDocument}>Brochure</span>
    </div>
  );
};

export default DocumentDownloader;
