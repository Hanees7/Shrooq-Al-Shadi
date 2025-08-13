import React, { useEffect, useState } from "react";
import { Button } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import cmpny_logo from "./SAS LOGO 2.png"

const CompanySection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [companyData] = useState(`
    <p>
    Shrooq Al Shadi is a leading gypsum décor manufacturing and supply company based in the heart of Oman,
     renowned for delivering premium-quality gypsum products tailored for residential, commercial, and industrial applications.
      With a foundation built on craftsmanship, innovation, and precision, we bring a legacy of
       excellence to every corner, ceiling, and wall we touch.<br /><br />

Our extensive portfolio includes everything from timeless classic cornices and ceiling roses to sleek modern panels, artistic wall claddings, 
and intricate custom-moulded designs. Each product is meticulously crafted using high-grade materials and cutting-edge manufacturing techniques 
to ensure superior finish, durability, and aesthetic appeal. <br /><br />At Shrooq Al Shadi, we understand that interiors are more than just spaces—they are reflections of personality, culture, and functionality. That’s why we work closely with architects, interior designers, contractors, and homeowners to create gypsum solutions that harmonize with their vision while meeting the highest industry standards.
<br /><br />
    Whether you’re building, renovating, or designing interiors, Shrooq Al Shadi provides the materials and expertise to bring your vision to life  <br />
      Trust us to turn your vision into reality — with precision, elegance, and trust.
    </p>
  `);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="about">
      <div className="text-center mt-10">
        <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
          About Us
          <span className="block w-16 h-1 bg-red-500 mx-auto mt-2"></span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-16">
        <div
          data-aos={isMobile ? "fade-up" : "zoom-in-left"}
          className="w-full md:w-1/2"
        >
          <img
            src={cmpny_logo}
            alt="Company Building"
            className="rounded-lg shadow-lg md:w-[700px] md:h-[650px]"
          />
        </div>
        <div
          data-aos={isMobile ? "fade-up" : "fade-right"}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl font-bold relative inline-block">
            <span className="text-red-500 absolute -left-4 top-1/4 -translate-y-1/2 w-4 h-4 border-t-4 border-l-4 border-red-500"></span>
           Shrooq Al Shadi
            <span className="text-red-500 absolute -right-4 top-3/4 -translate-y-1/2 w-4 h-4 border-b-4 border-r-4 border-red-500"></span>
          </h2>
          
          {/* Render HTML with line breaks using dangerouslySetInnerHTML */}
          <div 
            className={`mt-4 text-gray-600 text-justify ${(!readMore) && "line-clamp-[10]"}`} 
            dangerouslySetInnerHTML={{ __html: companyData }} 
          />

          <div data-aos={isMobile ? "flip-up" : "zoom-in"} className="mt-6">
            <Button
              type="primary"
              className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full shadow-lg text-white font-semibold flex items-center gap-2"
              onClick={() => setReadMore(!readMore)}
            >
              Read {readMore ? "Less" : "More"} →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
