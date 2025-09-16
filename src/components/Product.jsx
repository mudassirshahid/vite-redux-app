import React, { useEffect } from "react";
import react from "../assets/react.svg";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearAllItems, removeItem } from "../redux/slices/addToCart";
import { fetchProducts } from "../redux/slices/productApi";

const Product = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const productSelector = useSelector((state) => state.products.items);
  // console.log(productSelector);
  const cartSelector = useSelector((state) => state.cart.items);

  return (
    <>
      {/* <button
        className="bg-gray-600 px-3 py-2 rounded my-8 font-bold cursor-pointer"
        onClick={() => dispatch(clearAllItems())}
      >
        Clear Cart
      </button> */}
      <div className="grid-card grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10">
        {productSelector.length &&
          productSelector.map((item) => (
            <div key={item.id} className="card border rounded-xl m-3 p-4">
              <img className="m-auto" src={item.thumbnail} alt="" />
              <div className="content flex flex-col gap-3">
                <div className="font-bold text-2xl">{item.title}</div>
                <div>{item.description}</div>
                <div className="font-medium">Price: {item.price}</div>
                <div className="font-medium">Rating: {item.rating}</div>
                <div className="card-btn flex gap-3 my-2">
                  {/* For one time add in cart use this functionality  */}
                  {cartSelector.find((cartItem) => cartItem.id === item.id) ? (
                    <button className="bg-gray-400 px-3 py-2 rounded cursor-pointer">
                      Added in Cart
                    </button>
                  ) : (
                    <button
                      className="bg-emerald-800 px-3 py-2 rounded cursor-pointer"
                      onClick={() => dispatch(addItem(item))}
                    >
                      Add to Cart
                    </button>
                  )}
                  {/* <button className='bg-emerald-800 px-3 py-2 rounded' onClick={() => dispatch(addItem(item))}>Add to Cart</button> */}
                  {cartSelector.some((cartItem) => cartItem.id === item.id) && (
                    <button
                      className="bg-red-500 px-3 py-2 rounded"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      Remove Item
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* <div className='my-10'>
         <button className='bg-gray-600 px-3 py-2 rounded' onClick={() => dispatch(clearAllItems())}>Clear Cart</button>
        <div className='flex gap-5'>
        <img className='w-[10%]' src={react} alt="react" />
        <div className='flex flex-col justify-center items-start gap-3'>
        <h2 className='font-bold text-2xl'>Product</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit necessitatibus dolor minima atque sequi quaerat!</p>
        <button className='bg-emerald-800 px-3 py-2 rounded' onClick={() => dispatch(addItem(1))}>Add to Cart</button>
        <button className='bg-red-500 px-3 py-2 rounded' onClick={() => dispatch(removeItem())}>Remove Item</button>
        </div>
        </div>
      </div> */}
    </>
  );
};

export default Product;
