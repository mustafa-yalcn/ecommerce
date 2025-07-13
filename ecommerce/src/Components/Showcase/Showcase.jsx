import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import products from "../../data/products"; // ✅ dışarıdan geldi

const Showcase = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 }},
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 }},
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 }}
    ]
  };

  return (
    <div className="lg:container mx-auto ">
      <div className="slider-container">
        <Slider {...settings}>
          {products.map(product => (
            <div key={product.id} className="p-2">
              <Link to={`/product/${product.id}`}>
                <div className="bg-white border border-gray-100 rounded-xl shadow-md p-4 text-center hover:shadow-xl transition">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="mx-auto h-96 object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600 mt-2">{product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Showcase;
