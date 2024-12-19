import * as Dialog from "@radix-ui/react-dialog";
import Button from "../Button/Button";

const Modal = ({
  trigger,
  title,
  description,
  body,
}: {
  trigger: any;
  title: string;
  description: string;
  body?: any;
}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content className="bg-black border-2 border-[#22242a]  fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] p-4 rounded-lg">
          <Dialog.Title className="text-2xl">{title}</Dialog.Title>
          <Dialog.Description className="mt-2">
            {description}
          </Dialog.Description>
          {body}
          <Dialog.Close>
            <Button className="mt-4" intent="secondary">
              Close
            </Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
