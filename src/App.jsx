import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCar } from "./redux/carSlice";
import { Sidebar } from "./components/Sidebar";
import {
  Search,
  Bell,
  Mail,
  Plus,
  Heart,
  Pencil,
  Trash2,
  Gauge,
  Fuel,
  Workflow,
  LayoutGrid,
  List,
} from "lucide-react";

export default function App() {
  const cars = useSelector((state) => state.cars.items);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm) {
      dispatch(deleteCar(id));
    }
  };

  return (
    <div className="flex bg-[#070A10] min-h-screen text-gray-200">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-1/3">
            <Search
              className="absolute left-3 top-2.5 text-gray-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Search inventory..."
              className="w-full bg-[#111622] border border-gray-800 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 bg-[#111622] border border-gray-800 rounded-lg hover:text-white">
              <Bell size={18} />
            </button>
            <button className="p-2 bg-[#111622] border border-gray-800 rounded-lg hover:text-white">
              <Mail size={18} />
            </button>
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
              alt="User"
              className="w-9 h-9 rounded-full object-cover border border-gray-700"
            />
          </div>
        </div>

        <div className="text-xs text-gray-500 mb-2">
          Inventory &gt; <span className="text-blue-400">All Vehicles</span>
        </div>

        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">Inventory</h1>
            <p className="text-sm text-gray-400">
              Manage and track your premium vehicle fleet.
            </p>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2.5 rounded-xl transition">
            <Plus size={18} /> Add New Car
          </button>
        </div>

        {/* Filters & View Toggle */}
        <div className="flex justify-between items-center bg-[#111622] p-3 rounded-xl mb-8 border border-gray-800/60">
          <div className="flex items-center gap-3">
            <select className="bg-[#181F2E] text-sm font-semibold text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none">
              <option>All Brands</option>
            </select>
            <select className="bg-[#181F2E] text-sm font-semibold text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none">
              <option>Fuel Type</option>
            </select>
            <select className="bg-[#181F2E] text-sm font-semibold text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none">
              <option>Status</option>
            </select>
          </div>
          <div className="flex items-center gap-4">
            <select className="bg-[#181F2E] text-sm font-semibold text-white px-4 py-2 rounded-lg border border-gray-700 focus:outline-none">
              <option>Sort by Price: High</option>
            </select>
            <div className="flex items-center gap-1 bg-[#181F2E] p-1 rounded-lg border border-gray-700">
              <button className="p-1.5 bg-gray-700 text-white rounded">
                <LayoutGrid size={16} />
              </button>
              <button className="p-1.5 text-gray-400 hover:text-white">
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-[#111622] border border-gray-800 rounded-2xl overflow-hidden shadow-lg group hover:border-gray-700 transition"
            >
              {/* Image Container */}
              <div className="relative h-48 bg-gray-900 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&auto=format&fit=crop&q=80"
                  alt={car.model}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />

                {/* Status Badge */}
                <span
                  className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full text-white backdrop-blur-md ${
                    car.status === "Available"
                      ? "bg-blue-600/70"
                      : car.status === "Reserved"
                        ? "bg-amber-600/70"
                        : "bg-gray-600/70"
                  }`}
                >
                  {car.status}
                </span>

                {/* Favorite Icon */}
                <button
                  className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md ${car.favorite ? "bg-white/20 text-red-500" : "bg-black/40 text-white hover:text-red-400"}`}
                >
                  <Heart
                    size={16}
                    fill={car.favorite ? "currentColor" : "none"}
                  />
                </button>
              </div>

              {/* Details */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                      {car.brand}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {car.model}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-400 block font-semibold">
                      Year
                    </span>
                    <span className="text-sm font-bold text-white">
                      {car.year}
                    </span>
                  </div>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-2 my-4 py-3 border-y border-gray-800 text-xs text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <Gauge size={14} />
                    <span>{car.mileage.toLocaleString()} mi</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Fuel size={14} />
                    <span>{car.fuel}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Workflow size={14} />
                    <span>{car.transmission}</span>
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-white">
                    ${car.price.toLocaleString()}
                  </span>

                  <div className="flex gap-2">
                    {/* Edit button */}
                    <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition">
                      <Pencil size={16} />
                    </button>
                    {/* REDUX DELETE BUTTON */}
                    <button
                      onClick={() => handleDelete(car.id)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-gray-800 rounded-lg transition"
                      title="O'chirish"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                <button className="w-full bg-[#1A2234] hover:bg-blue-600 text-white text-sm font-medium py-2.5 rounded-xl transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
