import { motion } from "framer-motion";

import ImageCustom from "../../layout/components/ImageCustom";

import { FaArrowUp } from "react-icons/fa";

function Fotos({ link }) {
  const contextImg = require.context("../../assets/imanes", true);
  const fotos = [
    {
      forma: "redondos",
      medida: "5x2",
    },
    {
      forma: "redondos",
      medida: "7x1.5",
    },
    {
      forma: "redondos",
      medida: "10x3",
    },
    {
      forma: "redondos",
      medida: "12x5",
    },
    {
      forma: "redondos",
      medida: "20x2",
    },
    {
      forma: "redondos",
      medida: "10x20",
    },
    {
      forma: "cuadrados",
      medida: "10x8x3",
    },
    {
      forma: "cuadrados",
      medida: "14.5x7x2",
    },
    {
      forma: "cuadrados",
      medida: "15x10x5",
    },
    {
      forma: "arandelas",
      medida: "12x3-6a3.5-f",
    },
    {
      forma: "arandelas",
      medida: "12x3-6a3.5-d",
    },
  ];

  return (
    <motion.div
      className="grid sm:grid-cols-2 sm:grid-rows-6 md:grid-cols-3 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-3 gap-6"
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
      {fotos.map((foto) => {
        return (
          <motion.div
            key={foto.medida}
            className="flex flex-col items-center gap-2 hover:text-custom1"
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <ImageCustom
              src={contextImg(`./fotos/${foto.medida}.webp`)}
              width={200}
              height={200}
              className="rounded-none object-cover"
              classNames={{
                wrapper:
                  "drop-shadow-md border-divider border-5 overflow-hidden h-full w-full max-h-[200px] max-w-[200px]",
              }}
              // style={{
              //   filter: "drop-shadow(2px 4px 4px rgba(0,0,0,1))",
              // }}
            />

            <b className="text-2xl capitalize transition-all">
              {foto?.medida.replace(/-/g, " ")}
            </b>
          </motion.div>
        );
      })}

      {link && (
        <motion.div
          className="flex flex-col items-center justify-center"
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-all"
            title="Ver fotos en Google Drive"
            aria-label="Ver fotos en Google Drive"
            style={{
              filter: "drop-shadow(2px 4px 4px rgba(0,0,0,.6))",
            }}
          >
            <ImageCustom
              src={contextImg(`./more-imgs.svg`)}
              width={120}
              height={120}
            />
          </a>

          <FaArrowUp />
          <p>Presione para ver mas fotos</p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Fotos;
