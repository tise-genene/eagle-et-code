import React from "react";

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Sign Up",
      description: "Create an account in just a few steps. It's quick and easy!",
      icon: "📝",
    },
    {
      title: "Find a Match",
      description:
        "Browse through a curated list of tutors or students that meet your needs.",
      icon: "🔍",
    },
    {
      title: "Start Learning",
      description:
        "Connect, schedule sessions, and begin your personalized learning journey.",
      icon: "📚",
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">How It Works</h2>
        <p className="text-gray-600 mb-12">
          Follow these simple steps to get started and unlock your potential!
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {steps.map((step, index) => (
            <div
            key={index}
            className="w-full lg:w-1/3 bg-blue-50 hover:bg-blue-100 rounded-lg shadow-lg p-8 transition-all duration-300 hover:scale-105"
          >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-blue-700 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
