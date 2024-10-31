"use client";

import React from "react";
import Image from "next/image";
import sureshprofile from "../assets/img/suresh.jpg";
import anuraghprofile from "../assets/img/anuragh.jpg";
import poojaprofile from "../assets/img/pooja.jpg";

const Clientsaystwo = () => {
  const testimonials = [
    {
      name: "Suresh Kumar",
      role: "@kumars",
      quote:
        "“WEForce provided robust security measures to protect our sensitive data.”",
      image: sureshprofile,
    },
    {
      name: "Anurag Singh",
      role: "@asingh",
      quote:
        "WEForce helped us elevate our brand with high-quality solutions.",
      image: anuraghprofile,
    },
    {
      name: "Pooja Reddy",
      role: "@jdsimcoe",
      quote:
        "WEForce's IoT development capabilities helped us create innovative connected devices. Their expertise in hardware and software integration was crucial to our project's success",
      image: poojaprofile,
    },
  ];

  return (
    <div className="">
      <div className="container-fluid client-marquee-inner-reverse pt-4">
        <div className="client-marquee-reverse">
          {/* Render testimonials twice for seamless scrolling */}
          {[...testimonials, ...testimonials].map((client, index) => (
            <div className="card client-marquee-card-reverse" key={index}>
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
                <p className="client-marquee-card-description">{client.quote}</p>
              </div>
            </div>
          ))}

          
        </div>
      </div>
    </div>
  );
};

export default Clientsaystwo;
