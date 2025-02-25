import { Select, SelectItem } from "@nextui-org/react";

import { IoIosSunny, IoMdMoon } from "react-icons/io";

export default function ThemeSelect({ selectedKeys, onSelectionChange }) {
  const icons = {
    light: <IoIosSunny className="text-yellow-400" />,
    dark: <IoMdMoon className="text-default-500" />,
  };

  return (
    <Select
      name="theme"
      aria-label="seleccione la estética de la pagina"
      size="sm"
      label=""
      variant=""
      className="xs:min-w-10"
      classNames={{
        listbox: "dark:text-foreground",
        selectorIcon: "hidden",
        innerWrapper: "w-fit flex justify-center items-center",
        value: "text-xl hover:scale-110 transition-all",
        trigger:
          "shadow-none w-fit bg-transparent data-[hover=true]:bg-transparent max-xs:px-0",
        mainWrapper: "items-center",
        popoverContent:
          "bg-content1/50 border-2 border-neutral-500/80 min-w-12",
      }}
      selectedKeys={selectedKeys}
      onSelectionChange={onSelectionChange}
      renderValue={(item) => {
        return (
          <div className="uppercase flex gap-1 items-center text-3xl">
            {icons?.[item[0].key]}
          </div>
        );
      }}
    >
      {["light", "dark"].map((item) => (
        <SelectItem
          key={item}
          textValue={item}
          hideSelectedIcon
          className="p-0 bg-transparent data-[hover=true]:bg-transparent hover:scale-125 data-[focus-visible=true]:dark:ring-offset-background-transparent data-[selectable=true]:focus:bg-transparent"
        >
          <div className="flex justify-center text-lg py-1">
            {icons?.[item]}
          </div>
        </SelectItem>
      ))}
    </Select>
  );
}
