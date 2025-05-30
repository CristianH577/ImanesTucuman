import { useEffect, useState } from "react";

import { DB_ALL } from "../consts/dbs";

import { Tabs, Tab } from "@nextui-org/react";

import TableInfo from "./Caracteristicas/TableInfo";

const text_class = "text-danger-300 dark:text-danger-600";
const tables_default = [
  {
    form: "redondo",
    measure_format: "AxB",
    items: [],
  },
  {
    form: "cuadrado",
    measure_format: "AxBxC",
    items: [],
  },
  {
    form: "redondo fresado",
    measure_format: "AxB D-d",
    items: [],
  },
  {
    form: "cuadrado fresado",
    measure_format: "AxBxC D-d",
    items: [],
  },
];

function Caracteristicas() {
  const [tab, setTab] = useState("redondos");
  const [tables, setTables] = useState(tables_default);

  useEffect(() => {
    const tables_ = [...tables_default];

    tables_.map((table) => {
      const items_ = DB_ALL.filter(
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

    setTables(tables_);
  }, []);

  return (
    <>
      <section className="max-w-[80%] text-center space-y-4 font-semibold prose dark:prose-invert">
        <p>
          No contamos con la informacion tecnica precisa.
          <br />
          La fuerza experimental esta medida mediante la adhesión magnética de
          un peso al imán que a su vez esta adherido a una placa de metal de
          casi 10mm en un sentido vertical.
          <br />
          Los valores de fuerza y gauss por grado son{" "}
          <span className={text_class}>aproximados</span> y bajo{" "}
          <span className={text_class}>condiciones ideales</span>. La
          información es <span className={text_class}>inchequeable</span> y de{" "}
          <span className={text_class}>dudosa</span> procedencia; utilizar solo
          a modo de referencia.
        </p>
      </section>

      <section className="w-full text-center sm:flex flex-col items-center">
        <Tabs
          aria-label="Categorias del imanes"
          classNames={{
            tabList:
              "bg-gradient-to-t from-custom1 to-custom1-3 flex-wrap justify-center shadow-md ",
            tabContent:
              "text-custom2 font-bold group-data-[selected=true]:text-white capitalize",
            cursor: "bg-gradient-to-t from-custom2 to-custom2-10",
            panel: "mt-4 flex flex-col md:items-center w-full md:w-fit",
            tab: "w-fit",
          }}
          selectedKey={tab}
          onSelectionChange={setTab}
          destroyInactiveTabPanel={false}
        >
          {tables.map((table) => (
            <Tab key={table.form} title={table.form}>
              <TableInfo
                tableAriaLabel={`Tabla de precios: ${table.form}`}
                measureFormat={table.measure_format}
                rows={table.items}
              />
            </Tab>
          ))}
        </Tabs>
      </section>
    </>
  );
}

export default Caracteristicas;
