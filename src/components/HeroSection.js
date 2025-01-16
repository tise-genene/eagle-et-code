import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-blue-700 text-white py-20 px-6 overflow-hidden">
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 opacity-20 rounded-full blur-3xl animate-pulse delay-200"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Text Content */}
        <div className="text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-wide drop-shadow-md">
          Connect with Expert Tutors Anytime, Anywhere!
          </h1>
          <p className="mt-6 text-lg lg:text-2xl font-light text-gray-200">
            Find the best tutors or start teaching. Empower your future with personalized tutoring today!
          </p>
          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300">
              Find a Tutor
            </button>
            <button className="bg-white hover:bg-gray-200 text-blue-700 font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300">
              Become a Tutor
            </button>
          </div>
        </div>

        {/* Hero Image with Animation */}
        <div className="relative w-full lg:w-1/2">
          <div className="relative z-10">
            <img
              src="/assets/hero-image.jpg"
              alt="Hero Illustration"
              className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* Moving Effect Elements */}
          <div className="absolute top-4 left-4 w-16 h-16 bg-yellow-300 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-8 right-8 w-20 h-20 bg-purple-300 rounded-full blur-xl animate-float delay-300"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
