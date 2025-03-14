import { useState } from "react";

import { links, fontsValues, navItems } from "../consts/siteConfig";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Link,
  Button,
  Badge,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Tooltip,
} from "@nextui-org/react";

import Logo from "../components/Logo";
import Redes from "../components/Redes";
import MenuMovilDrawer from "./NavbarCustom/MenuMovilDrawer";
import ThemeSwitch from "./NavbarCustom/ThemeSwitch";

import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

function NavbarCustom({ cartLength, onOpenCart }) {
  const text_class = "text-custom1";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [font, setFont] = useState("md");

  const handleTheme = (val) => {
    if (val) {
      document.body.classList?.remove(theme);
      setTheme(val);
      document.body.classList?.add(val);
    }
  };
  const handleFont = () => {
    let i = fontsValues.findIndex((e) => e.key === font);
    i += 1;
    if (i > fontsValues.length - 1) i = 0;
    setFont(fontsValues[i].key);
    document.documentElement.style.setProperty(
      "--font-size",
      fontsValues[i].value
    );
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className="z-50 bg-transparent fixed top-0 "
      classNames={{
        item: "font-bold",
        wrapper: "max-xs:gap-2 max-xs:px-2",
      }}
    >
      <NavbarContent>
        {/* <li className="h-full"> */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
          className={`md:hidden w-10 hover:text-secondary-700 transition-all ${text_class}`}
          icon={<IoMenu className="h-full w-fit" />}
        />
        {/* </li> */}

        <NavbarItem>
          <NavbarBrand className="hidden xs:block">
            <Link
              className="hover:scale-105 transition-all flex items-center cursor-pointer"
              href="#"
              onPress={() => {
                setIsMenuOpen(false);
              }}
              aria-label="Ir al inicio de la pagina"
            >
              <Logo
                id="navbar_logo"
                classNames={{
                  svgA: "h-full w-auto max-h-[36px]",
                }}
              />
            </Link>
          </NavbarBrand>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.id}>
            <Link
              href={`#${item.id}`}
              className={`hover:scale-110 transition-all capitalize ${text_class}`}
              style={{
                textShadow: "1px 1px 1px black",
              }}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="gap-2 ">
        <NavbarItem className="hidden sm:block md:hidden lg:block">
          <Redes
            classNames={{
              link: `p-1 bg-transparent shadow-none text-2xl`,
            }}
            slice={2}
          />
        </NavbarItem>

        <NavbarItem>
          <Dropdown
            classNames={{
              content: "min-w-0 p-0 border-2 border-custom1-5 overflow-hidden",
            }}
          >
            <DropdownTrigger>
              <Button
                isIconOnly
                variant=""
                className="text-neutral-400 hover:scale-110 transition-all"
                aria-label="Configuraciones"
              >
                <FaGear className="text-2xl" />
              </Button>
            </DropdownTrigger>

            <DropdownMenu
              aria-label="Configuraciones"
              closeOnSelect={false}
              classNames={{
                base: "p-0",
              }}
            >
              <DropdownItem textValue="theme">
                <ThemeSwitch
                  isSelected={theme === "dark"}
                  onValueChange={(e) => {
                    const theme_ = e ? "dark" : "light";
                    handleTheme(theme_);
                  }}
                />
              </DropdownItem>

              <DropdownItem textValue="font" className="p-0">
                <Button
                  isIconOnly
                  className="uppercase font-bold bg-transparent w-full"
                  onPress={handleFont}
                >
                  {font}
                </Button>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem>
          <Tooltip
            content="Carrito"
            className="border-2 border-custom1-5"
            classNames={{
              content: "dark:text-white text-center font-semibold",
            }}
          >
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
                <FaShoppingCart
                  className="text-neutral-500 data-[active=true]:text-custom1 text-2xl"
                  data-active={cartLength > 0}
                />
              </Badge>
            </Button>
          </Tooltip>
        </NavbarItem>

        <NavbarItem>
          <Link
            href={links?.whatsapp}
            target="_blank"
            className="flex items-center cursor-pointer hover:scale-110 transition-all"
            aria-label="Consulte por Whatsapp"
          >
            <FaWhatsapp className="text-success text-2xl" />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <MenuMovilDrawer
        navItems={navItems}
        isOpen={isMenuOpen}
        onOpenChange={() => setIsMenuOpen(!isMenuOpen)}
      />
    </Navbar>
  );
}

export default NavbarCustom;
