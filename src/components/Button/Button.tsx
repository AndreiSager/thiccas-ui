import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

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
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button className={button({ intent, size, className })} {...props} />;

export default Button;
