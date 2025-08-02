import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    image: "https://i.pinimg.com/736x/71/9b/8c/719b8c0de59c7d87979159b8c0cd9cbe.jpg",
    // text: "testing"
  },
  {
    id: 2,
    image: "https://i.pinimg.com/736x/9d/62/4a/9d624a698d5addb3d39c51cd84442baf.jpg",
  },
  {
    id: 3,
    image: "https://i.pinimg.com/736x/92/1b/5d/921b5de71a2c7605bc2f301d77f145cf.jpg",
  },
  {
    id: 4,
    image: "https://i.pinimg.com/736x/b8/7e/71/b87e7157555beb27ab090266813190b4.jpg",
  },
];

const EventsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white my-24 px-4 sm:px-6 lg:px-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
          Imported
          <span className="block w-16 h-1 bg-red-500 mx-auto mb-5"></span>
        </h2>
        <p className="text-gray-600 mt-4">
          Authentic Imported Design for a Premium Look
        </p>
      </div>

      <div className="mt-8 space-y-6 sm:space-y-0 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {events.map((event, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
            className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-500 hover:scale-105 min-w-[280px] sm:min-w-0"
          >
            <img
              src={event.image}
              alt="event"
              className="w-full h-72 object-cover"
            />
            <div className="p-4 text-center">
              <p>{event.text}</p>
            </div>

          </div>
        ))}
      </div>
      <div className="p-4 text-center mt-8">
        <a
          href="/imported"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-red-500 hover:bg-red-600 transition-all duration-300 px-6 py-3 rounded-full text-lg font-medium"
        >
          See More
        </a>

      </div>

    </div>
  );
};

export default EventsSection;
