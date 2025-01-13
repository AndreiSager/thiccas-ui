import * as RAvatar from "@radix-ui/react-avatar";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const avatar = cva(["overflow-hidden select-none"], {
  variants: {
    intent: {
      circle: ["rounded-full"],
      square: ["rounded-sm"],
    },
    size: {
      small: ["text-sm w-10 h-10"],
      medium: ["text-base w-12 h-12"],
      large: ["text-lg"],
    },
  },
  defaultVariants: {
    intent: "circle",
    size: "medium",
  },
});

const Avatar = ({
  intent = "circle",
  size = "medium",
  ...props
}: {
  intent?: "circle" | "square";
  size?: "small" | "medium" | "large";
}) => {
  return (
    <RAvatar.Root className={twMerge(intent, size)} {...props}>
      <RAvatar.Image
        className="AvatarImage"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="Colm Tuite"
      />
      <RAvatar.Fallback className="AvatarFallback" delayMs={600}>
        CT
      </RAvatar.Fallback>
    </RAvatar.Root>
  );
};

export default Avatar;
