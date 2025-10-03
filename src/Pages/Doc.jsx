import React from "react";

export default function Doc() {
	return (
		<section className="min-h-screen w-full flex items-center mt-20 justify-center bg-gradient-to-b from-[#fc9200] to-[#f72800] py-10 px-2 sm:px-4">
			<div className="w-full max-w-3xl bg-white/95 rounded-2xl shadow-xl p-6 sm:p-10">
				<h1 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-4 text-center">Orange Dynasty Documentation</h1>
				<p className="text-gray-700 text-center mb-8 text-base sm:text-lg max-w-2xl mx-auto">
					Welcome to the official documentation for Orange Dynasty. Here you'll find everything you need to get started, understand the features, and make the most of your experience.
				</p>

				<section className="mb-8">
					<h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-2">Getting Started</h2>
					<ul className="list-disc pl-6 text-sm sm:text-base text-gray-800">
						<li>Explore the homepage to learn about the Orange Dynasty ecosystem.</li>
						<li>Start playing games, collecting oranges, and building your streak!</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-2">Features</h2>
					<ul className="list-disc pl-6 text-sm sm:text-base text-gray-800">
						<li>Daily streak rewards and bonus milestones.</li>
						<li>Fun mini-games like "Catch the Orange" to earn more rewards.</li>
						<li>Claim window for redeeming your oranges for special prizes.</li>
						<li>Community and support channels for help and feedback.</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-2">How to Play</h2>
					<ul className="list-disc pl-6 text-sm sm:text-base text-gray-800">
						<li>Log in daily to maintain your streak and maximize your rewards.</li>
						<li>Participate in games and activities to collect more oranges.</li>
						<li>Check the claim page to see if you have enough oranges to redeem.</li>
					</ul>
				</section>

				<section className="mb-8">
					<h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-2">FAQ</h2>
					<ul className="list-disc pl-6 text-sm sm:text-base text-gray-800">
						<li><b>How do I reset my streak?</b> — Visit the streak page and use the reset option (dev only).</li>
						<li><b>What is the minimum claim?</b> — The minimum claim is 50 oranges for the first 2 days, then 100 oranges after that.</li>
						<li><b>How do I contact support?</b> — Use the Ask a Question page or email support@orangedynasty.com.</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-2">Contact & Support</h2>
					<p className="text-sm sm:text-base text-gray-800 mb-2">Need more help? Visit the <b>Ask a Question</b> page or email <a href="mailto:support@orangedynasty.com" className="text-orange-600 underline">support@orangedynasty.com</a>.</p>
				</section>
			</div>
		</section>
	);
}
