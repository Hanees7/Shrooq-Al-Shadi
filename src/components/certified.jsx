import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const certifications = [
  { name: "CII", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQRIlyrRx1PwH5POIn7VyXu2wwiW6GZ2cTA&s" },
  { name: "FIEO", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwpBDFxMm9OYjnsReID5We7lFcwEIv9h9-g&s" },
  { name: "ISO 14001", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjcStuM1cT_NUW2dGbCltqQTU0Bdi_CzPKDQ&s1" },
  { name: "SA", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXmoUWjyvtBdje-75T4OUopoxyQe15ujcTTw&s" },
  { name: "ISO 9001", img: "https://5.imimg.com/data5/SELLER/Default/2021/10/FN/NE/UT/140461776/iso-9001-2015-certification.jpg" },
  { name: "PHDC", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH8F2uwn_4K19IQgc-4irHJPFqQn9wgeIwmJa-xe24kMoIboYyYNHNcXY50v75KWIcNlU&usqp=CAU" },
  { name: "ISO 4500", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsesqOe9d7wx0E6esiYKCWYyStxojV_FrnKw&s" },
];

const TrustedCertified = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true }); // shorter animation duration
  }, []);

  return (
    <div className="text-center bg-white px-6 md:px-16" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
        Trusted and Certified
        <span className="block w-16 h-1 bg-red-500 mx-auto mt-2"></span>
      </h2>

      <div className="mt-12 px-6 md:px-20 flex justify-center items-center">
        <OwlCarousel
          className="owl-theme"
          loop
          margin={25}
          autoplay
          autoplayTimeout={2500}
          autoplayHoverPause
          smartSpeed={600}
          dots={false}
          responsive={{
            0: { items: 2, margin: 10 },
            480: { items: 3, margin: 15 },
            768: { items: 4, margin: 20 },
            1024: { items: 5, margin: 25 },
          }}
        >
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                loading="lazy"
                src={cert.img}
                alt={cert.name}
                className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-contain"
              />
              <p className="mt-2 text-gray-700 text-sm font-medium text-center">
                {cert.name}
              </p>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default TrustedCertified;
