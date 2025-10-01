import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

// 30 manual placeholders from public folder
const images = [
  { src: "/gallery/img1.jpg" },
  { src: "/gallery/img2.jpg" },
  { src: "/gallery/img3.jpg" },
  { src: "/gallery/img4.jpg" },
  { src: "/gallery/img5.jpg" },
  { src: "/gallery/img6.jpg" },
  { src: "/gallery/img7.jpg" },
  { src: "/gallery/img8.jpg" },
  { src: "/gallery/img9.jpg" },
  { src: "/gallery/img10.jpg" },
  { src: "/gallery/img11.jpg" },
  { src: "/gallery/img12.jpg" },
  { src: "/gallery/img13.jpg" },
  { src: "/gallery/img14.jpg" },
  { src: "/gallery/img15.jpg" },
  { src: "/gallery/img16.jpg" },
  { src: "/gallery/img17.jpg" },
  { src: "/gallery/img18.jpg" },
  { src: "/gallery/img19.jpg" },
  { src: "/gallery/img20.jpg" },
  { src: "/gallery/img21.jpg" },
  { src: "/gallery/img22.jpg" },
  { src: "/gallery/img23.jpg" },
  { src: "/gallery/img24.jpg" },
  { src: "/gallery/img25.jpg" },
  { src: "/gallery/img26.jpg" },
  { src: "/gallery/img27.jpg" },
  { src: "/gallery/img28.jpg" },
  { src: "/gallery/img29.jpg" },
  { src: "/gallery/img30.jpg" },
  { src: "/gallery/img31.jpg" },
  { src: "/gallery/img32.jpg" },
  { src: "/gallery/img33.jpg" },
  { src: "/gallery/img34.jpg" },
  { src: "/gallery/img35.jpg" },
  { src: "/gallery/img36.jpg" },
  { src: "/gallery/img37.jpg" },
  { src: "/gallery/img38.jpg" },
  { src: "/gallery/img39.jpg" },
  { src: "/gallery/img40.jpg" },
  { src: "/gallery/img41.jpg" },
  { src: "/gallery/img42.jpg" },
];

function Gallery() {
  const [selected, setSelected] = useState(null);
  const [index, setIndex] = useState(0);

  const openImage = (idx) => {
    setIndex(idx);
    setSelected(images[idx]);
  };

  const nextImage = () => {
    const newIndex = (index + 1) % images.length;
    setIndex(newIndex);
    setSelected(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (index - 1 + images.length) % images.length;
    setIndex(newIndex);
    setSelected(images[newIndex]);
  };

  return (
    <section className="bg-gradient-to-r from-orange-400 via-orange-500 to-[#f72800] py-20 px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto text-center mt-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow mb-12">
          Image <span className="text-yellow-200">Gallery</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="max-w-xs w-full mx-auto bg-white/90 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={img.src}
                alt=""
                className="w-full h-60 object-cover"
              />
              <div className="p-4 flex justify-center gap-3">
                <button
                  onClick={() => openImage(idx)}
                  className="px-4 py-1.5 text-sm bg-gradient-to-r from-[#fc9200] to-[#f72800] text-white rounded-md hover:opacity-90 transition"
                >
                  View
                </button>
                <a
                  href={img.src}
                  download
                  className="px-4 py-1.5 text-sm bg-gradient-to-r from-[#fc9200] to-[#f72800] text-white rounded-md hover:opacity-90 transition"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Preview */}
        {selected && (
          <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4">
            <div className="relative bg-white rounded-xl shadow-2xl max-w-3xl w-full p-6">
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-0 right-3 text-gray-600 hover:text-gray-900 text-2xl z-50"
              >
                <FaTimes />
              </button>

              {/* Image */}
              <img
                src={selected.src}
                alt=""
                className="max-h-[65vh] w-auto mx-auto rounded-lg mb-6 object-contain"
              />{/* Controls */}
              <div className="flex justify-between items-center">
                <button
                  onClick={prevImage}
                  className="px-4 py-2 flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-md hover:opacity-90 transition"
                >
                  <FaArrowLeft /> Prev
                </button>

                <button
                  onClick={nextImage}
                  className="px-4 py-2 flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-md hover:opacity-90 transition"
                >
                  Next <FaArrowRight />
                </button>
              </div>

              {/* Download */}
              <div className="mt-6 text-center">
                <a
                  href={selected.src}
                  download
                  className="px-6 py-2 bg-gradient-to-r from-orange-600 to-red-700 text-white rounded-md hover:opacity-90 transition"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;