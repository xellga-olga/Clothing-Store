import React, { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const BestSellers = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const bestSellers = products.filter((item) => item.status === "Best Sellers");
  // console.log(bestSellers)
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
      <div className="text-center">
        <h2 className="title">Best sellers</h2>
        <p className="text-Black/75 mx-auto capitalize md:w-2/3 mb-8">
          These top picks are loved by our customers for their timeless appeal
          and versatile designs. Explore the best-selling products that everyone
          is talking about and find your next favorite piece.
        </p>
      </div>
      {/* products card */}
      <div className="mb-16">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {bestSellers.map((product) => (
            <SwiperSlide key={product.id}>
              <Link to={`/shop/${product.id}`}>
                <img
                  src={product.image}
                  alt="product"
                  className="h-72 w-full object-cover rounded-md hover:scale-105 transition-all duration-300"
                />
              </Link>
              <div className="mt-4 px-4">
                <h4 className="text-base font-semibold mb-2">{product.title}</h4>
                <div className="flex justify-between">
                  <p className="text-black/50">{product.category}</p>
                  <p className="font-semibold">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSellers;
