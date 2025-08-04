import React, { useEffect } from "react";
import Footer from "../components/Footer";
import board4 from '../assets/images/board4.jpeg';
import HoNavbarme from '../components/Navbar'


const galleryItems = [
  // board4 ,

  "/assetess/SAS/WhatsApp Image 2025-08-02 at 6.09.18 PM.jpeg",
// " /assetess/SAS/WhatsApp Image 2025-08-03 at 4.44.59 PM.jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.45.59 PM (3).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-02 at 6.07.41 PM.jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.44.58 PM (3).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.45.59 PM (1).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-02 at 6.09.19 PM.jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-02 at 6.10.41 PM (1).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-02 at 6.09.21 PM.jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.44.58 PM (5).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-02 at 6.10.44 PM.jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.45.58 PM.jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-02 at 6.07.41 PM (1).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-02 at 6.09.18 PM (2).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-02 at 6.09.19 PM (1).jpeg",
// " /assetess/SAS/WhatsApp Image 2025-08-03 at 4.44.59 PM (1).jpeg",
// " /assetess/SAS/WhatsApp Image 2025-08-02 at 6.10.42 PM (2).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.44.59 PM (3).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-02 at 6.07.42 PM.jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.45.57 PM (1).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-02 at 6.09.20 PM.jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-02 at 6.10.41 PM.jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.44.57 PM.jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-02 at 6.09.18 PM (1).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-02 at 6.10.42 PM (1).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.44.58 PM (4).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-02 at 6.10.43 PM.jpeg",
// " /assetess/SAS/WhatsApp Image 2025-08-02 at 6.10.44 PM (1).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.45.56 PM (5).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.45.56 PM (2).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.44.59 PM (2).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.45.56 PM.jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-02 at 6.10.40 PM.jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-02 at 6.10.43 PM (1).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.45.57 PM (3).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-02 at 6.09.20 PM (1).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.45.59 PM (2).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.45.56 PM (3).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-02 at 6.10.42 PM.jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-02 at 6.09.20 PM (2).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.44.58 PM (2).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-02 at 6.07.41 PM (2).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.44.57 PM (1).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.44.58 PM (1).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-02 at 6.10.41 PM (2).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-02 at 6.09.17 PM.jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-02 at 6.09.19 PM.jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-02 at 6.09.18 PM.jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.46.00 PM.jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.44.58 PM (6).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-02 at 6.07.41 PM (3).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.45.56 PM (4).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.45.57 PM (2).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.44.57 PM (2).jpeg",
// " /assetess/SAS/WhatsApp Image 2025-08-03 at 4.44.59 PM.jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-02 at 6.10.43 PM (2).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.45.57 PM.jpeg",
// " /assetess/SAS/WhatsApp Image 2025-08-02 at 6.10.43 PM (2).jpeg",
// " /assetess/SAS/WhatsApp Image 2025-08-02 at 6.10.41 PM (2).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.45.59 PM (4).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.44.58 PM.jpeg",
// " /assetess/SAS/WhatsApp Image 2025-08-02 at 6.10.43 PM (2).jpeg",
// " /assetess/SAS/WhatsApp Image 2025-08-02 at 6.10.43 PM (1).jpeg",
" /assetess/SAS/WhatsApp Image 2025-08-03 at 4.45.59 PM.jpeg",

]


function GalleryMore() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
    <HoNavbarme/>
      <div className="bg-gradient-to-br from-white to-gray-100 py-16 px-4 md:px-12 min-h-screen">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-800 relative inline-block mb-2">
            Premium Gypsum Designs to Elevate Elegant Interiors
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-red-500 via-red-400 to-red-500 rounded"></div>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-lg">
         Explore Our Curated Selection of Elegant & Premium Gypsum Designs
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-6">
          {galleryItems.map((item, index) => (
            <a
              href={item.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 shadow-md hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300"
            >
              <img
                src={item}
                alt={`Marble texture ${index + 1}`}
                className="w-full h-70 object-cover transform group-hover:scale-110 transition duration-500"
              />
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GalleryMore;
