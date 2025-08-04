import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import GallerySection from "./Gallery";


const MarbleCollection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const marbleData = [
    {
      title: "Alaska White Granite",
      image: "https://i.pinimg.com/736x/dd/10/70/dd1070c222766166eedbfbedb0fd23d9.jpg",
      aosType: "fade-up",
    },
    {
      title: "Titanium Black Granite",
      image: "https://i.pinimg.com/736x/93/f2/1f/93f21f6ac9516339b40a2bb398f77e8b.jpg",
      aosType: "fade-up",
    },
    {
      title: "Sunset Canyon Granite",
      image: "https://i.pinimg.com/736x/8e/9f/33/8e9f33507c6cc0e9ff7a8b994c907366.jpg",
      aosType: "fade-up",
    },
  ];

  return (
    <div className="bg-white">
      <div className="text-center py-12 bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-800">Shrooq Al Shadi Collections</h2>
      </div>

        <GallerySection/> 
      {/* <div className="max-w-4xl mx-auto text-center p-6">
        <h3 className="text-3xl text-red-500 font-semibold">Popular Granite</h3>
        <p className="text-gray-600 mt-4">
          Discover our exquisite collection of premium granite, including Alaska White, Titanium Black, and Sunset Canyon Granite. Each piece is crafted to bring elegance and durability to your spaces.
        </p>
      </div> */}

      {/* Responsive Grid Layout */}
      {/* <div className="mx-auto max-w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
        {marbleData.map((marble, index) => (
          <div
            key={index}
            data-aos={marble.aosType}
            className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <img src={marble.image} alt={marble.title} className="w-full relative object-cover" />
            <div className="p-4 text-center absolute bottom-0 text-white" data-aos="zoom-in">
              <h3 className="text-2xl font-semibold">{marble.title}</h3>
            </div>
          </div>
        ))}

      </div> */}
      {/* <div className="p-4 text-center mt-8">
        <a
          href="/granite"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-red-500 hover:bg-red-600 transition-all duration-300 px-6 py-3 rounded-full text-lg font-medium"
        >
          See More
        </a>

      </div> */}
    </div>
  );
};

export default MarbleCollection;
