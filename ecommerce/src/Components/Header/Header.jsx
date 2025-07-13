import {
  Check,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <div className="w-full font-sans text-sm text-black">
      {/* Top Banner */}
      <div className="bg-gray-900 text-white h-8 flex items-center justify-center">
        <div className="container text-lg flex  justify-center items-center gap-2">
          <Check className="w-4 h-4" />
          <span>Tüm Ürünlerde Geçerli %50 İndirim </span>
        </div>
      </div>

      {/* Middle Navbar */}
      <div className="bg-white border-b border-gray-200 ">
        <div className="container mx-auto grid grid-cols-3 items-center h-full">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold tracking-tight">
            <img src="src/assets/Images/logo.jpg"/>
          </Link>

          {/* Search */}
          <form className="relative w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="Ara"
              className="w-full h-10 rounded-full pl-4 pr-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-black"
            >
              <Search size={20} />
            </button>
          </form>

          {/* Right Icons */}
          <div className="flex justify-end items-center gap-4">
            <button className="relative flex items-center gap-1 hover:text-gray-700">
              <ShoppingCart />
              <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                5
              </span>
            </button>

            <button className="hover:text-gray-700">
              <Heart />
            </button>

            <div className="relative group">
              <button className="hover:text-gray-700">
                <User />
              </button>
              <ul className="absolute right-0 text-lg mt-2 hidden group-hover:block bg-white shadow-lg rounded w-40 z-10 border border-gray-100">
                <li>
                  <Link
                    to="/account"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Hesabım
                  </Link>
                </li>
                <li>
                  <Link
                    to="/logout"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Çıkış Yap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto text-lg flex items-center gap-6 py-3">
          {/* Category Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 hover:text-gray-700">
              <Menu size={18} /> Tüm Kategoriler
            </button>
            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-md rounded w-48 z-10 border border-gray-100">
              <li>
                <Link
                  to="/kategori1"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  1. Kategori
                </Link>
              </li>
              <li>
                <Link
                  to="/kategori2"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  2. Kategori
                </Link>
              </li>
              <li>
                <Link
                  to="/kategori3"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  3. Kategori
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-6 font-medium">
            <NavLink to="/" className="hover:text-gray-700">Anasayfa</NavLink>
            <NavLink to="/store" className="hover:text-gray-700">Mağaza</NavLink>
            <NavLink to="/products" className="hover:text-gray-700">Ürünler</NavLink>
            <NavLink to="/about" className="hover:text-gray-700">Hakkımızda</NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;

