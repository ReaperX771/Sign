import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import {
  FaInfoCircle,
  FaUsers,
  FaCoins,
  FaBook,
  FaImages,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Bar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    about: false,
    community: false,
    token: false,
    resources: false,
    gallery: false,
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const navItems = [
    {
      name: "About",
      icon: <FaInfoCircle className="inline-block mr-2 text-white" />,
      key: "about",
      dropdown: [
        { label: "Our Mission", link: "https://example.com/mission" },
        { label: "Team", link: "https://example.com/team" },
      ],
    },
    {
      name: "Community",
      icon: <FaUsers className="inline-block mr-2 text-white" />,
      key: "community",
      dropdown: [
        { label: "Official X account", link: "https://x.com/ethsign" },
        { label: "X community", link: "https://x.com/sign" },
        { label: "Telegram", link: "https://t.me/orangedynasty" },
        { label: "Discord", link: "https://discord.gg/skA5fkqVwT" },
      ],
    },
    {
      name: "Our Token",
      icon: <FaCoins className="inline-block mr-2 text-white" />,
      key: "token",
      dropdown: [
        { label: "Token site", link: "https://sign.global/sign" },
        { label: "Stake $Sign", link: "https://stake.sign.global/" },
        { label: "Bridge $Sign", link: "https://bridge.sign.global/" },
      ],
    },
    {
      name: "Resources",
      icon: <FaBook className="inline-block mr-2 text-white" />,
      key: "resources",
      dropdown: [
        { label: "TokenTable Docs", link: "https://docs.tokentable.xyz/" },
        { label: "Sign Protocol Docs", link: "https://docs.sign.global/" },
        { label: "EthSign Docs", link: "https://docs.ethsign.xyz/" },
      ],
    },
    {
      name: "Gallery",
      icon: <FaImages className="inline-block mr-2 text-white" />,
      key: "gallery",
      dropdown: [
        { label: "Photos", path: "gallery/photos" },
        { label: "Videos", path: "/gallery/videos" },
      ],
    },
  ];

  return (
    <section>
      <div>
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-20 py-6 bg-gradient-to-b from-[#fc9200] to-[#f72800] fixed top-0 left-0 right-0 shadow z-50 backdrop-blur-3xl">
          <Link to="/" className="cursor-pointer">
            <img src={logo} alt="Orange Dynasty Logo" className="h-10" />
          </Link>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="focus:outline-none p-2 rounded-md bg-white/10 hover:bg-white/20 transition-all"
              style={{ zIndex: 100 }}
            >
              {isMenuOpen ? (
                <FaTimes className="text-white text-2xl" />
              ) : (
                <FaBars className="text-white text-2xl" />
              )}
            </button>
          </div>

          {/* Navigation Menu */}
          <nav
            className={`${
              isMenuOpen && !isLgScreen() ? "flex" : "hidden lg:flex"
            } flex-col lg:flex-row gap-4 lg:gap-10 text-white text-lg font-medium absolute lg:static top-16 left-0 right-0 lg:bg-transparent p-4 lg:p-0 h-[calc(100vh-4rem)] lg:h-auto ${
              isMenuOpen && !isLgScreen() ? "bg-gradient-to-b from-[#AC2B06] to-[#9E2305]" : ""
            }`}
            style={{
              maxWidth: isMenuOpen && !isLgScreen() ? '100vw' : undefined,
              width: isMenuOpen && !isLgScreen() ? '100vw' : undefined,
              left: isMenuOpen && !isLgScreen() ? 0 : undefined,
              right: isMenuOpen && !isLgScreen() ? 0 : undefined,
              top: isMenuOpen && !isLgScreen() ? '4rem' : undefined,
            }}
          >
            {navItems.map((item) => (
              <div key={item.key} className="relative">
                <button
                  onClick={() => toggleDropdown(item.key)}
                  className="flex items-center hover:text-orange-300 transition-colors duration-200"
                >
                  {item.icon}
                  <span className="no-underline text-white">
                    {item.name}
                  </span>
                  <FaChevronDown
                    className={`ml-2 transform transition-transform duration-200 ${
                      dropdownOpen[item.key] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {/* Dropdown Menu */}
                <div
                  className={`${
                    dropdownOpen[item.key] ? "block" : "hidden"
                  } lg:absolute lg:bg-gray-900 lg:shadow-lg lg:rounded-md mt-2 w-48 transition-all duration-200`}
                >
                  {item.dropdown.map((subItem) => (
                    item.key === "gallery" ? (
                      <a
                        key={subItem.label}
                        href={subItem.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-white hover:bg-orange-600 hover:text-white transition-colors duration-200"
                        onClick={() => {
                          setIsMenuOpen(false); // Close mobile menu on click
                          setDropdownOpen({ ...dropdownOpen, [item.key]: false }); // Close dropdown
                        }}
                      >
                        {subItem.label}
                      </a>
                    ) : (
                      <a
                        key={subItem.label}
                        href={subItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-white hover:bg-orange-600 hover:text-white transition-colors duration-200"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setDropdownOpen({ ...dropdownOpen, [item.key]: false });
                        }}
                      >
                        {subItem.label}
                      </a>
                    )
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}

// Helper function to check if screen is lg or larger
function isLgScreen() {
  return window.innerWidth >= 1024; // lg breakpoint in Tailwind
}

export default Bar;