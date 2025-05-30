import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";

import { handlePriceData } from "../libs/functions";

import { DB_ALL } from "../consts/dbs";

import { Tabs, Tab } from "@nextui-org/react";

import TablePrices from "./Imanes/TablePrices";
import DragMagnets from "./Imanes/DragMagnets";

import {
  SVGRedondoFresadoMeasures,
  SVGCuadradoMeasures,
  SVGRedondoMeasures,
  SVGCuadradoFresadoMeasures,
} from "../assets/imanes/svgs";

const tables_default = [
  {
    form: "redondo",
    measure_format: "AxB",
    svg: SVGRedondoMeasures,
    items: [],
  },
  {
    form: "cuadrado",
    measure_format: "AxBxC",
    svg: SVGCuadradoMeasures,
    items: [],
  },
  {
    form: "redondo fresado",
    measure_format: "AxB D-d",
    svg: SVGRedondoFresadoMeasures,
    items: [],
  },
  {
    form: "cuadrado fresado",
    measure_format: "AxBxC D-d",
    svg: SVGCuadradoFresadoMeasures,
    items: [],
  },
];

export default function Imanes() {
  const context = useOutletContext();

  const [tables, setTables] = useState(tables_default);
  const [arrastreItems, setArrastreItems] = useState([]);

  useEffect(() => {
    const tables_ = [...tables_default];
    const DB = structuredClone(DB_ALL);

    tables_.map((table) => {
      const items_ = DB.filter(
        (item) =>
          item.categorie === "imanes" &&
          item.subcategorie === "neodimio" &&
          item.info?.forma === table.form
      );

      items_.sort((a, b) => {
        return (
          a?.measures?.largo - b?.measures?.largo ||
          a?.measures?.ancho - b?.measures?.ancho ||
          a?.measures?.alto - b?.measures?.alto
        );
      });

      table.items = items_;

      return table;
    });

    const arrastre_ = DB.filter(
      (item) => item.categorie === "imanes" && item.subcategorie === "arrastre"
    );

    setTables(tables_);
    setArrastreItems(arrastre_);
  }, []);

  return (
    <>
      <section className="max-w-[80%] text-center space-y-4 font-semibold prose dark:prose-invert">
        <p>
          <i>Todos</i> los imanes presentados en las tablas son de{" "}
          <i>neodimio</i> de alta potencia y sus medidas están en{" "}
          <i>milímetros</i>.
          <br />
          Seleccione la forma que le interese y revise las medidas y precios. En
          la tabla podrá ver que varia el precio por unidad según la cantidad.
          <br />
          Las medidas con <span className="bg-divider px-1">fondo gris</span> es
          por falta de stock.
          <br />
          Consulte por medidas no listadas.
        </p>

        <p className="font-size-secondary text-neutral-400">
          Los precios pueden variar.
        </p>
      </section>

      <section className="w-full text-center md:flex flex-col items-center">
        <Tabs
          aria-label="Categorias del imanes"
          classNames={{
            tabList:
              "bg-gradient-to-t from-custom1 to-custom1-3 flex-wrap justify-center w-full",
            tabContent:
              "text-custom2 font-bold group-data-[selected=true]:text-white capitalize whitespace-normal",
            cursor: "bg-gradient-to-t from-custom2 to-custom2-10",
            panel: "mt-4 flex flex-col items-center gap-2 w-full",
            tab: "w-fit",
          }}
        >
          {tables.map((table) => (
            <Tab key={table.form} title={table.form}>
              <div className="flex items-center justify-center h-[250px]">
                <table.svg className="w-full h-full" />
              </div>

              <TablePrices
                tableAriaLabel={`Tabla de precios: ${table.form}`}
                measureFormat={table.measure_format}
                rows={table.items}
                cart={context.cart.value}
                handleAdd={context.cart.add}
                setItemToComparate={context.setMagnetData}
              />
            </Tab>
          ))}

          <Tab key="drag" title="De arrastre">
            <DragMagnets
              rows={arrastreItems}
              cart={context.cart.value}
              handleAdd={context.cart.add}
              setItemToComparate={context.setMagnetData}
            />
          </Tab>
        </Tabs>
      </section>
    </>
  );
}
