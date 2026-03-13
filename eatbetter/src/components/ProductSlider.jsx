import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

import "swiper/css"
import "swiper/css/navigation"

const products = [
  {
    id: 1,
    name:"Millet Bhujia - Pudina Masti",
    price:255,
    image1:"/Chatpata/PudinaMasti.webp"
  },
  {
    id:2,
    name:"Peanut Cranberry",
    price:255,
    image1:"/Protein/2-f.webp"
  },
  {
        id:3,
    name:"Hazelnut Chocolate Laddoos",
    price:255,
    image1:"/DryFruit/1-f.jpg"
  },
  {
    id:4,
    name:"Chatpata Cranberry",
    price:255,
    image1:"/Nuts/3-f.webp"
  }
]

export default function ProductSlider() {

  const { addToCart } = useContext(CartContext)

  return (
    <section className="py-10 ">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          BEST SELLERS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }
          }}
        >

          {products.map((product) => (
            <SwiperSlide key={product.id}>

              <div className="bg-orange-100 rounded-2xl p-4 text-center hover:shadow-lg transition">

                <img
                  src={product.image1}
                  alt={product.name}
                  className="h-48 mx-auto object-contain"
                />

                <h3 className="mt-4 font-semibold">
                  {product.name}
                </h3>

                <p className="text-orange-600 font-bold mt-1">
  ₹{product.price}
</p>

                <button
                  onClick={() => addToCart(product)}
                  className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                >
                  Add to Cart
                </button>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  )
}