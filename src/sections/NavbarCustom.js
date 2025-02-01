import { useState } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Link,
  SelectItem,
  Select,
  Button,
  Badge,
} from "@nextui-org/react";

import Logo from "../components/Logo";
import Redes from "../components/Redes";
import MenuMovilDrawer from "./NavbarCustom/MenuMovilDrawer";

import { IoIosSunny, IoMdMoon } from "react-icons/io";
import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";

function NavbarCustom({ theme, links, onOpenCart, cartLength }) {
  const menu_items = [
    "formas",
    "imanes",
    "otros",
    "caracteristicas",
    "faqs",
    "contacto",
  ];
  const text_class = "text-custom1 navidad:text-custom1--10";

  const icons = {
    light: <IoIosSunny className="text-yellow-400" />,
    dark: <IoMdMoon className="text-default-500" />,
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLink = (id) => {
    const element = document.querySelector("#" + id);
    if (element) {
      element.scrollIntoView();
      setIsMenuOpen(false);

      setTimeout(() => {
        element.scrollIntoView();
      }, 700);
    }
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      // position="static"
      className="z-50 bg-transparent fixed top-0 "
      classNames={{
        item: "font-bold",
        wrapper: "max-xs:gap-2 max-xs:px-2",
      }}
    >
      <NavbarContent>
        <li className="h-full">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
            className={`md:hidden ${text_class}`}
          />
        </li>

        <NavbarItem>
          <NavbarBrand className="hidden xs:block">
            <Link
              className="hover:scale-110 transition-all flex items-center"
              href="#inicio"
              onPress={() => setIsMenuOpen(false)}
              style={{
                filter: "drop-shadow(-4px 0px 6px black)",
              }}
              aria-label="Ir al inicio de la pagina"
            >
              <Logo
                id="navbar_logo"
                classNames={{
                  svgA: "h-full w-auto max-h-[44px]",
                }}
              />
            </Link>
          </NavbarBrand>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {menu_items.map((item) => (
          <NavbarItem key={item}>
            <Link
              href={`#${item}`}
              className={`hover:scale-110 transition-all capitalize ${text_class}`}
              style={{
                textShadow: "1px 1px 2px black",
              }}
              onPress={() => handleLink(item)}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="gap-2 ">
        <NavbarItem className="hidden sm:block md:hidden lg:block">
          <Redes
            classNames={{
              link: `p-1 bg-transparent shadow-none text-2xl ${text_class}`,
            }}
            slice={2}
          />
        </NavbarItem>

        <NavbarItem>
          <Button
            isIconOnly
            variant=""
            className="overflow-visible hover:scale-110 transition-all"
            onPress={onOpenCart}
          >
            <Badge
              content={cartLength > 9 ? "+9" : cartLength}
              isInvisible={cartLength < 1}
              size="sm"
              className="border-custom1-2 bg-custom2-10 text-white"
            >
              <FaShoppingCart className="text-custom1-2 text-2xl " />
            </Badge>
          </Button>
        </NavbarItem>

        <NavbarItem>
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
            selectedKeys={[theme.value]}
            onSelectionChange={(e) => theme.set(e.currentKey)}
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
        </NavbarItem>

        <NavbarItem>
          <Link
            href={links?.whatsapp}
            target="_blank"
            className="text-success text-lg flex items-center cursor-pointer hover:scale-110 transition-all"
            aria-label="Consulte por Whatsapp"
          >
            <FaWhatsapp className="text-success navidad:text-custom--10 text-2xl" />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <MenuMovilDrawer
        menuItems={menu_items}
        handleLink={handleLink}
        isOpen={isMenuOpen}
        onOpenChange={() => setIsMenuOpen(!isMenuOpen)}
      />
    </Navbar>
  );
}

export default NavbarCustom;
