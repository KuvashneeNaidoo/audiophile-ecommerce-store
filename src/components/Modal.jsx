import React, { useEffect } from "react";
import Check from "../assets/checkout/icon-order-confirmation.svg";

export default function Modal({
  showModal,
  setShowModal,
  cartItems,
  grandTotal,
}) {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  if (!showModal) return null;

  const firstItem = cartItems[0];

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      {/* Background dimmer */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Modal content */}
      <div className="relative bg-white p-10 rounded-lg shadow-lg w-128 max-w-lg z-50">
        <div className="flex flex-col space-y-6">
          {/* Icon at the top */}
          <div className="flex-shrink-0 flex justify-center md:justify-start">
            <img src={Check} alt="Check" className="w-16 h-16" />
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-bold uppercase mb-2">
              Thank you <br />
              for your order
            </h2>
            <p className="text-sm text-gray-500">
              You will receive an email confirmation shortly.
            </p>
          </div>
        </div>

        {/* Order Summary */}
        <div className="flex mt-6 rounded-lg overflow-hidden max-w-lg mx-auto min-h-[150px]">
          <div className="flex bg-gray-100 p-4 flex-1 items-center">
            <img
              src={firstItem.image}
              alt={firstItem.name}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div className="flex-1 ml-4">
              <div className="flex items-center justify-start whitespace-nowrap mb-2">
                <p className="font-semibold text-sm tracking-wide">
                  {firstItem.name}
                </p>
                <p className="text-xs text-gray-500 ml-6 font-bold tracking-wide">
                  x{firstItem.quantity}
                </p>
              </div>
              <p className="text-md text-gray-500 font-bold tracking-wide">
                $ {firstItem.price.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Grand Total */}
          <div className="bg-black text-white p-6 min-w-[180px] flex flex-col justify-center rounded-r-lg">
            <p className="uppercase text-sm opacity-70 tracking-wide">
              Grand Total
            </p>
            <p className="text-md font-semibold tracking-wide">
              $ {grandTotal.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => (window.location.href = "/")}
            className="w-full py-2 bg-[#D87D4A] text-white font-bold rounded-md uppercase tracking-wide"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
