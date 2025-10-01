import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import img1 from '../assets/gallery/img1.jpg'
import img2 from '../assets/gallery/img2.jpg'
import img3 from '../assets/gallery/img3.jpg'
import img4 from '../assets/gallery/img4.jpg'
import img5 from '../assets/gallery/img5.jpg'
import img6 from '../assets/gallery/img6.jpg'
import img7 from '../assets/gallery/img7.jpg'
import img8 from '../assets/gallery/img8.jpg'
import img9 from '../assets/gallery/img9.jpg'
import img10 from '../assets/gallery/img10.jpg'
import img11 from '../assets/gallery/img11.jpg'
import img12 from '../assets/gallery/img12.jpg'
import img13 from '../assets/gallery/img13.jpg'
import img14 from '../assets/gallery/img14.jpg'
import img15 from '../assets/gallery/img15.jpg'
import img16 from '../assets/gallery/img16.jpg'
import img17 from '../assets/gallery/img17.jpg'
import img18 from '../assets/gallery/img18.jpg'
import img19 from '../assets/gallery/img19.jpg'
import img20 from '../assets/gallery/img20.jpg'
import img21 from '../assets/gallery/img21.jpg'
import img22 from '../assets/gallery/img22.jpg'
import img23 from '../assets/gallery/img3.jpg'
import img24 from '../assets/gallery/img4.jpg'
import img25 from '../assets/gallery/img5.jpg'
import img26 from '../assets/gallery/img6.jpg'
import img27 from '../assets/gallery/img7.jpg'
import img28 from '../assets/gallery/img8.jpg'
import img29 from '../assets/gallery/img9.jpg'
import img30 from '../assets/gallery/img10.jpg'
import img31 from '../assets/gallery/img11.jpg'
import img32 from '../assets/gallery/img12.jpg'
import img33 from '../assets/gallery/img13.jpg'
import img34 from '../assets/gallery/img14.jpg'
import img35 from '../assets/gallery/img15.jpg'
import img36 from '../assets/gallery/img16.jpg'
import img37 from '../assets/gallery/img17.jpg'
import img38 from '../assets/gallery/img18.jpg'
import img39 from '../assets/gallery/img19.jpg'
import img40 from '../assets/gallery/img20.jpg'
import img41 from '../assets/gallery/img21.jpg'
import img42 from '../assets/gallery/img22.jpg'


// 30 manual placeholders from public folder
const images = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
  { src: img7 },
  { src: img8 },
  { src: img9 },
  { src: img10 },
  { src: img11 },
  { src: img12 },
  { src: img13 },
  { src: img14 },
  { src: img15 },
  { src: img16 },
  { src: img17 },
  { src: img18 },
  { src: img19 },
  { src: img20 },
  { src: img21 },
  { src: img22 },
  { src: img23 },
  { src: img24 },
  { src: img25 },
  { src: img26 },
  { src: img27 },
  { src: img28 },
  { src: img29 },
  { src: img30 },
  { src: img31 },
  { src: img32 },
  { src: img33 },
  { src: img34 },
  { src: img35 },
  { src: img36 },
  { src: img37 },
  { src: img38 },
  { src: img39 },
  { src: img40 },
  { src: img41 },
  { src: img42 },
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