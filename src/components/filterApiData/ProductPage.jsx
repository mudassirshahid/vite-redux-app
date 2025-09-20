// ProductPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div className="flex flex-row justify-center items-center m-auto h-screen gap-5">
        <div>
        <img src={product.image} alt={product.title} />
        </div>
        <div className="flex flex-col gap-4">
      <h2 className="font-bold text-2xl">
                    {product.title} <br/> <span className="text-blue-500">({product.category})</span>
                  </h2>
      <p>{product.description}</p>
      <p><b>${product.price}</b></p>
      </div>
      
    </div>
  );
};

export default ProductPage;
