import { motion } from "framer-motion";

import { spanDiscount, title1 } from "../../libs/tvs";
import { toPriceFormat } from "../../libs/functions";

import { Divider, Button } from "@nextui-org/react";

import ImageCustom from "../../layout/components/ImageCustom";
import AccordionPrices from "./AccordionPrices";

import { FaCartPlus } from "react-icons/fa";

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
        const discount_ =
          item.cartData.discounts?.[item?.discountToUse] || false;
        const price_measure = item?.price_measure || "u";

        return (
          <motion.div
            key={i}
            className="flex flex-col items-center sm:grid sm:grid-cols-5 sm:items-start gap-6 px-2 py-4 xs:min-w-[250px] max-w-[900px]"
            variants={{
              hidden: { opacity: 0, y: -200 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="sm:self-center sm:col-span-2">
              {item?.img_name && (
                <ImageCustom
                  src={item?.img}
                  alt={item?.label}
                  width={300}
                  className="sm:max-h-[250px] sm:object-contain"
                  style={{
                    filter: "drop-shadow(2px 4px 6px black)",
                  }}
                />
              )}
            </div>

            <div className="w-full flex flex-col justify-between py-2 sm:col-span-3">
              <div className="text-start">
                <h1
                  className={`${title1({
                    color: "custom2",
                    darkColor: "custom1",
                  })} capitalize pe-4 max-xs:break-all`}
                >
                  {item?.label}
                </h1>

                <Divider className="mb-2" />

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

                {/* {item?.prices && (
                  <div className="flex flex-wrap gap-x-4">
                    {item?.prices
                      .slice(1, item.prices.length)
                      .map((price, i) => (
                        <p key={price}>
                          <b className="capitalize break-words">
                            x{item.qtts[i + 1]}
                            {item?.price_measure || "u"}:{" "}
                          </b>
                          {Intl.NumberFormat("es-AR", {
                            style: "currency",
                            currency: "ARS",
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          }).format(price)}
                          /{item?.price_measure || "u"}
                        </p>
                      ))}
                  </div>
                )} */}

                {item?.description ? item?.description + "." : ""}
              </div>
            </div>

            <div className="w-full sm:col-span-5">
              <AccordionPrices
                className={`w-full sm:w-fit xs:place-self-end shadow-md${
                  item?.noStock ? " line-through text-neutral-500" : ""
                }`}
                classNames={{ content: "mt-2 space-y-2" }}
                title={
                  <div className="w-full text-xl flex flex-col items-center gap-2 xs:flex-row xs:flex-wrap xs:gap-4 max-xs:break-all hover:text-custom1 transition-color">
                    {discount_ && (
                      <div className="flex gap-2 items-center">
                        <span>
                          {toPriceFormat(
                            price * (discount_ ? 1 - discount_ : 1)
                          )}
                          {item?.price_measure && "/" + item?.price_measure}
                        </span>

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
                      </div>
                    )}

                    <span
                      className={`${
                        discount_ && "line-through text-neutral-500"
                      }`}
                    >
                      {toPriceFormat(price)}
                      {item?.price_measure && "/" + item?.price_measure}
                    </span>

                    <Button
                      color={item?.noStock ? "default" : "warning"}
                      variant="ghost"
                      isIconOnly
                      size="sm"
                      className="hover:scale-110"
                      onPress={() =>
                        handleAdd && handleAdd(item.id, item.cartData)
                      }
                    >
                      <FaCartPlus className="h-3/5 w-fit" />
                    </Button>
                  </div>
                }
              >
                {item?.prices &&
                  item.prices.map(
                    (p, i) =>
                      i > 0 && (
                        <div
                          key={i}
                          className="text-xl flex flex-col items-center gap-2 max-xs:break-all hover:text-custom1 transition-colors xs:flex-row"
                        >
                          <span>
                            {toPriceFormat(p)}/{price_measure}
                          </span>

                          <span>x{item?.qtts[i] + price_measure}</span>

                          <Button
                            color={item?.noStock ? "default" : "warning"}
                            variant="ghost"
                            isIconOnly
                            size="sm"
                            className="hover:scale-110"
                            onPress={() => {
                              if (handleAdd) {
                                item.cartData.qtt = item.qtts[i];
                                handleAdd(item.id, item.cartData);
                              }
                            }}
                          >
                            <FaCartPlus className="h-3/5 w-fit" />
                          </Button>
                        </div>
                      )
                  )}
              </AccordionPrices>
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
