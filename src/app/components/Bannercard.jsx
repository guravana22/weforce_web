import React from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";  
import bannerInnerImage from "../assets/img/banner_card_img.png";

// Options for Owl Carousel
const options = {
  stagePadding: 60,
  nav: true,
  margin: 10,
  loop: true,
  dots: false,
//   navText: ['<span class="owl-nav-prev">‹</span>', '<span class="owl-nav-next">›</span>'],
  touchDrag: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
       nav: true,
    },
  },
};

// Dynamic import for OwlCarousel to avoid SSR issues in Next.js
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const cardData = [
  {
    title: "CTO as a Service",
    description: "Guiding your business to success without the need for a full-time CTO",
    image: bannerInnerImage,
  },
  {
    title: "Squad as a Service",
    description: "Agile, expert teams ready to drive your projects forward—whenever you need them.",
    image: bannerInnerImage,
  },
  {
    title: "DevOps as a Service",
    description: "Efficiently manage development and operations with our DevOps service.",
    image: bannerInnerImage,
  },
];

const Bannercard = () => {
  return (
    <div className="banner_section_footer pt-4" style={{background: "unset" }}>
      <div className="container-fluid">
        <div className="row row-cols-1 g-4">
          <div className="col p-0">
          <div className="card banner-main-card h-100" style={{position:'relative'}}>
            <OwlCarousel className="owl-theme screenshot_slider" {...options}>
              {cardData.map((card, index) => (
                <div className="item" key={index}>
                          <div className="card-wrapper">
                            <div className="banner-inner-card">
                              <div className="card-body text-start">
                                <Image
                                  src={card.image}
                                  alt={card.title}
                                  className="banner-inner-card-img pb-5"
                                />
                                <h5>{card.title}</h5>
                                <p>{card.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
              ))}
            </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannercard;
