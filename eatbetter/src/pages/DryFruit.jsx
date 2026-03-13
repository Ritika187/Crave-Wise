import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const dryFruits = [
  {
    id: 301,
    name: "Hazelnut Chocolate Laddoos",
    price: 499,
    oldPrice: 550,
    image1: "/DryFruit/1-f.jpg",
    image2: "/DryFruit/1-b.webp",
    image3: "/DryFruit/3Hazelnut.jpg",
    image4: "/DryFruit/4Hazelnut.webp"
  },
  { 
    id: 302,
    name: "Peanut Chocolate Laddoos",
    price: 699,
    oldPrice: 750,
    image1: "/DryFruit/2-f.jpg",
    image2: "/DryFruit/2-b.webp",
    image3: "/DryFruit/3Hazelnut.jpg",
    image4: "/DryFruit/4Hazelnut.webp"
  },
  {
    id: 303,
    name: "Orange Chocolate Laddoos",
    price: 599,
    oldPrice: 650,
    image1: "/DryFruit/3-f.jpg",
    image2: "/DryFruit/3-b.webp",
     image3: "/DryFruit/3Hazelnut.jpg",
    image4: "/DryFruit/4Hazelnut.webp"
  }
];

function DryFruit() {

  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="grid md:grid-cols-3 gap-8 p-10">

      {dryFruits.map((product) => (

        <div
          key={product.id}
          className="border p-4 rounded-xl shadow hover:shadow-xl transition cursor-pointer"
          onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
          onMouseEnter={() => setHoveredId(product.id)}
          onMouseLeave={() => setHoveredId(null)}
        >

          <img
            src={hoveredId === product.id ? product.image2 : product.image1}
            alt={product.name}
            className="w-full"
          />

          <h2 className="font-semibold mt-3">
            {product.name}
          </h2>

          <div className="flex gap-2 items-center">
            <p className="font-bold text-lg">₹{product.price}</p>
            <p className="line-through text-gray-400">₹{product.oldPrice}</p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();   // button click par page open nahi hoga
              addToCart({
                ...product,
                image: product.image1
              });
            }}
            className="w-full bg-orange-500 text-white py-2 mt-3 rounded hover:bg-green-600"
          >
            ADD TO CART
          </button>

        </div>

      ))}

    </div>
  );
}

export default DryFruit;