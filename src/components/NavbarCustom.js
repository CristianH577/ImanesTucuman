import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  SelectItem,
  Select,
} from "@nextui-org/react";

import Logo from "./Logo";
import Redes from "./Redes";

import { IoIosSunny, IoMdMoon } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { TbChristmasTree } from "react-icons/tb";

function NavbarCustom({ esthetic, links }) {
  const menuItems = ["formas", "imanes", "otros", "faqs", "contacto"];
  const icons = {
    light: <IoIosSunny className="text-yellow-400" />,
    dark: <IoMdMoon className="text-default-500" />,
    navidad: <TbChristmasTree className="text-success" />,
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    const updateHashText = () => {
      setCurrent(window.location.hash);
    };

    updateHashText();

    window.addEventListener("hashchange", updateHashText);

    return () => {
      window.removeEventListener("hashchange", updateHashText);
    };
  }, []);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      // position="sticky"
      className="z-50 bg-transparent fixed top-0 "
      classNames={{
        item: "data-[active=true]:!text-custom1-5 text-custom1 font-bold ",
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <Link
              className="hover:scale-110 transition-all"
              href={`#`}
              onPress={() => setIsMenuOpen(false)}
              style={{
                filter: "drop-shadow(-4px 0px 6px black)",
              }}
            >
              <Logo
                classNames={{
                  svgA: "h-full w-auto max-h-[44px]",
                }}
              />
            </Link>
          </motion.div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item} isActive={current.includes(item)}>
            <Link
              href={`#${item}`}
              data-active={current.includes(item)}
              className="data-[active=true]:!text-custom1-5 text-custom1 hover:scale-110 transition-all capitalize"
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="gap-2">
        <NavbarItem>
          <Redes
            className={"hidden md:flex"}
            classNames={{ link: "p-1" }}
            slice={2}
          />
        </NavbarItem>

        <NavbarItem>
          <Select
            aria-label="seleccione la estetica de la pagina"
            size="sm"
            label=""
            variant=""
            className="min-w-10 hidden xs:block "
            classNames={{
              listbox: "dark:text-foreground ",
              selectorIcon: "hidden",
              innerWrapper: "w-fit flex justify-center items-center ",
              value: "text-xl",
              trigger: "bg-transparent shadow-none w-fit",
              mainWrapper: "items-center",
              popoverContent:
                "bg-gradient-to-t from-custom2 to-custom2-10 border-2 border-custom2-5 min-w-12",
            }}
            selectedKeys={[esthetic.value]}
            onSelectionChange={(e) => esthetic.set(e.currentKey)}
            renderValue={(item) => {
              return (
                <div className="uppercase flex gap-1 items-center">
                  {icons?.[item[0].key]}
                </div>
              );
            }}
          >
            {/* , "navidad" */}
            {["light", "dark"].map((item) => (
              <SelectItem
                key={item}
                textValue={item}
                hideSelectedIcon
                className="p-0 hover:bg-neutral-500/80"
              >
                <div className="flex justify-center text-xl py-1">
                  {icons?.[item]}
                </div>
              </SelectItem>
            ))}
          </Select>
        </NavbarItem>

        <NavbarItem>
          <Link
            href={links?.whatsapp}
            target="_blank"
            className="text-success text-lg flex items-center cursor-pointer hover:scale-110 transition-all"
          >
            <FaWhatsapp className="text-success" />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={`${item}`}>
            <Link
              color="foreground"
              size="lg"
              href={`#${item}`}
              data-active={current.includes(item)}
              className="data-[active=true]:text-custom1-5 data-[active=true]:font-bold text-custom1 w-full border-b py-2 capitalize"
              onPress={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarCustom;
