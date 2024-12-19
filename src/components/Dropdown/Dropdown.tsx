import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const Dropdown = ({ items, trigger }: { items: string[]; trigger: any }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="outline-none select-none">
        {trigger}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] select-none outline-none">
          {items.map((item) => {
            return (
              <DropdownMenu.Item
                key={item}
                className="text-black select-none outline-none hover:bg-black hover:text-white p-0.5 rounded cursor-pointer data-[highlighted]:text-white data-[highlighted]:bg-black"
              >
                {item}
              </DropdownMenu.Item>
            );
          })}
          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
