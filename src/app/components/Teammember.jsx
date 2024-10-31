"use client";

import React from 'react';
import Image from 'next/image';
import teammemberone from "../assets/img/teammember-1.jpg";
import teammembertwo from "../assets/img/teammember-2.jpg";
import teammemberthree from "../assets/img/teammember-3.jpg";

const Teammember = () => {
  return (
    <div className='teammember-section'>
      <div className='container'>
        <div className="row">
          <div className="col-lg-7">
            <span className='team-member-title'>Team Member</span>
            <h2 className="sub-heading">
           <span style={{color:'#079454'}}> Dynamic team</span> to solve all
your problems.
            </h2>
            <p className="sub-paragraph">
            We love what we do and we do it with passion. We value the
experimentation of the message and smart incentives.
            </p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 pt-3">
          {/* Card 1 */}
          <div className="col mb-5">
            <div className="card h-100">
              <Image src={teammemberone} alt="Team Member 1" style={{width:'100%', height:'440px', objectFit:'cover',borderRadius:'8px'}}/>
              <div className="card-body text-center teammember-card-details">
                <h5>Michal Jhon</h5>
                <p className='teammember-role'>CEO & Founder</p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col mb-5">
            <div className="card h-100">
              <Image src={teammembertwo} alt="Team Member 2" style={{width:'100%', height:'440px', objectFit:'cover',borderRadius:'8px'}}/>
              <div className="card-body text-center teammember-card-details">
                <h5>Emili Watson</h5>
                <p className='teammember-role'>CFO</p>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col mb-5">
            <div className="card h-100">
              <Image src={teammemberthree} alt="Team Member 3" style={{width:'100%', height:'440px', objectFit:'cover',borderRadius:'8px'}}/>
              <div className="card-body text-center teammember-card-details border-none">
                <h5>Ronni Thomas</h5>
                <p className='teammember-role'>CTO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teammember;
