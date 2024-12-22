import * as RAvatar from "@radix-ui/react-avatar";
import { cva } from "class-variance-authority";

const avatar = cva("avatar", {
  variants: {
    intent: {
      circle: ["rounded-full"],
      square: ["rounded-sm"],
    },
    size: {
      md: ["text-base"],
    },
  },
  defaultVariants: {
    intent: "circle",
    size: "md",
  },
});

const Avatar = ({
  intent,
  size,
  content,
  ...props
}: {
  intent?: "circle" | "square";
  /**
   * `3xs` `2xs`
   */
  size: "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  content: "image" | "letter" | "smile";
}) => {
  return (
    <RAvatar.Root>
      <RAvatar.Image />
      <RAvatar.Fallback />
    </RAvatar.Root>
  );
};

export default Avatar;
