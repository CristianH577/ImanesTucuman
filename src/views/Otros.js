import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router";

import { defineDiscountToUse } from "../libs/functions";

import { DB_OTROS } from "../consts/dbs";

import { Tabs, Tab } from "@nextui-org/react";

import TableOthers from "./Otros/TableOthers";

import { TbHandClick } from "react-icons/tb";

function Otros() {
  const discount_follow = 0;

  const context = useOutletContext();
  const [data, setData] = useState([]);

  useEffect(() => {
    const categorias = [
      {
        id: "imanes",
        label: "Imanes: Otros",
        items: DB_OTROS?.imanes,
      },
      {
        id: "electricidad",
        label: "Electricidad",
        items: DB_OTROS?.electricidad,
      },
      {
        id: "otros",
        label: "Otros",
        items: DB_OTROS?.otros,
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
        .sort((a, b) => a.label.localeCompare(b.label));

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
          <br />
          Los precios que están <span className="line-through">
            tachados
          </span>{" "}
          es por falta de stock o tienen descuento.
        </p>

        <p className="font-size-secondary text-neutral-400">
          Los precios pueden variar.
        </p>
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
              "bg-gradient-to-t from-custom1 to-custom1-3 flex-wrap justify-center shadow-md ",
            tabContent:
              "text-custom2 font-bold group-data-[selected=true]:text-white",
            cursor: "bg-gradient-to-t from-custom2 to-custom2-10",
            panel: "mt-4 flex flex-col items-center gap-2 w-full",
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
