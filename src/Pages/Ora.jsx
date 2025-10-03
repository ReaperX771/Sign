import React, { useState, useEffect } from "react";

function Ora() {
  const [totalOranges, setTotalOranges] = useState(() =>
    parseFloat(localStorage.getItem("oranges")) || 0
  );
  const [sessionOranges, setSessionOranges] = useState(0);
  const [falling, setFalling] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  // Spawn oranges or bombs
  useEffect(() => {
    if (!isPlaying) return;
    const drop = setInterval(() => {
      const isBomb = Math.random() < 0.15; // 15% chance
      setFalling((prev) => [
        ...prev,
        { id: Date.now(), x: Math.random() * 90 + "%", type: isBomb ? "bomb" : "orange" },
      ]);
    }, 1000);
    return () => clearInterval(drop);
  }, [isPlaying]);

  // Timer countdown
  useEffect(() => {
    if (!isPlaying) return;
    if (timeLeft <= 0) {
      endGame();
      return;
    }
    const t = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(t);
  }, [isPlaying, timeLeft]);

  const collectItem = (id, type) => {
    if (type === "orange") {
      setSessionOranges((prev) => {
        const newSession = prev + 0.2;
        const newTotal = totalOranges + 0.2;
        setTotalOranges(newTotal);
        localStorage.setItem("oranges", newTotal);
        return newSession;
      });
    } else if (type === "bomb") {
      setSessionOranges((prev) => {
        const newSession = Math.max(0, prev * 0.9);
        const newTotal = totalOranges - (prev - newSession);
        setTotalOranges(newTotal);
        localStorage.setItem("oranges", newTotal);
        return newSession;
      });
    }
    setFalling((prev) => prev.filter((o) => o.id !== id));
  };

  const startGame = () => {
    setIsPlaying(true);
    setSessionOranges(0);
    setTimeLeft(60);
    setFalling([]);
  };

  const endGame = () => {
    setIsPlaying(false);
    const newTotal = totalOranges + sessionOranges;
    setTotalOranges(newTotal);
    localStorage.setItem("oranges", newTotal);
  };

  return (
    <div className="relative h-screen w-full bg-orange-200 pt-50 overflow-hidden flex flex-col items-center">
      <div className="w-full flex flex-col items-center mt-4">
        <div className="flex flex-row gap-6 justify-center items-center">
          <p className="text-2xl font-bold">⏰ {timeLeft}s</p>
          <p className="text-2xl font-bold">🍊 {totalOranges.toFixed(1)}</p>
        </div>
        {!isPlaying && (
          <>
            <h2 className="text-2xl font-bold mt-4">Catch Oranges 🍊</h2>
            <p>Session Oranges: {sessionOranges.toFixed(1)} 🍊</p>
            <button
              onClick={startGame}
              className="mt-4 px-6 py-3 bg-orange-600 text-white rounded-lg shadow-lg hover:scale-105 transition"
            >
              ▶️ Start 1-Minute Game
            </button>
          </>
        )}
      </div>

      {falling.map((o) => (
        <div
          key={o.id}
          onClick={() => collectItem(o.id, o.type)}
          className="absolute text-3xl cursor-pointer"
          style={{
            top: "0px",
            left: o.x,
            animation: "fall 5s linear forwards",
          }}
        >
          {o.type === "orange" ? "🍊" : "💣"}
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