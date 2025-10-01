import React from "react";
import { FaGooglePlay, FaApple, FaAndroid } from "react-icons/fa";

function Cta() {
  return (
    <section className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 py-20 px-6 md:px-12 text-center text-white overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Be Part of the <span className="text-yellow-200">Orange Dynasty</span> Today
        </h2>
        <p className="text-lg md:text-xl mb-10 opacity-90">
          Join a global community of dreamers, creators, and doers who are shaping 
          the future of the Sign ecosystem. Your journey begins here.
        </p>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white mb-4">Download from:</h1>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://play.google.com/store/apps/details?id=global.sign.orange"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-yellow-100 transition transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaGooglePlay className="text-2xl" />
              PlayStore
            </a>
            <a
              href="https://public-cdn.sign.global/OrangeApps/orangedynasty_release_1.3.1.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-orange-600 transition transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaAndroid className="text-2xl" />
              APK
            </a>
            <a
              href="https://apps.apple.com/app/6747742070"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-orange-600 transition transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaApple className="text-2xl" />
              Appstore
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;