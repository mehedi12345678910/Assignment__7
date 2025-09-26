import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white  mx-auto">
      <div className="max-w-[90%] mx-auto px-10 sm:px-6 lg:px-8 py-4 flex justify-between">
        <div className="text-xl font-bold text-gray-800">
          <a href="#">CS — Ticket System</a>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:border-b-4 border-red-500">
              Home
            </a>
            <a href="#" className="hover:border-b-4 border-red-500">
              FAQ
            </a>
            <a href="#" className="hover:border-b-4 border-red-500">
              Changelog
            </a>
            <a href="#" className="hover:border-b-4 border-red-500">
              Blog
            </a>
            <a href="#" className="hover:border-b-4 border-red-500">
              Download
            </a>
            <a href="#" className="hover:border-b-4 border-red-500">
              Contact
            </a>
          </nav>
          <button className="bg-gradient-to-l from-[#9f62f2] to-[#632ee3] text-white px-4 py-2 rounded-sm">
            + New Ticket
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
