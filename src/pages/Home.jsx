import React from "react";
import Banner1 from "../assets/img/banner1.jpg";
import Banner2 from "../assets/img/banner2.jpg";
import Banner3 from "../assets/img/banner3.jpg";
import Banner4 from "../assets/img/banner4.jpg";
import Carde1 from "../assets/img/card_lo1.png";
import Carde2 from "../assets/img/card_lo2.png";
import Carde3 from "../assets/img/card_lo3.png";
import Carde4 from "../assets/img/card_lo4.png";
import Logo1 from "../assets/img/logo/1.png";
import Logo2 from "../assets/img/logo/2.png";
import Logo3 from "../assets/img/logo/3.png";
import Logo4 from "../assets/img/logo/4.png";
import Logo5 from "../assets/img/logo/5.png";
import Logo6 from "../assets/img/logo/6.png";
import Logo7 from "../assets/img/logo/7.png";
import Logo8 from "../assets/img/logo/8.png";
import Card12 from "../assets/img/card12.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Cards from "./Cards";
import Contakt from "./Contakt";

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner4} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="contaiainer mx-auto px-4 md:px-8">
        <div className="grid  grid-cols-2 md:grid-row-4 m-auto gap-2 my-8">
          <div className="flex justify-center items-center p-4 bg-black rounded-lg">
            <img src={Carde1} alt="" />
          </div>
          <div className="flex justify-center items-center p-4 bg-black rounded-lg">
            <img src={Carde2} alt="" />
          </div>

          <div className="flex justify-center items-center p-4 bg-black rounded-lg">
            <img src={Carde3} alt="" />
          </div>
          <div className="flex justify-center items-center p-4 bg-black rounded-lg">
            <img src={Carde4} alt="" />
          </div>
        </div>
        <div className="bg-[#CC7408]">
          <div className="contaiainer mx-auto px-4 md:px-8 py-8">
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 items-center">
              <img src={Logo1} alt="" className="mx-auto" />
              <img src={Logo2} alt="" className="mx-auto" />
              <img src={Logo3} alt="" className="mx-auto" />
              <img src={Logo4} alt="" className="mx-auto" />
              <img src={Logo5} alt="" className="mx-auto" />
              <img src={Logo6} alt="" className="mx-auto" />
              <img src={Logo7} alt="" className="mx-auto" />
              <img src={Logo8} alt="" className="mx-auto" />
            </div>
          </div>
        </div>
        <div className="my-12 flex items-center justify-center flex-col">
          <h2 className="text-bold text-3xl border-b pb-2 border-amber-700-700">
            Популярные товары
          </h2>
          <div className="relative w-full max-w-7xl mx-auto">
            <div className="flex items-center justify-center space-x-4 p-4">
              <button className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-white text-3xl opacity-70 hover:opacity-100 transition-opacity">
                &lt;
              </button>

              <div className="flex space-x-4 overflow-x-hidden">
                <div className="flex-shrink-0 w-64 bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={Card12}
                    alt="Enya EUC-MAD"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-400">Укулеле</p>
                    <h3 className="text-lg font-semibold">Enya EUC-MAD</h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xl font-bold">₽24 890</span>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="ml-1 text-sm text-gray-400">
                          7 отзывов
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0 w-64 bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={Card12}
                    alt="Enya EUC-MAD"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-400">Укулеле</p>
                    <h3 className="text-lg font-semibold">Enya EUC-MAD</h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xl font-bold">₽24 890</span>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="ml-1 text-sm text-gray-400">
                          7 отзывов
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0 w-64 bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={Card12}
                    alt="Enya EUC-MAD"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-400">Укулеле</p>
                    <h3 className="text-lg font-semibold">Enya EUC-MAD</h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xl font-bold">₽24 890</span>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="ml-1 text-sm text-gray-400">
                          7 отзывов
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0 w-64 bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={Card12}
                    alt="Enya EUC-MAD"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-400">Укулеле</p>
                    <h3 className="text-lg font-semibold">Enya EUC-MAD</h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xl font-bold">₽24 890</span>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="ml-1 text-sm text-gray-400">
                          7 отзывов
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-white text-3xl opacity-70 hover:opacity-100 transition-opacity">
                &gt;
              </button>
            </div>

            <div className="flex justify-center space-x-2 mt-4">
              <span className="h-2 w-6 bg-white rounded-full opacity-100"></span>
              <span className="h-2 w-6 bg-white rounded-full opacity-50"></span>
              <span className="h-2 w-6 bg-white rounded-full opacity-50"></span>
              <span className="h-2 w-6 bg-white rounded-full opacity-50"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-12 flex items-center justify-center flex-col bg-gray-900 text-white p-8">
        <h2 className="text-bold text-3xl border-b pb-2 border-amber-700 mb-8">
          Услуги
        </h2>
        <div className="flex justify-center space-x-6 w-full max-w-6xl">
          <div className="group relative w-1/3 h-96 overflow-hidden rounded-lg shadow-xl cursor-pointer">
            <img
              src="path/to/image_29cd68_1.jpg"
              alt="Обучение"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 transition-all duration-500"></div>

            <div className="absolute inset-0 flex flex-col justify-end p-6 text-center transition-all duration-500">
              <h3 className="text-2xl font-bold uppercase z-10">ОБУЧЕНИЕ</h3>

              <div className="absolute inset-0 flex items-center justify-center p-6 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm text-gray-300">
                  Уроки игры на гитаре для всех уровней. Индивидуальный подход и
                  профессиональные преподаватели.
                </p>
              </div>
            </div>
          </div>

          <div className="group relative w-1/3 h-96 overflow-hidden rounded-lg shadow-xl cursor-pointer">
            <img
              src="path/to/image_29cd68_2_center.jpg"
              alt="Мастерская"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 transition-all duration-500"></div>

            <div className="absolute inset-0 flex flex-col justify-end p-6 text-center transition-all duration-500">
              <h3 className="text-2xl font-bold uppercase z-10">
                ОБСЛУЖИВАНИЕ
              </h3>

              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-md leading-relaxed text-gray-200 mb-6">
                  В нашей гитарной мастерской мы оказываем полный спектр услуг
                  по ремонту и обслуживанию музыкальных инструментов, в том
                  числе и изготовление на заказ.
                </p>
                <a
                  href="#"
                  className="text-amber-500 font-bold border-b border-amber-500 hover:text-amber-400 transition-colors"
                >
                  ПОКАЗАТЬ ЕЩЁ
                </a>
              </div>
            </div>
          </div>
          <div className="group relative w-1/3 h-96 overflow-hidden rounded-lg shadow-xl cursor-pointer">
            <img
              src="path/to/image_29cd68_3.jpg"
              alt="Ремонт"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-70 transition-all duration-500"></div>

            <div className="absolute inset-0 flex flex-col justify-end p-6 text-center transition-all duration-500">
              <h3 className="text-2xl font-bold uppercase z-10">РЕМОНТ</h3>

              <div className="absolute inset-0 flex items-center justify-center p-6 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm text-gray-300">
                  Профессиональный ремонт гитар любой сложности. Настройка и
                  обслуживание инструмента.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contakt />
    </div>
  );
};

export default Home;
