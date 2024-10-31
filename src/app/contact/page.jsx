"use client";

import React, { useState } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js for image optimization.
import success from "../assets/img/sucess.svg";
import phone from "../assets/img/phone.webp";
import mail from "../assets/img/mail.webp";
import location from "../assets/img/location.webp";
import Link from 'next/link';
import contactImage from '../assets/img/contactus.svg'; // Replace with your actual image path.

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);

    const formBody = new FormData();
    for (let key in formData) {
      formBody.append(key, formData[key]);
    }

    fetch(
      "https://script.google.com/macros/s/AKfycbw_TzLfAQ9_wRfHocquwyHHvrTKl-aHwlbAe_ONTIuNF4V8Gjq51wswxX3z-UpTGYAZAQ/exec",
      {
        method: "POST",
        body: formBody,
      }
    )
      .then((response) => response.json())
      .then(() => {
        // Clear form after successful submission
        setFormData({
          name: '',
          lastname: '',
          email: '',
          message: ''
        });

        // Show success message for 2 seconds and then hide
        setTimeout(() => {
          setShowSuccess(false);
        }, 300);
      })
      .catch(() => {
        // Handle error (optional)
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="about_section" style={{ position: 'relative' }}>
        <div className="container">
          <div className="row">
            <div className="text-center text-white" id="heroText">
              <h1>Contact Us</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-center">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact Us
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="contactus-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="sub-heading text-center">
                <span style={{ color: "#049155" }}>Infinite Solutions</span> 360° Benefits
              </h2>
              <p className="sub-paragraph text-center">
                Here are the ways you can get in touch with us:
              </p>
            </div>
            <div className="col-lg-10 mx-auto text-center pt-5 pb-5">
              <div className="row">
                <div className="col-md-4">
                  <div className="card border-0">
                    <div className="card-body">
                      <Image alt="no_img" className="me-2 contact-icons" src={phone} />
                      <h5 className="contact-information"><a href="tel:+91 8764639766">+91 8764639766</a></h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card border-0">
                    <div className="card-body">
                      <Image alt="no_img" className="me-2 contact-icons" src={mail} />
                      <h5 className="contact-information"><a href="mailto:detechflow@info.com">detechflow@info.com</a></h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card border-0">
                    <div className="card-body">
                      <Image alt="no_img" className="me-2 contact-icons" src={location} />
                      <h5 className="contact-information">The Meydan Hotel, Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-10 mx-auto">
            <div className="container">
              <div className="row image-reverse">
                <div className="col-lg-6">
                  <div className="contact-form-wrapper">
                    {showSuccess && (
                      <div className="alert alert-success d-flex justify-content-start align-items-center" role="alert">
                        <Image alt="no_img" className="me-2" src={success} style={{ height: 'auto', width: '22px' }} />
                        <p className="p-0 m-0"> Thank you! Your message has been sent successfully.</p>
                      </div>
                    )}

                    <form className="row g-3" onSubmit={handleSubmit} name="contactForm">
                      <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="firstName" 
                          placeholder="Your First Name" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="lastName" 
                          placeholder="Your Last Name" 
                          name="lastname"
                          value={formData.lastname}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="emailAddress" className="form-label">Email Address</label>
                        <input 
                          type="email" 
                          className="form-control" 
                          id="emailAddress" 
                          placeholder="jhon@company.com" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea 
                          className="form-control" 
                          id="message" 
                          rows="5" 
                          placeholder="Your message" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required 
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="get-in-touch-button">Send Message</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-end align-items-end">
                  <div className="contactus-image-wrapper bannerimage">
                    <Image src={contactImage} alt="Contact Us" className="contactus-image bounce_img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
