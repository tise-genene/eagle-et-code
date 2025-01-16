import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: About */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            We connect students with expert tutors to create personalized
            learning experiences. Join us to unlock your true potential!
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="hover:underline hover:text-yellow-300 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:underline hover:text-yellow-300 transition"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:underline hover:text-yellow-300 transition"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline hover:text-yellow-300 transition"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-sm leading-relaxed">
            📍 Addis Ababa, Ethiopia <br />
            📞 +251-123-456-789 <br />
            ✉️ support@tutoringplatform.com
          </p>
          <div className="mt-4 flex gap-4">
            {/* Social Media Icons */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition"
            >
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition"
            >
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition"
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center border-t border-gray-500 mt-8 pt-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Eagle Tutoring Platform. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
