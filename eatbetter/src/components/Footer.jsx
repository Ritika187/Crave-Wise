import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {

  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email");
      return;
    }

    alert("Subscribed Successfully: " + email);

    setEmail("");
  };

  return (
    <footer className="bg-[#2f5d4a] text-white pt-16 pb-10">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-16">

          {/* Logo */}
          <div>
            <h1 className="text-5xl font-bold">
              Crave<span className="text-green-400"> Wise</span>
            </h1>

            <p className="text-gray-200 mt-2">
              Healthy Snacks. Anytime. Anywhere.
            </p>
          </div>

          {/* Newsletter */}
          <form
            onSubmit={handleSubscribe}
            className="w-full lg:w-[500px]"
          >

            <p className="mb-4 text-center lg:text-left text-gray-200">
              Subscribe to our newsletter for updates and special offers!
            </p>

            <div className="flex border border-white rounded-full overflow-hidden">

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="flex-1 px-6 py-3 bg-transparent outline-none placeholder-gray-300"
              />

              <button
                type="submit"
                className="bg-white text-black px-6 py-3 font-semibold hover:bg-gray-200 transition"
              >
                SUBSCRIBE
              </button>

            </div>

          </form>

        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Pages */}
          <div>
            <h3 className="text-green-400 text-lg font-semibold mb-6">
              Pages
            </h3>

            <ul className="space-y-3 text-gray-200">

              <li>
                <Link
  to="/"
  onClick={() => window.scrollTo(0, 0)}
  className="hover:text-green-400"
>
  Home
</Link>
              </li>
    

              <li>
                <Link to="/snack-box" className="hover:text-green-400">
                  Combos
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-green-400">
                  Contact Us
                </Link>
              </li>

            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-green-400 text-lg font-semibold mb-6">
              Info
            </h3>

            <ul className="space-y-3 text-gray-200">

              <li>
                <Link to="/shipping" className="hover:text-green-400">
                  Shipping Policy
                </Link>
              </li>

              <li>
                <Link to="/refund" className="hover:text-green-400">
                  Return & Refund
                </Link>
              </li>

              <li>
                <Link to="/support" className="hover:text-green-400">
                  Support
                </Link>
              </li>

              <li>
                <Link to="/blogs" className="hover:text-green-400">
                  Blogs
                </Link>
              </li>

              <li>
                <Link to="/faqs" className="hover:text-green-400">
                  FAQs
                </Link>
              </li>

            </ul>
          </div>

          {/* Office */}
          <div>
            <h3 className="text-green-400 text-lg font-semibold mb-6">
              Office
            </h3>

            <p className="text-gray-200 leading-7">
              1st Floor, Jeevan Silk Mills,
              <br />
              Sakinaka Telephone Exchange Lane,
              <br />
              Saki Naka, Andheri East,
              <br />
              Mumbai, Maharashtra 400072
            </p>

            

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-400 mt-16 pt-6 text-center text-gray-300">
          © {new Date().getFullYear()} EatBetter. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}