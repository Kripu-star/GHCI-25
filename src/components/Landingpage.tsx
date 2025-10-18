import React, { useState } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface NGO {
  id: number;
  name: string;
  logo: string;
  description: string;
}

const ngos: NGO[] = [
  { id: 1, name: "Hope Foundation", logo: "/logos/hope.png", description: "Providing education to children in rural areas." },
  { id: 2, name: "Bright Future", logo: "/logos/bright.png", description: "Empowering girls through tech literacy." },
  // add more
];

const volunteers = [
  { id: 1, name: "Aditi Sharma", image: "/volunteers/aditi.jpg" },
  { id: 2, name: "Rahul Verma", image: "/volunteers/rahul.jpg" },
  // add more
];

const testimonials = [
  { id: 1, name: "Ravi", text: "This program helped me find a mentor who changed my life." },
  { id: 2, name: "Ananya", text: "A beautiful initiative connecting students and mentors." },
];

const LandingPage: React.FC = () => {
  const [selectedNGO, setSelectedNGO] = useState<NGO | null>(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const carouselSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-white text-primary min-h-screen flex flex-col">
      {/* Hero Slider */}
      <section className="relative">
        <Slider {...sliderSettings}>
          {["/images/slide1.jpg", "/images/slide2.jpg", "/images/slide3.jpg"].map((img, idx) => (
            <div key={idx} className="relative h-[80vh]">
              <img src={img} alt={`Slide ${idx}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
                  Empowering Futures Together
                </h1>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* About */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-primary">Who We Are</h2>
        <p className="text-lg text-gray-600">
          We connect NGOs supporting underprivileged students with mentors and donors to create lasting educational impact.
        </p>
      </section>

      {/* Impact */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Students Reached", value: "8,500+" },
            { label: "NGOs Connected", value: "120+" },
            { label: "Mentors Engaged", value: "300+" },
            { label: "Projects Supported", value: "95+" },
          ].map((stat, idx) => (
            <div key={idx} className="p-4">
              <h3 className="text-3xl font-bold text-secondary">{stat.value}</h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NGOs */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Partner NGOs</h2>
        <Slider {...carouselSettings}>
          {ngos.map((ngo) => (
            <div key={ngo.id} className="p-4">
              <div
                onClick={() => setSelectedNGO(ngo)}
                className="cursor-pointer bg-white shadow-md rounded-lg p-4 text-center hover:shadow-xl transition"
              >
                <img src={ngo.logo} alt={ngo.name} className="h-24 mx-auto mb-4 object-contain" />
                <h3 className="text-lg font-semibold">{ngo.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* NGO Popup */}
      <AnimatePresence>
        {selectedNGO && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-8 rounded-xl max-w-lg w-full shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-2">{selectedNGO.name}</h3>
              <p className="text-gray-600 mb-4">{selectedNGO.description}</p>
              <button
                onClick={() => setSelectedNGO(null)}
                className="bg-secondary text-white px-6 py-2 rounded-md hover:bg-primary transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Volunteers */}
      <section className="py-16 px-6 bg-blue-50">
        <h2 className="text-3xl font-bold text-center mb-8">Our Verified Volunteers</h2>
        <Slider {...carouselSettings}>
          {volunteers.map((v) => (
            <div key={v.id} className="p-4">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <img src={v.image} alt={v.name} className="h-24 w-24 mx-auto rounded-full object-cover mb-4" />
                <h3 className="font-semibold text-lg">{v.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-blue-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">“{t.text}”</p>
              <p className="mt-4 text-secondary font-semibold">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-primary text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Connect With Us</h2>
        <p className="mb-6">Join hands with us to make education accessible for everyone.</p>
        <button className="bg-white text-primary font-semibold px-8 py-3 rounded-full hover:bg-secondary hover:text-white transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default LandingPage;
