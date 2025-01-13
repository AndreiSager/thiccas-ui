import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const avatarProps = cva(["overflow-hidden select-none"], {
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

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarProps> {}

const Avatar: React.FC<AvatarProps> = ({
  className,
  intent = "circle",
  size = "medium",
  ...props
}: {
  intent?: "circle" | "square";
  size?: "small" | "medium" | "large";
}) => {
  return (
    <AvatarPrimitive.Root
      className={cn(avatarProps({ intent, size }))}
      {...props}
    >
      <AvatarPrimitive.Image
        className="AvatarImage"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="Colm Tuite"
      />
      <AvatarPrimitive.Fallback className="AvatarFallback" delayMs={600}>
        CT
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
};

export default Avatar;
