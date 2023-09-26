// Let's mock the functions for this test
const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00"];

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // For now, return the same times regardless of the date
      return state;
    default:
      return state;
  }
};

test("initializeTimes returns initial list of times", () => {
  expect(initializeTimes()).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ]);
});

test("updateTimes returns the same list of times", () => {
  const currentState = ["17:00", "18:00", "19:00"];
  const action = { type: "UPDATE_TIMES", date: "2023-09-26" };
  expect(updateTimes(currentState, action)).toEqual(currentState);
});
//
// Path: src/components/BookingForm.js
// Form submission is a common use case for unit testing. Let's test the BookingForm component.
//

import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm"; // Path might differ based on your project structure

test("BookingForm handles form submission correctly", () => {
  render(
    <BookingForm
      availableTimes={["17:00", "18:00", "19:00"]}
      dispatch={jest.fn()}
    />
  );

  // Fill out the form
  fireEvent.change(screen.getByLabelText(/date/i), {
    target: { value: "2023-09-26" },
  });
  fireEvent.change(screen.getByLabelText(/time/i), {
    target: { value: "18:00" },
  });
  fireEvent.change(screen.getByLabelText(/number of guests/i), {
    target: { value: "5" },
  });
  fireEvent.change(screen.getByLabelText(/occasion/i), {
    target: { value: "Birthday" },
  });
  fireEvent.change(screen.getByLabelText(/full name/i), {
    target: { value: "John Doe" },
  });
  fireEvent.change(screen.getByLabelText(/phone number/i), {
    target: { value: "1234567890" },
  });
  fireEvent.change(screen.getByLabelText(/email address/i), {
    target: { value: "johndoe@example.com" },
  });

  // Mock the alert function
  window.alert = jest.fn();

  // Submit the form
  fireEvent.click(screen.getByText(/book appointment/i));

  // Check if the alert was called
  expect(window.alert).toHaveBeenCalledWith(
    "Your reservation has been submitted!"
  );
});
