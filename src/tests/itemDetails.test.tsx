import { render, screen } from "@testing-library/react";
import ItemDetails from "../components/ItemDetails";
import "@testing-library/jest-dom";

const mockItem = {
  name: "Mitali Varshney",
  email: "mitali.varshney@gmail.com",
  phone: "9093883773",
  website: "www.mitali.com",
  id: 4
};

describe("ItemDetails Component", () => {
  test("renders item details correctly", () => {
    render(<ItemDetails item={mockItem} />);
    expect(screen.getByText("Mitali Varshney")).toBeInTheDocument();
    expect(screen.getByText("Email: mitali.varshney@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("Phone: 9093883773")).toBeInTheDocument();
    expect(screen.getByText("Website: www.mitali.com")).toBeInTheDocument();
  });

  test("renders without crashing when no item is provided", () => {
    render(<ItemDetails item={null} />);
    expect(screen.queryByText("Email:")).not.toBeInTheDocument();
    expect(screen.queryByText("Phone:")).not.toBeInTheDocument();
    expect(screen.queryByText("Website:")).not.toBeInTheDocument();
  });
});
