import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Custom CSS for advanced styles

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Shrink header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-blue-900 py-2 shadow-lg" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="./assets/logo.png" // Replace with your logo path
            alt="EagleTutorSet Logo"
            className="h-100 w-100 md:h-12 md:w-12 mr-3"
          />
          <div className="text-2xl md:text-3xl font-extrabold text-white tracking-wider">
            <Link to="/" className="hover:text-yellow-400 transition-all">
              EagleTutorsET
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/find-tutors"
            className="text-lg font-medium text-white hover:text-yellow-400 relative group"
          >
            Find Tutors
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/post-jobs"
            className="text-lg font-medium text-white hover:text-yellow-400 relative group"
          >
            Post Jobs
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/become-tutor"
            className="text-lg font-medium text-white hover:text-yellow-400 relative group"
          >
            Become Tutor
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/login"
            className="border border-green-4000 text-white-500 hover:bg-blue-400 hover:text-white px-4 py-2 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-yellow-400 text-blue-900 font-bold px-5 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition"
          >
            Signup
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white text-3xl"
        >
          <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-blue-900 flex flex-col items-center justify-center space-y-6 text-white text-2xl z-40">
            <Link
              to="/find-tutors"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              Find Tutors
            </Link>
            <Link
              to="/post-jobs"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              Post Jobs
            </Link>
            <Link
              to="/become-tutor"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              Become Tutor
            </Link>
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-yellow-400 text-blue-900 font-bold px-5 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition"
            >
              Login/Signup
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
