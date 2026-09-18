import React, { useState } from "react";
import {
  FaMobileAlt,
  FaUniversity,
  FaCopy,
  FaCheck,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

export default function Donation({ onClose }) {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [copied, setCopied] = useState(false);

  const donationMethods = {
    mobile: {
      title: "Mobile Money",
      label: "MTN",
      icon: <FaMobileAlt />,
      accountName: "Say No To Drugs",
      accountNumber: "+250 7XX XXX XXX",
      details: "MTN Mobile Money",
    },

    equity: {
      title: "Equity Bank",
      label: "EQUITY",
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
    <div className="w-full">
      {/* Main Donation Modal */}
      <div className="relative w-full max-w-lg mx-auto rounded-3xl bg-white shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="px-6 md:px-8 py-6 border-b border-gray-100">
          <div className="flex items-center gap-4">

            {/* Header Icon */}
            <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center text-xl">
              {selectedMethod ? (
                donationMethods[selectedMethod].icon
              ) : (
                <FaUniversity />
              )}
            </div>

            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                {selectedMethod
                  ? donationMethods[selectedMethod].title
                  : "Donation"}
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                {selectedMethod
                  ? donationMethods[selectedMethod].details
                  : "Choose a payment method"}
              </p>
            </div>

            {/* Close */}
            <button
              onClick={() => {
                if (onClose) {
                  onClose();
                } else {
                  setSelectedMethod(null);
                }
              }}
              className="w-11 h-11 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Choose Payment Method */}
        {!selectedMethod && (
          <div className="p-6 md:p-8">

            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                Choose Payment Method
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Select how you would like to make your donation.
              </p>
            </div>

            <div className="space-y-4">

              {/* Mobile Money */}
              <button
                onClick={() => setSelectedMethod("mobile")}
                className="w-full group flex items-center gap-4 p-4 md:p-5 rounded-2xl border-2 border-gray-100 bg-white hover:border-green-500 hover:shadow-md transition-all duration-300 text-left"
              >
                <div className="w-14 h-14 rounded-xl bg-green-50 text-green-600 flex items-center justify-center text-xl shrink-0 group-hover:bg-green-600 group-hover:text-white transition">
                  <FaMobileAlt />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="block text-xs font-bold tracking-wider text-gray-400 mb-1">
                    MTN
                  </span>

                  <h4 className="text-lg font-bold text-gray-900">
                    Mobile Money
                  </h4>
                </div>

                <div className="w-11 h-11 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center group-hover:bg-green-100 group-hover:text-green-600 transition shrink-0">
                  <FaArrowRight />
                </div>
              </button>

              {/* Equity Bank */}
              <button
                onClick={() => setSelectedMethod("equity")}
                className="w-full group flex items-center gap-4 p-4 md:p-5 rounded-2xl border-2 border-gray-100 bg-white hover:border-blue-900 hover:shadow-md transition-all duration-300 text-left"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center text-xl shrink-0 group-hover:bg-blue-900 group-hover:text-white transition">
                  <FaUniversity />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="block text-xs font-bold tracking-wider text-gray-400 mb-1">
                    EQUITY
                  </span>

                  <h4 className="text-lg font-bold text-gray-900">
                    Equity Bank Rwanda
                  </h4>
                </div>

                <div className="w-11 h-11 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center group-hover:bg-blue-100 group-hover:text-blue-900 transition shrink-0">
                  <FaArrowRight />
                </div>
              </button>

            </div>

            {/* Security Notice */}
            <div className="mt-6 rounded-xl bg-blue-50 border border-blue-100 px-4 py-3">
              <p className="text-xs text-blue-700 text-center">
                Please verify the account details before making your donation.
              </p>
            </div>
          </div>
        )}

        {/* Account Details */}
        {selectedMethod && (
          <div className="p-6 md:p-8">

            {/* Back */}
            <button
              onClick={() => {
                setSelectedMethod(null);
                setCopied(false);
              }}
              className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition mb-6"
            >
              ← Choose another payment method
            </button>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">

              {/* Account Name */}
              <div className="mb-5">
                <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  Account Name
                </span>

                <p className="text-lg font-bold text-gray-900">
                  {donationMethods[selectedMethod].accountName}
                </p>
              </div>

              {/* Account Number */}
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                  {selectedMethod === "mobile"
                    ? "Mobile Number"
                    : "Account Number"}
                </span>

                <div className="flex items-center gap-2">
                  <div className="flex-1 min-w-0 bg-white border border-gray-200 rounded-xl px-4 py-3">
                    <p className="font-bold text-gray-900 tracking-wide truncate">
                      {donationMethods[selectedMethod].accountNumber}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      handleCopy(
                        donationMethods[selectedMethod].accountNumber
                      )
                    }
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-white transition shrink-0 ${
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
            </div>

            {/* Donation Note */}
            <div className="mt-5 text-center">
              <p className="text-sm text-gray-500">
                Thank you for supporting our mission.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
