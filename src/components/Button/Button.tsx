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
      sm: ["text-sm", "py-1", "px-2"],
      md: ["text-base", "py-2", "px-4"],
      lg: ["text-lg", "py-4", "py-6"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "md",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  /**
   * What is the button's intended use?
   * <br/>Primary (Solid) = high emphasis
   * <br/>Secondary (Outline) = medium emphasis, and Tertiary (Ghost) = low emphasis.
   */
  intent?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  className,

  intent = "primary",
  size = "md",
  ...props
}) => (
  <button className={twMerge(button({ intent, size, className }))} {...props} />
);

export default Button;
