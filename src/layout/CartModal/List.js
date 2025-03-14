import { Fragment, useEffect, useState } from "react";

import { defineDiscountToUse, definePriceToUse } from "../../libs/functions";

import { Button, Input } from "@nextui-org/react";

import { MdDelete } from "react-icons/md";

import {
  dbImanes,
  dbImanesPrices,
  dbOtros,
  dbImanesArrastre,
} from "../../consts/dbs";

function List({ cart = {}, makeDiscountFollow = false, downloading }) {
  const priceTableCategories = {
    1: [1, 20, 50, 100],
    2: [1, 10, 25, 50],
    3: [1, 5, 15, 30],
  };
  const subTotalDefault = {
    base: 0,
    qtt: 0,
    discount: 0,
    follow: 0,
  };

  const totalDefault = {
    total: 0,
    base: 0,
    qtt: 0,
    discount: 0,
    follow: 0,
    porcentage: 0,
  };
  const [total, setTotal] = useState({ ...totalDefault });

  const handleQtt = (e, drt) => {
    let value = e.target.value;

    if (drt) {
      const cart_ = structuredClone(cart.value);

      cart_[drt[0]][drt[1]].qtt = value;

      cart.set(cart_);
    }
  };
  const handleQttBlur = (e, drt) => {
    let qtt = e.target?.value;
    qtt = parseInt(qtt) || 0;

    if (drt) {
      const cart_ = structuredClone(cart?.value);
      const item = cart_[drt[0]][drt[1]];

      if (!qtt || qtt < 1) {
        item.qtt = 0;
        item.subtotals = { ...subTotalDefault };
      } else {
        let price_qtt = 0;

        if (drt[0] in dbImanes) {
          const db_data = dbImanes?.[drt[0]][drt[1]];
          const qtts = priceTableCategories?.[db_data?.qtts_cat || 1];
          const prices = dbImanesPrices?.[drt[0]][drt[1]]?.prices;

          for (let i = qtts.length - 1; i >= 0; i--) {
            if (qtt >= qtts[i]) {
              price_qtt = prices[i];
              break;
            }
          }
        } else if (drt[0] in dbOtros) {
          const db_data = dbOtros?.[drt[0]][drt[1]];

          if (db_data?.prices) {
            const qtts = db_data?.qtts_cat || [0];
            for (let i = qtts.length - 1; i >= 0; i--) {
              if (qtt >= qtts[i]) {
                price_qtt = db_data?.prices[i];
                break;
              }
            }
          }
        }

        item.qtt = qtt;

        if (price_qtt) item.prices.qtt = price_qtt;

        item.priceToUse = definePriceToUse(item.prices, makeDiscountFollow);
        Object.entries(item.prices).forEach(([key, val]) => {
          item.subtotals[key] = qtt * val;
        });
      }

      cart_[drt[0]][drt[1]] = item;

      cart?.set(cart_);
    }
  };
  const handleDelete = (drt) => {
    if (drt) {
      const new_cart = structuredClone(cart.value);

      delete new_cart[drt[0]][drt[1]];

      if (Object.keys(new_cart[drt[0]]).length < 1) delete new_cart[drt[0]];

      cart.set(new_cart);
    }
  };
  const getTotal = () => {
    let total_ = structuredClone(totalDefault);

    Object.values(cart.value).forEach((cat) => {
      Object.values(cat).forEach((item) => {
        Object.keys(item.prices).forEach((key) => {
          total_[key] += item?.subtotals?.[key] || item?.subtotals?.base || 0;
        });

        total_.total += item?.subtotals?.[item?.priceToUse] || 0;
      });
    });

    total_.porcentage = 1 - total_.total / total_.base;

    setTotal(total_);
  };

  useEffect(() => {
    const sorts = {
      imanes: (a, b, cat) =>
        dbImanes[cat][a]?.A - dbImanes[cat][b]?.A ||
        dbImanes[cat][a]?.B - dbImanes[cat][b]?.B,
      otros: (a, b) => a?.name?.localeCompare(b?.name),
      de_arrastre: (a, b) => a - b,
    };

    // ordeno los items
    const cart_ = Object.keys(cart.value)
      .sort()
      .reduce((acc, cat) => {
        const items_ = Object.keys(cart.value[cat])
          .sort((a, b) =>
            cat in dbImanes
              ? sorts.imanes(a, b, cat)
              : cat in dbOtros
              ? sorts.otros(a, b)
              : cat === "de_arrastre"
              ? sorts.de_arrastre(a, b)
              : null
          )
          .reduce((acc, key) => {
            acc[key] = cart.value[cat][key];
            return acc;
          }, {});
        acc[cat] = items_;
        // acc[key] = cart.value[key];
        return acc;
      }, {});

    Object.entries(cart.value).forEach(([cat, items]) => {
      Object.entries(items).forEach(([itemKey, itemObj]) => {
        let prices_obj = {
          base: 0,
          qtt: 0,
          discount: 0,
          follow: 0,
        };
        let subtotal_obj = { ...subTotalDefault };

        if (cat in dbImanes) {
          const db_data = dbImanes?.[cat]?.[itemKey];
          const qtts = priceTableCategories?.[db_data?.qtts_cat || 1];
          const prices = dbImanesPrices?.[cat]?.[itemKey]?.prices;

          prices_obj.base = prices[0];

          for (let i = qtts.length - 1; i >= 0; i--) {
            if (itemObj.qtt >= qtts[i]) {
              prices_obj.qtt = prices[i];
              break;
            }
          }
        } else if (cat in dbOtros) {
          const db_data = dbOtros?.[cat]?.[itemKey];
          prices_obj.base = db_data?.price || db_data?.prices[0] || 0;

          if (db_data?.prices) {
            const qtts = db_data?.qtts_cat || [0];
            for (let i = qtts.length - 1; i >= 0; i--) {
              if (itemObj.qtt >= qtts[i]) {
                prices_obj.qtt = db_data?.prices[i];
                break;
              }
            }
          }

          cart_[cat][itemKey].name = db_data?.name;

          if (db_data?.price_measure) {
            cart_[cat][itemKey].price_measure = db_data?.price_measure;
          }
        } else if (cat === "de_arrastre") {
          const db_data = dbImanesArrastre?.[itemKey];
          prices_obj.base = db_data?.price || 0;

          cart_[cat][itemKey].name = itemKey + "mm";
        }

        // precios por descuentos
        itemObj.discountToUse = defineDiscountToUse(
          itemObj?.discounts,
          makeDiscountFollow
        );
        if (itemObj?.discounts) {
          Object.entries(itemObj.discounts).forEach(([key, val]) => {
            if (val) {
              prices_obj[key] = prices_obj.base * (1 - val);
            }
          });
        }

        // subtotales
        Object.entries(prices_obj).forEach(([key, val]) => {
          subtotal_obj[key] = itemObj.qtt * val;
        });

        cart_[cat][itemKey].prices = prices_obj;
        cart_[cat][itemKey].subtotals = subtotal_obj;
        cart_[cat][itemKey].priceToUse = definePriceToUse(
          prices_obj,
          makeDiscountFollow
        );
      });
    });

    cart?.set(cart_);
    // eslint-disable-next-line
  }, []);

  // eslint-disable-next-line
  useEffect(getTotal, [cart.value, makeDiscountFollow]);

  return (
    <section
      className="w-full max-sm:pb-4 sm:flex justify-center scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-custom1 scrollbar-track-custom2-10 scrollbar-w-3 scrollbar-h-3 hover:scrollbar-thumb-custom1-6"
      style={{
        overflow: downloading ? "visible" : "auto",
      }}
    >
      <table className="table-auto border-separate border-spacing-x-4 w-fit">
        <thead>
          <tr className="space-x-2">
            <th className="text-start">Medida/Nombre</th>
            <th className="text-start">Cantidad</th>
            <th className="text-start">Precio</th>
            <th className="text-start">Subtotal</th>
          </tr>
        </thead>

        <tbody>
          {cart?.value && Object.keys(cart.value).length < 1 ? (
            <tr>
              <td
                colSpan={4}
                className="text-center text-xl mt-2 px-[10%] py-4"
              >
                Sin artículos para mostrar.
              </td>
            </tr>
          ) : (
            Object.keys(cart.value).map((cat) => (
              <Fragment key={cat}>
                <tr>
                  <td
                    colSpan={4}
                    className={`capitalize italic border-b-3 ${
                      downloading ? "border-black" : ""
                    }`}
                  >
                    {cat.replace("_", " ")}
                  </td>
                </tr>

                {/* items de la categoria */}
                {cart.value &&
                  Object.entries(cart.value[cat]).map(([itemKey, itemData]) => (
                    <tr key={itemKey}>
                      <td>
                        {itemData?.name || itemKey?.replace("_", " ")}
                        {cat in dbImanes && "mm"}
                      </td>

                      <td>
                        <div className="flex gap-2">
                          <Input
                            name={itemKey}
                            aria-label="Cantidad"
                            type="number"
                            size="sm"
                            className={`min-w-24 max-w-32 ${
                              downloading ? "light" : "dark"
                            }`}
                            classNames={{
                              inputWrapper:
                                "border-b-2 border-custom1 bg-transparent rounded-none",
                              input: "fix-input",
                            }}
                            startContent="x"
                            endContent={itemData?.price_measure || "u"}
                            min={0}
                            value={itemData?.qtt}
                            onChange={(e) => handleQtt(e, [cat, itemKey])}
                            onBlur={(e) => handleQttBlur(e, [cat, itemKey])}
                          />

                          <Button
                            isIconOnly
                            size="sm"
                            color=""
                            variant=""
                            className={`hover:scale-110 ${
                              downloading ? "hidden" : "dark"
                            }`}
                            onPress={() => handleDelete([cat, itemKey])}
                          >
                            <MdDelete className="text-danger text-2xl " />
                          </Button>
                        </div>
                      </td>

                      <td>
                        <div className="flex items-center gap-2">
                          <span>
                            {Intl.NumberFormat("es-AR", {
                              style: "currency",
                              currency: "ARS",
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            }).format(itemData?.prices?.[itemData?.priceToUse])}
                          </span>

                          {itemData?.discountToUse ? (
                            <span
                              className={`font-semibold text-xs border rounded-lg px-1  ${
                                downloading
                                  ? "text-danger border-danger"
                                  : "text-yellow-400 border-yellow-400"
                              }`}
                            >
                              -
                              {Intl.NumberFormat("es-AR", {
                                style: "percent",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                              }).format(
                                itemData?.discounts?.[itemData?.discountToUse]
                              )}
                            </span>
                          ) : null}

                          {itemData?.priceToUse === "qtt" ? (
                            <span className="text-neutral-400 line-through">
                              {Intl.NumberFormat("es-AR", {
                                style: "currency",
                                currency: "ARS",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                              }).format(itemData?.prices?.base)}
                            </span>
                          ) : null}
                        </div>
                      </td>

                      <td className="text-end">
                        {Intl.NumberFormat("es-AR", {
                          style: "currency",
                          currency: "ARS",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        }).format(itemData?.subtotals?.[itemData?.priceToUse])}
                      </td>
                    </tr>
                  ))}
              </Fragment>
            ))
          )}
        </tbody>

        {cart?.value && Object.keys(cart.value).length > 0 && (
          <tfoot>
            <tr>
              <td colSpan={4} className="font-semibold">
                <div className="flex justify-end items-center gap-2">
                  <span className="text-custom1">
                    Total{" "}
                    {Intl.NumberFormat("es-AR", {
                      style: "currency",
                      currency: "ARS",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(total?.total)}
                  </span>

                  {total?.porcentage > 0 && (
                    <span className="text-neutral-400 line-through">
                      {Intl.NumberFormat("es-AR", {
                        style: "currency",
                        currency: "ARS",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }).format(total?.base)}
                    </span>
                  )}
                </div>
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </section>
  );
}

export default List;
