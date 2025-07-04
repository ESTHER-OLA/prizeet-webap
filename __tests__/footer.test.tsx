import { render, screen, fireEvent } from "@testing-library/react";
import { Footer } from "@/components/footer";
import "@testing-library/jest-dom";
import { toast } from "sonner";

// --- Mocks ---
jest.mock("sonner", () => ({
  toast: {
    success: jest.fn(),
  },
}));

jest.mock("next/image", () => {
  /* eslint-disable @next/next/no-img-element */
  const MockImage = (props: { alt?: string; [key: string]: any }) => (
    <img {...props} alt={props.alt || "image"} />
  );
  MockImage.displayName = "MockNextImage";
  return MockImage;
});

jest.mock("next/link", () => {
  const MockLink = ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>;
  MockLink.displayName = "MockNextLink";
  return MockLink;
});

// --- Tests ---
describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("renders the newsletter heading and description", () => {
    expect(
      screen.getByRole("heading", { name: /get the best smartphone deals/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Join thousands of users getting updates/i)
    ).toBeInTheDocument();
  });

  it("renders the email input and subscribe button", () => {
    expect(
      screen.getByPlaceholderText(/enter your email/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /subscribe/i })
    ).toBeInTheDocument();
  });

  it("subscribes and shows success message", () => {
    const emailInput = screen.getByPlaceholderText(
      /enter your email/i
    ) as HTMLInputElement;
    const subscribeButton = screen.getByRole("button", { name: /subscribe/i });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(subscribeButton);

    expect(toast.success).toHaveBeenCalledWith(
      "Thanks for subscribing to Prizeet deals!"
    );
  });

  it("renders social media icons", () => {
    expect(screen.getByLabelText(/facebook/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/instagram/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/twitter/i)).toBeInTheDocument();
  });

  it("renders product links", () => {
    expect(screen.getByText("For Vendors")).toBeInTheDocument();
    expect(screen.getByText("For Buyers")).toBeInTheDocument();
  });

  it("renders company links", () => {
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
    expect(screen.getByText("Terms of Service")).toBeInTheDocument();
  });

  it("renders copyright", () => {
    expect(
      screen.getByText(/© 2025 Prizeet. All rights reserved./i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Made with ❤️ in Nigeria by Esther Ola/i)
    ).toBeInTheDocument();
  });

  it("does not render scroll-to-top button initially", () => {
    expect(screen.queryByLabelText("Scroll to top")).not.toBeInTheDocument();
  });

  it("shows scroll-to-top button after scroll", () => {
    fireEvent.scroll(window, { target: { scrollY: 400 } });
    window.dispatchEvent(new Event("scroll"));

    render(<Footer />); // simulate re-render
    expect(screen.queryByLabelText("Scroll to top")).toBeInTheDocument();
  });
});
