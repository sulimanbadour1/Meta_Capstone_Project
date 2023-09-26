import React from "react";
import { useState, useContext, useEffect } from "react";

import ConfirmationContext from "../components/ConfirmationContext";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ availableTimes, dispatch }) => {
  // Logic for the form goes here
  const { bookingDetails, setBookingDetails } = useContext(ConfirmationContext);

  const navigate = useNavigate();
  // Define state variables

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    numberofguests: "",
    occasion: "",
    name: "",
    phone: "",
    email: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));

    if (name === "date") {
      // Dispatch an action to update times when date changes
      dispatch({ type: "UPDATE_TIMES", date: value });
    }
  };
  // Handle form submission (this is a placeholder; you might want to send data somewhere)
  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingDetails(formData);
    // setFormData({
    //   date: "",
    //   time: "",
    //   numberofguests: "",
    //   occasion: "",
    //   name: "",
    //   phone: "",
    //   email: "",
    // });
  };

  useEffect(() => {
    if (Object.keys(bookingDetails).length > 0) {
      // eslint-disable-next-line
      navigate("/confirmation"); // navigate to confirmation page
    } // eslint-disable-next-line
  }, [bookingDetails]);

  // Validation (placeholder; you can expand on this)
  const isFormValid = () => {
    // For demonstration, just checking if all fields have a value
    return Object.values(formData).every((value) => value !== "");
  };

  return (
    <div className="flex items-center justify-center pt-8">
      <div className="mx-auto w-full max-w-[550px] bg-transparent">
        <form onSubmit={handleSubmit}>
          <div className="-mx-3 flex flex-wrap">
            {/* Date Field */}
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="date"
                  className="mb-3 block text-base font-medium text-[#495E57]"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>

            {/* Time Field */}
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="time"
                  className="mb-3 block text-base font-medium text-[#495E57]"
                >
                  Time
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Number of Guests Field */}
          <div className="mb-5">
            <label
              htmlFor="noofguests"
              type="number"
              className="mb-3 block text-base font-medium text-[#495E57]"
            >
              Number of Guests
            </label>
            <input
              type="number"
              name="numberofguests"
              id="noofguests"
              min={0}
              max={12}
              value={formData.numberofguests}
              onChange={handleInputChange}
              placeholder="Enter number of guests"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          {/* Occasion Field */}
          <div className="mb-5">
            <label
              htmlFor="occasion"
              type="occasion"
              className="mb-3 block text-base font-medium text-[#495E57]"
            >
              Occasion
            </label>
            <select
              name="occasion"
              value={formData.occasion}
              onChange={handleInputChange}
              id="occasion"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              <option value="Birthday">Birthday</option>
              <option value="Wedding">Wedding</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Business">Business</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Contact Details Section */}
          <div className="mb-5 pt-3">
            <label className="mb-5 block text-base font-extrabold text-[#495E57]  sm:text-xl">
              Contact Details
            </label>

            {/* Full Name Field */}
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#495E57]"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            {/* Phone Number Field */}
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="mb-3 block text-base font-medium text-[#495E57]"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            {/* Email Field */}
            <div className="mb-5">
              <label
                htmlFor="email"
                type="email"
                className="mb-3 block text-base font-medium text-[#495E57]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                id="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            {/* <Link to="/confirmation"> */}
            <button
              disabled={!isFormValid()}
              type="submit"
              value="Submit"
              className="hover:shadow-form w-full rounded-md cursor-pointer bg-[#495E57] disabled:bg-[#51615cb0] hover:bg-[#49a788] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Book Appointment
            </button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
