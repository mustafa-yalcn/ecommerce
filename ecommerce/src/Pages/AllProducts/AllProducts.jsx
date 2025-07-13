import React from "react";
import { Link } from "react-router-dom";
import products from "../../data/products";

const AllProducts = () => {
  return (
    <div className="container mx-auto mt-4">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 text-center">
              <img
                src={product.image}
                alt={product.name}
                className="h-96 mx-auto mb-4"
              />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-green-600 font-medium">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
