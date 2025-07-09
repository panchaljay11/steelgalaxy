import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import CategoryPage from './components/CategoryPage';
import Contact from "./components/Contact";
import Analytics from "./components/Analytics";
import Policy from "./components/Policy";
import Term from "./components/Term";
import Help from "./components/Help";
import VisitorTracker from "./components/VisitorTracker";
import allProducts from './data/ProductsData';
import ProductDetails from './components/ProductDetails';


// Layout wrapper to hide header/footer on admin route
const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Header />}
      <main>{children}</main>
      {!isAdminPage && <Footer />}
    </>
  );
};

// Analytics route without password protection
const ProtectedAnalytics = () => {
  return <Analytics />;
};

function AppRoutes() {
  const location = useLocation();

  return (
    <LayoutWrapper>
      {/* ✅ Track visitors on all routes */}
      <VisitorTracker />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Policy />} />
        <Route path="/terms" element={<Term />} />
        <Route path="/help" element={<Help />} />

        {/* ✅ Hidden but accessible route for you */}
        <Route path="/admin007" element={<ProtectedAnalytics />} />
      </Routes>
    </LayoutWrapper>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}

export default App;
