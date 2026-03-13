import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import TextMarquee from "./components/TextMarquee";
import SnacksMood from "./components/SnacksMood";
import ProductSlider from "./components/ProductSlider";
import ProductFeatures from "./components/ProductFeatures";
import SnackPhilosophy from "./components/SnackPhilosophy";
import BunkTheJunk from "./components/BunkTheJunk";
import FreshBanner from "./components/FreshBanner";
import Footer from "./components/Footer";
import AvailableSection from "./components/AvailableSection";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ContactPage from "./pages/ContactPage";
import TrackOrder from "./pages/TrackOrder";
import OurStory from "./pages/OurStory";
import MyAccount from "./pages/MyAccount"; // new page
import ChatpataNamkeen from "./pages/ChatpataNamkeen";
import ProteinLaddoo from "./pages/ProteinLaddoo";
import DryFruit from "./pages/DryFruit";
import NutMixes from "./pages/NutMixes";
import SnackBox from "./pages/SnackBox";
import LactationLaddoos from "./pages/LactationLaddoos";
import HampersByOccasion from "./pages/HampersByOccasion";
import Cart from "./pages/Cart";
import CartDrawer from "./components/CartDrawer";
import Checkout from "./pages/Checkout";
import ScrollToTop from "./ScrollToTop";
import OrderSuccess from "./pages/OrderSuccess";
import { Toaster } from "react-hot-toast";
import Shipping from "./pages/Shipping";
import Refund from "./pages/Refund";
import Support from "./pages/Support";
import Blogs from "./pages/Blogs";
import Faqs from "./pages/Faqs";
function Home() {
  return (
    <>
      <HeroSlider />
      <TextMarquee />
      <SnacksMood />
      <ProductFeatures />
      <ProductSlider />
      <SnackPhilosophy />
      <FreshBanner />
      <BunkTheJunk />
      <AvailableSection />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />

        <Navbar />

        {/* Toast Notifications */}
        <Toaster position="top-right" />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/our-story" element={<OurStory />} />

          <Route path="/chatpata-namkeen" element={<ChatpataNamkeen />} />
          <Route path="/protein-laddoos" element={<ProteinLaddoo />} />
          <Route path="/dry-fruit-laddoos" element={<DryFruit />} />
          <Route path="/nut-mixes" element={<NutMixes />} />
          <Route path="/snack-box" element={<SnackBox />} />
          <Route path="/lactation-laddoos" element={<LactationLaddoos />} />
          <Route path="/hampers" element={<HampersByOccasion />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/search" element={<h1>Search Page</h1>} />
          <Route path="/location" element={<h1>Select Location</h1>} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/product/:id" element={<ProductPage />} />

          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/shipping" element={<Shipping />} />
<Route path="/refund" element={<Refund />} />
<Route path="/support" element={<Support />} />
<Route path="/blogs" element={<Blogs />} />
<Route path="/faqs" element={<Faqs />} />


        </Routes>

        <Footer />
        <CartDrawer />

      </Router>
    </CartProvider>
  );
}
export default App;