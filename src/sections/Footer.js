import { motion } from "framer-motion";

import { Card, Divider, Image } from "@nextui-org/react";

import Logo from "../components/Logo";
import Redes from "../components/Redes";

import { FaMapMarkedAlt, FaRegCalendar } from "react-icons/fa";

import qr from "../assets/footer/wp.svg";

function Footer({ links }) {
  const items = [
    {
      icon: <FaMapMarkedAlt size={24} />,
      text: "9 de julio 4900, S.M. de Tucumán, Tucumán",
    },
    {
      icon: <FaRegCalendar size={22} />,
      text: (
        <>
          Lun.-Sab. 13-21hs(Irregular.{" "}
          <a href={links?.whatsapp} target="_blank" rel="noopener noreferrer">
            Consultar
          </a>
          )
        </>
      ),
    },
  ];

  return (
    <footer
      id="contacto"
      className="bg-gradient-to-b from-custom2-4 to-custom2 text-white w-full flex flex-col items-center p-2 gap-4 shadow-inner"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className=""
        style={{
          filter: "drop-shadow(2px 4px 6px black)",
        }}
      >
        <Logo className={"mt-4"} />
      </motion.div>

      <Redes
        className={"my-4 gap-4 flex-wrap px-2"}
        classNames={{ link: "text-4xl p-4" }}
      />

      <Divider className="self-center w-3/5 bg-neutral-500/80" />

      <div className="flex flex-col items-center gap-4 sm:flex-row-reverse">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <Card
            isPressable
            className="shadow-lg hover:scale-90"
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
              shadow="md"
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
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col justify-center items-center gap-2 xs:flex-row"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
            >
              {item.icon}
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Divider className="self-center w-2/3 bg-neutral-500/80" />

      <div className="flex gap-1 text-neutral-500 self-center ">
        <p>2024</p>

        <a
          href="https://github.com/CristianH577"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <span className="font-mono">©</span>
          VerdeAve
        </a>
      </div>
    </footer>
  );
}

export default Footer;
