import React from "react";
import Mario from "../assets/Mario and Adrian A.jpg";
const About = () => {
  return (
    <section className="mt-9 font-poppins grid max-w-screen-xl justify-center px-4 py-8 mx-auto p-5 ">
      <div className="max-w-6xl mr-auto  mx-auto md:px-6">
        <div className="flex flex-wrap ">
          <div className="w-full px-4 mb-20 lg:w-1/2 lg:mb-12 ">
            <div className="lg:max-w-md">
              <div className="px-4 pl-4 mb-6 border-l-4 border-[#495E57]">
                <span className="text-sm text-gray-800 uppercase ">
                  About Us
                </span>
                <h1 className="mt-2 text-3xl font-black text-[#495E57] md:text-5xl ">
                  Who are we?
                </h1>
              </div>
              <p className="px-4 mb-10 text-base leading-7 text-gray-500 ">
                We are a family restaurant in the heart of Prague. We offer
                mediterranean cuisine with a touch of Czech tradition. <br /> We
                look forward to your visit. We offer the best food in the entire
                city of Prague.
                <br />
                <br />
                <span className="text-lg  font-semibold">
                  Address Praha 1, Vodičkova 30.
                </span>
              </p>
              <div className="flex flex-wrap items-center">
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6  ">
                    <span className="text-[#495E57] ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        className="w-10 h-10"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                      </svg>
                    </span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-[#495E57] ">
                      49
                    </p>
                    <h2 className="text-sm text-[#495E57] ">
                      Certificate & Awards
                    </h2>
                  </div>
                </div>
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 ">
                    <span className="text-[#495E57] ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        className="w-10 h-10"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        <path
                          fill-rule="evenodd"
                          d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                        />
                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                      </svg>
                    </span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-[#495E57]">
                      1200
                    </p>
                    <h2 className="text-sm text-[#495E57] ">Costumers</h2>
                  </div>
                </div>
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 ">
                    <span className="text-[#495E57] ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        className="w-10 h-10"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-[#495E57] ">
                      24
                    </p>
                    <h2 className="text-sm text-[#495E57] ">Chefs</h2>
                  </div>
                </div>
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 ">
                    <span className="text-[#495E57] ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        className="w-10 h-10"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                      </svg>
                    </span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-[#495E57] ">
                      15 <span className="text-sm">min</span>
                    </p>
                    <h2 className="text-sm text-[#495E57] ">Delivery Time</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <img
              src={Mario}
              alt="Owner"
              className="relative z-40 object-cover w-full h-full rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

{
  /* <section className="bg-[#fff] ">
<div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
  <div className="mr-auto place-self-center lg:col-span-7">
    <h1 className="max-w-2xl mb-4 text-[#000] text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
      Little Lemon
    </h1>
    <h2 className="max-w-2xl mt-4 mb-4 text-gray-500 text-xl font-bold tracking-tight leading-none md:text-2xl xl:text-4xl">
      Prague
    </h2>
    <p className="max-w-2xl mt-8 mb-8 font-light text-gray-700 lg:mb-8 md:text-base lg:text-sm ">
      We are a small family restaurant in the heart of Prague. We offer
      mediterranean cuisine with a touch of Czech tradition. <br /> We are
      open every day from 11:00 to 23:00. We look forward to your visit.
      We offer the best food in the entire city of Prague. Come and visit
      us and you will not regret it.
      <br />
      <span className="text-lg  font-semibold">
        Address Praha 1, Vodičkova 30.
      </span>
    </p>

    <a
      href="#reservations"
      className="inline-flex items-center justify-center px-5 py-3 text-black font-medium text-center bg-[#F4CE14] rounded-lg hover:bg-slate-100 focus:ring-4 focus:ring-gray-100"
    >
      Reserve a table
    </a>
  </div>
  <div className="lg:mt-0 lg:col-span-5 lg:row-span-10 lg:flex">
    <img
      src={HeroPhoto}
      alt="mockup"
      className="xs:hidden sm:hidden md:hidden lg:block xl:block"
    />
  </div>
</div> */
}
// </section>
