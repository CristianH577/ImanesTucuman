import { lazy, Suspense, useState } from "react";
import { motion } from "framer-motion";

import { LINKS_SITES, FONTS_VALUES, NAV_ITEMS } from "../consts/siteConfig";

import { useConfigs } from "../hooks/useConfigs";

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
  Spinner,
} from "@nextui-org/react";

import Logo from "./components/Logo";
import Redes from "../components/Redes";
import MenuMovilDrawer from "./NavbarCustom/MenuMovilDrawer";
import ThemeSwitch from "./NavbarCustom/ThemeSwitch";

// const SearchDrawer = lazy(() => import("./NavbarCustom/SearchDrawer"));

import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { SiSearxng } from "react-icons/si";

function NavbarCustom({ cartLength, onOpenCart }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isSearchOpen, setIsSearchOpen] = useState(false);
  const configs = useConfigs();

  const switchTheme = (e) => {
    const theme_ = e ? "dark" : "light";
    configs.set({ ...configs.value, theme: theme_ });
  };

  const switchFont = (next = false) => {
    const array = Object.keys(FONTS_VALUES);
    let font_ = configs.value.font;
    let fontSecondary_ = "small";

    if (next) {
      let i = array.findIndex((key) => key === configs.value.font);
      i += 1;
      if (i > array.length - 1) i = 0;
      font_ = array[i];

      if (font_ !== "md") fontSecondary_ = FONTS_VALUES[array[i - 1]];
    }

    configs.set({
      ...configs.value,
      font: font_,
      fontSecondary: fontSecondary_,
    });
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
        <motion.li
          className="h-full hover:text-secondary-700 text-custom1"
          style={{
            filter: "drop-shadow(1px 1px 1px rgba(0,0,0,.5))",
          }}
          // animate={{
          //   scale: [1, 1.1, 1],
          // }}
          // transition={{
          //   repeat: Infinity,
          //   duration: 2,
          //   ease: "linear",
          // }}
        >
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
            className="md:hidden w-10 transition-all"
            icon={<IoMenu className="h-full w-fit" />}
          />
        </motion.li>

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
        {NAV_ITEMS.map((item) => (
          <NavbarItem key={item.id}>
            <Link
              href={`#${item.id}`}
              className="hover:scale-110 transition-all capitalize text-custom2 dark:text-custom1"
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
              content: "min-w-0 p-0 border-2 border-custom1-2 overflow-hidden",
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
                  isSelected={configs.value.theme}
                  onValueChange={switchTheme}
                />
              </DropdownItem>

              <DropdownItem textValue="font" className="p-0">
                <Button
                  isIconOnly
                  className="uppercase font-bold bg-transparent w-full"
                  onPress={() => switchFont(true)}
                >
                  {configs.value.font}
                </Button>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem>
          <Tooltip
            content="Carrito"
            className="border-2 border-custom1-2"
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

        {/* <NavbarItem>
          <Button
            isIconOnly
            variant=""
            className="hover:scale-110 text-custom1 hover:text-custom1-3 transition-all"
            onPress={() => setIsSearchOpen(!isSearchOpen)}
          >
            <SiSearxng className="text-2xl" />
          </Button>
        </NavbarItem> */}

        <NavbarItem>
          <Link
            href={LINKS_SITES?.whatsapp}
            target="_blank"
            className="flex items-center cursor-pointer hover:scale-110 transition-all"
            aria-label="Consulte por Whatsapp"
          >
            <FaWhatsapp className="text-success text-2xl" />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <MenuMovilDrawer
        isOpen={isMenuOpen}
        onOpenChange={() => setIsMenuOpen(!isMenuOpen)}
        NAV_ITEMS={NAV_ITEMS}
      />

      {/* {isSearchOpen && (
        <Suspense
          fallback={
            <span className="absolute w-full h-full flex items-center justify-center bg-black/50 inset-0 z-[999]">
              <Spinner color="secondary" />
            </span>
          }
        >
          <SearchDrawer
            isOpen={isSearchOpen}
            onOpenChange={() => setIsSearchOpen(!isSearchOpen)}
          />
        </Suspense>
      )} */}
    </Navbar>
  );
}

export default NavbarCustom;
