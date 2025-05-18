import { useNavigate } from "react-router-dom";
import CartIcon from "../assets/shared/desktop/icon-cart-dark.svg";

const Cart = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();
  const increment = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeAll = () => setCartItems([]);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="absolute right-[-8px] top-20 bg-white p-6 w-80 rounded-lg shadow-lg z-30">
      <div className="flex justify-between items-center mb-4">
        {cartItems.length > 0 && (
          <h2 className="font-bold text-lg">
            Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
          </h2>
        )}

        {cartItems.length > 0 && (
          <button
            onClick={removeAll}
            className="text-sm text-gray-500 underline hover:text-black"
          >
            Remove all
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>Your cart is empty</p>
          <img
            src={CartIcon}
            alt="Empty cart"
            className="mx-auto mt-4 w-40 h-40 object-contain"
          />
        </div>
      ) : (
        <div className="space-y-4 max-h-60 overflow-y-auto">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover"
              />
              <div className="flex-1 ml-4">
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-xs text-gray-500">${item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decrement(item.id)}
                  className="px-2 py-1 bg-gray-200"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increment(item.id)}
                  className="px-2 py-1 bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <>
          <div className="flex justify-between mt-4">
            <span className="text-sm uppercase text-gray-500">Total</span>
            <span className="font-bold">${total.toFixed(2)}</span>
          </div>
          <button
            onClick={() => navigate("/checkout")}
            className="w-full mt-4 bg-[#D87D4A] text-white py-2 uppercase font-bold text-sm tracking-wider hover:bg-[#FBAF85]"
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
