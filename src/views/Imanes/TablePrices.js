import { motion } from "framer-motion";

import { Button } from "@nextui-org/react";

import { TbHandClick } from "react-icons/tb";

import { dbImanesPrices } from "../../consts/dbs";

function TablePrices({
  cat,
  setComparative,
  handleAdd,
  formas_data,
  data,
  showMore,
}) {
  const discounts = false;
  // {
  //   8: 0.2,
  //   7: 0.2,
  //   6: 0.15,
  //   5: 0.1,
  //   4: 0.05,
  // };
  const priceTableCategories = {
    1: [1, 20, 50, 100],
    2: [1, 10, 25, 50],
    3: [1, 5, 15, 30],
  };

  const hover_class =
    "hover:text-secondary-700 hover:scale-105 cursor-pointer transition-all";

  return (
    <div
      data-slot="table-container"
      className="pb-4 w-full overflow-x-auto scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-custom1 scrollbar-track-custom2-10 scrollbar-w-3 scrollbar-h-3 hover:scrollbar-thumb-custom1-6"
    >
      <table
        aria-label={`Tabla de precios: ${formas_data?.[cat]?.label}`}
        className="w-full min-w-[750px] max-w-[900px] text-xl xs:text-2xl font-semibold lg:place-self-center"
      >
        <thead className="border-b-3">
          <tr>
            <td className="py-2 px-4">
              <div className="flex items-center justify-center gap-1">
                <TbHandClick className="text-secondary-700" />
                Medida
              </div>
              {formas_data?.[cat]?.medidas}(mm)
            </td>

            <td colSpan={4} className="border-s-3">
              <div className="flex items-end justify-center gap-1 text-3xl">
                <TbHandClick className="text-secondary-700 self-center" />
                Precio(xU)
                <span className="text-sm">Unidades minimas</span>
              </div>
            </td>
          </tr>
        </thead>

        <tbody>
          {data?.rows?.map(([size, info]) => {
            const noStock = info?.noStock || false;
            return (
              <motion.tr
                key={size}
                className={`text-center${
                  noStock
                    ? " line-through text-neutral-500"
                    : " even:text-custom1"
                }`}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                <td
                  className={`${hover_class}`}
                  onClick={() => setComparative({ form: cat, size: size })}
                >
                  {size.replace("_", " ")}
                </td>

                {[1, 2, 3, 4].map((key, i) => {
                  const price = dbImanesPrices?.[cat]?.[size]?.prices?.[i];
                  const umin = priceTableCategories?.[info?.qtts_cat]?.[i];
                  const discount_ = discounts
                    ? discounts?.[info?.catPrices] || 0
                    : 0;

                  return (
                    <td
                      key={`precio_${key}`}
                      className={`p-2 ${hover_class} ${
                        i === 0 && "border-s-3 ps-4"
                      }`}
                      onClick={() =>
                        handleAdd(cat, size, {
                          qtt: umin,
                          discounts: {
                            follow: discount_,
                          },
                        })
                      }
                    >
                      {i === 0 && discount_ ? (
                        <div className="flex items-center justify-center gap-1">
                          <div className="flex gap-1">
                            <span className="line-through text-neutral-300">
                              {Intl.NumberFormat("es-AR", {
                                style: "currency",
                                currency: "ARS",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                              }).format(price)}
                            </span>

                            {Intl.NumberFormat("es-AR", {
                              style: "currency",
                              currency: "ARS",
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            }).format(price * (1 - discount_))}
                          </div>

                          <div className="text-xs">
                            <span className="text-yellow-400 font-semibold">
                              -
                              {Intl.NumberFormat("es-AR", {
                                style: "percent",

                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                              }).format(discount_)}
                            </span>

                            <span className="text-sm">{umin}u</span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-end justify-center">
                          {Intl.NumberFormat("es-AR", {
                            style: "currency",
                            currency: "ARS",
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          }).format(price)}
                          <span className="text-sm">{umin}u</span>
                        </div>
                      )}
                    </td>
                  );
                })}
              </motion.tr>
            );
          })}

          <tr>
            <td className="text-center">
              {data?.rows?.length < data?.total && (
                <Button
                  size="lg"
                  className="m-2 bg-custom1-2 text-custom2--2 font-bold text-xl hover:scale-110"
                  onPress={() => showMore(cat)}
                  style={{
                    filter: "drop-shadow(0px 0px 8px black )",
                  }}
                >
                  +Mas
                </Button>
              )}
            </td>
            <td colSpan={4}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TablePrices;
