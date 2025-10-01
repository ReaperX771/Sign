import React, { useEffect, useRef } from "react";
import { FaXTwitter, FaTelegram, FaDiscord } from "react-icons/fa6";
import { MdOutlineLink } from "react-icons/md";

const collaborators = [
  { name: "Leader", role: "Team Leader", img: "https://via.placeholder.com/120", leader: true },
  { name: "Member 1", role: "Contributor", img: "https://via.placeholder.com/120" },
  { name: "Member 2", role: "Contributor", img: "https://via.placeholder.com/120" },
  { name: "Member 3", role: "Contributor", img: "https://via.placeholder.com/120" },
  { name: "Member 4", role: "Contributor", img: "https://via.placeholder.com/120" },
  { name: "Member 5", role: "Contributor", img: "https://via.placeholder.com/120" },
  { name: "Member 6", role: "Contributor", img: "https://via.placeholder.com/120" }
];

export default function Cola() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".collab-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.remove("opacity-0", "translate-y-10");
                card.classList.add("opacity-100", "translate-y-0");
              }, i * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 bg-gradient-to-b from-orange-500 to-red-600 text-white text-center overflow-x-hidden"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Meet the Collaborators</h2>

      <div className="relative flex flex-wrap justify-center gap-6 sm:gap-10 max-w-5xl mx-auto">
        {collaborators.map((c, i) => (
          <div
            key={i}
            className={`collab-card opacity-0 translate-y-10 transition-all duration-700 ease-out flex flex-col items-center p-6 rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm ${c.leader ? "bg-white text-black scale-105 ring-4 ring-yellow-400" : "bg-black/20"}`}
            style={{
              transform: window.innerWidth < 640 ? undefined : `rotate(${i * 10 - 30}deg) translateY(${Math.abs(i - 3) * 15}px)`
            }}
          >
            <img
              src={c.img}
              alt={c.name}
              className={`w-28 h-28 object-cover rounded-full mb-4 border-4 ${c.leader ? "border-yellow-400" : "border-white"}`}
            />
            <h3 className="text-xl font-semibold">{c.name}</h3>
            <p className="text-sm mb-4">{c.role}</p>
            <div className="flex gap-3 text-xl">
              <a href="#" className="hover:text-yellow-300"><FaXTwitter /></a>
              <a href="#" className="hover:text-yellow-300"><FaTelegram /></a>
              <a href="#" className="hover:text-yellow-300"><FaDiscord /></a>
              <a href="#" className="hover:text-yellow-300"><MdOutlineLink /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}