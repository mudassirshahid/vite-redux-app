import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartList from "./components/CartList";

function App() {
  return (
    <>
      <div className="container text-white p-4">
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cartlist" element={<CartList />}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
