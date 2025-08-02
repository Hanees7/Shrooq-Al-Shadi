import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const galleryItems = [
  {
    title: "Statuario Marble",
    image: "https://i.pinimg.com/736x/9f/fc/1a/9ffc1aaee82959aaeea5ad9e5ac09f0d.jpg",
  },
  {
    title: "Spider Green Marble",
    image: "https://i.pinimg.com/736x/34/35/67/343567779735a86b009f84cf872c9024.jpg",
  },
  {
    title: "Fantasy Brown Marble",
    image: "https://i.pinimg.com/736x/06/6a/00/066a0050f21e7fd32667f45b6448b578.jpg",
  },
  {
    title: "Makrana Pink Marble",
    image: "https://i.pinimg.com/736x/80/e7/1e/80e71e0b6dd3a4f89f22922739a1ac3e.jpg",
  },
];

const GallerySection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <>
  <section id="gallery">


    <div className="bg-white py-12 px-4 md:px-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
          Gallery
          <span className="block w-16 h-1 bg-red-500 mx-auto mt-2"></span>
        </h2>
      </div>

      <div className="mt-16">
        <div className="justify-center grid grid-cols-2 gap-4 md:flex md:space-x-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              className="bg-white shadow-lg rounded-xl overflow-hidden w-full"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full transform transition duration-500 hover:scale-110 object-cover"
              />
              <div className="p-4 flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 text-center mt-8">
          <a
            href="/marble"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-red-500 hover:bg-red-600 transition-all duration-300 px-6 py-3 rounded-full text-lg font-medium"
          >
            See More
          </a>
        </div>
      </div>
    </div>
      </section>
      </>
  );
};

export default GallerySection;
