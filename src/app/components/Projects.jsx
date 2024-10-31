"use client";
import React, { useState, useEffect } from "react";  
import CardCarousel from "./CardCarousel";  

const Projects = () => {  
  const [activeTab, setActiveTab] = useState("ongoing-projects");  

  const handleTabChange = (tab) => {  
    setActiveTab(tab);  
  };  

  // Scroll to active tab when it changes
  useEffect(() => {
    const activeTabElement = document.querySelector(`[data-tab="${activeTab}"]`);
  }, [activeTab]);

  return (  
    <div className="projects_section" id="projects">  
      <div className="container">  
        <div className="row">  
          <div className="col-lg-8 mx-auto">  
            <h2 className="sub-heading text-white text-center">  
              Discover Our <span style={{ color: "#049155" }}>Projects</span>  
            </h2>  
            <p className="sub-paragraph text-center">  
              Take a look at some of our recent projects and see how we have helped other businesses elevate their brand and drive business growth.  
            </p>  
          </div>  
        </div>  
      </div>  

      <div className="container-fluid">  
        <div className="row">  
          <div className="col">  
            {/* Project Tab Navigation */}  
            <div className="project-type-tab">  
              <nav>  
                <ul className="nav nav-tabs" id="nav-tab" role="tablist">  
                  <li className="nav-item">  
                    <button  
                      className={`nav-link ${activeTab === "ongoing-projects" ? "active" : ""}`}  
                      onClick={() => handleTabChange("ongoing-projects")}  
                      type="button"  
                      data-tab="ongoing-projects" // Add data attribute for querying
                    >  
                      Fin-tech
                    </button>  
                  </li>  
                  <li className="nav-item">  
                    <button  
                      className={`nav-link ${activeTab === "completed-projects" ? "active" : ""}`}  
                      onClick={() => handleTabChange("completed-projects")}  
                      type="button"  
                      data-tab="completed-projects" // Add data attribute for querying
                    >  
                      ERP
                    </button>  
                  </li>  
                  <li className="nav-item">  
                    <button  
                      className={`nav-link ${activeTab === "upcoming-projects" ? "active" : ""}`}  
                      onClick={() => handleTabChange("upcoming-projects")}  
                      type="button"  
                      data-tab="upcoming-projects" // Add data attribute for querying
                    >  
                      E-commerce
                    </button>  
                  </li>  
                  <li className="nav-item">  
                    <button  
                      className={`nav-link ${activeTab === "development-projects" ? "active" : ""}`}  
                      onClick={() => handleTabChange("development-projects")}  
                      type="button"  
                      data-tab="development-projects" // Add data attribute for querying
                    >  
                    Industrial Automation
                    </button>  
                  </li>  
                </ul>  
              </nav>  
              <div className="tab-content w-100 projects-tab-content mb-2">  
                {/* Render different content for each tab */}
                <div className={`tab-pane fade ${activeTab === "ongoing-projects" ? "show active" : ""}`} style={{ minHeight: "300px" }}>  
                  <CardCarousel type="ongoing" />  
                </div>  
                <div className={`tab-pane fade ${activeTab === "completed-projects" ? "show active" : ""}`} style={{ minHeight: "300px" }}>  
                  <CardCarousel type="completed" />  
                </div>  
                <div className={`tab-pane fade ${activeTab === "upcoming-projects" ? "show active" : ""}`} style={{ minHeight: "300px" }}>  
                  <CardCarousel type="upcoming" />  
                </div>  
                <div className={`tab-pane fade ${activeTab === "development-projects" ? "show active" : ""}`} style={{ minHeight: "300px" }}>  
                  <CardCarousel type="development" />  
                </div>  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Projects;  
