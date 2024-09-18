import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../images/newsletters_image1.jpeg";
import Image2 from "../../images/newsletters_image2.jpeg";
import Image3 from "../../images/newsletters_image3.jpg";
import Image4 from "../../images/newsletters_image4.jpg";
import Image5 from "../../images/newsletters_image5.jpg";


const Newsletters = () => {
   return (
      <div className="bg-[#1E2832] bg-opacity-5 xl:px-28 px-4 py-16">
         <h2 className="title text-center">
            Follow products and discounts on Instagram
         </h2>

         {/* insta grid */}
         <div className="flex flex-wrap gap-4 mb-20 items-center justify-center">
            <Link to="/">
               <img src={Image1} alt="product" width={200} />
            </Link>
            <Link to="/">
               <img src={Image2} alt="product" width={200} />
            </Link>
            <Link to="/">
               <img src={Image3} alt="product" width={200} />
            </Link>
            <Link to="/">
               <img src={Image4} alt="product" width={200} />
            </Link>
            <Link to="/">
               <img src={Image5} alt="product" width={200} />
            </Link>
         </div>

         {/* newsletters */}
         <div className="">
            <h2 className="title text-center mb-8">
               Or subscribe to the newsletter
            </h2>
            <form className="md:w-1/2 mx-auto text-center">
               <input className="outline-none h-8 bg-transparent border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 mr-4 placeholder:text-black/50" placeholder="Email address..." type="email" name="email" id="email" />
               <input className="bg-black text-white px-6 py-1 rounded-sm" value={"Submit"} type="submit" />
            </form>
         </div>
      </div>
   );
};

export default Newsletters;
