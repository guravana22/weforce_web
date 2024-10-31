"use client";

import React, { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Clients from './components/Clients';
import Businesssolution from './components/Businesssolution';
import Solutions from './components/Solutions';
import Readytobuild from './components/Readytobuild';
import Clientsays from './components/Clientsays';
import Transformingbusiness from './components/Transformingbusiness';
import Projects from './components/Projects';
import Teammember from './components/Teammember';
import Bannercard from './components/Bannercard';

const Page = () => {
 

  return (
    <div>
    <div div className="navbar-section" style={{ position: 'relative' }}>
     <Banner />
     {/* <Bannercard */}
</div>
    <Clients />
      <Businesssolution />
      <Solutions />
     <Transformingbusiness />
      <Projects />
      {/* <Teammember /> */}
      <Readytobuild />
      <Clientsays />
    </div>
  );
};

export default Page;
