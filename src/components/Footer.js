// src/components/Footer.js
import React from 'react';

// footer
const Footer = () => {
  return (
    <footer className="bg-light text-center py-3">
      <div className="container">
        &copy; {new Date().getFullYear()} Institute Of Software Technologies. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;