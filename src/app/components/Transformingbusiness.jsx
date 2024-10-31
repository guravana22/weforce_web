"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import cto from "../assets/img/cto.svg";
import squad from "../assets/img/squad.svg";
import devops from "../assets/img/devops.svg";
import Serviceofferingres from "./Serviceofferingres";
import Link from "next/link";

// Custom hook to check if the screen is mobile size
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = matchMedia(query);
    const handleChange = (event) => setMatches(event.matches);

    // Initial check
    setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener("change", handleChange);
    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
};

const Transformingbusiness = () => {
  const [activeTab, setActiveTab] = useState("home");
  const isMobile = useMediaQuery("(max-width: 768px)");

  const tabContent = [
    {
      id: "home",
      title: "CTO as a service",
      description:
        "Gain strategic technology leadership without the full-time commitment, guiding your business through innovation and growth.",
      image: cto,
    },
    {
      id: "profile",
      title: "Squad as a service",
      description:
        "Gain strategic technology leadership without the full-time commitment, guiding your business through innovation and growth.",
      image: squad,
    },
    {
      id: "messages",
      title: "DevOps as a service",
      description:
        "Gain strategic technology leadership without the full-time commitment, guiding your business through innovation and growth.",
      image: devops,
    },
    {
      id: "consulting",
      title: "Cyber security as a service",
      description:
        "Get expert advice tailored to your business needs for effective decision-making and strategy development.",
      image: cto,
    },
    {
      id: "support",
      title: "Brand and marketing as a service",
      description:
        "Receive ongoing support for your technology needs to ensure smooth operations and quick issue resolution.",
      image: cto,
    },
  ];

  return (
    <div className="transforming-business-section" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <h2 className="sub-heading">
              Explore Our{" "}
              <span style={{ color: "#049155" }}>Comprehensive </span>
              Service Offerings
            </h2>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-10">
            <p className="sub-paragraph">
              Discover our customized technology solutions, ranging from
              digital transformation to AI innovations. Select a service to
              explore how WEForce can elevate your business operations.
            </p>
            <Link href="/contact" className="nav-link m-0 p-0">
            <button type="button" className="get-in-touch-button">
              Get in touch
            </button>
            </Link>
          </div>
        </div>

        {!isMobile && (
          <div className="row mt-4 mb-5 align-items-stretch">
            <div className="col-lg-6 col-md-6">
              <div
                className="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <div className="offering-tabs-scroll div">
                  {tabContent.map((tab) => (
                    <button
                      key={tab.id}
                      className={`nav-link transformaing-business-nav-link ${
                        activeTab === tab.id ? "active" : ""
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                      type="button"
                      role="tab"
                      aria-controls={`v-pills-${tab.id}`}
                      aria-selected={activeTab === tab.id}
                    >
                      <div className="d-flex align-items-start">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="my-svg-class me-3"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.5991 24.3281V15.9835H0.164062L11.6443 0.328125V8.67841H22.0793L10.5991 24.3281Z" />
                        </svg>
                        <div>
                          <h5 className="text-start">{tab.title}</h5>
                          {activeTab === tab.id && (
                            <p className="text-start custom-paragraph-two">
                              {tab.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 d-flex align-items-center">
              <div className="tab-content flex-grow-1" id="v-pills-tabContent">
                {tabContent.map((tab) => (
                  <div
                    key={tab.id}
                    className={`tab-pane fade ${
                      activeTab === tab.id ? "show active" : ""
                    }`}
                    id={`v-pills-${tab.id}`}
                    role="tabpanel"
                    aria-labelledby={`v-pills-${tab.id}-tab`}
                    tabIndex={0}
                  >
                    <Image
                      src={tab.image} // Use each tab's image dynamically
                      alt="Business Image"
                      style={{
                        width: '100%',
                        background: '#0A2319',
                        borderRadius: '12px',
                        padding: '25px 0px',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {isMobile && <Serviceofferingres />}
      </div>
    </div>
  );
};

export default Transformingbusiness;
