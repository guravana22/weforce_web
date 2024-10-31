"use client"

import React from 'react'
import Image from 'next/image';
import readytobuild from "../assets/img/readytobgimg.svg";

const Readytobuild = () => {
  return (
    <div className='readyto_build_section'>
      <div className='container-fluid'>
        <div className='row align-items-center'>
          {/* Left side text */}
          <div className='col-lg-5 col-md-6 text-center text-md-start mb-4 mb-md-0'>
            <h1 className='readytobuild_heading text-start'>
              Ready to build your teams <span style={{color:"#079454"}}>dream business?</span>
            </h1>
          </div>

          {/* Right side image */}
          <div className='col-lg-7 col-md-6 d-flex justify-content-end'>
            <div className="build-image-container">
              <Image 
                src={readytobuild} 
                alt='no_img' 
                style={{width: '100%', maxWidth: '600px'}} 
                className='build-image'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Readytobuild;
