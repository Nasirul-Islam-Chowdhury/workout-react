/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { act, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Count from "./Count";

describe("Count component", () => {
  test("renders name correctly", () => {
    render(<Count />);
    const linkElement = screen.getByRole("heading", {
      name: /nasirul islam chowdhury/i,
    });
    expect(linkElement).toBeInTheDocument();
  });

  test("renders weight, height, age correctly", () => {
    render(<Count />);
    const heightElement = screen.getByText(/5.5/i);
    const heightLabelElement = screen.getByText(/Height/i);
    expect(heightElement).toBeInTheDocument();
    expect(heightLabelElement).toBeInTheDocument();
  });

  test("renders break buttons correctly", () => {
    render(<Count />);
    const timeElement = screen.getByRole("button", {
      name: /10s/i,
    });
    expect(timeElement).toBeInTheDocument();
  });

  // test("renders a break time after clicking the timer button", async () => {
  //   render(<Count />);

  //   const incrementButton = screen.getByRole("button", { name: "20s" });

  //   await act(async () => {
  //     user.click(incrementButton);
  //   });

  //   const countElement = screen.getByText("20s seconds");
  //   expect(countElement).toBeInTheDocument();
  // });

  test("raising popup correctly", async () => {
    render(<Count />);

    const ActivityButton = screen.getByRole("button", {
      name: "Activity Completed",
    });
    await act(async () => {
      user.click(ActivityButton);
    });

    const activityElement = screen.getByRole("heading", { level: 2, name: "Activity Completed" });
    expect(activityElement).toBeInTheDocument();
  });


});
