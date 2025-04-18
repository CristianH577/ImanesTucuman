import { Switch } from "@nextui-org/react";

import { IoIosSunny, IoMdMoon } from "react-icons/io";

export default function ThemeSwitch({
  isSelected = false,
  onValueChange = null,
}) {
  const handleSwitch = (e) => {
    onValueChange && onValueChange(e);
  };

  return (
    <Switch
      name="theme-swith"
      aria-label="Cambiar tema"
      isSelected={isSelected === "dark"}
      endContent={<IoIosSunny />}
      startContent={<IoMdMoon />}
      classNames={{
        endContent: "text-custom1-10",
        wrapper: "bg-custom1 group-data-[selected=true]:bg-custom2-10",
      }}
      onValueChange={handleSwitch}
    />
  );
}
