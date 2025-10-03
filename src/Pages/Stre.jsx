import React, { useState, useRef, useEffect } from "react";
import Confetti from "react-confetti";

function Stre() {
  const containerRef = useRef(null);
  const [confettiSize, setConfettiSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    function updateSize() {
      if (containerRef.current) {
        setConfettiSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    }
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  const [streak, setStreak] = useState(() => parseInt(localStorage.getItem("streak")) || 0);
  const [lastClaim, setLastClaim] = useState(() => localStorage.getItem("lastClaim") || "");
  const [username, setUsername] = useState(() => localStorage.getItem("username") || "");
  const [oranges, setOranges] = useState(() => parseFloat(localStorage.getItem("oranges")) || 0);
  const [celebrate, setCelebrate] = useState(false);
  const today = new Date().toDateString();

  const handleUsernameSubmit = () => {
    const input = prompt("Enter your username to start 🍊:");
    if (input) {
      setUsername(input);
      localStorage.setItem("username", input);
    }
  };

  useEffect(() => {
    if (!username) {
      handleUsernameSubmit();
    }
  }, [username]);

  const handleClaim = () => {
    if (lastClaim !== today) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setLastClaim(today);
      localStorage.setItem("streak", newStreak);
      localStorage.setItem("lastClaim", today);

      // Add oranges
      let reward = 2;
      if (newStreak % 5 === 0) reward += 5; // Bonus on 5th streak
      const newOranges = oranges + reward;

      setOranges(newOranges);
      localStorage.setItem("oranges", newOranges);

      setCelebrate(true);
      setTimeout(() => setCelebrate(false), 5000);
    }
  };

  return (
    <section ref={containerRef} className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#fc9200] to-[#f72800] text-white text-center p-6 overflow-x-hidden overflow-y-hidden">
      {celebrate && <Confetti className="overflow-x-hidden" />}
        {celebrate && (
        <Confetti
          width={confettiSize.width}
          height={confettiSize.height}
          numberOfPieces={250}
          recycle={false}
          style={{ maxWidth: '100%', overflowX: 'hidden', pointerEvents: 'none' }}
        />
        )}
      <h1 className="text-4xl font-bold mb-4">Orange Dynasty 🍊🔥</h1>
      <p className="text-lg mb-2">Username: {username}</p>
      <p className="text-lg mb-2">Current Streak: {streak} days</p>
      <p className="text-lg mb-2">Total Oranges: {oranges.toFixed(1)} 🍊</p>

      <button
        onClick={handleClaim}
        disabled={lastClaim === today}
        className="mt-6 px-8 py-3 bg-white text-orange-600 rounded-lg font-semibold shadow-lg hover:scale-105 transition disabled:bg-gray-400 disabled:text-gray-200"
      >
        {lastClaim === today ? "Already Claimed Today ✅" : "Claim Today’s Streak"}
      </button>

      {/* <button
  onClick={() => {
    localStorage.clear();
    window.location.reload();
  }}
  className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg"
>
  🔄 Reset Streak (Dev Only)
</button> */}
    </section>
  );
}

export default Stre;