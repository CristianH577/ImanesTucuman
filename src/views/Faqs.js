import { motion } from "framer-motion";
import { useOutletContext } from "react-router";

import { Tabs, Tab, Link } from "@nextui-org/react";

import Envios from "./Faqs/Envios";
import Pagos from "./Faqs/Pagos";
import Consideraciones from "./Faqs/Consideraciones";
import Usos from "./Faqs/Usos";
import Info from "./Faqs/Info";

function Faqs() {
  const context = useOutletContext();

  return (
    <>
      <motion.div
        className="max-w-[80%] text-center"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        Cualquier duda que no se responda en esta sección puede consultarla por
        las{" "}
        <Link
          title="Ir a redes"
          className="cursor-pointer text-custom1--8 dark:text-custom1"
          onPress={() => {
            const e = document.querySelector("#footer");
            if (e) e.scrollIntoView();
            // if (e) e.scrollTo({ top: e.scrollHeight });
          }}
        >
          redes
        </Link>
        {/* <CustomLink
          href="#contacto"
          title="Ver los links de las redes"
          text="redes"
          target="_self"
          className="text-custom1--8 dark:text-custom1"
        /> */}
        .
      </motion.div>

      <motion.article
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
          <Tab key="envios" title="Envíos">
            <Envios links={context?.links} />
          </Tab>

          <Tab key="pagos" title="Pagos">
            <Pagos />
          </Tab>

          <Tab key="usos" title="Usos">
            <Usos links={context?.links} />
          </Tab>

          <Tab key="considerations" title="Consideraciones">
            <Consideraciones />
          </Tab>

          <Tab key="info" title="Info.">
            <Info />
          </Tab>
        </Tabs>
      </motion.article>
    </>
  );
}

export default Faqs;
