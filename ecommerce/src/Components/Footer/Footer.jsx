import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Hakkımızda</h3>
          <p className="text-lg leading-relaxed">
            Kaliteli ürünleri uygun fiyatlarla sunan online alışveriş platformuyuz.
            Müşteri memnuniyeti önceliğimizdir.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Hızlı Linkler</h3>
          <ul className="space-y-2 text-lg">
            <li><Link to="/" className="hover:text-white">Ana Sayfa</Link></li>
            <li><Link to="/products" className="hover:text-white">Ürünler</Link></li>
            <li><Link to="/auth/login" className="hover:text-white">Giriş Yap</Link></li>
            <li><Link to="/auth/register" className="hover:text-white">Kayıt Ol</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">İletişim</h3>
          <ul className="text-lg space-y-2">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> İstanbul, Türkiye
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +90 555 123 45 67
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> destek@eticaret.com
            </li>
          </ul>

          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center text-sm py-4 text-gray-400">
        © {new Date().getFullYear()} E-Ticaret. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
