import React, { useContext, useEffect } from "react";
import ConfirmationContext from "./ConfirmationContext";

import { Link } from "react-router-dom";
const Confirmation = () => {
  const { bookingDetails } = useContext(ConfirmationContext);
  useEffect(() => {
    console.log(bookingDetails);
  }, [bookingDetails]);

  return (
    <div className="p-48 bg-white rounded-xl shadow-lg">
      <div className="flex justify-center mb-10">
        <div className="bg-green-500 rounded-full p-5 animate-bounce">
          <span className="text-white text-4xl font-bold">✓</span>
        </div>
      </div>
      <h2 className="text-3xl font-extrabold text-[#495E57]  text-center mb-5">
        Booking Confirmation
      </h2>
      <h3 className="text-xl font-semibold text-[#495E57] text-center mb-10">
        Thank you for your booking!
      </h3>
      <div className="border-t border-b border-[#495E57] py-8">
        <p className="mb-3">
          <span className="font-semibold text-[#495E57]">Date:</span>{" "}
          {bookingDetails.date}
        </p>
        <p className="mb-3">
          <span className="font-semibold text-[#495E57]">Time:</span>{" "}
          {bookingDetails.time}
        </p>
        <p className="mb-3">
          <span className="font-semibold text-[#495E57]">
            Number of Guests:
          </span>{" "}
          {bookingDetails.numberofguests}
        </p>
        <p className="mb-3">
          <span className="font-semibold text-[#495E57]">Occasion:</span>{" "}
          {bookingDetails.occasion}
        </p>
        <p className="mb-3">
          <span className="font-semibold text-[#495E57]">Name:</span>{" "}
          {bookingDetails.name}
        </p>
        <p className="mb-3">
          <span className="font-semibold text-[#495E57]">Phone:</span>{" "}
          {bookingDetails.phone}
        </p>
        <p className="mb-3">
          <span className="font-semibold text-[#495E57]">Email:</span>{" "}
          {bookingDetails.email}
        </p>
      </div>
      <div className="mt-10 flex justify-center space-x-4">
        <button className="bg-[#F4CE14]  inline-flex items-center justify-center px-5 py-3 text-black font-medium text-base  text-center  rounded-lg hover:bg-[#495E57] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
          Print Confirmation
        </button>
        <Link to="/">
          <button className="bg-[#F4CE14]  inline-flex items-center justify-center px-5 py-3 text-black font-medium text-base  text-center  rounded-lg hover:bg-[#495E57] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
