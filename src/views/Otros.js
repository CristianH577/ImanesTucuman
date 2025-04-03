import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router";

import { defineDiscountToUse } from "../libs/functions";

import { dbOtros } from "../consts/dbs";

import { Tabs, Tab } from "@nextui-org/react";

import TableOthers from "./Otros/TableOthers";

function Otros() {
  const date_price = "23/2/25";
  const discount_follow = 0;

  const context = useOutletContext();
  const [data, setData] = useState([]);

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

    let data_ = [];

    categorias.forEach((cat) => {
      const cat_ = { ...cat };
      const items = Object.entries(cat.items)
        .reduce((acum, [id, item]) => {
          if (!item?.hidden) {
            item.id = id;
            item.img = contextImgs(`./${cat.id}/${item?.img_name}.webp`);

            const discount = isNaN(Number(item?.discount))
              ? 0
              : Number(item?.discount);

            item.cartData = {
              qtt: 1,
              discounts: {
                discount: discount,
                follow: discount_follow,
              },
            };

            item.discountToUse = defineDiscountToUse(
              item.cartData.discounts,
              true
            );

            acum.push(item);
          }
          return acum;
        }, [])
        .sort((a, b) => a.name.localeCompare(b.name));

      cat_.items = items;
      data_ = [...data_, cat_];
    });

    setData(data_);
  }, []);

  return (
    <>
      <motion.section
        className="max-w-[80%] text-center space-y-4 font-semibold"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <p>
          Además de imanes de neodimio también ofrecemos otros artículos que
          podrían interesarle.
        </p>

        <p className="text-secondary-700">
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
            </a>
          </p> */}
      </motion.section>

      <motion.section
        className="w-full text-center"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
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
        >
          {data.map((cat) => (
            <Tab key={cat.id} title={cat.label}>
              <TableOthers
                items={cat?.items}
                handleAdd={(id, cartData) => {
                  context?.cart?.add(cat.id, id, cartData);
                }}
              />
            </Tab>
          ))}
        </Tabs>
      </motion.section>
    </>
  );
}

export default Otros;
