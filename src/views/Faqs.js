import { motion } from "framer-motion";
import { useOutletContext } from "react-router";

import { Tabs, Tab } from "@nextui-org/react";

import Envios from "./Faqs/Envios";
import Pagos from "./Faqs/Pagos";
import Consideraciones from "./Faqs/Consideraciones";
import Usos from "./Faqs/Usos";

function Faqs() {
  const context = useOutletContext();

  const tabs = [
    {
      id: "envios",
      title: "Envíos",
      content: <Envios links={context?.links} />,
    },
    { id: "pagos", title: "Pagos", content: <Pagos /> },
    {
      id: "consideraciones",
      title: "Consideraciones",
      content: <Consideraciones />,
    },
    { id: "usos", title: "Usos", content: <Usos links={context?.links} /> },
  ];

  return (
    <>
      <motion.section
        className="max-w-[80%] text-center"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        Cualquier duda que no se responda en esta sección puede consultarla por
        las{" "}
        <span
          title="Ir a redes"
          className="font-bold text-custom1--9 dark:text-custom1 hover:underline cursor-pointer"
          onClick={() => {
            const e = document.querySelector("#footer");
            if (e) e.scrollIntoView();
          }}
        >
          redes
        </span>
        .
      </motion.section>

      <motion.section
        className="w-full text-center"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <Tabs
          aria-label="Secciones de FAQS"
          classNames={{
            tabList:
              "bg-gradient-to-t from-custom1 to-custom1-3 flex-wrap justify-center shadow-md",
            tabContent:
              "text-custom2 font-bold group-data-[selected=true]:text-white",
            cursor: "bg-gradient-to-t from-custom2 to-custom2-10",
            panel:
              "w-full mt-4 min-h-[700px] md:min-h-[600px] xl:min-h-[550px] text-start",
            tab: "w-fit",
          }}
        >
          {tabs.map((tab) => (
            <Tab key={tab.id} title={tab.title}>
              {tab.content}
            </Tab>
          ))}
        </Tabs>
      </motion.section>
    </>
  );
}

export default Faqs;
