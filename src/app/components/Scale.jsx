"use client"

import React from 'react'
import Image from 'next/image';
import gdpr from "../assets/img/gdpr.svg";
import ccpa from "../assets/img/ccpa.svg"
import iso9001 from "../assets/img/iso9001.svg"
import iso2071 from "../assets/img/iso2071.svg"

const Scale = () => {
  return (
    <div>
      <div className=''>
       <div className='container scale-section mt-5 mb-5'>
       <div className='row'>
            <div className='col-md-6 ps-5'>
                <h1>Scale with security</h1>
                <p className='w-75 sub-paragraph'>WeForce is audited and certified by industry-
leading third-party standards</p>
            </div>
            <div className='col-md-6'>
               <div className='row d-flex justify-content-center align-items-center'>
                <div className='col'>
                    <Image src={gdpr} style={{width:'100%'}} alt='no_img'/>
                </div>
                <div className='col'>
                    <Image src={ccpa} style={{width:'100%'}} alt='no_img'/>
                </div><div className='col'>
                    <Image src={iso9001} style={{width:'100%'}} alt='no_img'/>
                </div><div className='col'>
                    <Image src={iso2071} style={{width:'100%'}} alt='no_img'/>
                </div>
               </div>
            </div>
        </div>
        
       </div>
      </div>
    </div>
  )
}

export default Scale
