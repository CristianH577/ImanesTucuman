import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@nextui-org/react";

import { LuListPlus } from "react-icons/lu";

export default function AccordionPrices({
  children = null,
  title = null,
  className = "",
  classNames = {},
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border-3 border-custom1-2 font-bold rounded-xl bg-content1 py-2 px-4${
        className ? " " + className : ""
      }`}
      data-slot="wrapper"
    >
      <div className="flex justify-between gap-4">
        {title || <div></div>}

        {children && (
          <Button
            isIconOnly
            size="sm"
            variant="light"
            onPress={() => setOpen(!open)}
          >
            <LuListPlus
              className={`transition-all h-4/5 w-fit${
                open ? " text-default" : " text-secondary dark:text-custom1"
              }`}
            />
          </Button>
        )}
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`overflow-hidden${
              classNames?.content ? " " + classNames.content : ""
            }`}
            data-slot="container"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
