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

  useEffect(() => {
    localStorage.setItem("oranges", oranges);
  }, [oranges]);

  const handleClaim = async (e) => {
    e.preventDefault();
    if (oranges < 50) {
      setResult("⚠️ You need at least 10 oranges to claim!");
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
    } else {
      console.error("Error", data);
      setResult("❌ " + data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-100 p-6">
      <h2 className="text-2xl font-bold mb-4">🍊 Claim Your Oranges</h2>
      <p className="mb-2">Current Balance: <b>{oranges.toFixed(1)} Oranges</b></p>

      <form onSubmit={handleClaim} className="flex flex-col gap-3 w-full max-w-sm">
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="p-2 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 border rounded"
        />

        <button
          type="submit"
          disabled={oranges < 10}
          className="px-6 py-2 bg-orange-600 text-white rounded-lg shadow hover:scale-105 transition disabled:bg-gray-400"
        >
          Claim Oranges
        </button>
      </form>

      <p className="mt-3">{result}</p>
      <p className="text-lg font-bold">Minimum claim is 50🍊</p>
    </div>
  );
}