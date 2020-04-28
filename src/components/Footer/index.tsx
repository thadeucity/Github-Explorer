import React from 'react';

import { FiGlobe, FiChevronUp } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { FooterBar } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterBar>
      <div className="dropdown">
        <div className="dropbtn">
          <FiGlobe />
          Lang
          <FiChevronUp />
        </div>
        <div className="dropdown-content">
          <a href="/?lang=en">EN: English</a>
          <a href="/?lang=jp">JP: Japanese</a>
          <a href="/?lang=ge">GE: German</a>
          <a href="/?lang=pt">PT: Portuguese</a>
        </div>
      </div>
    </FooterBar>
  );
};

export default Footer;
