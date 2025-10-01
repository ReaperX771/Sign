import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import nige from '../assets/images/nige.jfif'
import jap from '../assets/images/jap.jpg'
import gern from '../assets/images/gern.jpg'
import braz from '../assets/images/braz.jpg'

const people = [
  {
    name: "Amina",
    country: "Nigeria",
    img: nige,
    quote:
      "Orange Dynasty gave me a voice in the Sign ecosystem. I’ve been able to share ideas, collaborate with people across continents, and find recognition for my contributions. It feels like being part of something bigger than myself — a movement that grows every day.",
  },
  {
    name: "Kenji",
    country: "Japan",
    img: jap,
    quote:
      "I earned my first Oranges by contributing to open discussions and projects. The experience made me realize that every voice matters here. The recognition is real, and it pushes me to keep building, connecting, and striving to rise within the Dynasty.",
  },
  {
    name: "Sophia",
    country: "Germany",
    img: gern,
    quote:
      "Being part of the Dynasty feels like shaping the future. I’ve met innovators, dreamers, and doers who are all aligned toward making the Sign ecosystem stronger. It’s inspiring to know my presence is valued and my contributions leave a lasting impact.",
  },
  {
    name: "Diego",
    country: "Brazil",
    img: braz,
    quote:
      "Through Orange Dynasty, I’ve met collaborators who have become close friends. Together, we’ve built projects, exchanged knowledge, and grown our reputation. It’s more than just earning Oranges — it’s about building identity and legacy.",
  },
];

function Community() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? people.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === people.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id='community' className="bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Community <span className="text-orange-600">Showcase</span>
        </h2>

        {/* Showcase content */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-12 transition-all duration-700">
          <img
            src={people[current].img}
            alt={people[current].name}
            className="w-40 h-40 rounded-full mx-auto object-cover mb-6"
          />
          <h3 className="text-2xl font-bold text-gray-900">
            {people[current].name}
          </h3>
          <p className="text-sm text-gray-600 italic">{people[current].country}</p>
          <p className="mt-6 text-gray-800 leading-relaxed">
            {people[current].quote}
          </p>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={prevSlide}
            className="p-3 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600 transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 bg-red-600 text-white rounded-full shadow-md hover:bg-orange-600 transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Community;