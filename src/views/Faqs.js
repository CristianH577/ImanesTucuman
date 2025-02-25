import { motion } from "framer-motion";

import { Tabs, Tab } from "@nextui-org/react";

import SectionView from "../components/SectionView";
import Envios from "./Faqs/Envios";
import Pagos from "./Faqs/Pagos";
import CustomLink from "../components/CustomLink";
import Consideraciones from "./Faqs/Consideraciones";
import Usos from "./Faqs/Usos";
import Info from "./Faqs/Info";

function Faqs({ links }) {
  return (
    <SectionView id="faqs" title="FAQS" className="px-4 sm:px-16 py-24">
      <motion.p
        className="max-w-[80%] text-center"
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 },
        }}
      >
        Cualquier duda que no se responda en esta sección puede consultarla por
        las{" "}
        <CustomLink
          href="#contacto"
          title="Ver los links de las redes"
          text="redes"
          target="_self"
          className="text-custom1--8 dark:text-custom1"
        />
        .
      </motion.p>

      <motion.article
        className="w-full text-center"
        variants={{
          hidden: { opacity: 0, x: "-100%" },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <Tabs
          aria-label="Secciones de FAQS"
          classNames={{
            tabList:
              "bg-gradient-to-t from-custom1 to-custom1-3 navidad:from-custom1--8 navidad:to-custom1 flex-wrap justify-center shadow-md",
            tabContent:
              "text-custom2 font-bold group-data-[selected=true]:text-white",
            cursor: "bg-gradient-to-t from-custom2 to-custom2-10",
            panel:
              "w-full mt-4 min-h-[700px] md:min-h-[600px] xl:min-h-[550px] text-start",
            tab: "w-fit",
          }}
        >
          <Tab key="envios" title="Envíos">
            <Envios links={links} />
          </Tab>

          <Tab key="pagos" title="Pagos">
            <Pagos />
          </Tab>

          <Tab key="usos" title="Usos">
            <Usos links={links} />
          </Tab>

          <Tab key="considerations" title="Consideraciones">
            <Consideraciones />
          </Tab>

          <Tab key="info" title="Info.">
            <Info />
          </Tab>
        </Tabs>
      </motion.article>
    </SectionView>
  );
}

export default Faqs;
