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
  const [isBigCelebration, setIsBigCelebration] = useState(false);
  const [message, setMessage] = useState("");
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
      let reward = 5;
      let bonusMessage = "";

      if (streak === 0) {
        reward += 10; // Welcome bonus
        bonusMessage = "Welcome! Here's a 10 🍊 bonus on your first claim!";
      }

      let isBig = false;
      if (newStreak % 5 === 0) {
        reward += 5; // Streak bonus
        bonusMessage = "Keep up the streak! +5 🍊 bonus";
        isBig = true;
      }

      const newOranges = oranges + reward;
      setOranges(newOranges);
      localStorage.setItem("oranges", newOranges);

      setMessage(bonusMessage);
      setCelebrate(true);
      setIsBigCelebration(isBig);
      setTimeout(() => {
        setCelebrate(false);
        setIsBigCelebration(false);
        setMessage("");
      }, isBig ? 8000 : 5000);
    }
  };

  // Meme section
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentTime(new Date().toLocaleString());
  }, []);

  const memes = [
    {
      url: "https://www.tiktok.com/api/img/?itemId=7549141001416396054&location=0&aid=1988",
      title: "Top 5 Memes of October 2025",
    },
    {
      url: "https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3735808670283404813",
      title: "Which possibility would you love?",
    },
    {
      url: "https://www.tiktok.com/api/img/?itemId=7464376472652827947&location=0&aid=1988",
      title: "Top 5 Memes of October 2025",
    },
  ];

  const nextMeme = () => {
    setCurrentIndex((prev) => (prev + 1) % memes.length);
  };

  const prevMeme = () => {
    setCurrentIndex((prev) => (prev - 1 + memes.length) % memes.length);
  };

  return (
    <section ref={containerRef} className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#fc9200] to-[#f72800] text-white text-center p-6 overflow-x-hidden overflow-y-hidden">
      {celebrate && <Confetti className="overflow-x-hidden" />}
        {celebrate && (
        <Confetti
          width={confettiSize.width}
          height={confettiSize.height}
          numberOfPieces={isBigCelebration ? 500 : 250}
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

      {message && <p className="mt-4 text-xl font-semibold">{message}</p>}

      {/* Meme section */}
      <section className="meme mt-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-2">Meme of the Day - Added on {currentTime}</h2>
        <div className="carousel flex flex-col items-center">
          <img src={memes[currentIndex].url} alt={memes[currentIndex].title} className="w-full h-auto mb-4" />
          <p className="text-lg mb-4">{memes[currentIndex].title} - Enjoy this funny meme!</p>
          <div className="buttons flex justify-between w-full">
            <button onClick={prevMeme} className="px-4 py-2 bg-blue-500 text-white rounded">Previous</button>
            <a href={memes[currentIndex].url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-500 text-white rounded">View</a>
            <a href={memes[currentIndex].url} download className="px-4 py-2 bg-yellow-500 text-white rounded">Download</a>
            <button onClick={nextMeme} className="px-4 py-2 bg-blue-500 text-white rounded">Next</button>
          </div>
        </div>
      </section>

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