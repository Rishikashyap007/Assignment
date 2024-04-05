import React from "react";

function Navbar() {
  return (
    <>
      <header className="w-full mx-auto px-4 py-3 bg-slate flex justify-between items-center border bottom-1 sm:w-full">
        <div className="flex items-center">
          <span className="material-symbols-outlined text-3xl">language</span>
          <h2 className="text-2xl ml-2">Brilliant</h2>
        </div>
        <nav className="hidden md:flex gap-4">
          <a href="#" className="flex gap-1 items-center hover:text-gray-400">
            <span className="material-symbols-outlined">home</span>
            <p>Home</p>
          </a>
          <div className="flex gap-1 items-center hover:text-gray-400">
            <span className="material-symbols-outlined">heap_snapshot_large</span>
            <p>Courses</p>
          </div>
          <div className="flex gap-1 items-center hover:text-gray-400">
            <span className="material-symbols-outlined">calendar_month</span>
            <p>Today</p>
          </div>
        </nav>
        <div className="hidden w-full md:w-96 md:flex items-center gap-2 bg-gray-300 p-1 rounded-md">
          <i className="fa-solid fa-magnifying-glass text-slate-400 px-1"></i>
          <input type="text" className="px-2 border-0 bg-transparent" />
        </div>
        <div className="hidden lg:block border-2 border-green-500">
          <p className="py-1 px-4 text-green-500 uppercase">start trail</p>
        </div>
        <div className="flex items-center sm:gap-1">
          <p className="font-bold text-xl mr-4">2⚡</p>
          <i className="fa-solid fa-bars text-xl"></i>
        </div>
      </header>
    </>
  );
}

export default Navbar;
