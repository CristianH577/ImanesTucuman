import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  Tabs,
  Tab,
  Image,
  Divider,
  Button,
  ScrollShadow,
} from "@nextui-org/react";

import SectionView from "../components/SectionView";

import { dbOtros } from "../consts/dbs";

function Otros({ cart }) {
  const date_price = "23/2/25";
  const discount = false; //0.1

  const [data, setData] = useState([]);

  const handleAdd = (cat, size, qtt, discount) => {
    const new_cart = structuredClone(cart.value);
    if (!new_cart.hasOwnProperty(cat)) new_cart[cat] = {};
    new_cart[cat][size] = {
      qtt: parseInt(qtt),
      discount: parseFloat(discount),
    };

    cart.set(new_cart);
  };

  useEffect(() => {
    const categorias = [
      {
        id: "imanes",
        label: "Imanes: Otros",
        items: dbOtros?.imanes,
      },
      {
        id: "electricidad",
        label: "Electricidad",
        items: dbOtros?.electricidad,
      },
      {
        id: "otros",
        label: "Otros",
        items: dbOtros?.otros,
      },
    ];

    const contextImgs = require.context("../assets/otros", true);

    const new_data = [];
    categorias.forEach((cat) => {
      const new_item = { ...cat };
      const items = Object.entries(cat.items)
        .reduce((acum, [id, item]) => {
          if (!item?.nostock) {
            item.id = id;
            item.img = contextImgs(`./${cat.id}/${item?.img_name}.webp`);
            acum.push(item);
          }
          return acum;
        }, [])
        .sort((a, b) => a.name.localeCompare(b.name));

      new_item.items = items;
      new_data.push(new_item);
    });

    setData(new_data);
  }, []);

  return (
    <SectionView
      id="otros"
      title="Otros"
      className="px-2 xs:px-4 py-16 sm:px-10 lg:px-16"
    >
      <motion.div
        className="max-w-[80%] text-center space-y-4 font-semibold"
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 },
        }}
      >
        <p>
          Además de imanes de neodimio también ofrecemos otros artículos que
          podrían interesarle.
        </p>

        <p className="text-custom1">
          Presione en los precios para agregar artículos.
        </p>

        <p className="text-sm text-neutral-400">
          Los precios pueden variar: {date_price}.
        </p>

        {/* <p className="text-yellow-600 dark:text-yellow-400">
            Los descuentos son validos para aquellos que sigan ImanesTucuman en
            cualquiera de las{" "}
            <a href="#contacto" className="italic hover:text-custom1-4">
              redes
            </a>{" "}
            desde el 1 hasta el 31 de diciembre.
          </p> */}
      </motion.div>

      <motion.div
        className="w-full text-center"
        variants={{
          hidden: { opacity: 0, x: "100%" },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <Tabs
          aria-label="Otros articulos"
          classNames={{
            tabList:
              "bg-gradient-to-t from-custom2 to-custom2-10 flex-wrap justify-center shadow-md",
            tabContent:
              "text-white group-data-[selected=true]:font-semibold group-data-[selected=true]:text-black",
            cursor: "bg-gradient-to-t from-custom1 to-custom1-10",
            panel: "w-full mt-4",
            tab: "w-fit",
          }}
          destroyInactiveTabPanel={false}
        >
          {data.map((cat) => (
            <Tab key={cat.id} title={cat.label}>
              <ScrollShadow
                data-slot="container"
                size="100"
                className="overflow-auto h-[800px] w-full md:w-auto scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-custom1 scrollbar-track-custom2 scrollbar-w-3 scrollbar-h-3 hover:scrollbar-thumb-custom1-6 pb-14"
              >
                <motion.article
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
                  {cat?.items?.map((item, i) => {
                    let price = item?.price;
                    if (item?.prices) price = item?.prices[0];

                    return (
                      <motion.div
                        key={i}
                        className="flex flex-col items-center sm:flex-row sm:items-start gap-6 py-4 min-w-[250px]"
                        variants={{
                          hidden: { opacity: 0, y: -200 },
                          visible: { opacity: 1, y: 0 },
                        }}
                      >
                        {i !== 0 && (
                          <Divider className="sm:hidden w-2/3 self-center" />
                        )}

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
                            className="bg-gradient-to-r py-2 px-3 text-center font-semibold text-xl shadow-lg flex gap-1 from-custom1 to-custom1-6 navidad:text-white max-h-none h-fit hover:scale-110"
                            onPress={() =>
                              handleAdd(cat.id, item.id, 1, discount)
                            }
                          >
                            <div className="flex flex-col text-black">
                              <p
                                className={`${
                                  discount && "line-through text-neutral-600"
                                }`}
                              >
                                {Intl.NumberFormat("es-AR", {
                                  style: "currency",
                                  currency: "ARS",
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 0,
                                }).format(price)}
                                {item?.price_measure &&
                                  "/" + item?.price_measure}
                              </p>

                              {discount && (
                                <p>
                                  {Intl.NumberFormat("es-AR", {
                                    style: "currency",
                                    currency: "ARS",
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0,
                                  }).format(
                                    price * (discount ? 1 - discount : 1)
                                  )}
                                  {item?.price_measure &&
                                    "/" + item?.price_measure}
                                </p>
                              )}
                            </div>

                            {discount && (
                              <p className="text-sm bg-radial from-danger-600 to-danger dark:from-danger dark:to-danger-300 text-custom1-5 font-bold rounded-full px-1 py-3 shadow-md">
                                -
                                {Intl.NumberFormat("es-AR", {
                                  style: "percent",
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: 0,
                                }).format(discount)}
                              </p>
                            )}
                          </Button>
                        </div>

                        <div className="py-2 flex flex-col justify-between pe-4">
                          <div className="text-start">
                            <h1 className="capitalize text-3xl font-bold border-b pe-4 mb-2 gap-2">
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
                      </motion.div>
                    );
                  })}
                </motion.article>
              </ScrollShadow>
            </Tab>
          ))}
        </Tabs>
      </motion.div>
    </SectionView>
  );
}

export default Otros;
