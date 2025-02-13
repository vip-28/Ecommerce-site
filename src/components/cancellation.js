import React from "react";

const CancellationAndRefund = () => {
  return (
    <div className="p-10 text-orange-500 mt-20">
      <h1 className="text-3xl font-bold">Cancellation and Refund Policy</h1>
      
      <h2 className="text-2xl font-semibold mt-6">1. Introduction</h2>
      <p className="mt-2">At QuickGym, we understand that circumstances may arise that require cancellation or refund requests. This policy outlines the terms and conditions governing cancellations and refunds for our memberships and services.</p>
      
      <h2 className="text-2xl font-semibold mt-6">2. Membership Cancellation</h2>
      <p className="mt-2">Members may request cancellation of their membership at any time through their account settings or by contacting customer support. The following conditions apply:</p>
      <ul className="list-disc ml-6 mt-2">
        <li>Monthly memberships must be canceled at least 5 days before the next billing cycle to avoid charges.</li>
        <li>Annual memberships can be canceled at any time, but refunds are subject to the refund policy outlined below.</li>
        <li>Members on promotional or discounted plans may not be eligible for refunds.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6">3. Refund Policy</h2>
      <p className="mt-2">Refunds are granted under the following conditions:</p>
      <ul className="list-disc ml-6 mt-2">
        <li><strong>7-Day Cooling-Off Period:</strong> New members who cancel within 7 days of their sign-up date may receive a full refund, provided they have not used the gym services extensively.</li>
        <li><strong>Partial Refunds:</strong> Members who cancel an annual plan after the 7-day period may receive a prorated refund minus any administrative fees.</li>
        <li><strong>No Refunds:</strong> Monthly memberships, once billed, are non-refundable.</li>
        <li><strong>Class & Personal Training Fees:</strong> Refunds for booked classes or personal training sessions are only available if canceled at least 24 hours in advance.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6">4. Refund Processing Time</h2>
      <p className="mt-2">Once a refund request is approved, the processing time varies based on the payment method used:</p>
      <ul className="list-disc ml-6 mt-2">
        <li>Credit/Debit Card: 5-7 business days</li>
        <li>Bank Transfers: 7-10 business days</li>
        <li>Digital Wallets: 3-5 business days</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6">5. Exceptions</h2>
      <p className="mt-2">No refunds will be provided under the following circumstances:</p>
      <ul className="list-disc ml-6 mt-2">
        <li>Membership was revoked due to violation of our Terms and Conditions.</li>
        <li>Refund request is made beyond the applicable cancellation period.</li>
        <li>Misuse of services, fraudulent activity, or policy abuse.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6">6. Contact Information</h2>
      <p className="mt-2">For cancellation and refund requests, please contact our support team:</p>
      <ul className="list-disc ml-6 mt-2">
        <li>Email: support@quickgym.com</li>
        <li>Phone: [Insert Contact Number]</li>
        <li>Address: [Insert Gym Address]</li>
      </ul>
    </div>
  );
};

export default CancellationAndRefund;
