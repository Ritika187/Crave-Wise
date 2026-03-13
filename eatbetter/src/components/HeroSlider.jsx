import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import { Link } from "react-router-dom"

import "swiper/css"
import "swiper/css/pagination"

export default function HeroSlider() {
  return (
    <section className="w-full overflow-hidden">

      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        speed={1200}
        pagination={{ clickable: true }}
        className="w-full"
      >

        {/* Slide 1 */}
        <SwiperSlide>
          <Link to="/chatpata-namkeen">
            <img
              src="/banner1.webp"
              alt="Namkeen"
              className="
              w-full
              h-[220px]
              sm:h-[320px]
              md:h-[450px]
              lg:h-[650px]
              object-cover
              cursor-pointer
              "
            />
          </Link>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <Link to="/protein-laddoos">
            <img
              src="/banner2.webp"
              alt="Laddoos"
              className="
              w-full
              h-[220px]
              sm:h-[320px]
              md:h-[450px]
              lg:h-[650px]
              object-cover
              cursor-pointer
              "
            />
          </Link>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <Link to="/nut-mixes">
            <img
              src="/Destop_View_Banner_Animation.webp"
              alt="Dry Fruits"
              className="
              w-full
              h-[220px]
              sm:h-[320px]
              md:h-[450px]
              lg:h-[650px]
              object-cover
              cursor-pointer
              "
            />
          </Link>
        </SwiperSlide>

      </Swiper>

    </section>
  )
}