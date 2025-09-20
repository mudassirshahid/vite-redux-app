import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearAllItems } from "../redux/slices/addToCart"; // adjust path

export default function CartList() {
  const cartItems = useSelector((state) => state.cart.items); // get cart data
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return <p className="p-4">Your cart is empty</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>

      <ul className="space-y-4">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <img
                    className=""
                    src={item.image}
                    alt={item.title}
                    width="200"
                  />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">${item.price}</p>
              <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => dispatch(removeItem(item.id))}
            >
              Remove
            </button>
            </div>

            
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded"
          onClick={() => dispatch(clearAllItems())}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
