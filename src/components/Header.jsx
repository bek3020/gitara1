import React from "react";
import Logo from "../assets/svg/logo.svg";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="border-b border-gray-800 py-2 px-4 md:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">Ваш город:</span>
            <span className="font-semibold cursor-pointer hover:text-orange-600">
              Самара
            </span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-orange-600">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="#" className="hover:text-orange-600">
              <i className="fa-brands fa-telegram-plane"></i>
            </a>
            <a href="#" className="hover:text-orange-600">
              <i className="fa-brands fa-vk"></i>
            </a>
            <a href="#" className="hover:text-orange-600">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="#" className="hover:text-orange-600">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-mono hidden sm:inline">
              <i className="fa-solid fa-phone mr-1"></i> 8 (800) 100 26 80
            </span>
            <span className="hidden lg:inline">ЕЖЕДНЕВНО</span>
            <span className="font-semibold">10:00-20:00</span>
          </div>
        </div>
      </div>

      <div className="py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2 w-1/3 md:w-auto">
            <i className="fa-solid fa-search text-xl text-gray-400"></i>
            <input
              type="text"
              placeholder="поиск"
              className="bg-black border-none focus:outline-none placeholder-gray-400 text-lg w-full md:w-32"
            />
          </div>
          <div className="flex-grow flex justify-center">
            <a href="/">
              <img src={Logo} alt="Logo" className=" md:h-32" />
            </a>
          </div>
          <div className="flex items-center space-x-6 text-2xl">
            <a href="#" className="hover:text-orange-600">
              <i className="fa-solid fa-heart"></i>
            </a>
            <a href="#" className="hover:text-orange-600">
              <i className="fa-solid fa-clipboard"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block border-t border-gray-800 py-3 px-4 md:px-8 text-sm">
        <nav className="max-w-7xl mx-auto">
          <ul className="flex justify-center space-x-8 uppercase font-medium">
            <li className="cursor-pointer hover:text-orange-600">
              <NavLink to="/cards">КАТАЛОГ</NavLink>
            </li>
            <li className="cursor-pointer hover:text-orange-600">
              <NavLink to="#">УСЛУГИ</NavLink>
            </li>
            <li className="cursor-pointer hover:text-orange-600">
              <NavLink to="#">О НАС</NavLink>
            </li>
            <li className="cursor-pointer hover:text-orange-600">
              <NavLink to="#">ДОСТАВКА</NavLink>
            </li>
            <li className="cursor-pointer hover:text-orange-600">
              <NavLink to="#">ОТЗЫВЫ</NavLink>
            </li>
            <li className="cursor-pointer hover:text-orange-600">
              <NavLink to="#">ОБУЧЕНИЕ</NavLink>
            </li>
            <li className="cursor-pointer hover:text-orange-600">
              <NavLink to="/contakt">КОНТАКТЫ</NavLink>
            </li>
            <li className="cursor-pointer hover:text-orange-600">
              <NavLink to="#">ОПТ</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
