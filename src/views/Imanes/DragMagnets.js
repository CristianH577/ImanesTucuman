import { motion } from "framer-motion";

import { TbHandClick } from "react-icons/tb";

import { SVGDragMagnet } from "../../consts/svgs";

import { dbImanesArrastre } from "../../consts/dbs";

function DragMagnets({ handleAdd, setComparative }) {
  const cols = ["B", "C", "peso", "fuerza"];
  const cols_measure = {
    B: "mm",
    C: "mm",
    peso: "g",
    fuerza: "kg",
  };

  return (
    <>
      <motion.div
        className="flex items-center justify-center h-[250px] font-bold"
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        whileInView="visible"
      >
        <SVGDragMagnet className="h-full w-full max-h-[250px]" />
      </motion.div>

      <article className="overflow-auto pb-8 px-2 sm:px-8 h-[800px] max-w-[900px] scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-custom1 scrollbar-track-custom2-10 scrollbar-w-3 scrollbar-h-3 hover:scrollbar-thumb-custom1-6">
        <table
          aria-label="Tabla de precios: imanes de arrastre"
          className="w-full text-[20px] xs:text-[24px] font-semibold min-w-[600px]"
        >
          <thead className="border-b-3 text-2xl">
            <tr>
              <td className="py-2">
                <div className="flex items-center justify-center gap-1">
                  <TbHandClick className="text-custom1-5 self-center" />A
                </div>
                (mm)
              </td>

              {cols.map((col) => (
                <td key={col} className="px-2">
                  <div className="flex flex-col gap-1">
                    <span className="capitalize">{col}</span>(
                    {cols_measure?.[col]})
                  </div>
                </td>
              ))}

              <td>
                <div className="flex flex-col gap-1">
                  Precio
                  <TbHandClick className="text-custom1-5 self-center" />
                </div>
              </td>
            </tr>
          </thead>

          <tbody>
            {Object.entries(dbImanesArrastre)?.map(([size, info]) => (
              <tr
                key={size}
                className="text-center even:text-custom1 navidad:even:text-custom1-2"
              >
                <td
                  className="hover:text-custom1-5 hover:scale-105 cursor-pointer transition-all"
                  onClick={() =>
                    setComparative({
                      form: "de_arrastre",
                      size: `${size}x${info?.B}`,
                    })
                  }
                >
                  {size}
                </td>

                {cols.map((col) => (
                  <td key={`${size}_${col}`} className="p-2">
                    {info?.[col]}
                  </td>
                ))}

                <td
                  className="py-2 hover:text-custom1-5 hover:scale-105 cursor-pointer transition-all"
                  onClick={() => handleAdd("de_arrastre", size)}
                >
                  {Intl.NumberFormat("es-AR", {
                    style: "currency",
                    currency: "ARS",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(info?.price)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </>
  );
}

export default DragMagnets;
