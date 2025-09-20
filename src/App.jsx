import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CartList from "./components/CartList";
import Table from "./components/FilterTable";
import ApiData from "./components/filterApiData/ApiData";
import { useTheme } from "./context/ThemeContext";
import ProductPage from "./components/filterApiData/ProductPage";

const useAuth = () => {
  // just returning a boolean (true = logged in, false = not logged in)
  const isAuthenticated = true; 
  return isAuthenticated;
};

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const Home = () => <h2>Home Page (Public)</h2>;
const Dashboard = () => <h2>Dashboard (Protected)</h2>;
const Login = () => <h2>Login Page</h2>;

function App() {
  const {theme} = useTheme()
  return (
    <>
      <div className={`${theme ? "bg-gray-950 text-white" : "bg-white text-black"} container p-4`}>
        <BrowserRouter>
        <Header />
        {/* <Table /> */}
        {/* <ApiData/> */}
        <Routes>
          <Route path="/" element={<ApiData/>} />
          <Route path="/products" element={<Product />} />
          <Route path="/cartlist" element={<CartList />}/>
          <Route path="/product/:id" element={<ProductPage />} />
          {/* Protected route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
