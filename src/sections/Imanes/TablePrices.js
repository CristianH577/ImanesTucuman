import { Button } from "@nextui-org/react";

import { TbHandClick } from "react-icons/tb";

import db_prices from "../../assets/imanes/db-imanes-prices.json";

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
    "hover:text-custom1-5 hover:scale-105 cursor-pointer transition-all";

  return (
    <article className="overflow-auto pb-8 px-2 sm:px-8 h-[800px] w-full max-w-[900px] scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-custom1 scrollbar-track-custom2-10 scrollbar-w-3 scrollbar-h-3 hover:scrollbar-thumb-custom1-6">
      <table
        aria-label={`Tabla de precios: ${formas_data?.[cat]?.label}`}
        className="w-full text-[20px] xs:text-[24px] font-semibold min-w-[750px]"
      >
        <thead className="border-b-3">
          <tr>
            <td className="py-2 px-4">
              <div className="flex items-center justify-center gap-1">
                <TbHandClick className="text-custom1-5" />
                Medida
              </div>
              {formas_data?.[cat]?.medidas}(mm)
            </td>

            <td colSpan={4} className="border-s-3">
              <div className="flex items-end justify-center gap-1 text-3xl">
                <TbHandClick className="text-custom1-5 self-center" />
                Precio(xU)
                <span className="text-sm">Unidades minimas</span>
              </div>
            </td>
          </tr>
        </thead>

        <tbody>
          {data?.rows?.map(
            ([size, info]) =>
              !(info?.stock && info.stock) && (
                <tr
                  key={size}
                  className="text-center even:text-custom1 navidad:even:text-custom1-2"
                >
                  <td
                    className={`${hover_class}`}
                    onClick={() => setComparative({ form: cat, size: size })}
                  >
                    {size.replace("_", " ")}
                  </td>

                  {[1, 2, 3, 4].map((key, i) => {
                    const price = db_prices?.[cat]?.[size]?.prices?.[i];
                    const umin = priceTableCategories?.[info?.qtts_cat]?.[i];
                    const discount = discounts?.[info?.prices_cat];

                    return (
                      <td
                        key={`precio_${key}`}
                        className={`p-2 ${hover_class} ${
                          i === 0 && "border-s-3 ps-4"
                        }`}
                        onClick={() => handleAdd(cat, size, umin, discount)}
                      >
                        {i === 0 && discount ? (
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
                              }).format(price * (1 - discount))}
                            </div>

                            <div className="text-xs">
                              <span className="text-yellow-400 font-semibold">
                                -
                                {Intl.NumberFormat("es-AR", {
                                  style: "percent",

                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 0,
                                }).format(discount)}
                              </span>

                              <span className="text-sm">x{umin}u</span>
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
                            <span className="text-sm">x{umin}u</span>
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              )
          )}

          <tr>
            <td className="text-center">
              {data?.rows?.length < data?.total && (
                <Button
                  size="lg"
                  className="m-2 bg-custom1-2 text-custom2--2 font-bold text-lg"
                  onPress={() => showMore(cat)}
                >
                  Mas
                </Button>
              )}
            </td>
            <td colSpan={4}></td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}

export default TablePrices;
