import { Tooltip, Button } from "@nextui-org/react";
import { useState } from "react";

import { FaQuestionCircle } from "react-icons/fa";

export default function TooltipFuerzaExp() {
  const [open, setOpen] = useState(false);

  return (
    <Tooltip
      isOpen={open}
      onOpenChange={setOpen}
      content="La fuerza experimental esta medida mediante la adhesión
      magnética de un peso al imán que a su vez esta adherido a una
      placa de metal de casi 10mm en un sentido vertical."
      showArrow
      className="dark:text-white max-w-44 p-2 text-center"
      title="Este es un tooltip"
      shadow="md"
    >
      <Button
        isIconOnly
        variant=""
        size="sm"
        className=""
        onPress={() => setOpen(!open)}
      >
        <FaQuestionCircle />
      </Button>
    </Tooltip>
  );
}
