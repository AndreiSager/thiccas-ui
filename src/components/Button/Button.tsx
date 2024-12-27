import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-[#386641]",
        "text-white",
        "border-transparent",
        "hover:bg-[#4CAF50]",
        "rounded-md",
      ],
      secondary: ["text-black", "border", "rounded-md"],
      tertiary: [
        "bg-transparent",
        "text-black",
        "border-transparent",
        "rounded-md",
        "hover:bg-gray",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
      large: ["text-lg", "py-4", "py-6"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  /**
   * What is the button's intended use?
   * <br/>Primary (Solid) = high emphasis
   * <br/>Secondary (Outline) = medium emphasis
   * <br/>Tertiary (Ghost) = low emphasis.
   */
  intent?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  className,
  intent = "primary",
  size = "medium",
  ...props
}) => (
  <button className={twMerge(button({ intent, size, className }))} {...props} />
);

export default Button;
