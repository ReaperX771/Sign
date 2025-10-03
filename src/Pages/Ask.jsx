import React, { useState } from "react";

export default function Ask() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Submitting...");
    const formData = new FormData();
    formData.append("access_key", "fbb63ae0-0d4c-4e2d-92a5-4282967f0268");
    formData.append("username", username);
    formData.append("email", email);
    formData.append("question", question);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setResult("✅ Your question has been submitted! We'll get back to you soon.");
      setUsername("");
      setEmail("");
      setQuestion("");
    } else {
      setResult("❌ " + data.message);
    }
  };

  return (
    <section className="min-h-screen flex flex-col mt-20 items-center justify-center bg-gradient-to-b from-[#f72800] to-[#fc9200] py-10 px-2 sm:px-4">
      <div className="w-full max-w-lg bg-white/90 rounded-2xl shadow-xl p-6 sm:p-10 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2 text-center">Ask a Question</h1>
        <p className="text-gray-700 text-center mb-6 text-base sm:text-lg max-w-md">
          Have a question, suggestion, or need help? Fill out the form below and our team will respond as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <input
            type="text"
            name="username"
            placeholder="Your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="p-3 border border-orange-200 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 border border-orange-200 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <textarea
            name="question"
            placeholder="Type your question here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
            rows={4}
            className="p-3 border border-orange-200 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg shadow hover:scale-105 transition text-base font-semibold mt-2"
          >
            Submit Question
          </button>
        </form>
        {result && (
          <p className="mt-4 text-center text-base sm:text-lg font-medium text-orange-700">{result}</p>
        )}
      </div>
    </section>
  );
}
