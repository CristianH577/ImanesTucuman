import { motion } from "framer-motion";

import { Image } from "@nextui-org/react";
import TitleCustom from "../components/TitleCustom";

function Formas() {
  const contextImg = require.context("../assets/formas", true);

  const items = [
    { id: "boton", label: "Botón" },
    { id: "cilindro", label: "Cilindro" },
    { id: "plancha", label: "Plancha" },
    { id: "ladrillo", label: "Ladrillo" },
    { id: "arandela", label: "Arandela Fresada" },
    { id: "esfera", label: "Esfera" },
  ];

  return (
    <motion.section
      id="formas"
      className="w-full max-w-[1200px] p-4 sm:p-16 flex flex-col items-center gap-6"
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
      transition={{ duration: 1 }}
    >
      <TitleCustom
        title={"Formas"}
        animation={{
          variants: {
            hidden: { scale: 0, opacity: 0 },
            visible: { scale: 1, opacity: 1 },
          },
          initial: "hidden",
          whileInView: "visible",
        }}
      />

      <motion.p
        className="text-lg max-w-[80%] text-center"
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        whileInView="visible"
      >
        Aquí tiene una muestra de las formas con las que trabajamos.
      </motion.p>

      <article className="grid xs:grid-cols-2 lg:grid-cols-3 xs:grid-rows-2 gap-4 sm:gap-8">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="bg-neutral-500/20 rounded-lg p-4 sm:p-8 max-w-[360px] max-h-[360px] min-h-[360px] xs:min-h-0 flex items-center justify-center group relative select-none shadow-small"
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 1,
              },
            }}
            initial="hidden"
            whileInView="visible"
          >
            <div
              style={{
                filter: "drop-shadow(-2px 4px 6px black)",
              }}
            >
              <Image
                src={contextImg(`./${item.id}.webp`)}
                className="group-hover:blur-sm"
              />
            </div>
            <p
              className="absolute text-3xl font-bold z-10 hidden group-hover:block text-center px-4 sm:px-8 text-white"
              style={{
                textShadow: "0px 0px 5px black",
              }}
            >
              {item.label}
            </p>
          </motion.div>
        ))}
      </article>
    </motion.section>
  );
}

export default Formas;
