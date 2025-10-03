import React from "react";

export default function Priva() {
  return (
    <section className="w-full min-h-screen flex mt-10 items-center justify-center bg-orange-50 py-8 px-2 sm:px-4">
      <div className="w-full max-w-3xl mx-auto px-2 sm:px-6 py-8 sm:py-12 text-gray-800 bg-white rounded-lg shadow-md mt-4 mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-orange-600 text-center">Orange Dynasty Privacy Policy</h1>
        <p className="mb-4 text-sm sm:text-lg text-center">
          Your privacy is important to us. At Orange Dynasty, we are committed to protecting your personal information and being transparent about how we use it. This Privacy Policy explains what data we collect, how we use it, and your rights regarding your information.
        </p>

        <section className="mb-6">
          <h2 className="text-lg sm:text-2xl font-semibold mt-6 mb-2 text-orange-500">1. Information We Collect</h2>
          <ul className="list-disc pl-5 sm:pl-8 mb-2 sm:mb-4 text-sm sm:text-base">
            <li>Username and email address (for account and reward purposes)</li>
            <li>Game progress and in-app activity (such as oranges collected, streaks, and achievements)</li>
            <li>Device and browser information (for security and analytics)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg sm:text-2xl font-semibold mt-6 mb-2 text-orange-500">2. How We Use Your Information</h2>
          <ul className="list-disc pl-5 sm:pl-8 mb-2 sm:mb-4 text-sm sm:text-base">
            <li>To provide and improve your Orange Dynasty experience</li>
            <li>To process rewards and claims</li>
            <li>To communicate important updates, promotions, or support</li>
            <li>To ensure the security and integrity of our platform</li>
            <li>To analyze usage trends and enhance our services</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg sm:text-2xl font-semibold mt-6 mb-2 text-orange-500">3. Data Sharing & Security</h2>
          <ul className="list-disc pl-5 sm:pl-8 mb-2 sm:mb-4 text-sm sm:text-base">
            <li>We do <span className="font-bold">not</span> sell or rent your personal information to third parties.</li>
            <li>We may share data with trusted partners for reward processing or technical support, always under strict confidentiality agreements.</li>
            <li>Your data is stored securely and protected using industry-standard measures.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg sm:text-2xl font-semibold mt-6 mb-2 text-orange-500">4. Your Rights & Choices</h2>
          <ul className="list-disc pl-5 sm:pl-8 mb-2 sm:mb-4 text-sm sm:text-base">
            <li>You can update or delete your account information at any time.</li>
            <li>You may request access to the data we hold about you.</li>
            <li>You can opt out of promotional communications at any time.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-lg sm:text-2xl font-semibold mt-6 mb-2 text-orange-500">5. Children's Privacy</h2>
          <p className="mb-2 sm:mb-4 text-sm sm:text-base">
            Orange Dynasty is intended for users aged 13 and above. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal data, please contact us immediately.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg sm:text-2xl font-semibold mt-6 mb-2 text-orange-500">6. Updates to This Policy</h2>
          <p className="mb-2 sm:mb-4 text-sm sm:text-base">
            We may update this Privacy Policy from time to time. We will notify you of any significant changes and always display the latest version on our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg sm:text-2xl font-semibold mt-6 mb-2 text-orange-500">7. Contact Us</h2>
          <p className="mb-2 text-sm sm:text-base">
            If you have any questions, concerns, or requests regarding your privacy, please contact our support team at <a href="mailto:support@orangedynasty.com" className="text-orange-600 underline">support@orangedynasty.com</a>.
          </p>
        </section>

        <div className="mt-8 text-center text-orange-700 font-semibold text-base sm:text-lg">
          Thank you for trusting Orange Dynasty. Your privacy and security are our top priorities!
        </div>
      </div>
    </section>
  );
}
