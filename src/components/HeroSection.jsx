import React from "react";
import HeroPhoto from "../assets/HeroPhoto.png"; // eslint-disable-next-line
import place from "../assets/restaurant.jpg";
import HeroPhoto2 from "../assets/Mario and Adrian A.jpg";
import { Carousel, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-[#495E57] pt-28" id="home-section">
      {/* <section className={`bg-[${place}] pt-28 bg-cover bg-center bg-no-repeat`}> */}
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-[#F4CE14] text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Little Lemon
          </h1>
          <h2 className="max-w-2xl mt-4 mb-4 text-[#EDEFEE] text-xl font-bold tracking-tight leading-none md:text-2xl xl:text-4xl">
            Prague
          </h2>
          <p className="max-w-2xl mt-8 mb-8 font-light text-[#EDEFEE] lg:mb-8 md:text-base lg:text-sm dark:text-gray-400">
            We are a small family restaurant in the heart of Prague. We offer
            mediterranean cuisine with a touch of Czech tradition. <br /> We are
            open every day from 11:00 to 23:00. We look forward to your visit.
          </p>

          <Link
            to="/reservation"
            className="inline-flex items-center justify-center px-5 py-3 text-black font-medium text-center bg-[#F4CE14] rounded-lg hover:bg-white focus:ring-4 focus:ring-green-900"
          >
            Reserve a table
          </Link>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:row-span-10 lg:flex overflow-hidden">
          {/* <img
            src={HeroPhoto}
            alt="mockup"
            className="relative z-40 object-cover w-full h-full rounded sm:p-10  md:p-12 xs:p-8 hover:scale-105 transition duration-300 ease-in-out hover:shadow-lg hover:shadow-[#F4CE14] "
          /> */}
          {/* Added Carousel for the Hero Section */}
          <Carousel
            className="rounded-xl overflow-hidden shadow-2xl sm:pt-8 xs:pt-4 md:pt-4 lg:pt-8 xl:pt-8"
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="white"
                size="xl"
                onClick={handlePrev}
                className="!absolute top-2/4 left-4 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 !right-4 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}
          >
            <img
              src={HeroPhoto}
              alt="Food"
              className="h-full w-full object-cover"
            />
            <img
              src={place}
              alt="restaurant"
              className="h-full w-full object-cover"
            />
            <img
              src={HeroPhoto2}
              alt="Owners"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
