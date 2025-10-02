import React from "react";

function Mission() {
	return (
		<section id="mission" className="bg-gradient-to-r from-orange-400 via-orange-500 to-[#f72800] py-20 px-6 md:px-12 min-h-[60vh] flex items-center justify-center">
			<div className="max-w-3xl mx-auto text-center bg-white/90 rounded-2xl shadow-xl p-10 mt-20">
				<h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6 drop-shadow">
					Our Mission
				</h2>
				<p className="text-lg md:text-xl text-gray-800 leading-relaxed">
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
