"use client";

import React from 'react';
import Image from 'next/image';
import solution from "../assets/img/solution.svg";
import logo from '../assets/img/logo.svg';
import solutionresponseimg from "../assets/img/solutionres.svg"
import Link from 'next/link';

const Solutions = () => {
  return (
    <div>
      <div className='solution-section'>
        <div className='container'>
          <div className='row align-items-center image-reverse'> {/* Center items vertically */}
            <div className='col-lg-7 col-md-6'>
  <Image 
    src={solution} 
    alt="Solution illustration" 
    style={{ width: '100%' }} 
    className='d-none d-md-block' 
    // Show this image on small screens only
  />
  <Image 
    src={solutionresponseimg} 
    alt="Solution illustration" 
    style={{ width: '100%' }} 
    className='d-block d-md-none'// Show this image on medium and larger screens only
  />


            </div>
            <div className='col-lg-5 col-md-6 text-start'> {/* Center content horizontally */}
              <Image src={logo} alt="Company logo" className='solution_logo'/>
              <h2 className='solution_sub_heading mt-3 mb-3'>
                Tech <span style={{color:'#32C27D'}}>Solutions</span> for Various Industries
              </h2>
              <p className='solution_sub_paragraph pt-2 pb-2'>
              WEForce delivers innovative digital transformation, custom software, cloud integration, and AI solutions to empower 
your business.
              </p>
              <div className='pb-5'>
              <Link href="/contact" className="nav-link p-0 m-0"><input type="button" value="Contact Us" className="login_button mb"></input></Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
