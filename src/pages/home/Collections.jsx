import React from "react";
import CollectionBg from "../../images/collection-bg.jpg";
import ZaraLogo from "../../images/zara-logo.png";

const Collections = () => {
  return (
    <div
      style={{ backgroundImage: `url(${CollectionBg})` }}
      className="bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-20"
    >
      <div className="h-[580px] flex justify-between md:flex-row items-center">
        <div className="md:w-1/2"></div>
        <div className="md:w-1/2">
          <img src={ZaraLogo} alt="zara-logo" width={300} />
          <p className="text-lg capitalize my-8 md:w-2/3 leading-[32px] text-gray-600">
            Discover the latest fashion trends in our exclusive collection. From
            timeless classics to modern essentials, every piece is crafted with
            attention to detail and designed to elevate your wardrobe. 
          </p>
          <button className="bg-white text-black font-semibold px-2 py-2 rounded-sm">
            See Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
