import React from "react";

const KeyFeatures = () => {
  const features = [
    {
      title: "Verified Tutors",
      description: "All tutors are background checked and verified.",
      icon: "✅",
    },
    {
      title: "Flexible Learning",
      description: "Learn at your pace, anytime, anywhere.",
      icon: "📚",
    },
    {
      title: "Affordable Rates",
      description: "Tutoring plans for every budget.",
      icon: "💰",
    },
    {
      title: "Advanced Tools",
      description: "Interactive sessions with cutting-edge tools.",
      icon: "⚙️",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
          Why Choose Us?
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          We make learning personalized, accessible, and effective for everyone!
        </p>

        {/* Features Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500"
            >
              <div className="text-4xl transition-colors duration-300 group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800 group-hover:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 group-hover:text-gray-200">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
