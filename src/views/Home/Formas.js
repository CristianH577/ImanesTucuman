import { motion } from "framer-motion";

import ImageCustom from "../../layout/components/ImageCustom";

function Formas() {
  const contextImg = require.context("../../assets/formas", true);

  const items = [
    { id: "plano", label: "Redondo Plano", width: 280, height: 244 },
    { id: "boton", label: "Redondo Botón", width: 233, height: 280 },
    { id: "cilindro", label: "Redondo Cilindro", width: 280, height: 213 },
    { id: "arandela", label: "Redondo Fresado", width: 282, height: 280 },
    { id: "cuadrado", label: "Cuadrado", width: 300, height: 180 },
    { id: "plancha", label: "Cuadrado Plancha", width: 280, height: 134 },
    { id: "ladrillo", label: "Cuadrado Bloque", width: 280, height: 192 },
    {
      id: "cuadrado-fresado",
      label: "Cuadrado Fresado",
      width: 300,
      height: 221,
    },
    { id: "esfera", label: "Esfera", width: 280, height: 192 },
    { id: "de_arrastre", label: "De Arrastre /Pesca", width: 367, height: 320 },
  ];

  return (
    <section className="space-y-4">
      <motion.div
        className="text-center"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <p>Aquí tiene una muestra de las formas con las que trabajamos.</p>

        <p className="font-size-secondary text-neutral-400">
          Imágenes a modo ilustrativo.
        </p>
      </motion.div>

      <article className="w-full grid xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-neutral-500/20 rounded-lg p-4 sm:p-8 max-w-[400px] xs:min-h-[150px] max-h-[400px] flex items-center justify-center relative select-none shadow-small group/item"
          >
            <motion.div
              variants={{
                hidden: { scale: 0, opacity: 0 },
                visible: {
                  scale: 1,
                  opacity: 1,
                },
              }}
              style={{
                filter: "drop-shadow(-2px 4px 6px black)",
              }}
            >
              <ImageCustom
                src={contextImg(`./${item.id}.webp`)}
                removeWrapper
                loading="lazy"
                width="100%"
                height="fit-content"
                className="object-contain group-hover/item:blur-sm"
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
    </section>
  );
}

export default Formas;
