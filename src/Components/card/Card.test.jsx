// Card.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import user from '@testing-library/user-event'
import Card from "../card/Card";

describe("Card Component", () => {
  const data = [
    {
      id: 1,
      img: "https://example.com/image.jpg",
      instrument: "Dumble",
      age: "20-24",
      time: "2000",
      description: "obscure Latin words, consectetur, from a Lorem Ipsum",
    },
  ];

  test("renders card with correct time", () => {
    render(<Card pro={data[0]} />);

    const timeElement = screen.getByText(/Time Required: 2000s/i);
    expect(timeElement).toBeInTheDocument();
  });

  test("renders card with correct instrument", () => {
    render(<Card pro={data[0]} />);

    const instrumentElement = screen.getByText(/Dumble/i);
    expect(instrumentElement).toBeInTheDocument();
  });

  test("renders card with correct age", () => {
    render(<Card pro={data[0]} />);

    const ageElement = screen.getByText(/For Age: 20-24/i);
    expect(ageElement).toBeInTheDocument();
  });

  test("renders card description", () => {
    render(<Card pro={data[0]} />);

    const descriptionElement = screen.getByText(
      /obscure Latin words, consectetur, from a Lorem Ipsum/i
    );
    expect(descriptionElement).toBeInTheDocument();
  });

//   test("renders button description", async() => {
//     render(<Card pro={data[0]} />);

//     const btn = screen.getByRole("button", {
//       name: "Add To List",
//     });
//     await user.click(btn)
//     expect(btn).toHaveTextContent("Added");
//   });

});
