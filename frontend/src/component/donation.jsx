import React, { useState } from "react";
import {
  FaMobileAlt,
  FaUniversity,
  FaCopy,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

export default function Donation() {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [copied, setCopied] = useState(false);

  const donationMethods = {
    mobile: {
      title: "Mobile Money",
      icon: <FaMobileAlt />,
      accountName: "Say No To Drugs",
      accountNumber: "+250 7XX XXX XXX",
      details: "MTN Mobile Money",
    },
    equity: {
      title: "Equity Bank",
      icon: <FaUniversity />,
      accountName: "Say No To Drugs",
      accountNumber: "XXXXXXXXXXXX",
      details: "Equity Bank Rwanda",
    },
  };

  const handleCopy = (number) => {
    navigator.clipboard.writeText(number);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-black/20">

      {/* Donation Modal */}
      <div className="relative w-full max-w-lg rounded-3xl bg-white/90 backdrop-blur-xl border border-white/40 shadow-2xl p-6 md:p-8">

        {/* Close Button */}
        <button
          onClick={() => setSelectedMethod(null)}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white text-gray-600 flex items-center justify-center transition"
        >
          <FaTimes />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center text-2xl">
            ❤️
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900">
            Support Our Mission
          </h2>

          <p className="text-gray-600 mt-3 leading-relaxed">
            Your contribution helps us prevent drug abuse, empower young
            people, and build a healthier future.
          </p>
        </div>

        {/* Donation Options */}
        {!selectedMethod && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Mobile Money */}
            <button
              onClick={() => setSelectedMethod("mobile")}
              className="group rounded-2xl border border-gray-200 bg-white p-6 text-left hover:border-green-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center text-xl mb-4 group-hover:bg-green-600 group-hover:text-white transition">
                <FaMobileAlt />
              </div>

              <h3 className="font-bold text-gray-900 text-lg">
                Mobile Money
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Donate using MTN Mobile Money
              </p>

              <span className="inline-block mt-4 text-sm font-semibold text-green-600">
                Donate →
              </span>
            </button>

            {/* Equity Bank */}
            <button
              onClick={() => setSelectedMethod("equity")}
              className="group rounded-2xl border border-gray-200 bg-white p-6 text-left hover:border-blue-900 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center text-xl mb-4 group-hover:bg-blue-900 group-hover:text-white transition">
                <FaUniversity />
              </div>

              <h3 className="font-bold text-gray-900 text-lg">
                Equity Bank
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Donate through our bank account
              </p>

              <span className="inline-block mt-4 text-sm font-semibold text-blue-900">
                Donate →
              </span>
            </button>

          </div>
        )}

        {/* Account Details */}
        {selectedMethod && (
          <div className="animate-[fadeIn_0.3s_ease-in-out]">

            <button
              onClick={() => setSelectedMethod(null)}
              className="mb-6 text-sm font-semibold text-gray-500 hover:text-gray-900 transition"
            >
              ← Back to donation methods
            </button>

            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6">

              {/* Method Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center text-xl">
                  {donationMethods[selectedMethod].icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {donationMethods[selectedMethod].title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {donationMethods[selectedMethod].details}
                  </p>
                </div>
              </div>

              {/* Account Name */}
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                  Account Name
                </p>

                <p className="font-semibold text-gray-900">
                  {donationMethods[selectedMethod].accountName}
                </p>
              </div>

              {/* Account Number */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Account / Phone Number
                </p>

                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 font-bold text-gray-900 tracking-wide">
                    {donationMethods[selectedMethod].accountNumber}
                  </div>

                  <button
                    onClick={() =>
                      handleCopy(
                        donationMethods[selectedMethod].accountNumber
                      )
                    }
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-white transition ${
                      copied
                        ? "bg-green-600"
                        : "bg-blue-950 hover:bg-blue-900"
                    }`}
                    title="Copy account number"
                  >
                    {copied ? <FaCheck /> : <FaCopy />}
                  </button>
                </div>
              </div>

              {/* Thank You */}
              <div className="mt-6 p-4 rounded-xl bg-green-50 border border-green-100">
                <p className="text-sm text-green-800 text-center">
                  Thank you for supporting the{" "}
                  <span className="font-bold">Say No To Drugs</span> campaign.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-7">
          Every contribution makes a difference.
        </p>

      </div>
    </div>
  );
}
