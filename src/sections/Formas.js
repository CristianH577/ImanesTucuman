import { motion } from "framer-motion";

import { Image } from "@nextui-org/react";

import SectionView from "../components/SectionView";

function Formas() {
  const contextImg = require.context("../assets/formas", true);

  const items = [
    { id: "boton", label: "Redondo Botón" },
    { id: "cilindro", label: "Redondo Cilindro" },
    { id: "plancha", label: "Cuadrado Plancha" },
    { id: "ladrillo", label: "Cuadrado Ladrillo" },
    { id: "arandela", label: "Arandela Fresada" },
    { id: "esfera", label: "Esfera" },
  ];

  return (
    <SectionView
      id="formas"
      title="Formas"
      className="py-16 px-4 sm:px-16"
      content={
        <>
          <motion.p
            className="text-lg text-center"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            Aquí tiene una muestra de las formas con las que trabajamos.
          </motion.p>

          <article className="w-full grid xs:grid-cols-2 lg:grid-cols-3 xs:grid-rows-2 gap-4 sm:gap-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-neutral-500/20 rounded-lg p-4 sm:p-8 max-w-[360px] max-h-[360px] min-h-[360px] xs:min-h-0 flex items-center justify-center relative select-none shadow-small group/item"
              >
                <motion.div
                  style={{
                    filter: "drop-shadow(-2px 4px 6px black)",
                  }}
                  variants={{
                    hidden: { scale: 0, opacity: 0 },
                    visible: {
                      scale: 1,
                      opacity: 1,
                    },
                  }}
                >
                  <Image
                    src={contextImg(`./${item.id}.webp`)}
                    removeWrapper
                    loading="lazy"
                    className="group-hover/item:blur-sm"
                    alt={`Iman ${item.label}`}
                  />
                </motion.div>

                <p
                  className="absolute text-3xl font-bold z-10 hidden text-center px-4 sm:px-8 text-white group-hover/item:block"
                  style={{
                    textShadow: "0px 0px 5px black",
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </article>
        </>
      }
    />
  );
}

export default Formas;
