import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

// Images (manual placeholders)
const images = Array.from({ length: 42 }, (_, i) => ({
  src: `/gallery/img${i + 1}.jpg`,
}));

function Gallery() {
  const [selected, setSelected] = useState(null);
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

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

  // Web3Forms handler
  const sendForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "fbb63ae0-0d4c-4e2d-92a5-4282967f0268"); // Replace with your key

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
    setLoading(false);
  };

  return (
    <section className="bg-gradient-to-r from-orange-400 via-orange-500 to-[#f72800] py-20 px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto text-center mt-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow mb-12">
          Image <span className="text-yellow-200">Gallery</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.slice(0, visibleCount).map((img, idx) => (
            <div
              key={idx}
              className="max-w-xs w-full mx-auto bg-white/90 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={img.src}
                alt={`Gallery ${idx + 1}`}
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

        {/* See More button */}
        {visibleCount < images.length && (
          <div className="mt-8">
            <button
              onClick={() => setVisibleCount(visibleCount + 10)}
              className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-[#fc9200] to-[#f72800] text-white rounded-md hover:opacity-90 transition"
            >
              See More
            </button>
          </div>
        )}

        {/* Modal Preview */}
        {selected && (
          <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4">
            <div className="relative bg-white rounded-xl shadow-2xl max-w-3xl w-full p-6">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-0 right-3 text-gray-600 hover:text-gray-900 text-2xl z-50"
              >
                <FaTimes />
              </button>
              <img
                src={selected.src}
                alt="Preview"
                className="max-h-[65vh] w-auto mx-auto rounded-lg mb-6 object-contain"
              />
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

        {/* Upload Request Form */}
        <div className="mt-20 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Request Image Upload 📩
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
          <div className="mt-6 flex justify-center gap-6 text-white text-2xl">
            <a href="mailto:control0177.gmail.com" className="hover:text-yellow-200">
              <FaEnvelope />
            </a>
            <a href="https://wa.me/qr/7A4U35SCTPLLK1" target="_blank" rel="noreferrer" className="hover:text-yellow-200">
              <FaWhatsapp />
            </a>
            <a href="https://x.com/ReaperX771?t=2KfJeNsrbE5G54frMSaVuA&s=09" target="_blank" rel="noreferrer" className="hover:text-yellow-200">
              <BsTwitterX />
            </a>
          </div>
          <p className="text-sm text-white/70 mt-2 text-center">
            Already have the image? Send it directly via Email, WhatsApp, or X.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Gallery;