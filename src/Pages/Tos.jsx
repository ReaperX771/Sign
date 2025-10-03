import React from "react";

export default function Tos() {
  return (
    <section className="w-full min-h-screen mt-10 flex items-center justify-center bg-orange-50 py-8 px-2 sm:px-4">
      <div className="w-full max-w-3xl mx-auto px-2 sm:px-6 py-8 sm:py-12 text-gray-800 bg-white rounded-lg shadow-md mt-4 mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-orange-600 text-center">Orange Dynasty Terms of Service</h1>
        <p className="mb-4 text-sm sm:text-lg text-center">
          Welcome to Orange Dynasty! By accessing or using our website, games, or services, you agree to be bound by these Terms of Service. Please read them carefully.
        </p>

        <section className="mb-6">
          <h2 className="text-lg sm:text-2xl font-semibold mt-6 mb-2 text-orange-500">1. Acceptance of Terms</h2>
          <p className="text-sm sm:text-base mb-2">
            By using Orange Dynasty, you acknowledge that you have read, understood, and agree to these Terms. If you do not agree, please do not use our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg sm:text-2xl font-semibold mt-6 mb-2 text-orange-500">2. Eligibility</h2>
          <p className="text-sm sm:text-base mb-2">
            You must be at least 13 years old to use Orange Dynasty. By using our services, you represent that you meet this requirement.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg sm:text-2xl font-semibold mt-6 mb-2 text-orange-500">3. User Conduct</h2>
          <ul className="list-disc pl-5 sm:pl-8 mb-2 sm:mb-4 text-sm sm:text-base">
            <li>Do not use Orange Dynasty for any unlawful or prohibited purpose.</li>
            <li>Respect other users and do not harass, abuse, or harm others.</li>
            <li>Do not attempt to hack, disrupt, or interfere with our services or security.</li>
            <li>Do not use bots, cheats, or unauthorized third-party tools.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg sm:text-2xl font-semibold mt-6 mb-2 text-orange-500">4. Rewards & Oranges</h2>
          <ul className="list-disc pl-5 sm:pl-8 mb-2 sm:mb-4 text-sm sm:text-base">
            <li>Oranges and rewards earned in-game have no real-world monetary value.</li>
            <li>We reserve the right to modify, suspend, or discontinue rewards at any time.</li>
            <li>Fraudulent or abusive activity may result in forfeiture of rewards and account suspension.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg sm:text-2xl font-semibold mt-6 mb-2 text-orange-500">5. Intellectual Property</h2>
          <p className="text-sm sm:text-base mb-2">
            All content, graphics, logos, and code on Orange Dynasty are the property of Orange Dynasty or its licensors. You may not use, copy, or distribute any content without permission.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg sm:text-2xl font-semibold mt-6 mb-2 text-orange-500">6. Disclaimer & Limitation of Liability</h2>
          <p className="text-sm sm:text-base mb-2">
            Orange Dynasty is provided "as is" without warranties of any kind. We are not liable for any damages or losses resulting from your use of our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg sm:text-2xl font-semibold mt-6 mb-2 text-orange-500">7. Changes to Terms</h2>
          <p className="text-sm sm:text-base mb-2">
            We may update these Terms of Service at any time. Continued use of Orange Dynasty after changes means you accept the new terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg sm:text-2xl font-semibold mt-6 mb-2 text-orange-500">8. Contact Us</h2>
          <p className="text-sm sm:text-base mb-2">
            If you have any questions or concerns about these Terms, please contact us at <a href="mailto:support@orangedynasty.com" className="text-orange-600 underline">support@orangedynasty.com</a>.
          </p>
        </section>

        <div className="mt-8 text-center text-orange-700 font-semibold text-base sm:text-lg">
          Thank you for being a part of Orange Dynasty!
        </div>
      </div>
    </section>
  );
}
