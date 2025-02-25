import { Fragment, useEffect, useState } from "react";

import { Button, Input } from "@nextui-org/react";

import { MdDelete } from "react-icons/md";

import {
  dbImanes,
  dbImanesPrices,
  dbOtros,
  dbImanesArrastre,
} from "../../consts/dbs";

function List({ cart, makeDiscount, downloading }) {
  const priceTableCategories = {
    1: [1, 20, 50, 100],
    2: [1, 10, 25, 50],
    3: [1, 5, 15, 30],
  };

  const default_total = { standard: 0, discount: 0 };
  const [total, setTotal] = useState({ ...default_total });

  const handleQtt = (e, drt) => {
    let value = e.target.value;

    if (drt) {
      const new_cart = structuredClone(cart.value);

      new_cart[drt[0]][drt[1]].qtt = value;

      cart.set(new_cart);
    }
  };
  const handleQttBlur = (e, drt) => {
    let qtt = e.target?.value;
    qtt = parseInt(qtt) || 0;

    if (drt) {
      const new_cart = structuredClone(cart.value);

      if (!qtt || qtt < 1) {
        new_cart[drt[0]][drt[1]].qtt = 0;
        new_cart[drt[0]][drt[1]].subtotal = 0;
        new_cart[drt[0]][drt[1]].subtotal_discount = 0;
      } else {
        let price = 0;
        const price_discount = new_cart[drt[0]][drt[1]]?.price_discount;

        if (drt[0] in dbImanes) {
          const db_data = dbImanes?.[drt[0]][drt[1]];
          const qtts = priceTableCategories?.[db_data?.qtts_cat || 1];
          const prices = dbImanesPrices?.[drt[0]][drt[1]]?.prices;
          for (let i = qtts.length - 1; i >= 0; i--) {
            if (qtt >= qtts[i]) {
              price = prices[i];
              break;
            }
          }
        } else if (drt[0] in dbOtros) {
          const db_data = dbOtros?.[drt[0]][drt[1]];
          price = db_data?.price;

          if (db_data?.prices) {
            const qtts = db_data?.qtts_cat || [0];
            for (let i = qtts.length - 1; i >= 0; i--) {
              if (qtt >= qtts[i]) {
                price = db_data?.prices[i];
                break;
              }
            }
          }
        } else if (drt[0] === "de_arrastre") {
          const db_data = dbImanesArrastre?.[drt[1]];
          price = db_data?.price;
        }

        new_cart[drt[0]][drt[1]].qtt = qtt;
        new_cart[drt[0]][drt[1]].price = price;
        new_cart[drt[0]][drt[1]].subtotal = qtt * price;
        new_cart[drt[0]][drt[1]].subtotal_discount = qtt * price_discount;
      }

      cart.set(new_cart);
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
    let new_total = structuredClone(default_total);

    Object.values(cart.value).forEach((cat) => {
      Object.values(cat).forEach((item) => {
        new_total.standard += item?.subtotal;
        if (makeDiscount) {
          new_total.discount +=
            item?.subtotal_discount && item?.subtotal_discount < item?.subtotal
              ? item?.subtotal_discount
              : item?.subtotal;
        }
      });
    });

    setTotal(new_total);
  };

  useEffect(() => {
    const cart_ = Object.keys(cart.value)
      .sort()
      .reduce((acc, key) => {
        acc[key] = cart.value[key];
        return acc;
      }, {});

    Object.entries(cart.value).forEach(([cat, items]) => {
      Object.entries(items).forEach(([key, obj]) => {
        let price = 0;
        let price_discount = 0;

        if (cat in dbImanes) {
          // ordeno por medida
          const items_ = Object.keys(items)
            .sort((a, b) => dbImanes[cat][a]?.A - dbImanes[cat][b]?.A)
            .sort((a, b) => dbImanes[cat][a]?.B - dbImanes[cat][b]?.B)
            .reduce((acc, key) => {
              acc[key] = items[key];
              return acc;
            }, {});
          cart_[cat] = items_;
          //******************************

          const db_data = dbImanes?.[cat]?.[key];
          const qtts = priceTableCategories?.[db_data?.qtts_cat || 1];
          const prices = dbImanesPrices?.[cat]?.[key]?.prices;

          for (let i = qtts.length - 1; i >= 0; i--) {
            if (obj.qtt >= qtts[i]) {
              price = prices[i];
              break;
            }
          }

          if (obj?.discount) {
            price_discount = prices[0] * (1 - obj?.discount);
          }
        } else if (cat in dbOtros) {
          const db_data = dbOtros?.[cat]?.[key];
          price = db_data?.price || 0;

          if (db_data?.prices) {
            const qtts = db_data?.qtts_cat || [0];
            for (let i = qtts.length - 1; i >= 0; i--) {
              if (obj.qtt >= qtts[i]) {
                price = db_data?.prices[i];
                break;
              }
            }
          }

          if (obj?.discount)
            price_discount =
              (db_data?.price || db_data?.prices[0]) * (1 - obj?.discount);

          cart_[cat][key].name = db_data?.name;

          if (db_data?.price_measure) {
            cart_[cat][key].price_measure = db_data?.price_measure;
          }
        } else if (cat === "de_arrastre") {
          const db_data = dbImanesArrastre?.[key];
          price = db_data?.price || 0;

          if (obj?.discount) price_discount = price * (1 - obj?.discount);

          cart_[cat][key].name = key + "mm";
        }

        cart_[cat][key].price = price;
        cart_[cat][key].subtotal = obj.qtt * price;

        if (price_discount) {
          cart_[cat][key].price_discount = price_discount;
          cart_[cat][key].subtotal_discount = obj.qtt * price_discount;
        }
      });
    });

    cart.set(cart_);
    // eslint-disable-next-line
  }, []);

  // eslint-disable-next-line
  useEffect(getTotal, [cart.value, makeDiscount]);

  return (
    <section
      className="w-full max-sm:pb-4 scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-custom1 scrollbar-track-custom2-10 scrollbar-w-3 scrollbar-h-3 hover:scrollbar-thumb-custom1-6 sm:flex justify-center"
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
          {Object.keys(cart.value).length < 1 ? (
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

                {Object.entries(cart.value[cat]).map(([key, data]) => (
                  <tr key={key}>
                    <td>
                      {data?.name || key?.replace("_", " ")}
                      {cat in dbImanes && "mm"}
                    </td>

                    <td>
                      <div className="flex gap-2">
                        <Input
                          name={key}
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
                          endContent={data?.price_measure || "u"}
                          min={0}
                          value={data?.qtt}
                          onChange={(e) => handleQtt(e, [cat, key])}
                          onBlur={(e) => handleQttBlur(e, [cat, key])}
                        />

                        <Button
                          isIconOnly
                          size="sm"
                          color=""
                          variant=""
                          className={`hover:scale-110 ${
                            downloading ? "hidden" : ""
                          }`}
                          onPress={() => handleDelete([cat, key])}
                        >
                          <MdDelete className="text-danger text-2xl navidad:text-custom1" />
                        </Button>
                      </div>
                    </td>

                    <td>
                      {/* flex items-center gap-2 */}
                      <div className="flex items-center gap-2">
                        <p>
                          {Intl.NumberFormat("es-AR", {
                            style: "currency",
                            currency: "ARS",
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          }).format(
                            makeDiscount && data?.price_discount < data?.price
                              ? data?.price_discount
                              : data?.price
                          )}
                        </p>

                        {makeDiscount && data?.price_discount < data?.price && (
                          <p className="text-yellow-400 font-semibold text-xs border rounded-lg px-1 border-yellow-400">
                            -
                            {Intl.NumberFormat("es-AR", {
                              style: "percent",
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            }).format(data?.discount)}
                          </p>
                        )}
                      </div>
                    </td>

                    <td>
                      {Intl.NumberFormat("es-AR", {
                        style: "currency",
                        currency: "ARS",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }).format(
                        makeDiscount && data?.price_discount < data?.price
                          ? data?.subtotal_discount
                          : data?.subtotal
                      )}
                    </td>
                  </tr>
                ))}
              </Fragment>
            ))
          )}
        </tbody>

        {Object.keys(cart.value).length > 0 && (
          <tfoot>
            <tr>
              <td colSpan={4} className="font-semibold">
                <div className="flex justify-end gap-2">
                  <p className="text-custom1">
                    Total{" "}
                    {Intl.NumberFormat("es-AR", {
                      style: "currency",
                      currency: "ARS",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(
                      total?.discount && total?.discount < total?.standard
                        ? total?.discount
                        : total?.standard
                    )}
                  </p>
                  {total?.discount > 0 && (
                    <p className="text-neutral-400 line-through">
                      {Intl.NumberFormat("es-AR", {
                        style: "currency",
                        currency: "ARS",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }).format(total?.standard)}
                    </p>
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
