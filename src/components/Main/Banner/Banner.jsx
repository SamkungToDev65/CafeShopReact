import React from 'react';
import "./Banner.css"

function Banner() {
  return (
    <section className="relative w-full h-screen">
      <img
        src="https://images.unsplash.com/photo-1466337105551-aa3ab7890939?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="banner"
        className="object-cover w-full h-full"
      />
      <div className="container  absolute inset-0 flex items-center justify-center md:justify-end">
        <h1 className="text-white text-5xl md:text-6xl font-bold">
          Your One-Stop <br /> Solution for
          <div className="flip">
            <div className="flip-item text-5xl md:text-6xl bg-gradient-to-r from-[#857466] via-[#d9aea3] to-[#e1dbc9] text-transparent bg-clip-text">
              Coffee & Food
            </div>
            <div className="flip-item text-5xl md:text-6xl bg-gradient-to-r from-[#857466] via-[#d9aea3] to-[#e1dbc9] text-transparent bg-clip-text">
              Resting place
            </div>
          </div>
          <div className="container flex space-x-4 mt-6">
            <button className="btn bg-[#4f3d39] border-[#4f3d39] text-white hover:text-[#000000] hover:bg-[#8f726b] hover:border-[#8f726b] px-6 py-3 rounded-lg transition duration-300 ease-in-out">
              Get Order
            </button>
            <button className="btn bg-[#ffffff] text-[#4f3d39] border-[#4f3d39] hover:text-[#000000] hover:bg-[#4f3d39] hover:border-[#4f3d39] px-6 py-3 rounded-lg transition duration-300 ease-in-out">
              View Our Service
            </button>
          </div>

        </h1>
      </div>
    </section>
  );
}

export default Banner;
