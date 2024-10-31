"use client";

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../assets/img/logo.svg';
import toggle from "../assets/img/toggle.svg";
import Link from 'next/link';

const Header = () => {
    const router = useRouter();
    const [navbarColor, setNavbarColor] = useState('bg-whites');
    const [isCollapsed, setIsCollapsed] = useState(true); // State for collapse

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setNavbarColor(offset > 20 ? 'bg-dark' : 'bg-whites');
        };

        handleScroll(); // Check scroll position on mount
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLinkClick = (targetId, e) => {
        e.preventDefault(); // Prevent default link behavior

        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = 80; // This is the desired gap
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            });

            // Remove the hash from the URL
            window.history.replaceState(null, '', window.location.pathname);
        } else {
            // Navigate to the homepage with a hash for the target section
            router.push(`/#${targetId}`);

            // Wait for the page to load and then scroll to the section
            setTimeout(() => {
                const newTargetElement = document.getElementById(targetId);
                if (newTargetElement) {
                    const offset = 80;
                    const targetPosition = newTargetElement.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth",
                    });

                    window.history.replaceState(null, '', window.location.pathname);
                }
            }, 100); // Adjust the timeout based on page load speed
        }

        // Close the navbar collapse when a link is clicked
        setIsCollapsed(true);
    };

    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleGetInTouchClick = () => {
        // Close the navbar collapse when the button is clicked
        setIsCollapsed(true);
        // Navigate to the contact page
        router.push('/contact');
    };

    return (
        <div>
            <div className="navbar-section" id="home">
                <nav className={`navbar navbar-expand-lg pt-4 pb-4 ${navbarColor} navbar-light fixed-top nav-active`}>
                    <div className="container">
                        <Link className="navbar-brand" href="/">
                            <Image src={logo} alt="logo" className="logo" />
                        </Link>
                        <button
                            className="navbar-toggler p-0 m-0 border-none"
                            type="button"
                            onClick={toggleNavbar} // Toggle collapse on button click
                            aria-controls="navbarNav"
                            aria-expanded={!isCollapsed}
                            aria-label="Toggle navigation"
                        >
                            <Image src={toggle} alt="toggle icon" />
                        </button>
                        <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNav">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item dropdown">
                                    <Link
                                        className="nav-link dropdown-toggle d-flex"
                                        href="#services"
                                        onClick={(e) => handleLinkClick("services", e)}
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        href="#projects"
                                        className="nav-link"
                                        onClick={(e) => handleLinkClick("projects", e)}
                                    >
                                        Experience
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        href="#aboutus"
                                        onClick={(e) => handleLinkClick("aboutus", e)}
                                    >
                                        Teams
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        href="#clients"
                                        onClick={(e) => handleLinkClick("clients", e)}
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                       href="#projects"
                                        className="nav-link"
                                        onClick={(e) => handleLinkClick("projects", e)}
                                    >
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                            <Link href="/contact" className='nav-link p-0 m-0'>
                            <button onClick={handleGetInTouchClick} className="nav-link m-0 p-0">
                                <input
                                    type="button"
                                    value="Get in touch"
                                    className="login_button"
                                />
                            </button>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
