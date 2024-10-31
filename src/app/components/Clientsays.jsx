"use client";

import React from "react";
import Image from "next/image";
import shreeprofile from "../assets/img/shreeprofile.svg";
import rohitprofile from "../assets/img/rohitprofile.jpg";
import maniprofile from "../assets/img/maniprofile.jpg";
import Clientsaystwo from "./Clientsaystwo";

const Clientsays = () => {
  const testimonials = [
    {
      name: "Rohit Rana",
      role: "@ranarohit",
      quote:
        "WEForces decentralized team and global network of experts enabled seamless collaboration across different time zones. Their ability to work effectively with remote teams was a major advantage.",
      image: rohitprofile,
    },
    {
      name: "Shree Sangvikar",
      role: "@sangvikarshree",
      quote:
        "WEForce was instrumental in our startup's growth, providing expert guidance and delivering high-quality solutions.",
      image: shreeprofile,
    },
    {
      name: "Mani Adhikari",
      role: "@maniadhikari",
      quote:
        "WEForce modernized our IT infrastructure, improving efficiency and productivity.",
      image: maniprofile,
    },
  ];

  return (
    <div className="clientsays_section" id="clients" >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="sub-heading text-center text-white">
              What Our <span style={{ color: "#049155" }}>Clients</span> Say
              About Us
            </h2>
            <p className="sub-paragraph text-center">
              Take a look at some of our recent projects and see how we have
              helped other businesses elevate their brand and drive business
              growth.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid client-marquee-inner pt-5">
        <div className="client-marquee">
          {/* Render testimonials twice for seamless scrolling */}
          {[...testimonials, ...testimonials].map((client, index) => (
            <div className="card client-marquee-card" key={index}>
              <div className="media d-flex align-items-center">
                <Image
                  src={client.image}
                  alt={`${client.name} profile image`}
                  className="me-3 profile-pic"
                />
                <div className="media-body mt-2">
                  <h6 className="client-marquee-card-name">{client.name}</h6>
                  <p className="client-marquee-card-role">{client.role}</p>
                </div>
              </div>
              <div className="card-body p-0 pt-3 text-start">
                <p className="client-marquee-card-description">
                <q> {client.quote} </q></p>
              </div>
            </div>
          ))}

          
        </div>
      </div>
      <Clientsaystwo/>
    </div>
  );
};

export default Clientsays;
