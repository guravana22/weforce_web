"use client";
import React from 'react';
import Image from 'next/image';
import clientInnerImg from "../assets/img/client-inner.png";
import acmcrop from "../assets/img/acmcrop.svg";
import quantum from "../assets/img/quantum.svg";
import ecovally from "../assets/img/ecovally.svg";
import celestial from "../assets/img/celestial.svg";
import pluse from "../assets/img/pulse.svg";
import apex from "../assets/img/apex.svg";

// Create an object to represent the client logos
const clientLogos = [
  { src: acmcrop, alt: "ACM Crop" },
  { src: quantum, alt: "Quantum" },
  { src: ecovally, alt: "Eco Vally" },
  { src: celestial, alt: "Celestial" },
  { src: pluse, alt: "Pulse" },
  { src: apex, alt: "Apex" },
];

// Create the Clients component as a functional component
const Clients = () => {
  return (
    <div className='client_section' id='aboutus'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className="marquee">
              <div className="marquee-content">
                {clientLogos.map((logo, index) => (
                  <div className="marquee-item" key={index}>
                    <Image src={logo.src} alt={logo.alt} style={{ width: '100%', objectFit: 'contain' }} />
                  </div>
                ))}
                {/* Repeat logos for marquee effect */}
                {clientLogos.map((logo, index) => (
                  <div className="marquee-item" key={index + clientLogos.length}>
                    <Image src={logo.src} alt={logo.alt} style={{ width: '100%', objectFit: 'contain' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='client-inner-section'>
          <div className='row image-reverse'>
            <div className='col-md-12 col-lg-6'>
              <Image src={clientInnerImg} alt="Client Inner" style={{ width: '100%', objectFit: 'contain' }} />
            </div>
            <div className='col-md-12 m-auto col-lg-6'>
              <h2 className='sub-heading'>Solving Business Challenges with <span style={{ color: '#049155' }}>Scalable Solutions</span></h2>
              <p className='sub-paragraph'>
              We don’t just offer services—we solve problems. Using AI-powered tools, transparent practices, and cutting-edge technology, we help businesses turn complex challenges into opportunities for growth, efficiency, and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
