import React, { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
   const { id } = useParams();
   const [products, setProducts] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch("/products.json");
            const data = await response.json();
            const product = data.filter((p) => p.id == id);
            console.log(product);
            setProducts(product[0]);
         } catch (error) {
            console.log("Error fetching data:", error);
         }
      };
      fetchData();
      window.scrollTo({top: 0, behavior: 'smooth'})
   }, [id]);

   const { title, category, price, image, status } = products;
   return (
      <div className="mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4">
         <div className="p-3 max-w-7xl m-auto">
            <div className="mt-10">
               <a href="/" className="text-gray-600">Home</a>
               <a href="/shop" className="text-black font-bold"> / Shop</a>
            </div>
            <div className="mt-2 sm:mt-10">
               <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-6 h-max">
                  <div>
                     <img className="w-96 h-full" src={image} alt="product" />
                  </div>

                  {/* product detail */}
                  <div>
                     <h1 className="text-left title">{title}</h1>
                     <p className="mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                        quas aperiam omnis? Dolorem corrupti beatae perspiciatis
                        distinctio et provident a deserunt cupiditate aut excepturi
                        accusamus odit ducimus molestias, reprehenderit blanditiis.
                     </p>
                     <span className="my-2 text-xl text-yellow-400 flex items-center gap-1 sm:my-4 ">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                     </span>
                     <p className="text-xl text-red-500 font-semibold sm:text-2xl">
                        ${price}
                     </p>

                     <div className="mt-4">
                        <div className="text-left flex flex-col gap-2 w-full">
                           <label className="font-semibold">Quantity</label>
                           <input
                              required
                              defaultValue={1}
                              type="number"
                              name="price"
                              id="price"
                              className="border border-gray-300 w-full font-semibold max-w-full mb-1 text-sm outline-none rounded-md m-0 py-3 md:py-3 md:px-4 focus:border-red-500 "
                           ></input>
                        </div>

                        <div className="w-full text-left my-4">
                           <button className="w-full flex justify-center items-center gap-2 py-3 px-4 text-white bg-red-500 font-bold border border-red-500 rounded-md ease-in-out shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6">
                              <span>Confirmed Order</span>
                              <FaArrowCircleRight />
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="text-black/75 mt-12">
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, ab? Illum quam ipsum explicabo repudiandae quaerat quasi laudantium sapiente inventore molestiae similique sequi voluptate numquam obcaecati dolor odit, distinctio adipisci.</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ad pariatur, quo doloremque delectus ipsam. Ducimus optio quidem, minus debitis consectetur accusantium, sit repudiandae veritatis suscipit, aperiam perspiciatis eligendi laudantium?</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam nulla laudantium possimus reprehenderit deserunt exercitationem, atque minus nostrum provident, in, fugiat consequatur ipsum odit totam explicabo veritatis dolorum amet quaerat?</p>
            </div>
         </div>
      </div>
   );
};

export default SingleProduct;
