import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaTwitter, FaDiscord, FaTelegram } from "react-icons/fa";
import { SiSignal } from "react-icons/si"; 
import nige from "../assets/images/nige.jfif";
import jap from "../assets/images/jap.jpg";
import swt from "../assets/images/swt.jpg";
import moj from '../assets/images/moj.jpg'
import rxx from '../assets/images/rxx.png'
import phi from '../assets/images/phi.jpg'
import doz from '../assets/images/doz.jpg'

const people = [
  {
    name: "NiceGuy",
    role: "********************",
    img: nige,
    quote:
      "********************************************************************************.",
    highlight: "leader",
    socials: {
      twitter: "https://x.com/Az_croven",
      telegram: "https://t.me/Niceguy248",
      discord: "https://discord.gg/fjy3xbwc",
      sign: "#",
    },
  },
  {
    name: "Swtcryptovibe12",
    role: "********************",
    img: swt,
    quote:
      "********************************************************************************.",
    highlight: "member",
    socials: {
      twitter: "https://x.com/SWTCRYPTOVIBE12?t=a3l8jzjy8Q4QNJP-n2pF1w&s=09",
      telegram: "https://t.me/Swtcryptovibe12",
      discord: "https://discord.gg/bbTsSrvw",
      sign: "#",
    },
  },
  {
    name: "Dozyay",
    role: "********************r",
    img:doz,
    quote:
      "*************************************************************************************************",
    highlight: "member",
    socials: {
      twitter: "https://x.com/dozyayy",
      telegram: "https://t.me/Dozyay",
      discord: "https://discord.gg/GysJUAWj",
      sign: "https://orange.sign.global/app?post=1973035898900064807",
    },
  },
  {
    name: "Moja",
    role: "********************",
    img:moj,
    quote:
      "********************************************************************************.",
    highlight: "member",
    socials: {
      twitter: "https://x.com/Defi_Moja",
      telegram: "https://t.me/Defi_Moja",
      discord: "https://discord.gg/y9EupUtN",
      sign: "https://orange.sign.global/app?post=1972980265317941840",
    },
  },
  {
    name: "OneFilo Phillips",
    role: "********************",
    img:phi,
    quote:
      "************************************************************.",
    highlight: "member",
    socials: {
      twitter: "https://x.com/OneFilo204?t=2HMt_MPonqouoY6WVkDrSQ&s=09",
      telegram: "https://t.me/FILO2561",
      discord: "https://discord.gg/ySvspeUp",
      sign: "https://orange.sign.global/app?post=1973893513930616283",
    },
  },
  {
    name: "Member 5",
    role: "********************",
    img: jap,
    quote:
      "********************************************************************************.",
    highlight: "member",
    socials: {
      twitter: "#",
      telegram: "#",
      discord: "#",
      sign: "#",
    },
  },
  {
    name: "ReaperX",
    role: "********************",
    img:rxx,
    quote:
      "************************************************************************************************************************.",
    highlight: "developer",
    socials: {
      twitter: "https://x.com/ReaperX771?t=Q__51z-AmvlqQeEVpYJvnA&s=09",
      telegram: "#",
      discord: "https://discord.gg/XrUPEX4r",
      sign: "#",
    },
  },
];

function Colla() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? people.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === people.length - 1 ? 0 : prev + 1));
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 15000);
  //   return () => clearInterval(interval);
  // }, []);

  const person = people[current];

  // Card border color
  const cardBorder = () => {
    if (person.highlight === "leader") return "border-yellow-400";
    if (person.highlight === "developer") return "border-teal-500";
    if (person.highlight === "member") return "border-orange-400";
    return "border-gray-200";
  };
  return (
    <section
      id="colla"
      className="bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 py-20 px-6 md:px-12 overflow-x-hidden"
    >
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Meet the <span className="text-[#fc4700]">Collaborators</span>
        </h2>

        {/* Card */}
        <div
          key={person.name}
          className={`bg-white rounded-2xl shadow-lg p-8 md:p-12 transition-all duration-700 transform animate-fadeInUp border-4 ${cardBorder()}`}
        >
          <img
            src={person.img}
            alt={person.name}
            className={`w-40 h-40 rounded-full mx-auto object-cover mb-6 border-4 ${cardBorder()}`}
          />
          <h3 className="text-2xl font-bold text-gray-900">{person.name}</h3>
          <p className="text-sm italic mb-6 text-gray-600">{person.role}</p>
          <p className="leading-relaxed text-justify text-gray-800">
            {person.quote}
          </p>

          {/* Socials */}
          <div className="flex justify-center gap-4 mt-6">
            <a
              href={person.socials.twitter}
              className="bg-gradient-to-r from-blue-400 to-blue-600 p-3 rounded-full text-white text-xl transition hover:bg-white hover:text-blue-600"
              target="_blank"
            rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
            target="_blank"
            rel="noopener noreferrer"
              href={person.socials.telegram}
              className="bg-gradient-to-r from-sky-400 to-sky-600 p-3 rounded-full text-white text-xl transition hover:bg-white hover:text-sky-600"
            >
              <FaTelegram />
            </a>
            <a
            target="_blank"
            rel="noopener noreferrer"
              href={person.socials.discord}
              className="bg-gradient-to-r from-indigo-400 to-indigo-600 p-3 rounded-full text-white text-xl transition hover:bg-white hover:text-indigo-600"
            >
              <FaDiscord />
            </a>
            <a
            target="_blank"
            rel="noopener noreferrer"
              href={person.socials.sign}
              className="bg-gradient-to-r from-orange-400 to-orange-600 p-3 rounded-full text-white text-xl transition hover:bg-white hover:text-orange-600"
            >
              <SiSignal />
            </a>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mt-8 max-w-md mx-auto">
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

export default Colla;