"use client";

import React from 'react';
import Image from 'next/image';
import productbased from "../assets/img/productbased.svg";
import team from "../assets/img/team.svg";
import skilled from "../assets/img/skilled.svg";

// Card data
const cardData = [
  {
    title: "Product-Based Approach",
    description: "Tailored solutions that tackle your specific business challenges.",
    image: productbased,
  },
  {
    title: "Decentralised team",
    description: "Global experts delivering agile and responsive solutions.",
    image: team,
  },
  {
    title: "Skilled professionals",
    description: "Experienced specialists providing deep industry insights.",
    image: skilled,
  },
];

const Businesssolution = () => {
  return (
    <div>
      <div className='business-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-9 col-lg-8 col-md-12'>
              <h2 className='sub-heading'>
              A <span style={{ color: '#049155' }}>Unique</span>  Perspective on Innovation
in a Changing Landscape
              </h2>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <p className='sub-paragraph'>
              WEForce acts as a proactive partner, adept at navigating the complexities of today’s business landscape. With an innovative mindset, challenges are transformed into opportunities for growth and success. Discover what sets WEForce apart:
              </p>
            </div>
          </div>

          <div className="row mt-4 mb-5 row-cols-1 row-cols-md-3">
            {cardData.map((card, index) => (
              <div className="col-lg-4 col-md-12 col-sm-12 container-fluid p-2" key={index}>
                <div className="card mb-3 h-100 business-inner-card">
                  <div className="card-body text-start">
                    <h5 className="card-title mb-3 mt-1">
                      <Image src={card.image} className='business-inner-card-img' alt='no_img'/>
                    </h5>
                    <h5>{card.title}</h5>
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Businesssolution;
