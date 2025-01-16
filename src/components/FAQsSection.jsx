import React, { useState } from "react";

const FAQsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How to book a tutor?",
      answer:
        "To book a tutor, simply browse available tutors, select one that fits your needs, and click the 'Book Now' button to schedule a session.",
    },
    {
      question: "How does payment work?",
      answer:
        "Payments are processed securely through our platform. You can pay using credit/debit cards or other supported methods after booking your session.",
    },
    {
      question: "Can I switch tutors?",
      answer:
        "Yes, you can switch tutors at any time. Just browse for another tutor and book a session with them.",
    },
    {
      question: "How are tutors vetted?",
      answer:
        "All tutors undergo a thorough vetting process, including background checks and qualifications verification, to ensure quality and safety.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2 lg:w-1/3 transition-transform duration-300 transform hover:scale-105"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="text-lg font-medium text-left w-full flex justify-between items-center"
              >
                <span>{faq.question}</span>
                <span className="text-blue-500">{activeIndex === index ? "−" : "+"}</span>
              </button>
              {activeIndex === index && (
                <div className="mt-4 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
