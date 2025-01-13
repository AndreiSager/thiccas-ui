import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-primary",
        "hover:bg-[#6C65EF]",
        "text-white",
        "border-transparent",
        "rounded-md",
      ],
      secondary: [
        "bg-[#EEF1FF]",
        "border-transparent",
        "hover:bg-[#6C65EF]",
        "rounded-md",
      ],
      tertiary: ["text-black", "border", "rounded-md"],
      quaternary: [
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
    icon: {
      none: "",
      left: "",
      right: "",
      only: "",
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
   * <br/>Primary (Solid) = high emphasios
   * <br/>Secondary (Subtle) = medium emphasis
   * <br/>Tertiary (Outline) = medium emphasis
   * <br/>Quaternary (Ghost) = low emphasis
   */
  intent?: "primary" | "secondary" | "tertiary" | "quaternary";
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  className,
  intent = "primary",
  size = "medium",
  icon = "none",
  disabled = false,
  ...props
}) => (
  <button className={twMerge(button({ intent, size, className }))} {...props} />
);

export default Button;
