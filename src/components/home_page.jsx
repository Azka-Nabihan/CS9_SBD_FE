import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./navbar";

export default function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("https://cs9sbdbe-production.up.railway.app/api/item");
        setItems(response.data.payload);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, []);

  return (
    <section>
      <Navbar />
      {/* Heading */}
      <div className="container relative p-16 mt-10">
        <div className="border-b border-gray-600 pb-4">
          <h3 className="text-xl font-bold leading-6 text-gray-800">
            Our Items
          </h3>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-16">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-xl shadow-md bg-white overflow-hidden"
          >
            <div className="aspect-square">
              <img
                className="object-cover w-full h-full"
                src={item.image_url}
                alt={item.name}
              />
            </div>
            <div className="px-4 py-3">
              <div className="flex justify-between items-center">
                <h1 className="text-base font-semibold text-gray-700 truncate">
                  {item.name}
                </h1>
                <span className="text-sm font-medium text-gray-600">
                  ${item.price}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1 truncate">
                Stock : {item.stock}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
