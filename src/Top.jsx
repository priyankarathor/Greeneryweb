import React, { useState, useEffect } from 'react';

const Top = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once after mount

  const handleScroll = () => {
    // Calculate scroll position
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    // Set button visibility based on scroll position
    if (scrollTop > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    // Scroll to top when button is clicked
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className="scroll-btn"
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }}
      id="myBtn"
    >
      <i class="bi bi-arrow-up-circle-fill" style={{fontSize:"20px"}}></i>
    </button>
  );
};

export default Top;
