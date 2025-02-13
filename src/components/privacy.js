import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-orange-600">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        Welcome to QuickGym! Your privacy is important to us, and we are committed to protecting the information you share with us. This Privacy Policy explains how we collect, use, and protect your data when you use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
      <p className="mb-2"><strong>1.1 Personal Information:</strong> When you sign up for a membership, we collect your name, email, phone number, address, and payment details.</p>
      <p className="mb-2"><strong>1.2 Fitness Data:</strong> If you use our app for tracking workouts, we may collect details like workout duration, calories burned, and fitness progress.</p>
      <p className="mb-2"><strong>1.3 Device & Usage Information:</strong> We may collect IP addresses, browser type, device ID, and interactions with our platform for security and analytics purposes.</p>

      <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
      <ul className="list-disc pl-5">
        <li>To manage and improve our gym services.</li>
        <li>To process membership payments and renewals.</li>
        <li>To provide personalized workout recommendations.</li>
        <li>To send promotional offers and updates (if you opt-in).</li>
        <li>To ensure security and prevent fraudulent activity.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">3. How We Protect Your Data</h2>
      <p className="mb-4">We implement industry-standard security measures, including encryption, firewalls, and secure servers, to protect your personal information.</p>

      <h2 className="text-2xl font-semibold mt-6">4. Sharing of Information</h2>
      <ul className="list-disc pl-5">
        <li>We do not sell your data to third parties.</li>
        <li>We may share information with trusted partners for payment processing and gym management.</li>
        <li>In cases of legal requirements, we may disclose data to law enforcement.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">5. Your Rights & Choices</h2>
      <p className="mb-2">You have the right to:</p>
      <ul className="list-disc pl-5">
        <li>Access, update, or delete your personal information.</li>
        <li>Opt-out of promotional emails.</li>
        <li>Request a copy of the data we hold about you.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">6. Cookies & Tracking Technologies</h2>
      <p className="mb-4">We use cookies to enhance your experience and improve our website functionality. You can adjust your browser settings to disable cookies if preferred.</p>

      <h2 className="text-2xl font-semibold mt-6">7. Changes to This Privacy Policy</h2>
      <p className="mb-4">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>

      <h2 className="text-2xl font-semibold mt-6">8. Contact Us</h2>
      <p className="mb-4">If you have any questions regarding this Privacy Policy, please contact us at <strong>vipul.work28@gmail.com</strong>.</p>
    </div>
  );
};

export default PrivacyPolicy;