import React from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id); 

  if (!product) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-xl font-bold">Ürün bulunamadı!</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl text-green-600">{product.price}</p>
          <p className="text-gray-700">{product.description}</p>

          <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

