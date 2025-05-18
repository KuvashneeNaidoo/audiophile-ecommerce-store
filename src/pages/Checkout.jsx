import React from "react";
import Cash from "../assets/checkout/icon-cash-on-delivery.svg";
import Modal from "../components/Modal";

export default function Checkout({ cartItems }) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  const [errors, setErrors] = React.useState({});
  const [paymentMethod, setPaymentMethod] = React.useState("eMoney");
  const [showModal, setShowModal] = React.useState(false); // State to control the modal visibility

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const handleSubmit = () => {
    const newErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
      // Only validate eMoney fields if payment method is eMoney
      if (
        paymentMethod === "eMoney" ||
        (key !== "eMoneyNumber" && key !== "eMoneyPin")
      ) {
        if (!value.trim()) newErrors[key] = true;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form is valid, showing modal...");
      setShowModal(true);
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 50;
  const vat = total * 0.2;
  const grandTotal = total + shipping;

  return (
    <div className="bg-[#fafafa]">
      <div className=" flex flex-col xl:flex-row justify-between max-w-screen-xl mx-auto xl:px-[165px] px-6 sm:px-12 py-6 gap-8">
        {/* Form Section */}
        <div className="w-full xl:w-2/3 bg-white p-8 shadow-md">
          <h1 className="text-2xl font-bold mb-6 uppercase tracking-widest">
            Checkout
          </h1>

          {/* Billing Details */}
          <div className="mb-6">
            <h2 className="text-sm font-semibold mb-4 uppercase tracking-wider text-[#D87D4A]">
              Billing Details
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  className={`block text-xs font-bold mb-2 ${
                    errors.name ? "text-red-500" : ""
                  }`}
                >
                  Name
                </label>
                <input
                  className={`w-full p-2 border rounded text-sm font-bold ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Alexei Ward"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    Field cannot be empty
                  </p>
                )}
              </div>
              <div>
                <label
                  className={`block text-xs font-bold mb-2 ${
                    errors.email ? "text-red-500" : ""
                  }`}
                >
                  Email Address
                </label>
                <input
                  className={`w-full p-2 border rounded text-sm font-bold ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="alexei@mail.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    Field cannot be empty
                  </p>
                )}
              </div>
              <div>
                <label
                  className={`block text-xs font-bold mb-2 ${
                    errors.phone ? "text-red-500" : ""
                  }`}
                >
                  Phone Number
                </label>
                <input
                  className={`w-full p-2 border rounded text-sm font-bold ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+1 202-555-0136"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    Field cannot be empty
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Shipping Info */}
          <div className="mb-6">
            <h2 className="text-sm font-semibold mb-4 uppercase tracking-wider text-[#D87D4A]">
              Shipping Info
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label
                  className={`block text-xs font-bold mb-2 ${
                    errors.address ? "text-red-500" : ""
                  }`}
                >
                  Your Address
                </label>
                <input
                  className={`w-full p-2 border rounded text-sm font-bold ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="1137 Williams Avenue"
                />
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">
                    Field cannot be empty
                  </p>
                )}
              </div>
              <div>
                <label
                  className={`block text-xs font-bold mb-2 ${
                    errors.zip ? "text-red-500" : ""
                  }`}
                >
                  ZIP Code
                </label>
                <input
                  className={`w-full p-2 border rounded text-sm font-bold ${
                    errors.zip ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData.zip}
                  onChange={(e) => handleInputChange("zip", e.target.value)}
                  placeholder="10001"
                />
                {errors.zip && (
                  <p className="text-red-500 text-xs mt-1">
                    Field cannot be empty
                  </p>
                )}
              </div>
              <div>
                <label
                  className={`block text-xs font-bold mb-2 ${
                    errors.city ? "text-red-500" : ""
                  }`}
                >
                  City
                </label>
                <input
                  className={`w-full p-2 border rounded text-sm font-bold ${
                    errors.city ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  placeholder="New York"
                />
                {errors.city && (
                  <p className="text-red-500 text-xs mt-1">
                    Field cannot be empty
                  </p>
                )}
              </div>
              <div>
                <label
                  className={`block text-xs font-bold mb-2 ${
                    errors.country ? "text-red-500" : ""
                  }`}
                >
                  Country
                </label>
                <input
                  className={`w-full p-2 border rounded text-sm font-bold ${
                    errors.country ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData.country}
                  onChange={(e) => handleInputChange("country", e.target.value)}
                  placeholder="United States"
                />
                {errors.country && (
                  <p className="text-red-500 text-xs mt-1">
                    Field cannot be empty
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div>
            <h2 className="text-sm font-semibold mb-4 uppercase tracking-wider text-[#D87D4A]">
              Payment Details
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-xs font-bold mb-2">
                  Payment Method
                </label>
                <div className="flex flex-col md:flex-row gap-4">
                  {/* e-Money option */}
                  <label className="flex items-center border p-2 rounded-md w-full md:w-1/2 justify-between cursor-pointer border-gray-300">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="payment"
                        value="eMoney"
                        checked={paymentMethod === "eMoney"}
                        onChange={() => setPaymentMethod("eMoney")}
                      />
                      <span className="text-sm font-medium">e-Money</span>
                    </div>
                  </label>
                  {/* Cash on Delivery */}
                  <label className="flex items-center border p-2 rounded-md w-full md:w-1/2 justify-between cursor-pointer border-gray-300">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="payment"
                        value="cashOnDelivery"
                        checked={paymentMethod === "cashOnDelivery"}
                        onChange={() => setPaymentMethod("cashOnDelivery")}
                      />
                      <span className="text-sm font-medium">
                        Cash on Delivery
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Conditionally Render Fields Based on Payment Method */}
              {paymentMethod === "eMoney" ? (
                <>
                  <div>
                    <label
                      className={`block text-xs font-bold mb-2 ${
                        errors.eMoneyNumber ? "text-red-500" : ""
                      }`}
                    >
                      e-Money Number
                    </label>
                    <input
                      className={`w-full p-2 border rounded text-sm font-bold ${
                        errors.eMoneyNumber
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      value={formData.eMoneyNumber}
                      onChange={(e) =>
                        handleInputChange("eMoneyNumber", e.target.value)
                      }
                      placeholder="238521993"
                    />
                    {errors.eMoneyNumber && (
                      <p className="text-red-500 text-xs mt-1">
                        Field cannot be empty
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      className={`block text-xs font-bold mb-2 ${
                        errors.eMoneyPin ? "text-red-500" : ""
                      }`}
                    >
                      e-Money Pin
                    </label>
                    <input
                      className={`w-full p-2 border rounded text-sm font-bold ${
                        errors.eMoneyPin ? "border-red-500" : "border-gray-300"
                      }`}
                      value={formData.eMoneyPin}
                      onChange={(e) =>
                        handleInputChange("eMoneyPin", e.target.value)
                      }
                      placeholder="1234"
                    />
                    {errors.eMoneyPin && (
                      <p className="text-red-500 text-xs mt-1">
                        Field cannot be empty
                      </p>
                    )}
                  </div>
                </>
              ) : (
                <div className="flex items-center mt-2 md:col-span-2">
                  {/* Cash Icon */}
                  <img
                    src={Cash}
                    alt="Cash on Delivery"
                    className="w-6 h-6 mr-3"
                  />
                  {/* Cash on Delivery Message */}
                  <p className="text-sm text-gray-600">
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full xl:w-1/3 bg-white p-8 rounded-lg shadow-md self-start">
          <h1 className="text-xl font-bold mb-6 text-gray-900 uppercase tracking-widest">
            Summary
          </h1>

          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-start gap-4 text-sm mb-4"
              >
                <img
                  src={item.image}
                  alt="product-image"
                  className="w-16 h-16 object-cover"
                />

                <div className="flex-1">
                  {/* Name and quantity */}
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-gray-500 font-semibold">
                      x{item.quantity}
                    </p>
                  </div>
                  {/* Price */}
                  <p className="text-gray-500 font-semibold">
                    $ {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}

            <div className="space-y-1 mt-6 font-lg">
              <div className="flex justify-between">
                <p className="uppercase text-gray-400">Total</p>
                <p className="font-black text-gray-800">$ {total.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="uppercase text-gray-400">Shipping</p>
                <p className="font-black text-gray-800">$ {shipping}</p>
              </div>
              <div className="flex justify-between">
                <p className="uppercase text-gray-400">VAT (Included)</p>
                <p className="font-black text-gray-800">$ {vat.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-grey-400 mt-4">
                <p className="uppercase text-gray-400">Grand Total</p>
                <p className="font-black text-[#D87D4A]">
                  $ {grandTotal.toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          <button
            className="mt-6 w-full py-3 bg-[#D87D4A] text-white font-bold rounded-lg hover:bg-[#c76c3c] focus:outline-none"
            onClick={handleSubmit}
          >
            Continue & Pay
          </button>
        </div>

        {/* Modal Component */}
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          cartItems={cartItems}
          total={total}
          shipping={shipping}
          vat={vat}
          grandTotal={grandTotal}
        />
      </div>
    </div>
  );
}
