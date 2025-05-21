'use client'

// import Link from "next/link";
// import React, { useState } from "react";
import React from 'react';
import NavItem from "./navItem"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
//Declare and initialise an array of Navigation Item properties. 
const NAV_LIST = [
    // { imgSrc: "/images/dac_icon.png", href: "/" }, // Adjust the path to your actual image location
    { 
      text: "Digital Arts Computing", 
      href: "/",
      className: "nav-text-2025"  // Add special class name
    },
    { 
      icon: faInstagram, 
      href: "https://www.instagram.com/digital_arts_computing/?hl=en", 
      newTab: true 
    }
    // { text: "Floorplan", href: "/floorplan" }
    // { text: "Floorplan", href: "/images/floorplan.png" }
    // { text: "FogRot", href: "/fogrot" },
    // { text: "Contact Us", href: "mailto:computing@gold.ac.uk" },
];

const NavBarHome = ({ currentSlide }) => {
  // Check if it's the 2025 slide
  const is2025Slide = currentSlide === 0;  // Assume the 2025 slide is the first one

  return (
    <>
      <header className="sticky-navbar">
        {NAV_LIST.map((item, index) => (
          <NavItem key={index} href={item.href} active={item.active}>
            {item.imgSrc ? (
              <img src={item.imgSrc} alt="Home" className="nav-icon" />
            ) : item.icon ? (
              <FontAwesomeIcon icon={item.icon} style={{ color: 'white' }} className="nav-icon" />
            ) : (
              <span className={is2025Slide ? "nav-text-2025" : ""}>{item.text}</span>
            )}
          </NavItem>
        ))}
      </header>
      {is2025Slide && (
        <div className="exhibition-info">
          <p className="date">22nd - 25th May</p>
          <p className="opening">Opening Thur 22nd - 6pm to 10pm</p>
          <p className="hours">23rd - 25th - From 11am</p>
          <p className="duration">26 hr</p>
          <p className="location">The Ugly Duck, Bermondsey, SE1 3PL</p>
        </div>
      )}
    </>
  );
};

export default NavBarHome;