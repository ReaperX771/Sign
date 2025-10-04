import React, { useState } from "react";
import dozz from '../assets/images/dozz.jpg'
import mojj from '../assets/images/mojj.jpg'
import fil from '../assets/images/fil.jpg'
import swtt from '../assets/images/swtt.jpg'
import nice from '../assets/images/nice.jpg'

export default function Mem() {
  const [current, setCurrent] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

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
    // {
    //   id: 6,
    //   image: "https://i.imgur.com/w09hH8C.jpeg",
    //   owner: "MetaverseMax",
    //   xHandle: "@MetaMax",
    //   date: "2025-10-04",
    // },
    // {
    //   id: 7,
    //   image: "https://i.imgur.com/RPw9Bjd.jpeg",
    //   owner: "Web3Guru",
    //   xHandle: "@Web3Guru",
    //   date: "2025-10-04",
    // },
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

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-400 to-red-500 flex flex-col items-center justify-center text-white p-6">
      <h1 className="text-4xl font-extrabold mb-6">Meme of the Day 😂</h1>

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
    </section>
  );
}