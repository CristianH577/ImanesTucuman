import { Switch } from "@nextui-org/react";

import { IoIosSunny, IoMdMoon } from "react-icons/io";

export default function ThemeSwitch({ isSelected, onValueChange }) {
  return (
    <Switch
      name="theme-swith"
      aria-label="Cambiar tema"
      isSelected={isSelected}
      endContent={<IoIosSunny />}
      startContent={<IoMdMoon />}
      classNames={{
        endContent: "text-custom1-10",
        wrapper: "bg-custom1 group-data-[selected=true]:bg-custom2-10",
      }}
      onValueChange={onValueChange}
    />
  );
}
