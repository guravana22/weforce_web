"use client"
import React, { useEffect, useState } from 'react';

const Scrolltotop = () => {
  const [visible, setVisible] = useState(false);

  // Function to toggle the visibility of the button
  const handleScroll = () => {
    if (window.scrollY > 300) { // Show button when scrolled down 300px
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener on component unmount
    };
  }, []);

  return (
    visible && (
      <button className="scroll-to-top" onClick={scrollToTop}>
       <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37.5 35.2852L25 22.7852L12.5 35.2852L7.5 32.7852L25 15.2852L42.5 32.7852L37.5 35.2852Z" fill="#049155"/>
</svg>

      </button>
    )
  );
};

export default Scrolltotop;
