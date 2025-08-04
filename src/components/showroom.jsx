import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const VisitShowroom = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div id="contact" className="bg-white mb-8 px-6 md:px-16 text-center mt-10">
      <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
        Visit Our Showroom
        <span className="block w-16 h-1 bg-red-500 mx-auto mt-2"></span>
      </h2>

      <p
        className="mt-6 text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="200"
      >
     Step into the world of elegant design at Shrooq Al Shadi. Visit our showroom to explore our full range of premium gypsum décor products, including gypsum boards, decorative cornices, design sheets, and more. See the quality, feel the craftsmanship, and discover the perfect solutions for your interior and construction needs.

Our expert team is ready to guide you through the selection process and help you choose the right materials for your space.


      </p>
{/* 
      <h3
        className="mt-10 text-xl md:text-2xl font-semibold text-gray-900"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Ready to get started on your next project?
      </h3> */}

      <div className="mt-6" data-aos="fade-up" data-aos-delay="600">
        <a
          href="https://wa.me/919694944389?text=Hello,%20I%20am%20interested%20in%20your%20products!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#274f79] cursor-pointer text-white font-bold px-6 py-3 rounded-md shadow-lg transition-transform transform hover:scale-105">
            Contact Us
          </button>
        </a>
      </div>

      {/* Google Map Embed */}
      <div className="mt-12" data-aos="fade-up" data-aos-delay="800">
        <iframe
          title="Google Map Location"
          width="100%"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.909641290034!2d58.09429819999999!3d23.643406799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8de77a0eb1552d%3A0x422121e00d42c7e0!2sSharooq%20al%20shadi%20(rijwan%20gypsum%20decore)!5e0!3m2!1sen!2sin!4v1754133049844!5m2!1sen!2sin"
          height="400"
          allowFullScreen=""
          loading="lazy"
          className="rounded-xl shadow-md w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default VisitShowroom;
