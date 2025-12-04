import React from "react";

import Footer_img from "../assets/img/logo/footer.png";
const Fotter = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-5 px-10 md:px-20">
      <div className="flex flex-wrap justify-between border-b border-gray-700 pb-10">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <div className="logo-section mb-5">
            <h1 className="text-3xl font-light flex items-center mb-4">
              <span className="text-xl font-extrabold tracking-tighter mr-1.5">
                |||||
              </span>
              Guitar <span className="font-bold">Lavka</span>
            </h1>
            <p className="text-xs leading-relaxed text-gray-400">
              Мы работаем для Вас с любовью, предлагая высококачественные товары
              и инструменты, которые дошли до наших дней.
            </p>
          </div>

          <div className="contact-info mt-8">
            <p className="text-xs text-gray-500 uppercase mb-2">
              СВЯЗАТЬСЯ С НАМИ:
            </p>
            <p className="text-2xl font-bold mb-1">8 (800) 150 - 29 - 88</p>
            <p className="text-sm text-gray-400 mb-1">
              ПОНЕДЕЛЬНИК - ПЯТНИЦА 10:00 - 20:00
            </p>
            <p className="text-sm text-gray-400 mb-4">info@guitarlavka.ru</p>

            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="text-xl text-white opacity-70 hover:opacity-100 transition"
              >
                <i className="fab fa-vk"></i>
              </a>
              <a
                href="#"
                className="text-xl text-white opacity-70 hover:opacity-100 transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-xl text-white opacity-70 hover:opacity-100 transition"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="#"
                className="text-xl text-white opacity-70 hover:opacity-100 transition"
              >
                <i className="fab fa-telegram-plane"></i>
              </a>
            </div>
          </div>

          <div className="flex space-x-3 mt-4">
            <div className="h-5 w-8 bg-white rounded flex items-center justify-center text-xs font-bold text-gray-800">
              Visa
            </div>
            <div className="h-5 w-8 bg-white rounded flex items-center justify-center text-xs font-bold text-gray-800">
              MC
            </div>
            <div className="h-5 w-8 bg-white rounded flex items-center justify-center text-xs font-bold text-gray-800">
              Mir
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-start gap-12 md:gap-16 mt-8 md:mt-0">
          <div className="link-group">
            <h4 className="text-sm font-bold mb-4 text-[#926B48] uppercase">
              КАТАЛОГ
            </h4>
            <ul className="space-y-2">
              <li className="text-xs text-gray-400 hover:text-white cursor-pointer">
                Гитары
              </li>
              <li className="text-xs text-gray-400 hover:text-white cursor-pointer">
                Бас-Гитары
              </li>
              <li className="text-xs text-gray-400 hover:text-white cursor-pointer">
                Укулеле
              </li>
              <li className="text-xs text-gray-400 hover:text-white cursor-pointer">
                Аксессуары
              </li>
              <li className="text-xs text-gray-400 hover:text-white cursor-pointer">
                Струны
              </li>
            </ul>
          </div>
          <div className="link-group">
            <h4 className="text-sm font-bold mb-4 text-[#926B48] uppercase">
              СЕРВИС
            </h4>
            <ul className="space-y-2">
              <li className="text-xs text-gray-400 hover:text-white cursor-pointer">
                Оплата
              </li>
              <li className="text-xs text-gray-400 hover:text-white cursor-pointer">
                Доставка
              </li>
              <li className="text-xs text-gray-400 hover:text-white cursor-pointer">
                Гарантия
              </li>
            </ul>
          </div>
          <div className="link-group">
            <h4 className="text-sm font-bold mb-4 text-[#926B48] uppercase">
              УСЛУГИ
            </h4>
            <ul className="space-y-2">
              <li className="text-xs text-gray-400 hover:text-white cursor-pointer">
                Ремонт
              </li>
              <li className="text-xs text-gray-400 hover:text-white cursor-pointer">
                Рассрочка и кредит
              </li>
              <li className="text-xs text-gray-400 hover:text-white cursor-pointer">
                Трейд-Ин
              </li>
              <li className="text-xs text-gray-400 hover:text-white cursor-pointer">
                Комиссионка
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-auto mt-8 md:mt-0 flex justify-center md:justify-end">
          <div className="w-60 h-autorounded-3xl p-2 flex items-center justify-center">
            <div className="text-center text-xs text-gray-400 py-20">
              <img src={Footer_img} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Pastki huquqiy qism */}
      <div className="flex justify-between flex-wrap pt-4 text-xs text-gray-500">
        <p>
          © 2021 GUITARLAVKA <span className="mx-2">|</span> ВСЕ ПРАВА ЗАЩИЩЕНЫ
        </p>
        <p className="mt-2 md:mt-0">Политика конфиденциальности</p>
      </div>
    </footer>
  );
};

export default Fotter;
