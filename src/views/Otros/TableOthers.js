import { motion } from "framer-motion";

import { spanDiscount } from "../../libs/tvs";

import { Divider, Button } from "@nextui-org/react";

import ImageCustom from "../../layout/components/ImageCustom";

export default function TableOthers({ items = [], handleAdd = null }) {
  return (
    <motion.article
      className="xs:place-self-center space-y-6"
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: 0.1,
            staggerChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
    >
      {items?.map((item, i) => {
        let price = item?.price;
        if (item?.prices) price = item?.prices[0];
        let discount_ = item.cartData.discounts?.[item?.discountToUse] || false;

        return (
          <motion.div
            key={i}
            className="flex flex-col items-center sm:grid sm:grid-cols-5 sm:items-start gap-6 px-2 py-4 xs:min-w-[250px] max-w-[900px]"
            variants={{
              hidden: { opacity: 0, y: -200 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex flex-col items-center gap-4 sm:col-span-2">
              {item?.img_name && (
                <ImageCustom
                  src={item?.img}
                  alt={item?.name}
                  width={300}
                  style={{
                    filter: "drop-shadow(2px 4px 6px black)",
                  }}
                />
              )}

              <Button
                variant=""
                className={`py-2 px-3 text-center font-semibold text-xl shadow-lg flex gap-1 max-h-none h-fit hover:scale-110 bg-gradient-to-r ${
                  item?.noStock
                    ? "from-neutral-400 to-neutral-300 line-through text-neutral-500"
                    : "from-custom1 to-custom1-6 text-black"
                }`}
                onPress={() => handleAdd && handleAdd(item.id, item.cartData)}
              >
                <div className="flex flex-col text-">
                  <span
                    className={`${
                      discount_ && "line-through text-neutral-600 text-sm"
                    }`}
                  >
                    {Intl.NumberFormat("es-AR", {
                      style: "currency",
                      currency: "ARS",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(price)}
                    {item?.price_measure && "/" + item?.price_measure}
                  </span>

                  {discount_ && (
                    <span>
                      {Intl.NumberFormat("es-AR", {
                        style: "currency",
                        currency: "ARS",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }).format(price * (discount_ ? 1 - discount_ : 1))}
                      {item?.price_measure && "/" + item?.price_measure}
                    </span>
                  )}
                </div>

                {discount_ && (
                  <span
                    className={spanDiscount({
                      color:
                        item?.discountToUse === "follow"
                          ? "danger"
                          : "secondary",
                    })}
                  >
                    -
                    {Intl.NumberFormat("es-AR", {
                      style: "percent",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(discount_)}
                  </span>
                )}
              </Button>
            </div>

            <div className="flex flex-col justify-between py-2 sm:col-span-3">
              <div className="text-start">
                <h1 className="capitalize text-3xl font-bold border-b border-neutral-400 mb-2 gap-2">
                  {item?.name}
                </h1>

                {item?.caracteristicas && (
                  <div className="flex flex-wrap gap-4">
                    {item?.caracteristicas.map((caract) => (
                      <b key={caract} className="capitalize break-words italic">
                        {caract}
                      </b>
                    ))}
                  </div>
                )}

                {item?.info &&
                  Object.entries(item?.info).map(([key, value]) => (
                    <p key={key} className="break-words">
                      <b className="capitalize">{key}: </b>
                      {value}
                    </p>
                  ))}

                {item?.prices && (
                  <div className="flex flex-wrap gap-x-4">
                    {item?.prices
                      .slice(1, item.prices.length)
                      .map((price, i) => (
                        <p key={price}>
                          <b className="capitalize break-words">
                            x{item.qtts[i + 1]}
                            {item?.price_measure || ""}:{" "}
                          </b>
                          {Intl.NumberFormat("es-AR", {
                            style: "currency",
                            currency: "ARS",
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          }).format(price)}
                        </p>
                      ))}
                  </div>
                )}

                {item?.description ? item?.description + "." : ""}
              </div>
            </div>

            {i !== items?.length - 1 && (
              <Divider className="sm:hidden w-2/3 self-center" />
            )}
          </motion.div>
        );
      })}
    </motion.article>
  );
}
