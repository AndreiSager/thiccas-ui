import * as Tooltip from "@radix-ui/react-tooltip";
import Button from "../Button/Button";

const TooltipComponent = ({
  text,
  position,
  intent,
  trigger,
}: {
  intent?: "normal" | "danger";
  position?: "left" | "right" | "top" | "bottom";
  text: string;
  trigger: any;
}) => {
  if (intent == undefined) {
    intent = "normal";
  }
  if (position == undefined) {
    position = "top";
  }
  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger className="w-full" asChild>
          {trigger}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side={position}
            className={
              "max-w-xl rounded-lg border-2 bg-base-100 p-2 " +
              (intent == "normal" ? "border-[#22242a]" : "border-red-500")
            }
          >
            {text}
            {intent == "normal" ? (
              <Tooltip.Arrow className="fill-[#22242a]" />
            ) : (
              <Tooltip.Arrow className="fill-red-500" />
            )}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TooltipComponent;
