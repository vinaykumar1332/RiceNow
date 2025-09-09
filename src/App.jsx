// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home"; // create or reuse a small Home component
import MyOrders from "./pages/MyOrders/MyOrders";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ paddingTop: "90px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<MyOrders />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
