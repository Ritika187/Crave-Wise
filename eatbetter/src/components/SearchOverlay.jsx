import React, { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import products from "../data/products";
import { useNavigate } from "react-router-dom";

function SearchOverlay({ closeSearch }) {

  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const overlayRef = useRef();
  const navigate = useNavigate();

  // PRODUCT FILTER
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  // SUGGESTIONS WITH LINKS
  const suggestionList = [
    { name: "protein snacks", link: "/protein-laddoos" },
    { name: "dry fruit", link: "/dry-fruit-laddoos" },
    { name: "healthy laddoos", link: "/protein-laddoos" },
    { name: "mom special", link: "/lactation-laddoos" },
    { name: "millet namkeen", link: "/chatpata-namkeen" },
    { name: "snack box", link: "/snack-box" }
  ];

  const suggestions = suggestionList.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  // HIGHLIGHT SEARCH TEXT
  const highlightText = (text) => {
    if (!query) return text;

    const parts = text.split(new RegExp(`(${query})`, "gi"));

    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} className="text-orange-500 font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  // KEYBOARD NAVIGATION
  const handleKeyDown = (e) => {

    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) =>
        prev < filteredProducts.length - 1 ? prev + 1 : prev
      );
    }

    if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    }

    if (e.key === "Enter" && selectedIndex >= 0) {
      navigate(`/product/${filteredProducts[selectedIndex].id}`);
      closeSearch();
    }
  };

  // CLICK OUTSIDE CLOSE
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        closeSearch();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeSearch]);

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/20 z-40 flex justify-center items-start pt-6">

      <div
        ref={overlayRef}
        className="bg-white w-[850px] shadow-xl rounded-lg"
      >

        {/* SEARCH BAR */}
        <div className="flex items-center border-b p-4">

          <Search className="mr-3 text-gray-500"/>

          <input
            type="text"
            placeholder="Search for products"
            className="flex-1 outline-none text-lg"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <X
            className="cursor-pointer"
            onClick={closeSearch}
          />

        </div>

        {query && (
          <div className="grid grid-cols-2 gap-10 p-6">

            {/* SUGGESTIONS */}
            <div>

              <p className="text-xs tracking-widest text-gray-500 mb-4">
                SUGGESTIONS
              </p>

              {suggestions.slice(0,5).map((item,i)=>(

                <p
                  key={i}
                  onClick={()=>{
                    navigate(item.link);
                    closeSearch();
                  }}
                  className="py-2 cursor-pointer hover:text-orange-500"
                >
                  {highlightText(item.name)}
                </p>

              ))}

            </div>

            {/* PRODUCTS */}
            <div className="max-h-60 overflow-y-auto">

              {filteredProducts.map((product,index) => (

                <div
                  key={product.id}
                  onClick={()=>{
                    navigate(`/product/${product.id}`);
                    closeSearch();
                  }}
                  className={`flex items-center gap-4 py-2 px-2 rounded cursor-pointer ${
                    selectedIndex === index ? "bg-gray-100" : ""
                  }`}
                >

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-14 object-cover rounded flex-shrink-0"
                  />

                  <p className="text-sm font-medium">
                    {highlightText(product.name)}
                  </p>

                </div>

              ))}

            </div>

          </div>
        )}

        {query && (
          <div className="border-t p-4 text-sm text-gray-600 cursor-pointer">
            Show all results for "{query}" →
          </div>
        )}

      </div>

    </div>
  );
}

export default SearchOverlay;