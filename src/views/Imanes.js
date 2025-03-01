import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Tabs, Tab, Spinner } from "@nextui-org/react";

import SectionView from "../components/SectionView";
import TablePrices from "./Imanes/TablePrices";
import Fotos from "./Imanes/Fotos";
import DragMagnets from "./Imanes/DragMagnets";

import {
  SVGRedondoFresado,
  SVGCuadrado,
  SVGEsfera,
  SVGRedondo,
  SVGCuadradoFresado,
} from "../consts/svgs";

import { dbImanes } from "../consts/dbs";

const ModalSize = lazy(() => import("./Imanes/ModalSize"));

function Imanes({ links, cart }) {
  const date_price = "20/01/25";

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
    redondos_fresados: {
      label: "Redondos Fresados",
      medidas: "AxB D-d",
      img: <SVGRedondoFresado className="h-full w-full" />,
    },
    esferas: {
      label: "Esferas",
      medidas: "D",
      img: <SVGEsfera className="h-full w-full max-h-[200px]" />,
    },
    cuadrados_fresados: {
      label: "Cuadrados Fresados",
      medidas: "AxBxC D-d",
      img: <SVGCuadradoFresado className="h-full w-full" />,
    },
  };

  const [comparative, setComparative] = useState(false);
  const [tab, setTab] = useState("redondos");
  const [data, setData] = useState(false);

  const handleAdd = (cat, size, qtt = 1, discount = 0) => {
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
    new_data[cat].rows = Object.entries(dbImanes?.[cat]).slice(
      0,
      new_data[cat].rows.length + 10
    );
    setData(new_data);
  };

  useEffect(() => {
    const new_data = {};
    Object.entries(dbImanes).forEach(([cat, items]) => {
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
      className="bg-radial from-custom2-4 to-custom2 text-white py-24 px-2 sm:px-4 clip-diagonal-y"
    >
      <motion.article
        className="max-w-[80%] text-center space-y-4 font-semibold"
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 },
        }}
      >
        <p>
          Todos los imanes presentados en las tablas son de neodimio de alta
          potencia y sus medidas están en milímetros.
          <br />
          Seleccione la forma que le interese y revise las medidas y precios. En
          la tabla podrá ver que varia el precio por unidad según la cantidad.
          <br />
          Consulte por medidas no listadas.
        </p>

        <p className="text-custom1-3 navidad:text-custom1-4 inline-flex">
          Presione en las medidas para ver una comparación de tamaños en
          pantalla o en los precios para agregar artículos al carrito.
        </p>

        {/* <div
              className="inline-flex text-center items-center gap-2 text-3xl text-danger font-bold"
              style={{
                filter: "drop-shadow(2px 4px 6px black)",
              }}
            >
              <GiChainsaw size={64} className="text-yellow-400" />
              <p>Paso la motosierra del León!</p>
              <SVGEscarapela size={64} />
            </div> */}

        <p className="text-sm text-neutral-400">
          Los precios pueden variar: {date_price}.
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
            tabList:
              "bg-gradient-to-t from-custom1 to-custom1-3 navidad:from-custom1--8 navidad:to-custom1 flex-wrap justify-center shadow-md ",
            tabContent:
              "text-custom2 font-bold group-data-[selected=true]:text-white",
            cursor: "bg-gradient-to-t from-custom2 to-custom2-10",
            panel: "mt-4 min-h-[1100px] flex flex-col sm:items-center",
            tab: "w-fit",
          }}
          selectedKey={tab}
          onSelectionChange={setTab}
          destroyInactiveTabPanel={false}
        >
          {Object.keys(dbImanes).map((cat) => (
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

          <Tab key="drag" title="De arrastre">
            <DragMagnets
              handleAdd={handleAdd}
              setComparative={setComparative}
            />
          </Tab>

          <Tab key="photos" title="FOTOS">
            <Fotos link={links?.fotos} />
          </Tab>
        </Tabs>
      </motion.article>

      {comparative && (
        <Suspense
          fallback={
            <span className="absolute w-full h-full flex items-center justify-center bg-black/50 inset-0 z-50 rounded-xl">
              <Spinner />
            </span>
          }
        >
          <ModalSize isOpen={comparative} setIsOpen={setComparative} />
        </Suspense>
      )}
    </SectionView>
  );
}

export default Imanes;
