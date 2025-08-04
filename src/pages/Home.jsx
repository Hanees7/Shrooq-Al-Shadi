import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import image1 from '../assets/images/main1.jpg';
import gypsum_powder from '../assets/images/gypsum_powder.png';
import partition_boards from '../assets/images/partition_boards.png';
// import board2 from '../assets/images/board2.png';
import board3 from '../assets/images/board3.png';
import board1 from '../assets/images/board1.jpeg';

// import board4 from '../assets/images/board4.jpeg';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-in-out', once: true });
  }, []);

  const options = {
    items: 1,
    nav: false, // Ensure navigation is disabled
    rewind: true,
    autoplay: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false,
      },
    },
  };

  const images = [
    partition_boards,board1,gypsum_powder,board3
    // 'https://images.unsplash.com/photo-1682888813789-c39fe30921e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // 'https://images.unsplash.com/photo-1633119713175-c53c29479984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  return (
    <section className="overflow-hidden">
      <OwlCarousel className="owl-theme" {...options}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-[full] h-[70vh] sm:h-[60vh] lg:h-screen max-sm:object-cover mt-10"

            />
            {index === 0 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-opacity-100 mt-70">
                <h2 className="text-white text-3xl md:text-6xl font-extrabold font-poppins whitespace-normal break-words text-center">
                  {["Shrooq Al Shadi – ", "High quality gypsum décor."].map((word, index) => (
                    <span key={index} className="block md:inline">
                      {Array.from(word).map((char, i) => (
                        <span
                          key={i}
                          data-aos="fade-right"
                          data-aos-delay={i * 50}
                          className="inline-block roller-bounce"
                        >
                          {char === " " ? "\u00A0" : char}
                        </span>
                      ))}
                      {index === 0 && <br className="block md:hidden" />}
                    </span>
                  ))}
                </h2>
                <p
                  className="text-white text-2xl sm:text-base md:text-lg lg:text-lg font-semibold mt-6 font-poppins opacity-0 animate-softZoom max-w-3xl mx-auto px-4"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                >
                 Shrooq Al Shadi is your trusted partner for premium gypsum décor and top-tier building materials. We deliver precision-crafted solutions tailored for modern interiors and construction excellence.
                </p>
              </div>
            )}
          </div>
        ))}
      </OwlCarousel>
    </section>
  );
};

export default Home;
