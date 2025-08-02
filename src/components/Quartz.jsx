import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";


const GallerySection = [
  {
    // title: "Statuario Marble",
    image: "https://images.unsplash.com/photo-1733431774078-692252a6605e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    // title: "Spider Green Marble",
    image: "https://plus.unsplash.com/premium_photo-1680529431114-fe58e182bbd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    // title: "Fantasy Brown Marble",
    image: "https://images.unsplash.com/photo-1715606424329-822c20766da8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    // title: "Makrana Pink Marble",
    image: "https://images.unsplash.com/photo-1585929326215-d33161ec8b25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Quartz = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-in-out', once: false });
  }, []);

  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="text-center mb-12" data-aos="flip-left">
        <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
          Quartz stone
          <span className="block w-20 h-1 bg-red-500 mx-auto mt-2 rounded-full"></span>
        </h2>
        {/* <p className="text-gray-500 mt-4 text-lg">
          Explore our collection of premium imported marble designs.
        </p> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {GallerySection.map((item, index) => (
          <div
            key={index}
            data-aos="flip-left"
            data-aos-delay={index * 150}
            className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-500 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 sm:h-64 md:h-72 object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="p-4 flex items-center justify-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <h3 className="text-lg font-semibold text-gray-700 text-center">
                {item.title}
              </h3>
            </div>
          </div>
        ))}

      </div>
      <div className="p-4 text-center mt-8">
        <a
          href="/quartz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-red-500 hover:bg-red-600 transition-all duration-300 px-6 py-3 rounded-full text-lg font-medium"
        >
          See More
        </a>

      </div>
    </section>
  );
};

export default Quartz;
