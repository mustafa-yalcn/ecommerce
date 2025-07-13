import banner1 from "../../assets/Images/banner1.jpg";
import banner2 from "../../assets/Images/banner2.jpg";
import banner3 from "../../assets/Images/banner3.jpg";

const banners = [
  {
    id: 1,
    image:banner1

  },
  {
    id: 2,
    image: banner2,
  },
  {
    id: 3,
    image: banner3
  }
];

const BannerGrids = () => {
  return (
    <div className="lg:container mx-auto">
        <div className="px-4 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
      {banners.map(banner => (
        <a
          key={banner.id}
          href={banner.link}
          className="relative block group rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={banner.image}
            alt={banner.title}
            className="w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          
        </a>
      ))}
    </div>
    </div>
  );
};

export default BannerGrids;
