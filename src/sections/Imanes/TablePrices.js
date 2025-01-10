import { Button } from "@nextui-org/react";

import { TbHandClick } from "react-icons/tb";

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
        className="w-full text-[20px] xs:text-[24px] font-semibold"
      >
        <thead className="border-b-3">
          <tr>
            <td className="py-2 px-4">
              <div className="flex items-center justify-center gap-1">
                <TbHandClick className="text-custom1-5" />

                <p>Medida</p>
              </div>
              <p>{formas_data?.[cat]?.medidas}(mm)</p>
            </td>

            <td colSpan={4} className="border-s-3 ">
              <div className="flex items-end justify-center gap-1 text-3xl">
                <TbHandClick className="text-custom1-5 self-center" />
                <p>Precio(xU)</p>
                <p className="text-sm">Unidades minimas</p>
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
                    <p>{size.replace("_", " ")}</p>
                  </td>

                  {[1, 2, 3, 4].map((key, i) => {
                    const price = info?.prices?.[i];
                    const umin = priceTableCategories?.[info?.table_qtts]?.[i];
                    const discount = discounts?.[info?.table_prices_cat];

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
                              <p className="line-through text-neutral-300">
                                {Intl.NumberFormat("es-AR", {
                                  style: "currency",
                                  currency: "ARS",
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 0,
                                }).format(price)}
                              </p>

                              <p>
                                {Intl.NumberFormat("es-AR", {
                                  style: "currency",
                                  currency: "ARS",
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 0,
                                }).format(price * (1 - discount))}
                              </p>
                            </div>

                            <div className="text-xs">
                              <p className="text-yellow-400 font-semibold">
                                -
                                {Intl.NumberFormat("es-AR", {
                                  style: "percent",

                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 0,
                                }).format(discount)}
                              </p>

                              <p className="text-sm">x{umin}u</p>
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
                            <p className="text-sm">x{umin}u</p>
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              )
          )}

          <tr>
            <td colSpan={1} className="text-center">
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

          {/* {Object.entries(db?.[cat]).map(
            ([size, info], i) =>
              !(info?.stock && info.stock) && (
                <tr
                  key={size}
                  className="text-center even:text-custom1 navidad:even:text-custom1-2"
                >
                  <td
                    className={`${hover_class}`}
                    onClick={() => setComparative({ form: cat, size: size })}
                  >
                    <p>{size.replace("_", " ")}</p>
                  </td>

                  {[1, 2, 3, 4].map((key, i) => {
                    const price = info?.prices?.[i];
                    const umin = priceTableCategories?.[info?.table_qtts]?.[i];
                    const discount = discounts?.[info?.table_prices_cat];

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
                              <p className="line-through text-neutral-300">
                                {Intl.NumberFormat("es-AR", {
                                  style: "currency",
                                  currency: "ARS",
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 0,
                                }).format(price)}
                              </p>

                              <p>
                                {Intl.NumberFormat("es-AR", {
                                  style: "currency",
                                  currency: "ARS",
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 0,
                                }).format(price * (1 - discount))}
                              </p>
                            </div>

                            <div className="text-xs">
                              <p className="text-yellow-400 font-semibold">
                                -
                                {Intl.NumberFormat("es-AR", {
                                  style: "percent",

                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 0,
                                }).format(discount)}
                              </p>

                              <p className="text-sm">x{umin}u</p>
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
                            <p className="text-sm">x{umin}u</p>
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              )
          )} */}
        </tbody>
      </table>
    </article>
  );
}

export default TablePrices;
