import React from "react";
import bannerImg from "../../images/banner.png";
import { FaBagShopping } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className="bg-primayBG py-12 xl:px-28 px-4 ">
      <div className="flex py-28 flex-col md:flex-row-reverse justify-between items-center gap-14">
        <div className="md:w-1/2 ">
          <img src={bannerImg} alt="banner" width={450} />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-5xl font-light mb-5">Collections</h1>
          <p className="text-xl mb-7">
            Discover our latest collections, crafted with care to suit your
            style and needs.
          </p>
          <button className="bg-Black text-white flex items-center gap-2 hover:bg-orange-500 px-6 py-2 rounded-sm font-semibold">
            <FaBagShopping className="inline-flex" />
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
