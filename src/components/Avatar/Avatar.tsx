import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const avatarProps = cva(
  "aspect-square overflow-hidden select-none flex items-center justify-center align-middle border-2 border-white",
  {
    variants: {
      shape: {
        circle: "rounded-full",
        square: "rounded-lg",
      },
      size: {
        small: "w-8 h-8",
        medium: "w-10 h-10",
        large: "w-12 h-12",
      },
    },
    defaultVariants: {
      shape: "circle",
      size: "medium",
    },
  },
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarProps> {
  shape?: "circle" | "square";
  size?: "small" | "medium" | "large";
}

const Avatar: React.FC<AvatarProps> = ({
  className,
  shape = "circle",
  size = "medium",
  ...props
}) => {
  return (
    <AvatarPrimitive.Root
      className={cn(avatarProps({ shape, size }))}
      {...props}
    >
      <AvatarPrimitive.Image
        className="aspect-square h-[100%] w-[100%] border-inherit object-cover"
        src="https://i.pinimg.com/550x/8c/9e/ee/8c9eeef65c24a4d30a92a908a18db430.jpg"
        alt="Darius"
      />
      <AvatarPrimitive.Fallback className="AvatarFallback" delayMs={600}>
        D
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
};

export default Avatar;
