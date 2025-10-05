import React, { useState } from "react";
import dozz from '../assets/images/dozz.jpg';
import mojj from '../assets/images/mojj.jpg';
import fil from '../assets/images/fil.jpg';
import swtt from '../assets/images/swtt.jpg';
import nice from '../assets/images/nice.jpg';
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Mem() {
  const [current, setCurrent] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const memes = [
    {
      id: 1,
      image: dozz,
      owner: "Dozyay",
      xHandle: "@dozyayy",
      date: "2025-10-04",
    },
    {
      id: 2,
      image: mojj,
      owner: "Moja",
      xHandle: "@Defi_Moja",
      date: "2025-10-04",
    },
    {
      id: 3,
      image: fil,
      owner: "OneFilo",
      xHandle: "@OneFilo204",
      date: "2025-10-04",
    },
    {
      id: 4,
      image: swtt,
      owner: "DeFiQueen",
      xHandle: "@DeFiQueen",
      date: "2025-10-04",
    },
    {
      id: 5,
      image: nice,
      owner: "Niceguy",
      xHandle: "@Az_croven",
      date: "2025-10-04",
    },
  ];

  const nextMeme = () => setCurrent((prev) => (prev + 1) % memes.length);
  const prevMeme = () =>
    setCurrent((prev) => (prev === 0 ? memes.length - 1 : prev - 1));

  const downloadMeme = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "meme-of-the-day.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openPreview = () => setIsPreviewOpen(true);
  const closePreview = () => setIsPreviewOpen(false);

  const meme = memes[current];

  // Web3Forms handler
  const sendForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "fbb63ae0-0d4c-4e2d-92a5-4282967f0268");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSent(true);
        e.target.reset();
        setTimeout(() => setSent(false), 4000);
      } else {
        alert("Error sending message. Please try again.");
      }
    } catch (error) {
      alert("Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br py-30 from-orange-400 to-red-500 flex flex-col items-center justify-center text-white p-6">
      <h1 className="text-4xl font-extrabold mb-6">Memes of the Day 😂</h1>

      <div className="relative w-full max-w-md bg-white text-black rounded-2xl shadow-2xl overflow-hidden">
        <img
          src={meme.image}
          alt="Meme"
          className="w-full h-72 object-cover cursor-pointer"
          onClick={openPreview}
        />

        <div className="p-4 flex flex-col items-start">
          <p className="text-sm text-gray-600 mb-1">
            📅 Added:{" "}
            <span className="font-semibold">
              {new Date(meme.date).toLocaleDateString()}
            </span>
          </p>
          <p className="text-sm text-gray-600 mb-1">
            👤 By: <span className="font-semibold">{meme.owner}</span>
          </p>
          <p className="text-sm text-blue-600 mb-3">
            X:{" "}
            <a
              href={`https://x.com/${meme.xHandle.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {meme.xHandle}
            </a>
          </p>

          <div className="flex gap-3 w-full justify-between">
            <button
              onClick={openPreview}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              Preview
            </button>
            <button
              onClick={() => downloadMeme(meme.image)}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all"
            >
              Download
            </button>
          </div>
        </div>

        {/* Carousel controls */}
        <button
          onClick={prevMeme}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-60 transition-all"
          aria-label="Previous meme"
        >
          ◀
        </button>
        <button
          onClick={nextMeme}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-60 transition-all"
          aria-label="Next meme"
        >
          ▶
        </button>
      </div>

      <p className="mt-4 text-sm text-white/80">
        Showing {current + 1} of {memes.length}
      </p>

      {/* Preview Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closePreview}
              className="absolute -top-4 right-0 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 transition-all"
              aria-label="Close preview"
            >
              ✕
            </button>
            <img
              src={meme.image}
              alt="Meme preview"
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center text-white">
              <p className="text-lg font-semibold">{meme.owner}</p>
              <p className="text-sm opacity-80">{meme.xHandle}</p>
            </div>
          </div>
        </div>
      )}

      {/* Upload Request Form */}
      <div className="mt-20 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          Request Meme Upload 📩
        </h3>
        <form onSubmit={sendForm} className="flex flex-col gap-4">
          <input
            type="url"
            name="image_link"
            placeholder="Paste image link here"
            required
            className="p-2 rounded-lg bg-white text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email (optional)"
            className="p-2 rounded-lg bg-white text-black"
          />
          <textarea
            name="message"
            placeholder="Message (optional)"
            rows="3"
            className="p-2 rounded-lg bg-white text-black"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="mt-4 py-3 px-6 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform flex justify-center items-center"
          >
            {loading ? (
              <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
            ) : (
              "Send Request"
            )}
          </button>
        </form>
        {sent && (
          <p className="mt-4 text-green-200 text-center">
            ✅ Your request has been sent successfully!
          </p>
        )}

        {/* Direct Contact */}
        <p className="text-sm text-white/70 mt-4 text-center">
          Already have the image? Send it directly via Email, WhatsApp, or X.
        </p>
        <div className="mt-2 flex justify-center gap-6 text-white text-2xl">
          <a href="mailto:control0177@gmail.com" className="hover:text-yellow-200">
            <FaEnvelope />
          </a>
          <a href="https://wa.me/qr/7A4U35SCTPLLK1" target="_blank" rel="noreferrer" className="hover:text-yellow-200">
            <FaWhatsapp />
          </a>
          <a href="https://x.com/ReaperX771?t=2KfJeNsrbE5G54frMSaVuA&s=09" target="_blank" rel="noreferrer" className="hover:text-yellow-200">
            <BsTwitterX />
          </a>
        </div>
        
      </div>
    </section>
  );
}