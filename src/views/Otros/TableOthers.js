import { motion } from "framer-motion";

import { spanDiscount } from "../../libs/tvs";

import { Image, Divider, Button } from "@nextui-org/react";

export default function TableOthers({ items = [], handleAdd }) {
  return (
    <motion.article
      className="place-self-center space-y-6"
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
            className="flex flex-col items-center sm:flex-row sm:items-start gap-6 py-4 min-w-[250px] max-w-[900px] "
            variants={{
              hidden: { opacity: 0, y: -200 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex flex-col items-center justify-center rounded-lg gap-3 sm:ps-2">
              {item?.img_name && (
                <Image
                  src={item?.img}
                  loading="lazy"
                  alt={item?.name}
                  width={200}
                  className="max-w-[200px] object-contain "
                  removeWrapper
                  style={{
                    filter: "drop-shadow(2px 4px 6px black)",
                  }}
                />
              )}

              <Button
                variant=""
                className="bg-gradient-to-r py-2 px-3 text-center font-semibold text-xl shadow-lg flex gap-1 from-custom1 to-custom1-6 max-h-none h-fit hover:scale-110"
                onPress={() => handleAdd && handleAdd(item.id, item.cartData)}
              >
                <div className="flex flex-col text-black">
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

            <div className="w-full flex flex-col justify-between pe-4 py-2">
              <div className="text-start">
                <h1 className="capitalize text-3xl font-bold border-b  border-neutral-500 pe-4 mb-2 gap-2">
                  {item?.name}
                </h1>

                {item?.info &&
                  Object.entries(item?.info).map(([key, value]) => (
                    <p key={key} className="break-words">
                      <b className="capitalize">{key}</b>
                      {value && <b>: </b>}
                      {value}
                    </p>
                  ))}

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
