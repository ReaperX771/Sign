import React, { useState } from "react";
import { FaChevronDown, FaWhatsapp, FaXTwitter, FaEnvelope } from "react-icons/fa6";

const faqs = [
  {
    question: "What is Sign and how does it work?",
    answer:
      "Sign is a blockchain-powered identity and reputation ecosystem. It gives users control over their digital identity while building trust through verifiable contributions. Instead of being locked into centralized platforms, your reputation is portable, transparent, and community-driven.",
  },
  {
    question: "What is Orange Dynasty?",
    answer:
      "Orange Dynasty is the community heartbeat of Sign. It’s a vibrant hub where creators, dreamers, and innovators connect, earn recognition, and grow together. Members can build reputation by contributing meaningfully, share ideas, collaborate on projects, and become part of a global network that thrives on creativity and trust.",
  },
  {
    question: "What are Oranges?",
    answer:
      "Oranges are the recognition unit of Orange Dynasty. Think of them as proof of contribution, engagement, and influence. The more you participate — whether by helping others, creating content, or taking part in governance — the more Oranges you earn.",
  },
  {
    question: "How do I earn Oranges?",
    answer:
      "You can earn Oranges in several ways: by starting conversations, contributing helpful insights, completing community tasks, mentoring newcomers, or even creating valuable content like guides, tools, or events.",
  },
  {
    question: "Where can I learn more?",
    answer:
      "The best place to start is the official Sign website at sign.global. From there, you can explore documentation, join Orange Dynasty, and participate in ongoing discussions.",
  },
];

function Que() {
  const [openIndex, setOpenIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("Submit Question");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "fbb63ae0-0d4c-4e2d-92a5-4282967f0268");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setStatus("Sent ✅");
      event.target.reset();
      setTimeout(() => setStatus("Submit Question"), 2000);
    } else {
      setStatus("Error ❌");
      setTimeout(() => setStatus("Submit Question"), 2000);
    }
    setLoading(false);
  };

  return (
    <section id='faq' className="bg-gradient-to-r  from-orange-500 via-orange-600 to-red-600 py-20 px-6 md:px-12 text-white overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Frequently Asked <span className="text-yellow-200">Questions</span>
        </h2>

        <div className="space-y-6 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-semibold">
                  {faq.question}
                </h3>
                <FaChevronDown
                  className={`text-yellow-300 transform transition-transform duration-500 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index
                    ? "max-h-60 opacity-100 translate-x-0"
                    : "max-h-0 opacity-0 -translate-x-10"
                }`}
              >
                <p className="mt-4 text-sm md:text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Ask a Question Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-gray-900">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Still have questions?
          </h3>
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Question
              </label>
              <textarea
                name="message"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                rows="4"
                placeholder="Type your question..."
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center ${
                loading
                  ? "bg-orange-400 cursor-not-allowed"
                  : "bg-orange-600 hover:bg-orange-700"
              }`}
            >
              {loading && (
                <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-3"></span>
              )}
              {status}
            </button>
          </form>

          {/* Socials */}
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:scale-110 transition-transform text-2xl"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:scale-110 transition-transform text-2xl"
            >
              <FaXTwitter />
            </a>
            <a
              href="mailto:youremail@example.com"
              className="text-red-500 hover:scale-110 transition-transform text-2xl"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Que;