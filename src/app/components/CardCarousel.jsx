import React from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";  
import projectone from "../assets/img/project1.png";  
import projecttwo from "../assets/img/project2.png";  

// Options for Owl Carousel
const options = {
  nav: true,
  margin: 25,
  loop: false,
  dots: false,
  touchDrag: true,
  autoplay: false, 
  responsive: {
    0: {
      items: 1,
      stagePadding: 25,
    },
    600: {
      items: 1,
      stagePadding: 20, 
    },
    1000: {
      items: 2,
      stagePadding: 60, 
    },
    1200: {
      items: 2,
      stagePadding: 60, 
    },
  },
};
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Slider = () => {
  return (
    <div className="banner_section_footer pt-3" style={{ position: "relative", background: "unset" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col p-0">
            <OwlCarousel 
              className="owl-theme screenshot_slider" 
              {...options}
            >
              {/* First Item */}
              <div className="item">
                <div className="card h-100 project-card">
                  <div className="image-block">
                    <Image src={projecttwo} className="card-img-top" alt="Project 2" />
                  </div>
                  <div className="card-body p-0">
                    <h5 className="sub-heading" style={{ fontSize: '30px' }}>Title</h5>
                    <p className="sub-paragraph">We are designed to help your business thrive in the online world.</p>
                  </div>
                </div>
              </div>

              {/* Second Item */}
              <div className="item">
                <div className="card h-100 project-card">
                  <div className="image-block">
                    <Image src={projectone} className="card-img-top" alt="Project 1" />
                  </div>
                  <div className="card-body p-0">
                    <h5 className="sub-heading" style={{ fontSize: '30px' }}>Title</h5>
                    <p className="sub-paragraph">We are designed to help your business thrive in the online world.</p>
                  </div>
                </div>
              </div>

              {/* Third Item */}
              <div className="item">
                <div className="card h-100 project-card">
                  <div className="image-block">
                    <Image src={projectone} className="card-img-top" alt="Project 1" />
                  </div>
                  <div className="card-body p-0">
                    <h5 className="sub-heading" style={{ fontSize: '30px' }}>Title</h5>
                    <p className="sub-paragraph">We are designed to help your business thrive in the online world.</p>
                  </div>
                </div>
              </div>

              {/* Fourth Item */}
              <div className="item">
                <div className="card h-100 project-card">
                  <div className="image-block">
                    <Image src={projecttwo} className="card-img-top" alt="Project 2" />
                  </div>
                  <div className="card-body p-0">
                    <h5 className="sub-heading" style={{ fontSize: '30px' }}>Title</h5>
                    <p className="sub-paragraph">We are designed to help your business thrive in the online world.</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
