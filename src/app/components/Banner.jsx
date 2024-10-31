"use client";

import React, { useRef } from "react";
import Image from "next/image";
import ctoImage from "../assets/img/ctobanner.svg";
import squadImage from "../assets/img/squdbanner.svg"
import devopsImage from "../assets/img/devopsbanner.svg"
import leftArrow from "../assets/img/leftarrow.svg"
import rightArrow from "../assets/img/rightarrow.svg"
import Link from "next/link";

const cardData = [
  {
    title: "CTO as a Service",
    description: "Guiding your business to success without the need for a full-time CTO",
    image: ctoImage,
  },
  {
    title: "Squad as a Service",
    description: "Agile, expert teams ready to drive your projects forward—whenever you need them.",
    image: squadImage,
  },
  {
    title: "DevOps as a Service",
    description: "Efficiently manage development and operations with our DevOps service.",
    image: devopsImage,
  },
  {
    title: "Cyber security as a service",
    description: "Efficiently manage development and operations with our DevOps service.",
    image: ctoImage,
  },
  {
    title: "Brand and marketing as a service",
    description: "Efficiently manage development and operations with our DevOps service.",
    image: squadImage,
  },
];

const Banner = () => {
  const scrollRef = useRef(null); // Ref to the scrolling-wrapper container

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300, // Adjust this value based on the card width
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300, // Adjust this value based on the card width
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="banner_section">
      <div className="container">
        <div className="row" style={{ position: "relative"}}>
          <div className="col-md-12 col-lg-8 col-xl-8">
            <h1 className="banner_section_heading">
              <span>Smart, Cost-Effective</span>
              <span style={{ color: "#12B769" }}>
                IT Solutions<span className="text-white"> for the</span>
              </span>
              <span> Future Businesses.</span>
            </h1>
          </div>
          <div className="col-md-12 col-lg-4 col-xl-4">
            <p className="banner_section_paragraph">
              A powerful software suite that changes the way you work. Built
              for businesses of all sizes, by a company that prioritizes your
              privacy.
            </p>
            <div className="banner_buttons d-flex">
            <Link href="/contact" className="nav-link m-0 p-0"> <button type="button" className="get-in-touch-button">Get in touch</button></Link>
            </div>
          </div>
        </div>

        {/* Scrollable Cards Section */}
        <div className="row pt-5">
          <div className="col-sm-12">
            <div style={{ display: 'block' }}>
              <div className="card banner-main-card h-100" style={{ position: 'relative' }}>
                
                {/* Previous Button */}
                <button className="scroll-btn prev" onClick={scrollLeft}>
                  <Image src={leftArrow} alt="no_img" style={{width:'20px',height:'auto'}}/>
                </button>

                <div className="scrolling-wrapper" ref={scrollRef}>
                  {cardData.map((card, index) => (
                    <div className="card-block" key={index}>
                      <div className="banner-inner-card">
                        <div className="card-body text-start p-0">
                          <Image
                            src={card.image}
                            alt={card.title}
                            className="banner-inner-card-img pb-3"
                            width={500}
                            height={300}
                          />
                          <h5>{card.title}</h5>
                          <p>{card.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Next Button */}
                <button className="scroll-btn next" onClick={scrollRight}>
                <Image src={rightArrow} alt="no_img" style={{width:'20px',height:'auto'}}/>

                </button>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;
