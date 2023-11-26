import { render, screen } from "@testing-library/react";
import Count from "./Count";



describe("sdf",()=>{
  test("renders name correctly", () => {
    render(<Count />);
    const linkElement = screen.getByRole("heading", {
      name: /nasirul islam chowdhury/i,
    });
    expect(linkElement).toBeInTheDocument();
  });

  
})
