import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ filteredItems }) => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-12 shadow-sm">
      {filteredItems.slice(0, 8).map((item) => (
        <div key={item.id} className="border p-4 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-105">
          <Link to={`/shop/${item.id}`}>
            <img 
              src={item.image} 
              alt="product" 
              className="h-72 w-full object-cover rounded-md hover:scale-105 transition-all duration-300" 
            />
          </Link>
          <div className="mt-4 px-4">
            <h4 className="text-base font-semibold mb-2">
              {item.title}
            </h4>
            <div className="flex justify-between">
              <p className="text-black/50">{item.category}</p>
              <p className="font-semibold">${item.price.toFixed(2)}</p> {/* Приводим цену к фиксированному формату с двумя знаками после запятой */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;