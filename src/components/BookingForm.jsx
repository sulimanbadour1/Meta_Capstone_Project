import React from "react";
import { useState } from "react";

const BookingForm = () => {
  // Logic for the form goes here

  const [formData, setFormData] = useState({
    date: "",
    time: "17:00",
    numberofguests: "",
    occasion: "Birthday",
    name: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isFormValid = () => {
    for (const key in formData) {
      if (formData[key] === "") return false;
    }
    return true;
  };

  return (
    <div className="flex items-center justify-center pt-8">
      <div className="mx-auto w-full max-w-[550px] bg-transparent">
        <form>
          <div className="-mx-3 flex flex-wrap">
            {/* //date */}
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="date"
                  className="mb-3 block text-base font-medium text-[#495E57] "
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
            {/* Time */}
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="time"
                  className="mb-3 block text-base font-medium text-[#495E57] "
                >
                  Time
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-[#e0e0e0]  bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#aea942] focus:shadow-md"
                >
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                </select>
              </div>
            </div>
          </div>
          {/* Guests number */}
          <div className="mb-5">
            <label
              htmlFor="noofguests"
              type="number"
              className="mb-3 block text-base font-medium text-[#495E57] "
            >
              Number of Guests
            </label>
            <input
              type="number"
              name="numberofguests"
              id="noofguests"
              value={formData.numberofguests}
              onChange={handleInputChange}
              placeholder="Enter number of guests"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          {/* Occasion  */}
          <div className="mb-5">
            <label
              htmlFor="occasion"
              type="occasion"
              className="mb-3 block text-base font-medium text-[#495E57] "
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
              <option value="Anniversary">Anniversary</option>
              <option value="Business">Business</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {/* Contact Details */}
          <div className="mb-5 pt-3">
            <label className="mb-5 block text-base font-semibold text-[#495E57]  sm:text-xl">
              Contact Details
            </label>
            {/* Full name */}
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#495E57] "
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
            {/* Phone number */}
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="mb-3 block text-base font-medium text-[#495E57] "
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            {/* Email */}
            <div className="mb-5">
              <label
                htmlFor="email"
                type="email"
                className="mb-3 block text-base font-medium text-[#495E57] "
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
          <div>
            {/* Button Sumbit */}
            <button
              disabled={!isFormValid()}
              type="submit"
              value="Submit"
              className="hover:shadow-form w-full rounded-md cursor-pointer bg-[#495E57] disabled:bg-[#51615cb0] hover:bg-blue-gray-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
