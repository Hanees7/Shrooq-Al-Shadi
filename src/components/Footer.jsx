// import React, { useEffect } from "react";
// import AOS from "aos";
// import logo from "./mgw.png";

// const Footer = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <footer className="bg-gray-800 text-white py-6">
//       <div className="container mx-auto text-center px-4">
//         <img
//           src={logo}
//           alt="Granite Marble World"
//           className="mx-auto mb-4 h-16"
//         />
//         <p className="mb-2">
//           Sheetla Mata Mandir Rd, Gurugram-122022, Haryana, INDIA
//         </p>
//         <p className="mb-2">Mob: +91-96439-20204, +91-63627-92657, +91-94146-43452</p>
//         <p className="mb-2">
//           Email:{" "}
//           <a href="mailto:staparia78@gmail.com" className="text-blue-400">
//             staparia78@gmail.com
//           </a>
//         </p>
//         <p className="mb-2">
//           Instagram:{" "}
//           <a
//             href="https://instagram.com/gmw_graniteandmarbleworld"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-pink-500"
//           >
//             gmw_graniteandmarbleworld
//           </a>
//         </p>

//         <div className="flex justify-center space-x-4 mb-4">
//           <a href="#" className="bg-blue-600 p-2 rounded-full">
//             <i className="fab fa-facebook-f"></i>
//           </a>
//           <a href="#" className="bg-red-600 p-2 rounded-full">
//             <i className="fab fa-instagram"></i>
//           </a>
//         </div>

//         <div className="text-sm text-gray-400">
//           <p>
//             Copyright © 2024-25{" "}
//             <span className="font-bold">Granite Marble World</span>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGem,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaPrint,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#274f79] text-center text-white lg:text-left">
      <div className="flex justify-center items-center border-b p-4 lg:justify-between">
        {/* <div className="hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div> */}
        {/* <div className="flex justify-center space-x-4"> */}
          {/* <a href="https://www.instagram.com/shrooq_al_shadi/" target='blank' className=" hover:text-gray-800">
            <FaInstagram />
          </a> */}
          {/* <a href="#" className=" hover:text-gray-800">
            <FaFacebookF />
          </a> */}
          {/* <a href="#" className= "hover:text-gray-800">
            <FaTwitter />
          </a> */}
          {/* <a href="https://maps.app.goo.gl/Nk3QAQ7hLsDDnX79A?g_st=iw" className=" hover:text-gray-800">
            <FaGoogle />
          </a> */}
          {/* <a href="#" className=" hover:text-gray-800">
            <FaLinkedin />
          </a> */}
       
        {/* </div> */}
      </div>

      <div className="px-6 py-10 text-center md:text-left">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h6 className="uppercase font-bold mb-4 flex items-center">
              {/* <FaGem className="mr-3" /> */}
              <span className='text-4xl italic'> 

              Shrooq Al Shadi 
              </span>
            </h6>
            <p className='text-justify w-[21rem]'>
            Shrooq Al Shadi – A Muscat-based company specializing in high-quality gypsum décor and building materials. Precision-crafted solutions for modern interiors and construction.
            </p>
          </div>

          <div>
            <h6 className="uppercase font-bold mb-4">Products</h6>
            <p className="mb-2">
       


              <a href="#!" className=" hover:underline">Gypsum Board</a>
            </p>
            <p className="mb-2">
              <a href="#!" className=" hover:underline">Wall Angle</a>
            </p>
            <p className="mb-2">
              <a href="#!" className=" hover:underline">Main Channel</a>
            </p>
            <p className="mb-2">
              <a href="#!" className=" hover:underline">Furring Channel</a>
            </p>
             <p className="mb-2">
              <a href="#!" className=" hover:underline">Stud</a>
            </p>
              <p className="mb-2">
              <a href="#!" className=" hover:underline">Track</a>
            </p>
          </div>

 

 


          <div>
            <h6 className="uppercase font-bold mb-4">Products</h6>
          
            <p className="mb-2">
              <a href="#!" className=" hover:underline">Gypsum Majun</a>
            </p>
            <p className="mb-2">
              <a href="#!" className=" hover:underline">Gypsum Powder</a>
            </p>
            <p className="mb-2">
              <a href="#!" className=" hover:underline">Cornice</a>
            </p>
            <p className="mb-2">
              <a href="#!" className=" hover:underline">Design Sheet</a>
            </p>
            <p className="mb-2">
              <a href="#!" className=" hover:underline">Zabiya</a>
            </p>
           
          </div>

          <div>
            <h6 className="uppercase font-bold mb-4">Contact</h6>
            <p className="flex items-center mb-2">
              <FaHome className="mr-3" />
              Saneha 10 Number, Seeb 121, Oman
            </p>
            <p className="flex items-center mb-2">
              <FaEnvelope className="mr-3" />shrooqalshadi@gmail.com
            </p>
            <p className="flex items-center mb-2">
              {/* <FaPhone className="mr-3" /> +968 7240 2786 */}
                  <a href="tel:+96872402786" style={{ textDecoration: 'none', color: 'inherit', display:"flex" }}>
                      {/* <BsFillTelephoneFill  className="mt-1 mr-1 w-4"/> */}
                      <FaPhone className="mr-3 mt-1" />
                +968 7240 2786
              </a>
            </p>
            <div className='flex ml-8 gap-5 mt-5'>

            <p>
               <a href="https://www.instagram.com/shrooq_al_shadi/" target='blank' className=" hover:text-gray-800">
            <FaInstagram className='text-2xl'/>
          </a>
            </p>
            <p>   <a href="https://www.facebook.com/rijwan.ali.98" target='blank' className=" hover:text-gray-800">
            <FaFacebookF className='text-xl'/>
          </a>
          </p>    
            </div>
          </div>
        </div>
      </div>

      <div className="text-center p-4 bg-black">
    ⓒ Copyright 2004 Shrooq Al Shadi. All rights reserved.
      </div>
    </footer>
  );
}
