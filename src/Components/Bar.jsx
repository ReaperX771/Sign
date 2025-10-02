import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  FaUsers,
  FaCoins,
  FaBook,
  FaImages,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { BiSolidNavigation } from "react-icons/bi";

function Bar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    about: false,
    community: false,
    token: false,
    resources: false,
    gallery: false,
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  // prevent background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  // Handles anchor navigation from any route
  const handleAnchorNav = (anchor) => {
    setIsMenuOpen(false);
    const scrollWithOffset = (el) => {
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80; // 80px offset
      window.scrollTo({ top: y, behavior: "smooth" });
    };
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.querySelector(anchor);
        scrollWithOffset(el);
      }, 300);
    } else {
      const el = document.querySelector(anchor);
      scrollWithOffset(el);
    }
  };

  const navItems = [
    {
      name: "Navigations",
      icon: <BiSolidNavigation className="inline-block mr-2 text-white" />,
      key: "about",
      dropdown: [
        { label: "Homepage", anchor: "#hero" },
        { label: "What is Sign?", anchor: "#what" },
        { label: "Why Sign", anchor: "#why" },
        { label: "How it works", anchor: "#how" },
        { label: "CTA", anchor: "#cta" },
        { label: "Have Question?", anchor: "#faq" },
        { label: "Footer", anchor: "#footer" },
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
  { label: "Our Mission", path: "/community/mission" },
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
        { label: "Photos", path: "/gallery/photos" },
        // { label: "Videos", path: "/gallery/videos" },
      ],
    },
  ];

  return (
    <section>
      <div>
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-20 py-6 bg-gradient-to-b from-[#fc9200] to-[#f72800] fixed top-0 left-0 right-0 shadow z-50">
          {/* Logo */}
          <button className="cursor-pointer z-50 bg-transparent border-none p-0" onClick={() => handleAnchorNav("#hero") }>
            <img src={logo} alt="Orange Dynasty Logo" className="h-10" />
          </button>

          {/* Hamburger */}
          <div className="lg:hidden flex items-center z-50">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"className="focus:outline-none p-2 rounded-md bg-white/10 hover:bg-white/20 transition-all"
            >
              {isMenuOpen ? (
                <FaTimes className="text-white text-2xl" />
              ) : (
                <FaBars className="text-white text-2xl" />
              )}
            </button>
          </div>

          {/* Navigation */}
          <nav
            className={`
              ${isMenuOpen
                ? "fixed inset-0 bg-gradient-to-b from-[#f72800] to-[#fc9200] flex flex-col items-start justify-start pt-24 gap-6 pl-6 z-40 overflow-y-auto"
                : "hidden"}
              lg:flex lg:static lg:flex-row lg:gap-10 lg:bg-transparent lg:pt-0 lg:items-center lg:justify-start
            `}
          >
            {navItems.map((item) => (
              <div key={item.key} className="relative text-left">
                <button
                  onClick={() => toggleDropdown(item.key)}
                  className="flex items-center justify-start hover:text-orange-300 transition-colors duration-200 w-full group"
                >
                  {item.icon}
                  <span className="no-underline text-white">{item.name}</span>
                  <FaChevronDown
                    className={`ml-2 text-white transition-transform duration-200 group-hover:text-yellow-300 ${dropdownOpen[item.key] ? "rotate-180 text-yellow-300" : ""}`}
                  />
                </button>

                {/* Dropdown */}
                <div
                  className={`
                    ${dropdownOpen[item.key] ? "block" : "hidden"}
                    lg:absolute lg:bg-gray-900 lg:shadow-lg lg:rounded-md mt-2 w-48
                  `}
                >
                  {item.dropdown.map((subItem) =>
                    subItem.anchor ? (
                      <button
                        key={subItem.label}
                        className="block px-4 py-2 text-white hover:bg-orange-600 transition-colors cursor-pointer text-left w-full"
                        onClick={() => handleAnchorNav(subItem.anchor)}
                      >
                        {subItem.label}
                      </button>
                    ) : subItem.path ? (
                      <Link
                        key={subItem.label}
                        to={subItem.path}
                        className="block px-4 py-2 text-white hover:bg-orange-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ) : (
                      <a
                        key={subItem.label}
                        href={subItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-white hover:bg-orange-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.label}
                      </a>
                    )
                  )}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Bar;