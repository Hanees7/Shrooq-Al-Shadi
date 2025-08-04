import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const galleryItems = [
  {
    title: "Gypsum False Ceiling",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/5/512357202/WP/FO/FI/5715319/pvc-laminated-gypsum-ceiling-tiles.jpg",
  },
  {
    title: "Gypsum Design Cornice",
    image: "https://tiimg.tistatic.com/fp/1/001/005/gypsum-cornices-837.jpg",
  },
  {
    title: "Gypsum Plain Cornice",
    image: "https://5.imimg.com/data5/HV/HG/VX/SELLER-4321507/crown-molding-gypsum-cornice.jpg",
  },
  {
    title: "Gypsum Sheet",
    image: "https://s.alicdn.com/@sc04/kf/H205cb7115d4e49cfa582dec4ffbd17e2w/12.5mm-1200x2400mm-brown-tile-gypsum-board-partition-construction-materials-gypsum-thermal-insulation-board.jpg_300x300.jpg",
  },
  {
    title: "Gypsum Flower Design",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/10/351017511/VK/NX/OO/183222935/gypsum-ceiling-flowers-500x500.jpg",
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
          Gypsum Products
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
              
              <div className="p-4 flex items-center mt-2">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 text-center mt-8">
          <a
            href="/gypsum"
            // target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-red-500 hover:bg-red-600 transition-all duration-300 px-6 py-6 rounded-full text-lg font-medium"
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
