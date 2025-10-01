import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white py-12">
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
            <li><AnchorLink  href="#about" className="hover:text-orange-400 transition">About</AnchorLink></li>
            <li><AnchorLink offset={50}  href="#how" className="hover:text-orange-400 transition">How it Works</AnchorLink></li>
            <li><AnchorLink offset={50} href="#community" className="hover:text-orange-400 transition">Community</AnchorLink></li>
            <li><AnchorLink offset={50}  href="#faq" className="hover:text-orange-400 transition">FAQ</AnchorLink></li>
            <li><AnchorLink href="#contact" className="hover:text-orange-400 transition">Contact</AnchorLink></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><AnchorLink href="#form" className="hover:text-orange-400 transition">Ask a Question</AnchorLink></li>
            <li><AnchorLink href="#docs" className="hover:text-orange-400 transition">Documentation</AnchorLink></li>
            <li><AnchorLink href="#privacy" className="hover:text-orange-400 transition">Privacy Policy</AnchorLink></li>
            <li><AnchorLink href="#terms" className="hover:text-orange-400 transition">Terms of Service</AnchorLink></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <div className="flex space-x-5 text-2xl">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <BsTwitterX />
            </a>
            <a
              href="mailto:info@orangedynasty.com"
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