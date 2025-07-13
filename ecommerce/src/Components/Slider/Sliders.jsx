import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoveRight } from "lucide-react";

const Sliders = () => {
  const products = [
    {
      id: 1,
      image:"src/assets/Images/slider1.png",
    },
    {
      id: 2,
      image:
        "src/assets/Images/slider1.png",
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="lg:container mx-auto px-4 py-1">
      <Slider {...settings}>
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 bg-white rounded-lg"
          >
            <div className="flex-1">
              <img
                src={product.image}
                alt={product.title}
                  loading="lazy"
                className="w-full h-auto rounded-md object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliders;

