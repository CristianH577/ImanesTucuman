import { motion } from "framer-motion";
import { handleLink } from "../../libs/functions";

import {
  Link,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  Listbox,
  ListboxItem,
  Divider,
} from "@nextui-org/react";

import Redes from "../../components/Redes";
import Logo from "../../components/Logo";

import { FaArrowLeft } from "react-icons/fa";

function MenuMovilDrawer({ menuItems, isOpen, onOpenChange }) {
  const text_class = "text-custom2 dark:text-custom1 navidad:text-custom1-5";

  return (
    <Drawer
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="left"
      size="xs"
      className=""
      // bg-gradient-to-t from-custom2 to-custom2-5
      classNames={{
        closeButton: "test text-2xl top-5 end-3",
      }}
      motionProps={{
        variants: {
          enter: {
            opacity: 1,
            x: 0,
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
        {(onClose) => (
          <>
            <DrawerHeader>
              <Link
                className="hover:scale-110 transition-all flex items-center"
                href="#inicio"
                onPress={onOpenChange}
                style={{
                  filter: "drop-shadow(-4px 0px 6px black)",
                }}
                aria-label="Ir al inicio de la pagina"
              >
                <Logo
                  id="menu_movil_logo"
                  classNames={{
                    svgA: "h-full w-auto max-h-[44px]",
                  }}
                />
              </Link>
            </DrawerHeader>

            <Divider className="w-2/3 self-center" />

            <DrawerBody className="h-fit">
              <motion.div
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      delayChildren: 0.1,
                      staggerChildren: 0.1,
                    },
                  },
                }}
                initial="hidden"
                whileInView="visible"
              >
                <Listbox
                  aria-label="Lista de secciones"
                  variant="faded"
                  onAction={(id) => {
                    handleLink(id);
                    onOpenChange();
                  }}
                  // onAction={onOpenChange}
                >
                  {menuItems.map((item) => (
                    <ListboxItem
                      key={item}
                      textValue={item}
                      className={`${text_class} capitalize py-2`}
                      classNames={{ title: "text-lg font-semibold" }}
                      href={`#${item}`}
                      // isDisabled={!sectionsLoaded.includes(item)}
                    >
                      <motion.p
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
                        {item}
                      </motion.p>
                    </ListboxItem>
                  ))}
                </Listbox>
              </motion.div>

              <Divider />

              <Button
                variant="ghost"
                size="lg"
                className="min-h-12"
                onPress={onClose}
              >
                <FaArrowLeft />
                Salir
              </Button>

              <Divider />

              <Redes
                className="flex-wrap px-2"
                classNames={{
                  link: "p-3 shadow-none text-3xl text-foreground",
                }}
                variants={{
                  hidden: {
                    opacity: 0,
                  },
                  visible: {
                    opacity: 1,
                  },
                }}
              />
            </DrawerBody>

            {/* <Divider className="w-2/3 self-center" />

            <DrawerFooter>
              <Redes
                className="flex-wrap px-2"
                classNames={{
                  link: "p-3 shadow-none text-3xl text-foreground",
                }}
                variants={{
                  hidden: {
                    opacity: 0,
                  },
                  visible: {
                    opacity: 1,
                  },
                }}
              />
            </DrawerFooter> */}
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}

export default MenuMovilDrawer;
