import React from "react";

function Mission() {
	return (
		<section id="mission" className="bg-gradient-to-r from-orange-400 via-orange-500 to-[#f72800] py-10 px-2 sm:py-16 sm:px-4 md:px-8 min-h-[60vh] flex items-center justify-center">
			<div className="w-full max-w-3xl mx-auto text-center bg-white/90 rounded-2xl shadow-xl p-4 sm:p-8 md:p-10">
				<h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-orange-600 mb-4 sm:mb-6 drop-shadow">
					Our Mission
				</h2>
				<p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed sm:leading-loose break-words">
					<span className="font-semibold text-[#f72800]">@sign</span> (Sign Protocol) aims to be the global trust layer for blockchain-based attestations, enabling secure, verifiable signing of anything on-chain.<br className="hidden sm:block" />
					<br className="hidden sm:block" />
					Our mission focuses on bridging the web and physical world through tools like <span className="font-semibold text-orange-500">SignPass</span> and <span className="font-semibold text-orange-500">TokenTable</span>, fostering community-driven innovation in identity, DeFi, and token economies.<br className="hidden sm:block" />
					<br className="hidden sm:block" />
					Supported by leading investors like <span className="font-semibold text-orange-500">Sequoia</span> and <span className="font-semibold text-orange-500">Binance Labs</span>, we empower a new era of trust, collaboration, and opportunity for all.
				</p>
			</div>
		</section>
	);
}

export default Mission;
