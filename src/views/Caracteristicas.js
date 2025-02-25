import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Tabs, Tab } from "@nextui-org/react";

import SectionView from "../components/SectionView";
import TableInfo from "./Caracteristicas/TableInfo";

import { dbImanes } from "../consts/dbs";

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

  const [tab, setTab] = useState("redondos");
  const [data, setData] = useState(false);

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
      id="caracteristicas"
      title="Características"
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
          Los valores son <span className={text_class}>aproximados</span> y bajo{" "}
          <span className={text_class}>condiciones ideales</span>.
          <br />
          La información es <span className={text_class}>inchequeable</span> y
          de <span className={text_class}>dudosa</span> procedencia; utilizar
          solo a modo de referencia.
        </p>
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
            panel: "mt-4 min-h-[800px] flex flex-col sm:items-center",
            tab: "w-fit",
          }}
          selectedKey={tab}
          onSelectionChange={setTab}
          destroyInactiveTabPanel={false}
        >
          {Object.keys(dbImanes).map((cat) => {
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
    </SectionView>
  );
}

export default Caracteristicas;
