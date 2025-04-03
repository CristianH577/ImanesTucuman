import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router";

import { Tabs, Tab, Spinner } from "@nextui-org/react";

import TablePrices from "./Imanes/TablePrices";
import Fotos from "./Imanes/Fotos";
import DragMagnets from "./Imanes/DragMagnets";

import {
  SVGRedondoFresado,
  SVGCuadrado,
  SVGEsfera,
  SVGRedondo,
  SVGCuadradoFresado,
} from "../assets/imanes/svgs";

const ModalSize = lazy(() => import("./Imanes/ModalSize"));

function Imanes() {
  const date_price = "29/03/25";

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

  const context = useOutletContext();
  const [comparative, setComparative] = useState(false);
  const [data, setData] = useState(false);

  const showMore = (cat) => {
    const data_ = structuredClone(data);
    data_[cat].rows = Object.entries(context.db?.[cat]).slice(
      0,
      data_[cat].rows.length + 20
    );
    setData(data_);
  };

  useEffect(() => {
    const new_data = {};

    Object.entries(context.db).forEach(([cat, items]) => {
      new_data[cat] = {
        total: Object.entries(items).length,
        rows: Object.entries(items).slice(0, 20),
      };
    });

    setData(new_data);
  }, [context.db]);

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
          <i>Todos</i> los imanes presentados en las tablas son de{" "}
          <i>neodimio</i> de alta potencia y sus medidas están en{" "}
          <i>milímetros</i>.
          <br />
          <br />
          Las medidas que están <span className="line-through">
            tachadas
          </span>{" "}
          es por falta de stock.
          <br />
          <br />
          Seleccione la forma que le interese y revise las medidas y precios. En
          la tabla podrá ver que varia el precio por unidad según la cantidad.
          <br />
          <br />
          Consulte por medidas no listadas.
        </p>

        <p className="text-secondary-700 inline-flex">
          Presione en las medidas para ver una comparación de tamaños en
          pantalla o en los precios para agregar artículos al carrito.
        </p>

        <p className="text-sm text-neutral-400">
          Los precios pueden variar: {date_price}.
        </p>

        {/* <p className="text-yellow-400">
            Los descuentos son validos para aquellos que sigan ImanesTucuman en
            cualquiera de las{" "}
            <a href="#contacto" className="italic hover:text-custom1-4">
              redes
            </a>{" "}
          </p> */}
      </motion.section>

      <motion.section
        className="w-full text-center md:flex flex-col items-center"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <Tabs
          aria-label="Categorias del imanes"
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
          {Object.keys(context.db).map((cat) => (
            <Tab key={cat} title={formas_data?.[cat]?.label}>
              <motion.div
                className="flex items-center justify-center h-[250px] font-bold"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                initial="hidden"
                whileInView="visible"
              >
                {formas_data?.[cat]?.img}
              </motion.div>

              <TablePrices
                cat={cat}
                setComparative={setComparative}
                handleAdd={context?.cart?.add}
                formas_data={formas_data}
                data={data?.[cat]}
                showMore={showMore}
              />
            </Tab>
          ))}

          <Tab key="drag" title="De arrastre">
            <DragMagnets
              handleAdd={context?.cart?.add}
              setComparative={setComparative}
            />
          </Tab>

          <Tab key="photos" title="FOTOS">
            <Fotos link={context?.links?.fotos} />
          </Tab>
        </Tabs>
      </motion.section>

      {comparative && (
        <Suspense
          fallback={
            <span className="absolute w-full h-full flex items-center justify-center bg-black/50 inset-0 z-50 rounded-xl">
              <Spinner color="secondary" />
            </span>
          }
        >
          <ModalSize isOpen={comparative} setIsOpen={setComparative} />
        </Suspense>
      )}
    </>
  );
}

export default Imanes;
