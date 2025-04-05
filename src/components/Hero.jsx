// src/components/HeroSection.jsx
import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { images, columnDescription, columnDescriptionFour } from "../components/imageFile";
import singleCol from '../assets/home_hero/columnDescription/singleCol.jpg';
import usePagination from "../components/functions";

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto-change image every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };


    const {
      currentItems,
      currentPage,
      totalPages,
      goToNextPage,
      goToPreviousPage,
    } = usePagination(columnDescriptionFour, 6);

  return (
    <div>
      {/* Image Section */}
      <div className="relative w-full md:h-[95vh] h-[60vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[current].src}
            src={images[current].src}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>

        {/* Arrow to manually change image */}
        <button
          onClick={nextImage}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/70 hover:bg-white text-black rounded-full p-2 shadow-md"
        >
          <ChevronDown size={24} />
        </button>
      </div>

      {/* Image Name Section */}
      <div className="text-black bg-white font-bold text-xl py-4 flex items-center justify-center">
        {images[current].name}
      </div>
      <hr className="py-2"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
        {columnDescription.map((column, index) => (
          <div key={index} className="flex flex-col items-center p-4">
            <img
              src={column.image}
              alt={column.heading}
              className="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold text-center mb-2">{column.heading}</h3>
            <p className="text-gray-600 text-center">{column.description}</p>
          </div>
        ))}
      </div>
      <div className="py-4 md:px-64">
        <img
          src={singleCol}
          alt=""
          className="w-full h-64 object-cover mb-4 rounded-lg"
        />
      </div>
      
      <div className="p-4">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 md:gap-8">
          {currentItems.map((column, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start p-4"
            >
              <img
                src={column.image}
                alt={column.heading}
                className="w-full sm:w-1/2 h-48 object-cover mb-4 sm:mb-0 rounded-lg"
              />
              <div className="sm:w-1/2 sm:pl-6">
                <h3 className="md:text-xl text-sm font-bold sm:text-left md:mb-2">
                  {column.heading}
                </h3>
                <p className="text-gray-600 sm:text-left text-xs">
                  {column.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      <div className="bg-gray-100 px-6 py-10 md:px-32 rounded-lg shadow-lg mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="flex flex-col items-start justify-start gap-4 mb-4">
            <h2 className="text-sm font-bold mb-4 font-unit">
              Sign up for the latest news
            </h2>
            <form className="flex flex-col sm:flex-row md:block items-center justify-center gap-4 mb-4">
              <input
                type="email"
                placeholder="Email*"
                className="w-full sm:w-2/3 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              <p className="text-sm text-gray-600 mb-2  py-3">
                Interior Design uses the information you provide us to contact you about our relevant content, experiences, and services. You may unsubscribe from these communications at any time. For more information, check out our <a href="#" className="underline">Privacy Policy</a>.
              </p>
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-600">
              By signing up you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
            </p>
          </div>

          {/* Logo Section */}
          <div className="flex justify-center items-center">
            <div className="relative flex justify-center items-center font-bold text-lg uppercase text-center whitespace-nowrap font-unit">
              <div className="absolute left-1/2 transform -translate-x-1/2 text-black">
                DeRain <br /> Interiors
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
