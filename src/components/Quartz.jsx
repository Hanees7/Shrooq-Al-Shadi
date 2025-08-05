import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import board5Image from '../../src/assets/images/board5.jpeg';

const GallerySection = [
  {
    title: "Reg Gypsum Board",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/7/CJ/EY/NE/150854037/paper-gypsum-board-500x500.jpg",
  },
  {
    title: "Mr Gypsum Board",
    image: "https://s.alicdn.com/@sc04/kf/Hec6502f07b924f0cb700157b8fa50151d.jpg",
  },
  {
    title: "Fr Gypsum Board",
    image: "https://tiimg.tistatic.com/fp/1/004/955/fire-rated-gypsum-board-833.jpg",
  },
  {
  //   title: "Gypsum Powder",
  //   // image: "https://5.imimg.com/data5/ANDROID/Default/2024/7/438843263/CQ/UG/LW/124686755/product-jpeg-500x500.jpg",
  //   image:"../../src/assets/images/board5.jpeg",
  //    style: {
  //   objectFit: "contain",
  //   width: "100%",
  //   height: "100%"
  // }
  title: "Gypsum Powder",
  image: board5Image,
  style: {
    objectFit: "contain",
  }
  },
  {
    title: "Joint Compound",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYWdd7y-6m3qUAcBjqSbWanwXXbYeHA0D7_ge69RT_YQn6dR23bwwzre2H_OaM5SlwSkA&usqp=CAU",
  },
  {
    title: "Main Channel",
    image: "https://5.imimg.com/data5/QD/QA/TQ/ANDROID-102786920/product-jpeg-500x500.jpg",
  },
  {
    title: "Wall Angel",
    image: "https://m.media-amazon.com/images/I/51hFbumsYLL._UF1000,1000_QL80_.jpg",
  },
  {
    title: "Furring Channel",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVBpRr7YSskHhmLnvL0J8qagEhQnw3VqihXQ&s",
  },
  {
    title: "GI Track",
    image: "https://ik.imagekit.io/fepy/cdn/catalog/product/2/6/2627-gi_track_50mm_2_.png",
  },
  {
    title: "Joint Tap",
    image: "https://i.ebayimg.com/images/g/g-4AAeSwbABnsZm8/s-l400.jpg",
  },
  {
    title: "GI Stud",
    image: "https://content.jdmagicbox.com/quickquotes/images_main/gi-stud-copper-l-shape-polished-painted-cladding-802920013-ba7kzd98.png?impolicy=queryparam&im=Resize=(360,360),aspect=fit",
  },
  {
    title: "Aluminum Shadow Angel",
    image: "https://cdn.moglix.com/p/k2Sz53j3uYkPV-xxlarge.jpg",
  },
  {
    title: "Flasher Plug",
    image: "https://s.alicdn.com/@sc04/kf/Hac9ad6335ce949a98c5350340733e0c1q/4mm-Plastic-Wall-Plug-6mm-Fish-Screw-Anchor-8-mm-Plastic-Anchor-8mm-Plastic-Wall-Plug.jpg",
  },
  {
    title: "Ceiling Tee Grids",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZwKa97iQx6FGZd2nk3v3VA6zGaNraQZUgWw&s",
  },
  {
    title: "Access Panel",
    image: "https://5.imimg.com/data5/ANDROID/Default/2023/5/305060248/KJ/HA/YD/15247252/product-jpeg-500x500.jpg",
  },
  {
    title: "Drywall Screw",
    image: "https://static1.industrybuying.com/products/fasteners/screws/drywall-screw/FAS.DRY.223548962_1701870427884.webp",
  },
  {
    title: "Rock wool",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx4iGo73sJ2btYpyQRFPp4GVJkMdmXkBfWsw&s",
  },
  {
    title: "Cement Sheet",
    image: "https://image.made-in-china.com/2f0j00ANYWvamlSKkh/Interior-Standard-Thickness-and-Size-Fibre-Cement-Sheet-and-Exterior-Wall-Cement-Panel.webp",
  },
  {
    title: "Drywall Tools",
    image: "https://i0.wp.com/gnhlumber.com/wp-content/uploads/2022/11/Must-have-Tools.webp?fit=850%2C650&ssl=1",
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
          {/* All Other Products */}
          All Products
          <span className="block w-20 h-1 bg-red-500 mx-auto mt-2 rounded-full"></span>
        </h2>
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
              className="w-full h-56 sm:h-64 md:h-92 object-cover transition-transform duration-500 hover:scale-110"
              style={{
        ...(item.title === "Gypsum Powder" ? {
          objectFit: "contain",
        } : {}),
      }}
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
      {/* <div className="p-4 text-center mt-8">
        <a
          href="/quartz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-red-500 hover:bg-red-600 transition-all duration-300 px-6 py-3 rounded-full text-lg font-medium"
        >
          See More
        </a>

      </div> */}
    </section>
  );
};

export default Quartz;
