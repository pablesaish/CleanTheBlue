import React from "react";
import beachBg from "/images/Beach_cleanup.jpg";

const Hero = () => {
  return (
    <div
      className="w-full min-h-[100vh] flex items-center justify-center text-white bg-cover bg-center select-none"
      style={{
        backgroundImage: `linear-gradient(
          rgba(168, 210, 255, 0.8), 
          rgba(41, 177, 204, 0.6), 
          rgba(110, 251, 220, 0.5)
        ), url(${beachBg})`,
      }}
    >
      <div className="text-center max-w-4xl px-6">
        <h1 className="text-5xl md:text-6xl font-semibold drop-shadow-lg font-mono">
          One Ocean, One Mission.
        </h1>
        <p className="max-w-xl mx-auto mt-4 mb-2 leading-relaxed text-lg">
          Thousands of hands, Millions of pieces removed.
        </p>
        <p className="max-w-xl mx-auto mb-6 leading-relaxed text-lg">
          Cleanups. Community. Change.
        </p>
        <button className="group inline-flex items-center gap-2 bg-white text-sky-700 font-semibold px-6 py-3 rounded-full shadow-lg cursor-pointer hover:bg-slate-100 transition duration-300 hover:-translate-y-0.5 overflow-hidden">
          Explore more
          <i className="fa-solid fa-arrow-right"></i>
        </button>

        {/* <button class="button">
          <div>
            <div>
              <div className="font-mono">Know More</div>
            </div>
          </div>
        </button> */}
      </div>
    </div>
  );
};

export default Hero;