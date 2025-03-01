import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Card, Divider, Image } from "@nextui-org/react";

import Logo from "../components/Logo";
import Redes from "../components/Redes";
import CustomLink from "../components/CustomLink";

import { FaMapMarkedAlt, FaRegCalendar, FaWhatsapp } from "react-icons/fa";
import { SiGoogleforms } from "react-icons/si";

import qr from "../assets/footer/wp.svg";

function Footer({ links }) {
  const items = [
    {
      icon: <FaMapMarkedAlt />,
      text: (
        <>
          9 de julio 4900, S.M. de Tucumán, Tucumán
          {/* <br />{" "}
          <span className="text-small text-neutral-400">
            No es local. Solo retiro.
          </span> */}
        </>
      ),
      subtext: (
        <span className="text-small text-neutral-400">
          No es local. Solo retiro.
        </span>
      ),
    },
    {
      icon: <FaRegCalendar />,
      text: (
        <>
          Lunes a Sábados(
          <CustomLink
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
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2, once: true });

  return (
    <footer
      id="contacto"
      ref={ref}
      className="bg-gradient-to-b from-custom2-4 to-custom2 text-white w-full flex flex-col items-center px-2 pt-20 pb-4 sm:pt-12 gap-4 shadow-inner relative"
      style={{
        minHeight: isInView ? 0 : "100vh",
      }}
    >
      {isInView && (
        <>
          <div className="text-xl max-w-[500px] text-center font-semibold bg-custom2-10/50 p-4 rounded-lg mb-2 shadow-md">
            Para mejorar, lo invitamos a realizar una breve encuesta sobre el
            sitio{" "}
            <CustomLink
              href={links?.["form_encuesta-20250109"]}
              title="Link a encuesta"
              icon={<SiGoogleforms />}
              text="visitando este enlace"
            />
            .
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full"
            style={{
              filter: "drop-shadow(2px 4px 6px black)",
            }}
          >
            <Logo
              id="logo_footer"
              className="w-fit max-h-64 place-self-center"
            />
          </motion.div>

          <Redes
            className={"my-4 gap-4 flex-wrap px-2"}
            classNames={{ link: "text-4xl p-4" }}
            // showImgs
          />

          <Divider className="self-center w-3/5 bg-neutral-500/80 navidad:bg-neutral-400" />

          <div className="flex flex-col items-center gap-4 md:flex-row-reverse">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <Card
                isPressable
                className="shadow-lg hover:scale-90"
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
                  className="h-[150px] sm:h-[125px] border-3 border-divider dark:border-background from-custom1 to-custom1-6 navidad:from-custom1--6 navidad:to-custom1"
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
              {items.map((item, i) => (
                <motion.span
                  key={i}
                  className="flex flex-col justify-self-center"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                >
                  <span className="inline-flex space-x-2 items-center">
                    {item.icon}
                    <p>{item.text}</p>
                  </span>
                  {item?.subtext && item?.subtext}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <Divider className="self-center w-2/3 bg-neutral-500/80 navidad:bg-neutral-400" />

          <div className="flex gap-1 text-neutral-500 navidad:text-neutral-400 self-center">
            <p>2024</p>

            <div>
              Diseñado por{" "}
              <CustomLink
                href="https://github.com/CristianH577"
                className="hover:boder-b border-neutral-400 text-inherit"
                title="Ir a perfil de Github"
                text={
                  <>
                    <span className="font-mono">©</span>
                    VerdeAve
                  </>
                }
              />
            </div>
          </div>
        </>
      )}
    </footer>
  );
}

export default Footer;
