import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa6";
import Cards from "../../components/Cards";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
      //   console.log(data)
        setProducts(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData()
  }, []);
  console.log(products)


  return (
    <div className="max-w-screen-2xl container mx-auto px-4 mb-12 xl:px-28">
      <h2 className="title">Or subscribe to the newsletter</h2>

      {/* product cards */}
      <div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            <button>All Products</button>
            <button>Jewelry</button>
            <button>Clothing</button>
            <button>Toys</button>
            <button>Home</button>
          </div>

          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-black p-2">
              <FaFilter className="text-white h-4 w-4" />
            </div>
            <select className="bg-black text-white px-2 py-1 rounded-sm">
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>

        <Cards />
      </div>
    </div>
  );
};

export default Products;
