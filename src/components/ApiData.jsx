import React, { useEffect, useState } from "react";

const ApiData = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setPost(data.products); // ✅ only products array
        console.log(data.products);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }, 3000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <div style={{ background: "url('https://picsum.photos/800/400')" }}>
      {loading ? (
        "DATA LOADING"
      ) : (
        <>
          {post.map((item) => (
            <div key={item.id}>{item.title}</div>
          ))}
        </>
      )}
    </div>
  );
};

export default ApiData;
