import { motion } from "framer-motion";

import { TbHandClick } from "react-icons/tb";

import { SVGDragMagnet } from "../../assets/imanes/svgs";

import { DB_IMANES_ARRASTRE } from "../../consts/dbs";

function DragMagnets({ handleAdd, setComparative }) {
  const cols = ["B", "C", "peso", "fuerza"];
  const cols_measure = {
    B: "mm",
    C: "mm",
    peso: "g",
    fuerza: "kg",
  };

  const hover_class =
    "hover:text-secondary-700 hover:scale-105 cursor-pointer transition-all";

  return (
    <>
      <motion.div
        className="flex items-center justify-center h-[250px] font-bold"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        whileInView="visible"
      >
        <SVGDragMagnet className="h-full w-full max-h-[250px]" />
      </motion.div>

      <div
        data-slot="table-container"
        className="pb-4 w-full overflow-x-auto scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-custom1 scrollbar-track-custom2-10 scrollbar-w-3 scrollbar-h-3 hover:scrollbar-thumb-custom1-6"
      >
        <table
          aria-label="Tabla de precios: imanes de arrastre"
          className="w-full max-w-[800px] text-xl xs:text-2xl font-semibold min-w-[600px] md:place-self-center"
        >
          <thead className="border-b-3 text-2xl">
            <tr>
              <td className="py-2">
                <p>
                  <span className="inline-block align-middle">
                    <TbHandClick className="text-secondary-700" />
                  </span>
                  A
                </p>
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
                <p>
                  <span className="inline-block align-middle">
                    <TbHandClick className="text-secondary-700" />
                  </span>
                  Precio
                </p>
              </td>
            </tr>
          </thead>

          <tbody>
            {Object.entries(DB_IMANES_ARRASTRE)?.map(([size, info]) => {
              const noStock = info?.noStock || false;

              return (
                <tr
                  key={size}
                  className={`text-center${
                    noStock
                      ? " line-through text-neutral-500"
                      : " even:text-custom1"
                  }`}
                >
                  <td
                    className={`${hover_class}`}
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
                    className={`py-2 ${hover_class}`}
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
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DragMagnets;
