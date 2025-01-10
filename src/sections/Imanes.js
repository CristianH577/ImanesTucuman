import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Tabs, Tab, Spinner } from "@nextui-org/react";

import Fotos from "./Imanes/Fotos";
import TablePrices from "./Imanes/TablePrices";
import SectionView from "../components/SectionView";

import {
  SVGArandelaFresada,
  SVGCuadrado,
  SVGEsfera,
  SVGRedondo,
} from "../assets/svgs";

import db from "../assets/imanes/db-imanes.json";

const ModalSize = lazy(() => import("./Imanes/ModalSize"));

function Imanes({ links, cart }) {
  const date_price = "7/11/24";

  const formas_data = {
    redondos: {
      label: "Redondos",
      medidas: "AxB",
      img: <SVGRedondo className="h-full w-full max-h-[200px]" />,
    },
    cuadrados: {
      label: "Cuadrados",
      medidas: "AxBxC",
      img: <SVGCuadrado className="h-full w-full" />,
    },
    arandelas: {
      label: "Arandelas",
      subtitle: "Fresadas",
      medidas: "AxB D-d",
      img: <SVGArandelaFresada className="h-full w-full" />,
    },
    esferas: {
      label: "Esferas",
      subtitle: "Multicolor",
      medidas: "D",
      img: <SVGEsfera className="h-full w-full max-h-[200px]" />,
    },
  };

  const [comparative, setComparative] = useState(false);
  const [tab, setTab] = useState("redondos");
  const [data, setData] = useState(false);

  const handleAdd = (cat, size, qtt, discount) => {
    const new_cart = structuredClone(cart.value);
    if (!new_cart.hasOwnProperty(cat)) new_cart[cat] = {};
    new_cart[cat][size] = {
      qtt: parseInt(qtt),
      discount: parseFloat(discount),
    };

    cart.set(new_cart);
  };
  const showMore = (cat) => {
    const new_data = structuredClone(data);
    new_data[cat].rows = Object.entries(db?.[cat]).slice(
      0,
      new_data[cat].rows.length + 10
    );
    setData(new_data);
  };

  useEffect(() => {
    const new_data = {};
    Object.entries(db).forEach(([cat, items]) => {
      new_data[cat] = {
        total: Object.entries(items).length,
        rows: Object.entries(items).slice(0, 10),
      };
    });
    setData(new_data);
  }, []);

  return (
    <SectionView
      id="imanes"
      title="Imanes"
      className="bg-radial from-custom2-4 to-custom2 text-white py-24 px-2 sm:px-4"
      style={{
        clipPath: "polygon(0 0, 100% 4rem, 100% calc(100% - 4rem), 0 100%)",
      }}
      content={
        <>
          <motion.article
            className="text-lg max-w-[80%] text-center space-y-4 font-semibold"
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <p>
              Seleccione la forma que le interese y revise las medidas y
              precios.
              <br />
              En la tabla podrá ver que varia el precio por unidad según la
              cantidad.
              <br />
              Todas las medidas están en milímetros.
            </p>

            <p className="text-custom1 navidad:text-custom1-4 inline-flex">
              Presione en las medidas para ver una comparación de tamaños en
              pantalla o en los precios para agregar artículos al carrito.
            </p>

            <p className="text-neutral-400">
              Los precios pueden variar ({date_price}).
            </p>

            {/* <p className="text-yellow-400">
            Los descuentos son validos para aquellos que sigan ImanesTucuman en
            cualquiera de las{" "}
            <a href="#contacto" className="italic hover:text-custom1-4">
              redes
            </a>{" "}
            desde el 1 hasta el 31 de diciembre.
          </p> */}
          </motion.article>

          <motion.article
            className="w-full text-center"
            variants={{
              hidden: { opacity: 0, x: "-100%" },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Tabs
              aria-label="Categorias del imanes"
              classNames={{
                base: "justify-self-center",
                tabList:
                  "bg-gradient-to-t from-custom1 to-custom1-3 navidad:from-custom1--8 navidad:to-custom1 flex-wrap justify-center shadow-md ",
                tabContent:
                  "text-custom2 font-bold group-data-[selected=true]:text-white",
                cursor: "bg-gradient-to-t from-custom2 to-custom2-10",
                panel: "mt-4 min-h-[1100px] flex flex-col items-center",
                tab: "w-fit",
              }}
              selectedKey={tab}
              onSelectionChange={setTab}
              destroyInactiveTabPanel={false}
            >
              {Object.keys(db).map((cat) => (
                <Tab key={cat} title={formas_data?.[cat]?.label}>
                  <motion.div
                    className="flex items-center justify-center h-[250px] font-bold"
                    variants={{
                      hidden: { opacity: 0, scale: 0 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                  >
                    {formas_data?.[cat]?.img}
                  </motion.div>

                  <TablePrices
                    cat={cat}
                    setComparative={setComparative}
                    handleAdd={handleAdd}
                    formas_data={formas_data}
                    data={data?.[cat]}
                    showMore={showMore}
                  />
                </Tab>
              ))}

              <Tab key="photos" title="Fotos">
                <Fotos link={links?.fotos} />
              </Tab>
            </Tabs>
          </motion.article>

          {comparative && (
            <Suspense
              fallback={
                <span className="absolute w-full h-screen flex items-center justify-center bg-black/50 inset-0 z-50">
                  <Spinner />
                </span>
              }
            >
              <ModalSize isOpen={comparative} setIsOpen={setComparative} />
            </Suspense>
          )}
        </>
      }
    />
  );
}

export default Imanes;
