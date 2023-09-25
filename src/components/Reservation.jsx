import React from "react";
import BookingForm from "./BookingForm";
import HeroPhoto from "../assets/Mario and Adrian A.jpg";

const Reservation = () => {
  return (
    <>
      <section className=" p-36" id="home-section">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h2 className="max-w-2xl mt-4 mb-4 text-[#495E57]  text-xl font-bold tracking-tight leading-none md:text-2xl xl:text-4xl">
              Reservation Form
            </h2>
            <p className="max-w-xl mb-6 text-base text-[#495E57]  md:text-lg">
              Please fill out the form below to make a reservation.
              <br /> Thank you.
            </p>
            <BookingForm />
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:row-span-12 lg:flex">
            <img
              src={HeroPhoto}
              alt="mockup"
              className="relative z-40 object-cover w-full h-full rounded"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Reservation;
