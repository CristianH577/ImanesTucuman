import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Listbox,
  ListboxItem,
  Divider,
} from "@nextui-org/react";

import Redes from "../../components/Redes";
import Logo from "../components/Logo";

import { FaArrowLeft } from "react-icons/fa";

function MenuMovilDrawer({ isOpen, onOpenChange, navItems }) {
  return (
    <Drawer
      isOpen={isOpen}
      onOpenChange={() => onOpenChange(!isOpen)}
      placement="left"
      className={`max-xs:rounded-none w-full xs:max-w-[255px] ps-[3%]`}
      backdrop="transparent"
      classNames={{
        wrapper: "max-xs:ms-[3%]",
        closeButton: "test text-2xl top-5 end-3",
      }}
      motionProps={{
        variants: {
          enter: {
            opacity: 1,
            x: "-3%",
            duration: 0.3,
          },
          exit: {
            x: -100,
            opacity: 0,
            duration: 0.3,
          },
        },
      }}
    >
      <DrawerContent>
        {() => (
          <>
            <DrawerHeader>
              {/* <Link
                className="hover:scale-105 transition-all"
                href="#"
                onPress={() => {
                  navigate("/");
                  onOpenChange(!isOpen);
                }}
                aria-label="Ir al inicio de la pagina"
              > */}
              <Logo
                id="menu_movil_logo"
                classNames={{
                  svgA: "h-full w-auto max-h-[44px]",
                }}
              />
              {/* </Link> */}
            </DrawerHeader>

            <Divider className="w-4/5 self-center" />

            <DrawerBody className="h-fit px-2">
              <Listbox
                aria-label="Lista de secciones"
                variant="faded"
                onAction={(id) => {
                  onOpenChange(!isOpen);
                }}
                classNames={{}}
              >
                {navItems.map((item) => (
                  <ListboxItem
                    key={item.id}
                    textValue={item.label}
                    className="text-custom2 dark:text-custom1 capitalize py-2 transition-all hover:shadow-md"
                    classNames={{ title: "text-lg font-semibold" }}
                    href={`#${item.id}`}
                    startContent={
                      item?.icon ? <item.icon className="h-fit w-6" /> : null
                    }
                  >
                    {/* <motion.p
                        variants={{
                          hidden: {
                            opacity: 0,
                            scale: 1.5,
                          },
                          visible: {
                            opacity: 1,
                            scale: 1,
                          },
                        }}
                      >
                        {item.label}
                      </motion.p> */}
                    {item.label}
                  </ListboxItem>
                ))}

                <ListboxItem
                  key="Cerrar"
                  textValue="Cerrar"
                  className="dark:text-white py-2 transition-all hover:shadow-md"
                  classNames={{
                    title: "text-lg font-semibold flex gap-2 items-center",
                  }}
                >
                  <FaArrowLeft />
                  Cerrar
                </ListboxItem>
              </Listbox>

              <Divider className="w-4/5 self-center" />

              <Redes
                className="px-2"
                classNames={{
                  link: "p-3 text-3xl",
                }}
              />
            </DrawerBody>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}

export default MenuMovilDrawer;
