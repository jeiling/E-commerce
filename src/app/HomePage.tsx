import React from "react";

const HomePage = () => {
  return (
    <main>
      <section
        className="relative h-[700px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/assets/images/hero-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 text-white px-6 max-w-2xl">
          <h2 className="text-5xl font-bold">Be responsible</h2>
          <p className="mt-4 text-lg">
            As a small growing company, it’s not always easy, but we will always seek the most socially responsible manufacturing options.
          </p>
          <div className="mt-6 flex space-x-4 justify-center">
            <a
              href="/collections"
              className="border border-white text-white py-3 px-6 rounded-sm font-semibold hover:bg-white hover:text-gray-900 transition"
            >
              Shop all
            </a>
            <a
              href="/collections/new"
              className="bg-[#A08457] text-white py-3 px-6 rounded-sm font-semibold hover:bg-[#8C6F42] transition"
            >
              Shop new
            </a>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 flex space-x-2">
          <button className="bg-[#A08457] text-white p-3 rounded-sm hover:bg-[#8C6F42] transition w-10 h-10">
            &lt;
          </button>
          <button className="bg-[#A08457] text-white p-3 rounded-sm hover:bg-[#8C6F42] transition w-10 h-10">
            &gt;
          </button>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
