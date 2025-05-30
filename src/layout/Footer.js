import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { scrollToBottom, scrollToTop } from "../libs/functions";

import {
  Button,
  ButtonGroup,
  Card,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";

import Logo from "../components/Logo";
import Redes from "../components/Redes";
import LinkCustom from "../components/LinkCustom";

import { FaMapMarkedAlt, FaRegCalendar, FaWhatsapp } from "react-icons/fa";
import { SiGoogleforms, SiGooglemaps } from "react-icons/si";
import { LuArrowBigDownDash, LuArrowBigUpDash } from "react-icons/lu";

import qr from "../assets/footer/wp.webp";

function Footer({ links = {} }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2, once: true });

  const info_items = [
    {
      icon: FaMapMarkedAlt,
      text: <>9 de julio 4900, S.M. de Tucumán, Tucumán</>,
      subtext: (
        <span className="font-size-secondary text-neutral-400">
          No es local. Solo retiro.
        </span>
      ),
    },
    {
      icon: FaRegCalendar,
      text: (
        <>
          Lunes a Sábados(
          <LinkCustom
            href={
              links?.whatsapp +
              "&text=Hola. Quiero consultar por los horarios de atención."
            }
            title="Consultar horarios por Wharsapp"
            text="Consultar"
            icon={<FaWhatsapp />}
          />
          )
        </>
      ),
    },
    { text: "Esta empresa sigue el principio de imputación de Menger." },
  ];

  const sections = [
    { label: "Fotos", href: links?.fotos, isExternal: true },
    { label: "Ubicacion", href: "#faqs?view=ubicacion" },
    { label: "Opiniones", href: "#?view=opiniones" },
    { label: "Consideraciones", href: "#faqs" },
  ];

  return (
    <footer
      id="footer"
      ref={ref}
      className="bg-gradient-to-b from-custom2-4 to-custom2 text-white w-full flex flex-col items-center px-2 py-4 gap-4 shadow-inner min-h-fit mt-auto"
    >
      <ButtonGroup className="absolute bottom-2 right-6 z-20">
        <Button
          isIconOnly
          title="Ir arriba"
          color="warning"
          variant="ghost"
          onPress={scrollToBottom}
        >
          <LuArrowBigDownDash className="h-4/5 w-full" />
        </Button>
        <Button
          isIconOnly
          title="Ir arriba"
          color="warning"
          variant="ghost"
          onPress={scrollToTop}
        >
          <LuArrowBigUpDash className="h-4/5 w-full" />
        </Button>
      </ButtonGroup>

      <Redes
        className={"my-4 px-2 gap-6"}
        classNames={{
          link: "text-4xl text-neutral-300 hover:text-custom1",
        }}
      />

      {isInView && (
        <>
          <Divider className="self-center w-4/6 bg-neutral-500/80" />

          <Logo id="footer_logo" className="w-fit max-h-64 place-self-center" />

          <div className="text-xl max-w-[500px] text-center font-semibold bg-custom2-10/50 p-4 rounded-lg mb-2 shadow-md">
            Para mejorar, lo invitamos a realizar una breve{" "}
            <LinkCustom
              href={links?.["form_encuesta-20250109"]}
              title="Link a encuesta"
              icon={<SiGoogleforms />}
              text="Encuesta"
            />{" "}
            sobre el sitio o a dejar una reseña publica en{" "}
            <LinkCustom
              href={links?.googlemaps}
              title="Link a Google Maps"
              icon={<SiGooglemaps />}
              text="Google Maps"
            />
            .
          </div>

          <Divider className="self-center w-3/5 bg-neutral-500/80" />

          <div className="flex flex-col items-center gap-4 md:flex-row-reverse">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <Card
                isPressable
                className="shadow-lg hover:scale-105"
                title="Ir al chat de Whatsapp"
                onPress={() => {
                  const newWindow = window.open(
                    links?.whatsapp,
                    "_blank",
                    "noopener,noreferrer"
                  );
                  if (newWindow) newWindow.focus();
                }}
              >
                <Image
                  src={qr}
                  alt="QR del link al chat de Whatsapp"
                  shadow="md"
                  height={150}
                  className="h-[150px] sm:h-[125px] border-3 border-divider dark:border-background from-custom1 to-custom1-6"
                  removeWrapper
                  style={{
                    background:
                      "linear-gradient(to top, var(--tw-gradient-from),var(--tw-gradient-to),var(--tw-gradient-from))",
                  }}
                />
              </Card>
            </motion.div>

            <motion.div
              className="space-y-4 text-center"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    delayChildren: 0.1,
                    staggerChildren: 0.2,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
            >
              {info_items.map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                >
                  <p>
                    {item?.icon && (
                      <>
                        <span className="inline-block align-middle">
                          <item.icon size={20} />
                        </span>{" "}
                      </>
                    )}
                    {item.text}
                  </p>
                  {item?.subtext && item?.subtext}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <Divider className="self-center w-3/5 bg-neutral-500/80" />

          <div className="flex flex-wrap justify-evenly gap-4 font-size-secondary">
            {sections.map((section) => (
              <Link
                key={section?.label}
                href={section?.href}
                isExternal={section?.isExternal}
                target={section?.isExternal ? "_blank" : "_self"}
                className="text-neutral-400"
                underline="hover"
                showAnchorIcon={section?.isExternal}
              >
                {section.label}
              </Link>
            ))}
          </div>

          <Divider className="self-center w-5/6 bg-neutral-500/80" />

          <div className="flex gap-1 text-neutral-500 ">
            <p>2024</p>

            <div>
              Diseñado por{" "}
              <Link
                isExternal
                href="https://github.com/CristianH577"
                className="text-neutral-400"
                underline="hover"
                showAnchorIcon
                title="Ir al perfil de Github"
              >
                <span className="font-mono">©</span>
                VerdeAve
              </Link>
            </div>
          </div>
        </>
      )}
    </footer>
  );
}

export default Footer;
