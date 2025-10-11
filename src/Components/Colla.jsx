import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaTwitter, FaDiscord, FaTelegram, FaTimes } from "react-icons/fa";
import { SiSignal } from "react-icons/si";

import nic from "../assets/images/nic.jpg";
import swt from "../assets/images/swt.jpg";
import moj from "../assets/images/moj.jpg";
import rxxx from "../assets/images/rxxx.png";
import phi from "../assets/images/phi.jpg";
import doz from "../assets/images/doz.jpg";
import lio from "../assets/images/lioo.jpg";

const people = [
  {
    name: "NiceGuy",
    role: "Project Coordinator",
    img: nic,
    quote:
      "Keeps the Orange Dynasty vision aligned and the team on track. The bridge between creativity and execution.",
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
    role: "Accessibility Reviewer",
    img: swt,
    quote:
      "Ensures every user feels included — testing usability and accessibility to keep our design human-centered.",
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
    role: "Product Strategist",
    img: doz,
    quote:
      "Turns bold ideas into workable roadmaps. Shapes how Orange Dynasty evolves, one strategy at a time.",
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
    role: "Project Designer",
    img: moj,
    quote:
      "Transforms creativity into visual experience — crafting the look and flow that make users feel at home.",
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
    role: "Customer Support",
    img: phi,
    quote:
      "Listens, helps, and improves. Bridges our users and developers — because every voice shapes the Dynasty.",
    highlight: "member",
    socials: {
      twitter: "https://x.com/OneFilo204?t=2HMt_MPonqouoY6WVkDrSQ&s=09",
      telegram: "https://t.me/FILO2561",
      discord: "https://discord.gg/ySvspeUp",
      sign: "https://orange.sign.global/app?post=1973893513930616283",
    },
  },
  {
    name: "Lionel",
    role: "Quality Assurance",
    img: lio,
    quote:
      "Breaks things before users do — ensuring stability, reliability, and smooth experience across every device.",
    highlight: "member",
    socials: {
      twitter: "https://x.com/LionelEwuz56644?t=5RfLWp8OX9wP2NCkMWo9Xg&s=09",
      telegram: "https://t.me/Lionel223322",
      discord: "https://discord.gg/HcNSSMrX",
      sign: "https://orange.sign.global/app?post=1974521643728907740",
    },
  },
  {
    name: "ReaperX",
    role: "Lead Developer & UI/UX Designer",
    img: rxxx,
    quote:
      "Brought Orange Dynasty to life — from design concepts to functional Web3 experiences. The mind behind the visuals, logic, and flow.",
    highlight: "developer",
    socials: {
      twitter: "https://x.com/ReaperX771?t=Q__51z-AmvlqQeEVpYJvnA&s=09",
      telegram: "https://t.me/ReaperX771",
      discord: "https://discord.gg/XrUPEX4r",
      sign: "#",
    },
  },
];

function Colla() {
  const [current, setCurrent] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? people.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === people.length - 1 ? 0 : prev + 1));
  
  const person = people[current];

  const cardBorder = () => {
    if (person.highlight === "leader") return "border-yellow-400";
    if (person.highlight === "developer") return "border-teal-500";
    if (person.highlight === "member") return "border-orange-400";
    return "border-gray-200";
  };

  const handleTouchPreview = () => {
    setShowOverlay(true);
    setTimeout(() => setShowOverlay(false), 1000);
  };

  const openImageModal = (imgSrc) => {
    setCurrentImage(imgSrc);
    setShowImageModal(true);
  };

  const closeImageModal = () => {
    setShowImageModal(false);
    setCurrentImage("");
  };

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.keyCode === 27) {
        closeImageModal();
      }
    };

    if (showImageModal) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [showImageModal]);

  // Handle click outside modal to close
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closeImageModal();
    }
  };

  return (
    <>
      <section
        id="colla"
        className="bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 py-12 md:py-20 px-4 md:px-12 overflow-x-hidden"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-8">
            Meet the <span className="text-[#fc4700]">Collaborators</span>
          </h2>

          {/* Card */}
          <div
            key={person.name}
            className={`bg-white rounded-2xl shadow-lg p-6 md:p-8 transition-all duration-700 transform border-4 ${cardBorder()} mx-auto`}
          >
            <div
              className="relative group mx-auto mb-4 md:mb-6 w-32 h-32 md:w-40 md:h-40 cursor-pointer"
              onClick={() => openImageModal(person.img)}
              onKeyDown={(e) => e.key === 'Enter' && openImageModal(person.img)}
              tabIndex={0}
              role="button"
              aria-label={`Preview ${person.name}'s profile picture`}
            >
              <img
                src={person.img}
                alt={person.name}
                className={`w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 ${cardBorder()} transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,140,0,0.6)]`}
              />
              <div
                className={`absolute inset-0 rounded-full bg-black bg-opacity-40 flex items-center justify-center text-white text-xs md:text-sm font-semibold transition-opacity ${
                  showOverlay ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                Click to Preview 👁️
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{person.name}</h3>
            <p className="text-sm md:text-base font-semibold italic mb-4 text-gray-600">
              {person.role}
            </p>
            <p className="text-gray-800 leading-relaxed text-sm md:text-base">
              {person.quote}
            </p>

            {/* Socials */}
            <div className="flex justify-center gap-3 md:gap-4 mt-6">
              <a
                href={person.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-400 to-blue-600 p-2 md:p-3 rounded-full text-white text-lg md:text-xl transition hover:bg-white hover:text-blue-600"
              >
                <FaTwitter />
              </a>
              <a
                href={person.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-sky-400 to-sky-600 p-2 md:p-3 rounded-full text-white text-lg md:text-xl transition hover:bg-white hover:text-sky-600"
              >
                <FaTelegram />
              </a>
              <a
                href={person.socials.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-indigo-400 to-indigo-600 p-2 md:p-3 rounded-full text-white text-lg md:text-xl transition hover:bg-white hover:text-indigo-600"
              >
                <FaDiscord />
              </a>
              <a
                href={person.socials.sign}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-orange-400 to-orange-600 p-2 md:p-3 rounded-full text-white text-lg md:text-xl transition hover:bg-white hover:text-orange-600"
              >
                <SiSignal />
              </a>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center mt-6 md:mt-8 max-w-xs md:max-w-md mx-auto">
            <button
              onClick={prevSlide}
              className="p-2 md:p-3 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600 transition"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 md:p-3 bg-red-600 text-white rounded-full shadow-md hover:bg-orange-600 transition"
            >
              <FaArrowRight />
            </button>
          </div>

          {/* Credit */}
          <p className="text-center mt-8 md:mt-10 text-xs md:text-sm text-gray-600">
            Built & Designed by <span className="font-semibold text-orange-600">ReaperX</span> ⚡
          </p>
        </div>
      </section>

      {/* Image Preview Modal */}
      {showImageModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview dialog"
        >
          <div className="relative max-w-4xl max-h-full w-full">
            <button
              onClick={closeImageModal}
              className="absolute -top-10 md:-top-12 right-0 text-white text-xl md:text-2xl p-2 mt-10 hover:text-orange-400 transition-colors z-10 bg-black bg-opacity-50 rounded-full"
              aria-label="Close image preview"
            >
              <FaTimes size={20} className="md:w-6 md:h-6" />
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl mx-2">
              <img
                src={currentImage}
                alt={`${person.name} - Full Preview`}
                className="w-full h-auto max-h-[70vh] md:max-h-[80vh] object-contain"
              />
              
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-3 md:p-4 text-white text-center">
                <h3 className="text-lg md:text-xl font-bold">{person.name}</h3>
                <p className="text-xs md:text-sm opacity-90">{person.role}</p>
              </div>
            </div>
            
            <div className="text-center mt-3 md:mt-4">
              <p className="text-white text-xs md:text-sm opacity-75">
                Click outside, press ESC, or click X to close
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Colla;