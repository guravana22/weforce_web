"use client";

import React from 'react';
import Image from 'next/image';
import logo from "../assets/img/logo.svg";
import facebook from "../assets/img/facebook.svg";
import twitter from "../assets/img/twitter.svg";
import instagram from "../assets/img/instagram.svg";
import linkedin from "../assets/img/linkedin.svg";
import Scrolltotop from './Scrolltotop';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer_section">
      <div className="container pt-5 pb-5">
        <div className='row'>
          <div className='col'>
            <Scrolltotop />
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <ul className="links p-0">
              <li className='mb-3'>
              <Link href="/">
                <Image src={logo} alt='Logo' className='logo' />
                </Link>
              </li>
              <li style={{ lineHeight: '25px' }}>
                P.O. Box 3625. Sheikh Khalifa Bin Saeed<br /> Street Dubai. P.O. Box 901. Abu Dhabi.
              </li>
              <li>Phone: <a href="tel:+91 8764639766">+91 8764639766</a></li>
              <li>Email: <a href="mailto:detechflow@info.com">detechflow@info.com</a></li>
              <div className="nav justify-content-start d-flex align-items-center mt-4 mb-4">
                <div className="social_links">
                  <div className="social-icons-btn">
                    <a className="icons twitter me-3" href="#/">
                      <Image src={facebook} alt='Facebook' />
                    </a>
                    <a className="icons facebook me-3" href="#/">
                      <Image src={twitter} alt='Twitter' />
                    </a>
                    <a className="icons instagram me-3" href="#/">
                      <Image src={instagram} alt='Instagram' />
                    </a>
                    <a className="icons linkedin me-3" href="#/">
                      <Image src={linkedin} alt='LinkedIn' />
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </div>

          <div className="col-md-4 col-lg-3 col-sm-12">
            <ul className="links links_link p-0">
              <li>
                <h3 className="footer_heading">Service</h3>
              </li>
              <li>CTO as a Service</li>
              <li>Project Managed Business</li>
              <li>Squad as a Service</li>
              <li>Security as a service</li>
              <li>Devops as a service</li>
              <li>Product Design as service</li>
              <li>Branding as service</li>
            </ul>
          </div>

          <div className="col-md-4 col-lg-3 col-sm-12">
            <ul className="links links_link p-0">
              <li>
                <h3 className="footer_heading">Business</h3>
              </li>
              <li>Digital Marketing Agency</li>
              <li>SEO Agency</li>
              <li>PPC Agency</li>
              <li>Content Marketing Agency</li>
              <li>Internet Marketing Agency</li>
              <li>Locations</li>
              <li>Industries We Serve</li>
            </ul>
          </div>

          <div className="col-md-4 col-lg-2 col-sm-12">
            <ul className="links links_link p-0">
              <li>
                <h3 className="footer_heading">Company</h3>
              </li>
              <li>About us</li>
              <li>
              <Link href="/contact" className="nav-link m-0 p-0">
             Contact us
              </Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_center_logo" style={{ textAlign: 'center' }}>
        <div className="copy_right_section">
          <div className="innovation_icon">
            {/* You can add an icon here if needed */}
          </div>
          <h2 className="copyright_heading">
            &copy; Copyright <span className='text-white'>WeForce</span>. All Rights Reserved
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
