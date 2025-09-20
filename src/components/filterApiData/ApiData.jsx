import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../../redux/slices/addToCart";

const ApiData = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState(""); // ✅ new state for search

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const fetchData = async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setPost(data);
        console.log(data);
      } catch (err) {
        setError(err.message); // ✅ store message
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>Something went wrong: {error}</div>;
  }

  // ✅ Filter products based on search input
  const filteredPosts = post.filter((item) => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="my-5">
      {/* ✅ Search Input */}
      <input
      className="border p-2"
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", marginBottom: "20px", width: "100%" }}
      />

      {loading ? (
        <div>DATA LOADING...</div>
      ) : (
        <>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((item) => (
                <div
                  className="flex flex-col gap-3 my-5 border p-5"
                  key={item.id}
                >
                  <img
                    className="m-auto cursor-pointer"
                    src={item.image}
                    alt={item.title}
                    width="200"
                     onClick={() => navigate(`/product/${item.id}`)}
                  />
                  <h2 className="font-bold text-2xl">
                    {item.title} <br/> <span className="text-blue-500">({item.category})</span>
                  </h2>
                  <p>{item.description}</p>
                  <p>
                    <b>${item.price}</b>
                  </p>
                  <button className="border rounded px-4 py-2 w-fit cursor-pointer hover:bg-blue-700 hover:border-black transition-all" onClick={() => dispatch(addItem(item))}>Add to Cart</button>
                </div>
              ))
            ) : (
              <div>No products found</div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ApiData;
