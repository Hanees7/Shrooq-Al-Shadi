import React from 'react';

// import WhatsAppChatBox from '../components/WhatsAppChatBox';
// import EventsSection from '../components/Events';
// import CompanySection from '../components/TheCompany';
// // import HoNavbarme from '../components/Navbar';
// // import HoNavbarme from '../components/Navbar';
// import Home from "./Home"

import Home from '../pages/Home'
import HoNavbarme from '../components/Navbar'
import CompanySection from '../components/TheCompany'
import MarbleCollection from '../components/Collection'
import EventsSection from '../components/Events'
import Footer from '../components/Footer'
import GallerySection from '../components/Gallery'
import WhatsAppChatBox from '../components/WhatsAppChatBox'
import TrustedCertified from '../components/certified'
import VisitShowroom from '../components/showroom'
import Quartz from '../components/Quartz'



function Mainpage() {
  return (
    <>
    <HoNavbarme/>
    <WhatsAppChatBox/>
    <Home/>
    <CompanySection/>
     <MarbleCollection/>
    {/* <GallerySection/>  */}
    <Quartz/>
    {/* <TrustedCertified/> */}
    {/* <EventsSection/> */}
    <VisitShowroom/>
    <Footer/>

      {/* <HoNavbarme />
      <HoNavbarme />
      <WhatsAppChatBox />
      <EventsSection />
      <Home />
      <CompanySection /> */}
      {/* <Home/>
    
    <GallerySection/>
    <MarbleCollection/>
    <Quartz/>
    <TrustedCertified/>
   
    <VisitShowroom/>
    <Footer/> */}
    </>
  );
}

export default Mainpage;
