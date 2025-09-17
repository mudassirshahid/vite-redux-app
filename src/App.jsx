import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartList from "./components/CartList";
import Table from "./components/FilterTable";
import ApiData from "./components/ApiData";
import { useTheme } from "./context/ThemeContext";

function App() {
  const {theme} = useTheme()
  return (
    <>
      <div className={`${theme ? "bg-amber-950 text-white" : "bg-white text-black"} container p-4`}>
        <BrowserRouter>
        <Header />
        <Table />
        {/* <ApiData/> */}
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
