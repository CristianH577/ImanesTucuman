import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import { motion } from "framer-motion";

import { Tabs, Tab } from "@nextui-org/react";

import TableInfo from "./Caracteristicas/TableInfo";

function Caracteristicas() {
  const text_class = "text-danger-300 dark:text-danger-600";
  const formas_data = {
    redondos: {
      label: "Redondos",
      medidas: "AxB",
    },
    cuadrados: {
      label: "Cuadrados",
      medidas: "AxBxC",
    },
    redondos_fresados: {
      label: "Redondos Fresados",
      medidas: "AxB D-d",
    },
    esferas: {
      label: "Esferas",
      medidas: "D",
    },
    cuadrados_fresados: {
      label: "Cuadrados Fresados",
      medidas: "AxBxC D-d",
    },
  };

  const context = useOutletContext();
  const [tab, setTab] = useState("redondos");
  const [data, setData] = useState(false);

  const showMore = (cat) => {
    const new_data = structuredClone(data);
    new_data[cat].rows = Object.entries(context.db?.[cat]).slice(
      0,
      new_data[cat].rows.length + 10
    );
    setData(new_data);
  };

  useEffect(() => {
    const new_data = {};
    Object.entries(context.db).forEach(([cat, items]) => {
      new_data[cat] = {
        total: Object.entries(items).length,
        rows: Object.entries(items).slice(0, 10),
      };
    });
    setData(new_data);
  }, [context.db]);

  return (
    <>
      <motion.article
        className="max-w-[80%] text-center space-y-4 font-semibold"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <p>
          Los valores son <span className={text_class}>aproximados</span> y bajo{" "}
          <span className={text_class}>condiciones ideales</span>.
          <br />
          La información es <span className={text_class}>inchequeable</span> y
          de <span className={text_class}>dudosa</span> procedencia; utilizar
          solo a modo de referencia.
        </p>
      </motion.article>

      <motion.article
        className="w-full text-center sm:flex flex-col items-center"
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
            panel: "mt-4 flex flex-col md:items-center w-full md:w-fit",
            tab: "w-fit",
          }}
          selectedKey={tab}
          onSelectionChange={setTab}
          destroyInactiveTabPanel={false}
        >
          {Object.keys(context.db).map((cat) => {
            if (cat !== "esferas") {
              return (
                <Tab key={cat} title={formas_data?.[cat]?.label}>
                  <TableInfo
                    cat={cat}
                    formas_data={formas_data}
                    data={data?.[cat] || []}
                    showMore={showMore}
                  />
                </Tab>
              );
            }
            return null;
          })}
        </Tabs>
      </motion.article>
    </>
  );
}

export default Caracteristicas;
