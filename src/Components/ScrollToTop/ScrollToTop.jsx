import React from 'react';

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <img
        src="./logo69.png"
        alt="Scroll to Top"
        onClick={scrollToTop}
      />
    </div>
  );
};

export default ScrollToTop;
