import { Switch } from "@nextui-org/react";

import SunnyIcon from "@mui/icons-material/Sunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";

export default function ThemeSwitch({
  isSelected = false,
  onValueChange = () => {},
}) {
  return (
    <Switch
      name="theme-swith"
      aria-label="Cambiar tema"
      isSelected={isSelected === "dark"}
      endContent={<SunnyIcon />}
      startContent={<BedtimeIcon />}
      classNames={{
        endContent: "text-custom1-10",
        wrapper: "bg-custom1 group-data-[selected=true]:bg-custom2-10",
      }}
      onValueChange={onValueChange}
    />
  );
}
