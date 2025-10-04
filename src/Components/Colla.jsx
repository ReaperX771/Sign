import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaTwitter, FaDiscord, FaTelegram, FaTimes } from "react-icons/fa";
import { SiSignal } from "react-icons/si";

import nige from "../assets/images/nige.jfif";
import swt from "../assets/images/swt.jpg";
import moj from "../assets/images/moj.jpg";
import rxx from "../assets/images/rxx.png";
import phi from "../assets/images/phi.jpg";
import doz from "../assets/images/doz.jpg";
import lio from "../assets/images/lioo.jpg";

const people = [
  {
    name: "NiceGuy",
    role: "Project Coordinator & Strategic Lead",
    img: nige,
    quote:
      "As the Project Coordinator, NiceGuy ensures the Orange Dynasty vision remains perfectly aligned while keeping the entire team synchronized and motivated. He serves as the crucial bridge between creative concepts and practical execution, overseeing project timelines, resource allocation, and team coordination to deliver exceptional results.",
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
    role: "Accessibility & Usability Review Specialist",
    img: swt,
    quote:
      "Swtcryptovibe12 specializes in ensuring every user feels completely included and empowered when interacting with our platform. Through rigorous usability testing and comprehensive accessibility reviews, they maintain our human-centered design philosophy, identifying potential barriers and implementing solutions that make our technology accessible to users of all abilities and backgrounds.",
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
    role: "Senior Product Strategist & Roadmap Architect",
    img: doz,
    quote:
      "Dozyay excels at transforming bold, innovative ideas into actionable, workable product roadmaps. As our Product Strategist, they shape how Orange Dynasty evolves by conducting market analysis, defining product vision, and establishing clear milestones that guide our development team toward creating meaningful user experiences that resonate with our community.",
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
    role: "Lead Project Designer & Visual Experience Architect",
    img: moj,
    quote:
      "Moja masterfully transforms abstract creativity into tangible visual experiences that captivate and engage our users. As the Project Designer, they craft the complete look, feel, and flow of our platform, ensuring every interface element, color scheme, and user interaction feels intuitive and welcoming while maintaining brand consistency across all touchpoints.",
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
    role: "Customer Support Lead & Community Feedback Manager",
    img: phi,
    quote:
      "OneFilo Phillips serves as the vital connection between our users and development team, actively listening to community feedback, providing exceptional support, and implementing improvements based on user insights. They ensure every voice within the Orange Dynasty community is heard, valued, and incorporated into our continuous improvement process.",
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
    role: "Quality Assurance Lead & Comprehensive Testing Specialist",
    img: lio,
    quote:
      "Lionel proactively breaks things before our users ever encounter issues, ensuring platform stability, reliability, and seamless performance across every device and browser. As our Quality Assurance lead, they design and execute comprehensive test plans, identify potential vulnerabilities, and validate that every feature meets our high standards for user experience.",
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
    role: "Lead Developer & UI/UX Design Architect",
    img: rxx,
    quote:
      "ReaperX brought Orange Dynasty to life from initial design concepts to fully functional Web3 experiences. As the Lead Developer and UI/UX Designer, they architect the complete visual identity, user interface logic, and seamless interaction flows that define our platform, balancing aesthetic appeal with technical excellence in every implementation.",
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
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
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
        className="bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 py-20 px-6 md:px-12 overflow-x-hidden"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Meet the <span className="text-[#fc4700]">Collaborators</span>
          </h2>

          {/* Card */}
          <div
            key={person.name}
            className={`bg-white rounded-2xl shadow-lg p-8 md:p-12 transition-all duration-700 transform border-4 ${cardBorder()} mx-auto`}
          >
            <div
              className="relative group mx-auto mb-6 w-40 h-40 cursor-pointer"
              onClick={() => openImageModal(person.img)}
              onKeyDown={(e) => e.key === 'Enter' && openImageModal(person.img)}
              tabIndex={0}
              role="button"
              aria-label={`Preview ${person.name}'s profile picture`}
            >
              <img
                src={person.img}
                alt={person.name}
                className={`w-40 h-40 rounded-full object-cover border-4 ${cardBorder()} transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,140,0,0.6)]`}
              />
              <div
                className={`absolute inset-0 rounded-full bg-black bg-opacity-40 flex items-center justify-center text-white text-sm font-semibold transition-opacity ${
                  showOverlay ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                Click to Preview 👁️
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900">{person.name}</h3>
            <p className="text-lg font-semibold italic mb-6 text-gray-700 bg-gradient-to-r from-orange-50 to-pink-50 py-2 px-4 rounded-lg">
              {person.role}
            </p>
            <p className="leading-relaxed text-justify text-gray-800 text-lg">
              {person.quote}
            </p>

            {/* Socials */}
            <div className="flex justify-center gap-4 mt-8">
              <a
                href={person.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-400 to-blue-600 p-3 rounded-full text-white text-xl transition hover:bg-white hover:text-blue-600"
              >
                <FaTwitter />
              </a>
              <a
                href={person.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-sky-400 to-sky-600 p-3 rounded-full text-white text-xl transition hover:bg-white hover:text-sky-600"
              >
                <FaTelegram />
              </a>
              <a
                href={person.socials.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-indigo-400 to-indigo-600 p-3 rounded-full text-white text-xl transition hover:bg-white hover:text-indigo-600"
              >
                <FaDiscord />
              </a>
              <a
                href={person.socials.sign}
                target="_blank"
                rel="noopener noreferrer"
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

          {/* Credit */}
          <p className="text-center mt-10 text-sm text-gray-600">
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
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white text-2xl p-2 mt-10 hover:text-orange-400 transition-colors z-10 bg-black bg-opacity-50 rounded-full"
              aria-label="Close image preview"
            >
              <FaTimes size={24} />
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <img
                src={currentImage}
                alt={`${person.name} - Full Preview`}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 text-white text-center">
                <h3 className="text-xl font-bold">{person.name}</h3>
                <p className="text-sm opacity-90">{person.role}</p>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-white text-sm opacity-75">
                Click outside the image, press ESC, or click the X to close
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Colla;