import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 101,
    name: "Millet Namkeen - Desi Masala",
    price: 245,
    oldPrice: 260,
    image1: "/Chatpata/DesiMasala.webp",
    image2: "/Chatpata/Desi-Masala.webp",
    image3: "/Chatpata/3DesiMasala.webp",
    image4: "/Chatpata/4DesiMasala.webp",
    image5: "/Chatpata/5DesiMasala.webp"
  },
  {
    id: 102,
    name: "Millet Namkeen - Pudina Punch",
    price: 255,
    oldPrice: 260,
    image1: "/Chatpata/Pudina-Punch.webp",
    image2: "/Chatpata/PudinaPunch.webp",
    image3: "/Chatpata/3PudinaPunch.webp",
    image4: "/Chatpata/4PudinaPunch.webp",
    image5: "/Chatpata/5PudinaPunch.webp"
  },
  {
    id: 103,
    name: "Millet Namkeen - Mango Achari",
    price: 255,
    oldPrice: 260,
    image1: "/Chatpata/MangoAchari.webp",
    image2: "/Chatpata/Mango-Achari.webp",
    image3: "/Chatpata/3MangoAchari.webp",
    image4: "/Chatpata/4MangoAchari.webp",
    image5: "/Chatpata/5MangoAchari.webp"
  },
  {
    id: 104,
    name: "Millet Namkeen - Chilli Garlic",
    price: 255,
    oldPrice: 260,
    image1: "/Chatpata/Chilligarlic.webp",
    image2: "/Chatpata/Chilli-Garlic.webp",
    image3: "/Chatpata/3ChillGarlic.webp",
    image4: "/Chatpata/4Chilligarlic.jpg",
    image5: "/Chatpata/5ChilliGarlic.webp"
  },
  {
    id: 105,
    name: "Millet Namkeen - Pudina Masti",
    price: 179,
    oldPrice: 186,
    image1: "/Chatpata/PudinaMasti.webp",
    image2: "/Chatpata/PudinaPunch.webp",
    image3: "/Chatpata/3PudinaMasti.webp",
    image4: "/Chatpata/4PudinaMasti.webp",
    image5: "/Chatpata/5PudinaMasti.webp"
  },
  {
    id: 106,
    name: "Millet Namkeen Combo - 4*100 grams",
    price: 255,
    oldPrice: 260,
    image1: "/Chatpata/NamkeenSnacks.webp",
    image2: "/Chatpata/EatBetter-Namkeen.webp",
    image3: "/Chatpata/3Combo.webp",
    image4: "/Chatpata/4Combo.webp",
    image5: "/Chatpata/5Combo.webp"
  },
  {
    id: 107,
    name: "Makhana - Cream & Onion",
    price: 555,
    oldPrice: 660,
    image1: "/Chatpata/1Makhana.png",
    image2: "/Chatpata/2Makhana.png",
    image3: "/Chatpata/3Combo.webp",
    image4: "/Chatpata/4Combo.webp",
    image5: "/Chatpata/5Combo.webp"
  },
  {
    id: 108,
    name: "Bajra Puffs - Cream & Onion ",
    price: 115,
    oldPrice: 200,
    image1: "/Chatpata/1Bajra.png",
    image2: "/Chatpata/2Bajra.png",
    image3: "/Chatpata/3Bajra.png",
    image4: "/Chatpata/4Bajra.png",
   
  }
];

function ChatpataNamkeen() {

  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="grid md:grid-cols-3 gap-8 p-10">

      {products.map((product) => (

        <div
          key={product.id}
          className="border p-4 rounded-xl shadow hover:shadow-xl transition cursor-pointer"
          onClick={() => navigate(`/product/${product.id}`, { state: { product } })}
        >

          <img
            src={hoveredId === product.id ? product.image2 : product.image1}
            alt={product.name}
            onMouseEnter={() => setHoveredId(product.id)}
            onMouseLeave={() => setHoveredId(null)}
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
              e.stopPropagation();
              addToCart({
                ...product,
                image: product.image1
              });
            }}
            className="w-full bg-orange-500 text-white py-2 mt-3 rounded hover:bg-orange-700"
          >
            ADD TO CART
          </button>

        </div>

      ))}

    </div>
  );
}

export default ChatpataNamkeen;