import React, { useState, useEffect, useRef, useContext } from "react";
import { Search, User, ShoppingCart, MapPin, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import SearchOverlay from "./SearchOverlay";

function Navbar() {
  const { cart, setCartOpen } = useContext(CartContext);

  const [shopOpen, setShopOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const dropdownRef = useRef(null);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(JSON.parse(localStorage.getItem("user")));
    };

    window.addEventListener("authChange", handleStorageChange);

    return () =>
      window.removeEventListener("authChange", handleStorageChange);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShopOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleUserClick = () => {
    if (user) {
      window.location.href = "/my-account";
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <div className="w-full">
      
      {/* Search Overlay */}
      {searchOpen && (
        <SearchOverlay closeSearch={() => setSearchOpen(false)} />
      )}

      {/* Sticky Header */}
      <div>

        {/* Top Bar */}
        <div className="bg-yellow-400 text-center text-sm py-2 font-semibold">
          SAVE UP TO 15% - AUTO APPLIED + Free Shipping above Rs 399
        </div>

        {/* Navbar */}
        <div className="flex items-center justify-between px-6 md:px-10 py-4 border-b bg-white">

          {/* Left */}
          <div className="flex items-center gap-4">
            <Menu
              className="w-6 h-6 cursor-pointer md:hidden"
              onClick={() => setMobileMenu(true)}
            />
            <Search
              className="w-5 h-5 cursor-pointer"
              onClick={() => setSearchOpen(true)}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 font-semibold text-gray-700">

            {/* Shop Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <span
                className="cursor-pointer"
                onClick={() => setShopOpen(!shopOpen)}
              >
                SHOP
              </span>

              {shopOpen && (
                <div className="absolute top-8 left-0 bg-white shadow-xl w-64 p-5 space-y-4 z-50">

                  <Link to="/chatpata-namkeen" className="block hover:text-orange-500">
                    Chatpata Namkeen
                  </Link>

                  <Link to="/protein-laddoos" className="block hover:text-orange-500">
                    Protein Laddoos
                  </Link>

                  <Link to="/dry-fruit-laddoos" className="block hover:text-orange-500">
                    Dry-Fruit Laddoos
                  </Link>

                  <Link to="/nut-mixes" className="block hover:text-orange-500">
                    Nut Mixes
                  </Link>

                  <Link to="/snack-box" className="block hover:text-orange-500">
                    Snack Box
                  </Link>

                  <Link to="/lactation-laddoos" className="block hover:text-orange-500">
                    Lactation Laddoos
                  </Link>

                  <Link to="/hampers" className="block hover:text-orange-500">
                    Hampers
                  </Link>

                </div>
              )}
            </div>

            {/* Logo */}
            <Link to="/" className="text-2xl font-bold tracking-wide">
              Crave Wise
            </Link>

            <Link to="/our-story">OUR STORY</Link>
            <Link to="/contact">CONTACT</Link>

          </div>

          {/* Right */}
          <div className="flex items-center gap-6">

           {/* <MapPin className="w-5 h-5 cursor-pointer hidden md:block" />*}

            {/* User */}
            <button
              onClick={handleUserClick}
              className="flex items-center gap-2"
            >
              <User className="w-5 h-5 cursor-pointer" />
              {user ? `Hi, ${user.username}` : "Login"}
            </button>

            {/* Cart */}
            <div
              className="relative cursor-pointer"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart className="w-5 h-5" />

              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                  {cart.length}
                </span>
              )}
            </div>

          </div>

        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="fixed inset-0 z-50 flex">

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileMenu(false)}
          />

          {/* Drawer */}
          <div className="relative w-[85%] max-w-sm bg-white h-full overflow-y-auto shadow-xl">

            <div className="flex items-center justify-between px-6 py-5 border-b">
              <h2 className="text-xl font-semibold">Menu</h2>
              <X
                className="w-6 h-6 cursor-pointer"
                onClick={() => setMobileMenu(false)}
              />
            </div>

            {/* Shop */}
            <div className="px-6 mt-6">
              <p className="text-sm text-gray-500 uppercase mb-4">
                Shop Categories
              </p>

              <div className="space-y-3">

                <Link to="/chatpata-namkeen" className="block p-4 bg-gray-100 rounded">
                  Chatpata Namkeen
                </Link>

                <Link to="/protein-laddoos" className="block p-4 bg-gray-100 rounded">
                  Protein Laddoos
                </Link>

                <Link to="/dry-fruit-laddoos" className="block p-4 bg-gray-100 rounded">
                  Dry-Fruit Laddoos
                </Link>

                <Link to="/nut-mixes" className="block p-4 bg-gray-100 rounded">
                  Nut Mixes
                </Link>

                <Link to="/snack-box" className="block p-4 bg-gray-100 rounded">
                  Snack Box
                </Link>

                <Link to="/lactation-laddoos" className="block p-4 bg-gray-100 rounded">
                  Lactation Laddoos
                </Link>

                <Link to="/hampers" className="block p-4 bg-gray-100 rounded">
                  Hampers
                </Link>

              </div>
            </div>

            {/* Pages */}
            <div className="px-6 mt-8 border-t pt-6">

              <Link to="/our-story" className="block py-3">
                Our Story
              </Link>

              <Link to="/contact" className="block py-3">
                Contact Us
              </Link>

              <button
                onClick={handleUserClick}
                className="block w-full text-left py-3"
              >
                {user ? "My Account" : "Login"}
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Navbar;