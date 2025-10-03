import React, { useState, useEffect } from "react";


export default function Rewar() {
  const [oranges, setOranges] = useState(() =>
    parseFloat(localStorage.getItem("oranges")) || 0
  );
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");
  const [minClaim, setMinClaim] = useState(50);
  const [timeLeft, setTimeLeft] = useState(null); // in seconds

  useEffect(() => {
    // Calculate how many days since the first streak/claim
    let startDate = localStorage.getItem("claimStartDate");
    if (!startDate) {
      startDate = new Date().toISOString();
      localStorage.setItem("claimStartDate", startDate);
    }
    const updateClaimState = () => {
      const now = new Date();
      const start = new Date(startDate);
      const diffMs = now - start;
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      if (diffDays < 2) {
        setMinClaim(50);
        // Calculate seconds left until 2 days are up
        const secondsLeft = Math.max(0, Math.floor((2 * 24 * 60 * 60) - (diffMs / 1000)));
        setTimeLeft(secondsLeft);
      } else {
        setMinClaim(100);
        setTimeLeft(0);
      }
    };
    updateClaimState();
    const interval = setInterval(updateClaimState, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem("oranges", oranges);
  }, [oranges]);

  const handleClaim = async (e) => {
    e.preventDefault();
    if (oranges < minClaim) {
      setResult(`⚠️ You need at least ${minClaim} oranges to claim!`);
      return;
    }

    setResult("Submitting...");

    const formData = new FormData();
    formData.append("access_key", "fbb63ae0-0d4c-4e2d-92a5-4282967f0268");
    formData.append("username", username);
    formData.append("email", email);
    formData.append("oranges", oranges);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Claim Submitted Successfully!");
      localStorage.setItem("username", username);
      setOranges(0); // reset oranges
      localStorage.setItem("oranges", 0);
      // Reset claim start date for next period
      localStorage.setItem("claimStartDate", new Date().toISOString());
    } else {
      console.error("Error", data);
      setResult("❌ " + data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-100 p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-center">🍊 Claim Your Oranges</h2>
      <p className="mb-2 text-base sm:text-lg text-center">Your current balance: <b>{oranges.toFixed(1)} Oranges</b></p>

      <div className="max-w-xl w-full">
        <p className="text-sm sm:text-base text-gray-700 mb-4 text-center">
          Welcome to the rewards page! Here you can claim your hard-earned oranges and celebrate your progress. Please fill in your username and email to proceed with your claim.
        </p>
        <form onSubmit={handleClaim} className="flex flex-col gap-3 w-full max-w-sm mx-auto">
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="p-2 border rounded text-base"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 border rounded text-base"
          />

          <button
            type="submit"
            disabled={oranges < minClaim}
            className="px-6 py-2 bg-orange-600 text-white rounded-lg shadow hover:scale-105 transition disabled:bg-gray-400 text-base font-semibold"
          >
            Claim Oranges
          </button>
        </form>
        <p className="mt-3 text-center break-words text-base sm:text-lg">{result}</p>
        <p className="text-lg sm:text-xl font-bold text-center mt-2">Minimum claim: <span className="text-orange-700">{minClaim} 🍊</span></p>
        {minClaim === 50 && timeLeft !== null && timeLeft > 0 && (
          <div className="mt-2 text-center">
            <p className="text-sm sm:text-base text-orange-700 font-medium">
              🎉 Special Launch Promotion! 🎉
            </p>
            <p className="text-xs sm:text-sm text-gray-700">
              For the next <b>{Math.floor(timeLeft/3600)}h {Math.floor((timeLeft%3600)/60)}m {timeLeft%60}s</b>, you can claim your reward with just <b>50 oranges</b> instead of the usual 100.
            </p>
            <p className="text-xs sm:text-sm text-gray-700 mt-1">
              This limited-time offer is to celebrate the official launch of our website. Start playing now and maximize your rewards!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}