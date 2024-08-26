import React from "react";

const NewArrival = () => {
  return (
    <>
      <h2 className="text-7xl bg-gray-50 font-bold text-center pt-16 text-gray-800">
        New Arrival
      </h2>
      <div className="mx-auto sm:p-28 bg-gray-50 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column with Two Sections */}
        <div className="space-y-12">
          {/* Chairs Section */}
          <div
            className="relative bg-white p-10 shadow-2xl overflow-hidden  rounded-3xl"
            style={{ height: "500px" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/11.jpg')" }}
            ></div>
            <div
              className="relative z-10 flex items-center justify-center h-full"
              style={{ padding: "24px" }}
            >
              <div className="text-start">
                <h2 className="text-6xl font-bold text-gray-800 mb-4">
                  Chairs
                </h2>
                <p className="text-2xl text-gray-800 font-semibold mb-6">
                  Explore our modern chairs, where sleek design meets
                  exceptional comfort.
                </p>
                <button type="button" className="text-gray-900 bg-transparent border border-gray-600 focus:outline-none  hover:bg-black hover:text-white focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  ">See More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {/* Elegant Design Section */}
          <div
            className="relative bg-white p-10 shadow-2xl overflow-hidden  rounded-3xl"
            style={{ height: "500px" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/15.png')" }}
            ></div>
            <div
              className="relative z-10 flex items-center justify-center h-full"
              style={{ padding: "24px" }}
            >
              <div className="text-start">
                <h2 className="text-6xl font-bold text-gray-800 mb-4">
                  Elegant Design
                </h2>
                <p className="text-2xl text-gray-800 font-semibold mb-6">
                  Explore our modern chairs, where sleek design meets
                  exceptional comfort.
                </p>
                <button type="button" className="text-gray-900 bg-transparent border border-gray-600 focus:outline-none hover:bg-black hover:text-white focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">See More</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
