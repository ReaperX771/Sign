import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  // Handles anchor navigation from any route
  const handleAnchorNav = (anchor) => {
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
  return (
    <footer id='footer' className="bg-[#0f0f0f] text-white py-12">
      <div className="w-[90%] m-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo + Tagline */}
        <div>
          <div className="text-2xl font-bold text-orange-500 mb-3">
            <img src={logo} alt="Orange Dynasty Logo" className="w-32" />
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Building the next phase of Orange Dynasty with powerful tools and
            community at the core.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><button onClick={() => handleAnchorNav("#what")} className="hover:text-orange-400 transition bg-transparent border-none p-0 m-0 text-inherit cursor-pointer">About</button></li>
            <li><button onClick={() => handleAnchorNav("#how")} className="hover:text-orange-400 transition bg-transparent border-none p-0 m-0 text-inherit cursor-pointer">How it Works</button></li>
            <li><button onClick={() => handleAnchorNav("#community")} className="hover:text-orange-400 transition bg-transparent border-none p-0 m-0 text-inherit cursor-pointer">Community</button></li>
            <li><button onClick={() => handleAnchorNav("#faq")} className="hover:text-orange-400 transition bg-transparent border-none p-0 m-0 text-inherit cursor-pointer">FAQ</button></li>
            <li><button onClick={() => handleAnchorNav("#contact")} className="hover:text-orange-400 transition bg-transparent border-none p-0 m-0 text-inherit cursor-pointer">Contact</button></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/ask" className="hover:text-orange-400 transition bg-transparent border-none p-0 m-0 text-inherit cursor-pointer">Ask a Question</Link></li>
            <li><Link to="/doc"  className="hover:text-orange-400 transition bg-transparent border-none p-0 m-0 text-inherit cursor-pointer">Documentation</Link></li>
            <li><Link to="/priva" className="hover:text-orange-400 transition">Privacy Policy</Link></li>
            <li><Link to="/tos" className="hover:text-orange-400 transition">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <div className="flex space-x-5 text-2xl">
            <a
              href="https://wa.me/qr/7A4U35SCTPLLK1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://x.com/ReaperX771?t=2KfJeNsrbE5G54frMSaVuA&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <BsTwitterX />
            </a>
            <a
              href="mailto:control0177.gmail.com"
              className="hover:text-red-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="w-[90%] m-auto mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Orange Dynasty. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;