import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    { name: "John Doe", feedback: "Great platform!", image: "/assets/user1.jpg" },
    { name: "Jane Smith", feedback: "Amazing experience.", image: "/assets/user2.jpg" },
    { name: "Sam Wilson", feedback: "Very helpful!", image: "/assets/user3.jpg" },
    { name: "Emily Davis", feedback: "Highly recommend it!", image: "/assets/user4.jpg" },
    { name: "Michael Brown", feedback: "Incredible tutors!", image: "/assets/user5.jpg" },
    { name: "Sophia Taylor", feedback: "Easy to use.", image: "/assets/user6.jpg" },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">What People Say</h2>
      <div className="overflow-hidden">
        {/* Row 1 */}
        <div className="flex animate-scroll space-x-6">
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <div
              key={`row1-${index}`}
              className="flex-none w-64 bg-white rounded-lg shadow-lg p-4"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-center">{testimonial.name}</h3>
              <p className="text-gray-600 text-center mt-2">{testimonial.feedback}</p>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex animate-scroll-reverse space-x-6 mt-6">
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <div
              key={`row2-${index}`}
              className="flex-none w-64 bg-white rounded-lg shadow-lg p-4"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-center">{testimonial.name}</h3>
              <p className="text-gray-600 text-center mt-2">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
