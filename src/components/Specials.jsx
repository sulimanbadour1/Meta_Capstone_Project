import React from "react";
import greekSalad from "../assets/greek salad.jpg";

import food1 from "../assets/restauranfood.jpg";
// import Scooter from "../assets/delivery-scooter.png";
const Specials = () => {
  return (
    <section>
      <div className=" mt-9 grid max-w-screen-xl justify-center px-4 py-8 mx-auto p-5 ">
        <div className="mr-auto place-self-center lg:col-span-7 ">
          <h1 className="max-w-2xl mb-4 text-[#000] text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl">
            This Week Specials!
          </h1>

          <div className="container mx-auto flex flex-wrap  my-16 justify-between items-center">
            {/* Cards 1 */}
            <div className="max-w-sm ml-6 bg-white border border-gray-200 rounded-lg shadow ">
              <a href="#greek">
                <img
                  className="rounded-t-lg"
                  src={greekSalad}
                  alt="greekSalad"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
                    Greek Salad
                  </h5>
                </a>
                <span className="font-bold text-[#495E57]">$ 12.99</span>
                <p className="mb-12 mt-2 font-light text-[#333333] ">
                  Greek Salad with feta cheese, olives, tomatoes, cucumbers, red
                  onions, and a delicious greek dressing.
                </p>
                <a
                  href="#Specials1"
                  className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#F4CE14] shadow rounded-lg hover:bg-[#495E57] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  Order Now
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                <div className="inline-flex pl-14 text-sm">
                  Delivery Time <span className="pr-1 pl-1 font-bold"> 15</span>{" "}
                  min
                </div>
              </div>
            </div>
            {/* Cards 2 */}
            <div className="max-w-sm ml-6  bg-white border border-gray-200 rounded-lg shadow ">
              <a href="#greek">
                <img
                  className="rounded-t-lg"
                  src={greekSalad}
                  alt="greekSalad"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
                    Greek Salad
                  </h5>
                </a>
                <span className="font-bold text-[#495E57]">$ 12.99</span>
                <p className="mb-12 mt-2 font-light text-[#333333] ">
                  Greek Salad with feta cheese, olives, tomatoes, cucumbers, red
                  onions, and a delicious greek dressing.
                </p>
                <a
                  href="#Specials1"
                  className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#F4CE14] shadow rounded-lg hover:bg-[#495E57] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  Order Now
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                <div className="inline-flex pl-14 text-sm">
                  Delivery Time <span className="pr-1 pl-1 font-bold"> 15</span>{" "}
                  min
                </div>
              </div>
            </div>
            {/* Cards 3 */}
            <div className="max-w-sm ml-6  bg-white border border-gray-200 rounded-lg shadow ">
              <a href="#greek">
                <img
                  className="rounded-t-lg"
                  src={greekSalad}
                  alt="greekSalad"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
                    Greek Salad
                  </h5>
                </a>
                <span className="font-bold text-[#495E57]">$ 12.99</span>
                <p className="mb-12 mt-2 font-light text-[#333333] ">
                  Greek Salad with feta cheese, olives, tomatoes, cucumbers, red
                  onions, and a delicious greek dressing.
                </p>
                <a
                  href="#Specials1"
                  className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#F4CE14] shadow rounded-lg hover:bg-[#495E57] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                  Order Now
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                <div className="inline-flex pl-14 text-sm">
                  Delivery Time <span className="pr-1 pl-1 font-bold"> 15</span>{" "}
                  min
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specials;
