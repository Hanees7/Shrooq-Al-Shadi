// import React, { useState } from "react";
// import logo from './alshadii.png';
// import { BsFillTelephoneFill } from "react-icons/bs";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const whatsappNumber = "+968 7240 2786"; // Replace with your WhatsApp number

//     return (
//         <>
//             <nav className="bg-gray-50  shadow-lg fixed w-full z-30">
//                 <div className="flex justify-between items-center">
             
//                     <a href="#" className="text-white text-xl font-bold">
//                         <img
//                             src={logo}
//                             className="h-24 ml-6 max-md:ml-0" 
//                             alt="Logo"
                         
//                         />
//                     </a>

//                     {/* Mobile Menu Button */}
//                     <button
//                         className="text-black text-3xl md:text-xl p-2 md:hidden" // Larger button for mobile
//                         onClick={() => setIsOpen(!isOpen)}
//                     >
//                         ☰
//                     </button>

           
//                     <ul
//   className={`mr-10 mt-5 font-semibold font-sans md:flex space-y-4 md:space-y-0 md:space-x-6 absolute md:static md:bg-transparent top-14 z-20 left-0 w-full md:w-auto p-4 md:p-0 transition-all duration-300 ease-in-out 
//       bg-transparent bg-opacity-50 backdrop-blur-md
//       ${isOpen ? "block" : "hidden"}`}
// >
//   <li><a href="#" onClick={() => setIsOpen(false)} className="text-black hover:text-gray-600">HOME</a></li>
//   <li><a href="#about" onClick={() => setIsOpen(false)} className="text-black hover:text-gray-600">ABOUT</a></li>
//   <li><a href="#gallery" onClick={() => setIsOpen(false)} className="text-black hover:text-gray-600">PRODUCTS</a></li>
//   <li><a href="#contact" onClick={() => setIsOpen(false)} className="text-black hover:text-gray-600">CONTACT US</a></li>
//   <li>
//     <a href="#" onClick={() => setIsOpen(false)} className="text-black hover:text-[#224c75]">
//       <div className="flex items-center md:justify-center">
//       <a href="tel:+96872402786" style={{ textDecoration: 'none', color: 'inherit', display:"flex" }}>
//         <BsFillTelephoneFill  className="mt-1 mr-1 w-4"/>
//   +968 7240 2786
// </a>

//       </div>
//     </a>
//   </li>
// </ul>

//                 </div>
//             </nav>
//         </>
//     );
// };

// export default Navbar;


import React, { useState } from "react";
import { BsFillTelephoneFill } from 'react-icons/bs';
import logo from './alshadii.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <nav className="bg-gray-50  shadow-lg fixed w-full z-30">
    <div className="flex justify-between items-center px-6">
      
      {/* Logo */}
      <a href="#" className="text-white text-xl font-bold">
        <img
          src={logo}
          className="h-16 md:h-24 max-md:ml-0"
          alt="Logo"
        />
      </a>

      {/* Hamburger / Close Button */}
      <button
        className="text-black text-3xl md:hidden transition-transform duration-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Menu Items */}
      <ul
        className={`md:flex md:items-center md:static absolute top-full left-0 w-full md:w-auto md:bg-transparent bg-white bg-opacity-80 backdrop-blur-md 
          transition-all duration-300 ease-in-out z-40 
          ${isOpen ? 'opacity-100 max-h-screen py-6' : 'opacity-0 max-h-0 overflow-hidden'} md:opacity-100 md:max-h-full md:py-0`}
      >
        {[
          { href: '#', label: 'HOME' },
          { href: '#about', label: 'ABOUT' },
          { href: '#gallery', label: 'PRODUCTS' },
          { href: '#contact', label: 'CONTACT US' },
        ].map((item, idx) => (
          <li key={idx} className="text-center md:ml-6 my-2 md:my-0">
            <a
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-[#224c75] text-lg font-semibold block"
            >
              {item.label}
            </a>
          </li>
        ))}

        {/* Phone Link */}
        <li className="text-center md:ml-6 my-2 md:my-0">
          <a
            href="tel:+96872402786"
            onClick={() => setIsOpen(false)}
            className="flex justify-center items-center text-black hover:text-[#224c75] text-lg font-semibold"
          >
            <BsFillTelephoneFill className="mr-2 w-4" />
            +968 7240 2786
          </a>
        </li>
      </ul>
    </div>
    </nav>
  );
}






















// import React, { useState } from "react";
// import logo from "./alshadii.png";
// import { BsFillTelephoneFill } from "react-icons/bs";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gray-50 shadow-md fixed w-full z-50">
//       <div className="flex justify-between items-center px-4 py-3 md:px-8">
//         {/* Logo */}
//         <a href="#">
//           <img src={logo} alt="Logo" className="h-20 md:h-24 object-contain" />
//         </a>

//         {/* Hamburger / Close Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="text-black text-3xl md:hidden focus:outline-none"
//         >
//           {isOpen ? "X" : "☰"}
//         </button>

//         {/* Menu Items */}
//         <ul
//           className={`
//             font-semibold font-sans
//             absolute md:static top-full left-0 w-full md:w-auto 
//             bg-white md:bg-transparent bg-opacity-90 backdrop-blur-md
//             md:flex md:items-center md:space-x-6 
//             px-6 md:px-0 pt-4 md:pt-0 pb-6 md:pb-0 transition-all duration-300 ease-in-out
//             ${isOpen ? "block" : "hidden"}
//           `}
//         >
//           {[
//             { label: "HOME", href: "#" },
//             { label: "ABOUT", href: "#about" },
//             { label: "PRODUCTS", href: "#gallery" },
//             { label: "CONTACT US", href: "#contact" },
//           ].map((item, index) => (
//             <li key={index} className="my-2 md:my-0">
//               <a
//                 href={item.href}
//                 onClick={() => setIsOpen(false)}
//                 className="text-black hover:text-[#224c75] block text-center"
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}

//           {/* Phone Number */}
//           <li className="my-2 md:my-0">
//             <a
//               href="tel:+96872402786"
//               onClick={() => setIsOpen(false)}
//               className="text-black hover:text-[#224c75] flex items-center justify-center"
//             >
//               <BsFillTelephoneFill className="mr-2 mt-1" />
//               +968 7240 2786
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
