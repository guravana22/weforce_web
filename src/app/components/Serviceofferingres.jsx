import React from 'react';
import Image from "next/image";
import cto from "../assets/img/cto.svg";
import squad from "../assets/img/squad.svg";
import devops from "../assets/img/devops.svg";

const services = [
  {
    id: "headingOne",
    title: "CTO as a service",
    description: "Gain strategic technology leadership without the full-time commitment, guiding your business through innovation and growth.",
    image: cto
  },
  {
    id: "headingTwo",
    title: "Squad as a service",
    description: "Gain strategic technology leadership without the full-time commitment, guiding your business through innovation and growth.",
    image: squad
  },
  {
    id: "headingThree",
    title: "DevOps as a service",
    description: "Gain strategic technology leadership without the full-time commitment, guiding your business through innovation and growth.",
    image: devops
  },
  {
    id: "headingFour",
    title: "Cyber security as a service",
    description: "Gain strategic technology leadership without the full-time commitment, guiding your business through innovation and growth.",
    image: cto
  },
  {
    id: "headingFive",
    title: "Brand and marketing as a service",
    description: "Gain strategic technology leadership without the full-time commitment, guiding your business through innovation and growth.",
    image: squad
  },
];

const Serviceofferingres = () => {
  return (
    <div className="accordion" id="accordionExample">
      {services.map((service, index) => (
        <div className="accordion-item" key={service.id}>
          <h2 className="accordion-header" id={service.id}>
            <button
              className={`accordion-button ${index === 0 ? '' : 'collapsed'} d-flex flex-column align-items-start`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index + 1}`}
              aria-expanded={index === 0 ? 'true' : 'false'}
              aria-controls={`collapse${index + 1}`}
            >
              <div className="media d-flex justify-content-start align-items-start">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="my-svg-class me-3"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.3917 14.5834L12.0407 18.5072L10.4108 19.1667L8.76673 15.2429L3.33398 17.4709V0L15.834 12.3554L10.3917 14.5834Z" />
                </svg>
                <div className="media-body">
                  <h5>{service.title}</h5>
                  <p className='custom-paragraph'>{service.description}</p>
                </div>
              </div>
            </button>
          </h2>
          <div
            id={`collapse${index + 1}`}
            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
            aria-labelledby={service.id}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <Image 
                src={service.image} 
                alt="Service Image" 
                style={{
                  width: '100%', 
                  height: '254px', 
                  background: '#0A2319',
                  borderRadius: '12px',
                  padding: '25px 0px',
                }} 
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Serviceofferingres;
