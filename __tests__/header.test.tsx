import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "@/components/header";

// Mock next/navigation for usePathname
jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("Header Component", () => {
  it("renders the logo", () => {
    render(<Header />);
    const logo = screen.getByAltText("prizeet-icon");
    expect(logo).toBeInTheDocument();
  });

  it("renders desktop navigation links", () => {
    render(<Header />);
    expect(screen.getByText("Become a Vendor")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders user profile and shopping cart icons with badge", () => {
    render(<Header />);
    const cartIcon = screen.getByRole("button", { name: /shopping cart/i });
    const profileIcon = screen.getByRole("button", { name: /user profile/i });

    expect(cartIcon).toBeInTheDocument();
    expect(profileIcon).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument(); // Cart badge
  });

  it("shows mobile menu when hamburger icon is clicked", () => {
    render(<Header />);

    const toggleButton = screen.getByRole("button", { name: /toggle menu/i });
    fireEvent.click(toggleButton);

    // Mobile menu links should now be visible
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getAllByText("Become a Vendor").length).toBeGreaterThan(0);
  });
});
