import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cva, type VariantProps } from "class-variance-authority";

const tooltipProps = cva("", {
  variants: {
    variant: {
      top: "",
      left: "",
      bottom: "",
      right: "",
    },
    defaultVariants: {
      variant: "top",
    },
  },
});

export interface TooltipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tooltipProps> {
  variant?: "left" | "right" | "top" | "bottom";
  text?: string;
  trigger?: any;
}

const Tooltip: React.FC<TooltipProps> = ({
  className,
  variant = "top",
  text = "This is a tooltip",
  trigger = <p className="text-sm">Hover me</p>,
  ...props
}) => {
  return (
    <TooltipPrimitive.Provider delayDuration={0}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger className="w-full" asChild>
          {trigger}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={variant}
            className={"bg-primary max-w-xl rounded-lg border-2 p-2"}
          >
            {text}
            <TooltipPrimitive.Arrow className="fill-primary" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export default Tooltip;
