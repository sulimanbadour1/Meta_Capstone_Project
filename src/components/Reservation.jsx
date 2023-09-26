import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import HeroPhoto from "../assets/Mario and Adrian A.jpg";

const Reservation = () => {
  // Initial times
  // Before API integration, we can just hard-code some times

  const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];

  // Reducer function to handle available times
  const timesReducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        // For now, return the same times regardless of the date
        return initialTimes;
      default:
        return state;
    }
  };

  // Use the reducer
  const [availableTimes, dispatch] = useReducer(timesReducer, initialTimes);

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
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:row-span-12 lg:flex">
            <img
              src={HeroPhoto}
              alt="mockup"
              className="relative z-40 object-cover w-full h-full rounded xs:pt-6"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Reservation;
