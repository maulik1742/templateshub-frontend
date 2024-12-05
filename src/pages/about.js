import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-400 py-10 flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-black text-center mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Welcome to our company! We are dedicated to providing high-quality
          services and solutions tailored to meet your needs. Our team consists
          of passionate professionals who strive for excellence and are
          committed to your success.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Our mission is to empower individuals and businesses by delivering
          innovative and efficient solutions. Thank you for trusting us and
          being a part of our journey.
        </p>
        <div className="border-t border-gray-300 pt-6">
          <h2 className="text-2xl font-semibold text-black text-center mb-4">
            Find Us Here
          </h2>
          <div className="overflow-hidden rounded-lg shadow-md">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.7149700556997!2d72.84692623000467!3d21.240190933607213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0034bccf1b%3A0xac2f3f556ff84053!2sB%20K%20Homes!5e0!3m2!1sen!2sin!4v1733297461858!5m2!1sen!2sin"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
