import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message) newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSuccessMessage("Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-500 via-blue-700 to-blue-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white text-gray-800 shadow-lg rounded-lg p-8 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-lg font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full mt-2 p-3 rounded-lg border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full mt-2 p-3 rounded-lg border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="example@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full mt-2 p-3 rounded-lg border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Write your message here..."
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all"
            >
              Send Message
            </button>
            {successMessage && (
              <p className="text-green-500 text-lg mt-4">{successMessage}</p>
            )}
          </form>

          {/* Contact Details */}
          <div className="flex flex-col space-y-8">
            <div>
              <h3 className="text-2xl font-semibold">Reach Us At</h3>
              <p className="mt-4 text-lg">
                <strong>Phone:</strong> +123 456 7890
              </p>
              <p className="text-lg">
                <strong>Email:</strong> contact@tutoringplatform.com
              </p>
              <p className="text-lg">
                <strong>Address:</strong> 123 Tutor Lane, Education City
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Follow Us</h3>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.linkedin.com/company/eagle-tutoring-services/"
                  className="bg-white text-blue-500 hover:bg-blue-100 rounded-full p-3 shadow-lg"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/eagle-tutoring-services/"
                  className="bg-white text-blue-500 hover:bg-blue-100 rounded-full p-3 shadow-lg"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/eagle-tutoring-services/"
                  className="bg-white text-blue-500 hover:bg-blue-100 rounded-full p-3 shadow-lg"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
