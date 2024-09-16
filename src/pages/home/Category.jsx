import React from "react";
import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";
import brand4 from "../../images/brand4.png";
import brand5 from "../../images/brand5.png";

import { Link } from "react-router-dom";

import Image1 from "../../images/image1.avif";
import Image2 from "../../images/image2.avif";
import Image3 from "../../images/image3.avif";
import Image4 from "../../images/image4.avif";
import Image5 from "../../images/image5.avif";

const Category = () => {
  const companyLogo = [
    { id: 1, img: brand1 },
    { id: 2, img: brand2 },
    { id: 3, img: brand3 },
    { id: 4, img: brand4 },
    { id: 5, img: brand5 },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28">
      {/* brand logo */}
      <div className="flex items-center justify-around flex-wrap gap-4 py-5">
        {companyLogo.map(({ id, img }) => (
          <div key={id}>
            <img src={img} alt="category_image" width={100} />
          </div>
        ))}
      </div>

      {/* category grid */}
      <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
        <p className="font-semibold uppercase text-white bg-black text-center inline-flex md:p-1.5 p-2 rounded-sm inline-flex md:-rotate-90">
          Explore new and popular styles
        </p>
        <div>
          <Link to="/">
            <img
              className="hover:scale-105 transition-all duration-200"
              alt=""
              src={Image1}
              width={600}
            />
          </Link>
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-2 md:gap-4 lg:gap-6">
            <Link to="/">
              <img alt="" src={Image2} className="w-full h-auto object-cover" />
            </Link>
            <Link to="/">
              <img alt="" src={Image3} className="w-full h-auto object-cover" />
            </Link>
            <Link to="/">
              <img alt="" src={Image4} className="w-full h-auto object-cover" />
            </Link>
            <Link to="/">
              <img alt="" src={Image5} className="w-full h-auto object-cover" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
