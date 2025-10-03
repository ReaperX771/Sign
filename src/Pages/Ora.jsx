import React, { useState, useEffect } from "react";

function Ora() {
  const [oranges, setOranges] = useState(() =>
    parseFloat(localStorage.getItem("oranges")) || 0
  );
  const [falling, setFalling] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tapIndex, setTapIndex] = useState(0);
  const [playsLeft, setPlaysLeft] = useState(3);
  const [roundEarnings, setRoundEarnings] = useState(0);
  const [bombMessage, setBombMessage] = useState(false);
  const [endMessage, setEndMessage] = useState("");

  const rewards = [0.5, 0.4, 0.3]; // reward cycle

  // Daily reset logic
  useEffect(() => {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem("lastPlayDate");
    const savedPlays = parseInt(localStorage.getItem("playsLeft"), 10);

    if (savedDate === today) {
      setPlaysLeft(isNaN(savedPlays) ? 3 : savedPlays);
    } else {
      localStorage.setItem("lastPlayDate", today);
      localStorage.setItem("playsLeft", "3");
      setPlaysLeft(3);
    }
  }, []);

  // Drop oranges and bombs with 60% orange, 40% bomb
  useEffect(() => {
    let drop;
    if (isPlaying) {
      drop = setInterval(() => {
        const isBomb = Math.random() < 0.4; // 40% bomb, 60% orange
        let xPos = Math.random() * 90 + "%";

        if (isBomb) {
          // Stick close to last orange if possible
          const lastOrange = falling.find((o) => o.type === "orange");
          if (lastOrange) {
            const baseX = parseFloat(lastOrange.x);
            const offset = Math.random() * 10 - 5; // ±5% for closer sticking
            const newX = Math.min(90, Math.max(10, baseX + offset));
            xPos = newX + "%";
          }
        }

        setFalling((prev) => [
          ...prev,
          { id: Date.now(), x: xPos, type: isBomb ? "bomb" : "orange" },
        ]);
      }, 1000);
    }
    return () => clearInterval(drop);
  }, [isPlaying, falling]);

  // Timer
  useEffect(() => {
    let timer;
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((t) => t - 1);
      }, 1000);
    } else if (isPlaying && timeLeft === 0) {
      endGame();
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  const startGame = () => {
    if (playsLeft <= 0) {
      setEndMessage("⚠️ You’ve already played 3 times today! Come back tomorrow.");
      return;
    }
    setIsPlaying(true);
    setTimeLeft(30);
    setFalling([]);
    setTapIndex(0);
    setRoundEarnings(0);
    setBombMessage(false);
    setEndMessage("");

    const newPlays = playsLeft - 1;
    setPlaysLeft(newPlays);
    localStorage.setItem("playsLeft", newPlays.toString());
    localStorage.setItem("lastPlayDate", new Date().toDateString());
  };

  const collectOrange = (id, type) => {
    if (type === "bomb") {
      // Clear round earnings
      setRoundEarnings(0);
      setTapIndex(0);
      setBombMessage(true); // show message
      setTimeout(() => setBombMessage(false), 1000); // hide after 1 sec
    } else {
      const reward = rewards[tapIndex % rewards.length];
      setRoundEarnings((prev) => prev + reward);
      setTapIndex((prev) => prev + 1);
    }
    setFalling((prev) => prev.filter((o) => o.id !== id));
  };

  const endGame = () => {
    setIsPlaying(false);
    const newTotal = oranges + roundEarnings;
    setOranges(newTotal);
    localStorage.setItem("oranges", newTotal);
    setEndMessage(`✅ Round Over! You earned ${roundEarnings.toFixed(1)} 🍊`);
  };

  const resetGame = () => {
    setOranges(0);
    setPlaysLeft(3);
    setEndMessage("Game reset!");
    localStorage.setItem("oranges", "0");
    localStorage.setItem("playsLeft", "3");
    localStorage.setItem("lastPlayDate", new Date().toDateString());
  };

  return (
    <div className="relative h-screen w-full bg-orange-200 py-40 overflow-hidden flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Catch Oranges 🍊</h2>

      {/* Persistent stats */}
      <p>Total Oranges: {oranges.toFixed(1)}</p>
      <p>Plays Left Today: {playsLeft}</p>
      <p>Round Earnings: {roundEarnings.toFixed(1)} 🍊</p>

      {/* Clock instead of text */}
      {isPlaying && (
        <p className="text-lg mt-2">⏰ {timeLeft}s</p>
      )}{bombMessage && (
        <p className="mt-2 text-red-600 font-bold">
          💣 Bomb hit! Earnings cleared!
        </p>
      )}

      {endMessage && <p className="mt-2 font-semibold">{endMessage}</p>}

      {!isPlaying && (
        <>
          <button
            onClick={startGame}
            className="mt-6 px-8 py-3 bg-orange-500 text-white rounded-lg font-semibold shadow-lg hover:scale-105 transition"
          >
            Start Game
          </button>
          {/* <button
            onClick={resetGame}
            className="mt-4 px-8 py-3 bg-red-500 text-white rounded-lg font-semibold shadow-lg hover:scale-105 transition"
          >
            Reset Game
          </button> */}
        </>
      )}

      {/* Falling objects */}
      {falling.map((o) => (
        <div
          key={o.id}
          onClick={() => collectOrange(o.id, o.type)}
          className="absolute text-3xl cursor-pointer"
          style={{
            top: "0px",
            left: o.x,
            animation: "fall 3s linear forwards",
          }}
        >
          {o.type === "bomb" ? "💣" : "🍊"}
        </div>
      ))}

      <style>{`
        @keyframes fall {
          from { top: 0px; }
          to { top: 100vh; }
        }
      `}</style>
    </div>
  );
}

export default Ora;