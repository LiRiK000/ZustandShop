import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { LogPage } from "@pages/LogPage";
import { MainPage } from "@pages/MainPage";

export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/reg" element={<MainPage />} />
        <Route path="/login" element={<LogPage />} />
        {/*
                <Route path="/about" element={<About />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/profile" element={<ProfilePage />} />
        */}
      </Routes>
    </Router>
  );
};
