import React, { useEffect, useState } from "react";
import { Pagination, Spin, Layout, Menu } from "antd";
import axios from "axios";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { Sider, Content } = Layout;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: Array.from({ length: 4 }).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option ${subKey}`,
        };
      }),
    };
  }
);

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://68fb6f6994ec9606602607d5.mockapi.io/gitara")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <h2 className="text-center text-3xl mt-20">
        <Spin />
      </h2>
    );
  }

  return (
    <Layout className="min-h-screen">
      <Sider width={200} style={{ background: "#000000" }}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
          items={items2}
        />
      </Sider>

      <Content className="bg-black py-10 px-5">
        <div className="max-w-6xl mx-auto p-4 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((item) => (
              <div
                key={item.id}
                className="bg-[#1b1b1b] rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-500 transition"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <p className="text-[12px] text-gray-400 uppercase">Укулеле</p>
                  <h3 className="text-lg font-semibold mt-1">{item.name}</h3>

                  <p className="text-gray-300 text-sm mt-1">
                    Стоимость:{" "}
                    <span className="text-[17px] font-bold text-white">
                      {item.total} ₽
                    </span>
                  </p>

                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="text-yellow-400 text-lg">
                      {"★★★★★".slice(0, Math.round(item.star))}
                    </span>

                    <span className="text-gray-400">7 отзывов</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Cards;
