import { motion } from "framer-motion";

import { Tabs, Tab, Image, Divider } from "@nextui-org/react";

import TitleCustom from "../components/TitleCustom";

const contextImgs = require.context("../assets/otros", true);

function Otros(props) {
  const date_price = "7/11/24";
  const discount = props?.design === "navidad" ? 0.1 : false;

  const categorias = [
    {
      id: "imanes",
      label: "Imanes: Otros",
      items: [
        {
          name: "Kluster",
          img_name: "kluster.webp",
          price: 12500,
          desc: {
            descripción:
              "Juego de 20 piedras magnéticas ovalados de 35x13mm + cuerda de polipropileno.",
          },
        },
        {
          name: "Neocube",
          img_name: "neocube.webp",
          price: 18500,
          desc: {
            medidas: "3x3x3cm",
            descripción:
              "216 imanes esféricos de 5mm de diámetro. Multicolor(6 colores distintos).",
          },
        },
        {
          name: "Neocube Dorado",
          img_name: "neocube-dorado.webp",
          price: 18500,
          desc: {
            medidas: "3x3x3cm",
            descripción:
              "216 imanes esféricos de 5mm de diámetro de color dorado.",
          },
        },
        {
          name: "Imán en tira flexible",
          img_name: "tira_flexible.webp",
          price: 1400,
          price_measure: "/m",
          desc: {
            medidas: "9x2mm",
          },
        },
      ],
    },
    {
      id: "electricidad",
      label: "Electricidad",
      items: [
        {
          name: "Bornera Botón 2 Vías",
          img_name: "bornera_boton-2.webp",
          price: "150",
          desc: {
            medidas: "20x17x13mm",
            cables: "0.5-2.5mm",
            amperaje: "10A",
            materiales: "PVC",
            // peso:"1.75g",
          },
        },
        {
          name: "Bornera Clip 2 Vías",
          img_name: "bornera_clip-2.webp",
          price: "1450",
          desc: {
            medidas: "40x25x15mm",
            cables: "0.5-2.5mm",
            amperaje: "25A",
            materiales: "ABS",
            // peso:"8g",
          },
        },
        {
          name: "Bornera Clip 3 Vías",
          img_name: "bornera_clip-3.webp",
          price: "2020",
          desc: {
            medidas: "41x31x15mm",
            cables: "0.5-2.5mm",
            amperaje: "25A",
            materiales: "ABS",
            // peso:"11.4g",
          },
        },
        {
          name: "Empalme Clip 2 Cables",
          img_name: "empalme_clip-2.webp",
          price: "580",
          desc: {
            medidas: "20x12x14mm",
            cables: "0.5-2.5mm",
            amperaje: "25A",
            materiales: "ABS",
          },
        },
        {
          name: "Empalme Clip 3 Cables",
          img_name: "empalme_clip-3.webp",
          price: "760",
          desc: {
            medidas: "20x16x14mm",
            cables: "0.5-2.5mm",
            amperaje: "25A",
            materiales: "ABS",
          },
        },
        {
          name: "Empalme Clip 5 Cables",
          img_name: "empalme_clip-5.webp",
          price: "1150",
          desc: {
            medidas: "20x26x14mm",
            cables: "0.5-2.5mm",
            amperaje: "25A",
            materiales: "ABS",
          },
        },
        {
          name: "Empalme Rápido 1 a 2 Cables",
          img_name: "empalme-1a2.webp",
          price: "400",
          desc: {
            medidas: "27x24x16mm",
            cables: "0.5-2.5mm",
            amperaje: "25A",
            materiales: "PVC",
            // peso:"3g",
          },
        },
        {
          name: "Empalme Rápido 3 Cables",
          img_name: "empalme_rapido_3.webp",
          price: "750",
          desc: {
            marca: "Hellermann Tyton",
            // modelo: "Helacon Plus",
            medidas: "16.5x16.5x7.7mm",
            cables: "0.5-2.5mm",
            amperaje: "24A",
            materiales: "Policarbonato",
          },
        },
      ],
    },
    {
      id: "otros",
      label: "Otros",
      items: [
        {
          name: "Sales de polifosfato",
          img_name: "sales_polifosfato.webp",
          price: "25000",
          price_measure: "/kg",
          desc: {
            marca: "Siliphos",
            diámetro: "20mm",
            "Calidad Alimentaria": "",
            rendimiento: "8-12meses en tanque de 1000L y 6-8 meses en boya",
          },
        },
      ],
    },
  ];

  return (
    <motion.section
      id="otros"
      className="w-full max-w-[1200px] min-h-[800px] md:min-h-screen px-4 py-16 sm:px-16 flex flex-col items-center gap-6"
      variants={{
        hidden: { x: "-100%" },
        visible: { x: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <TitleCustom
        title={"Otros"}
        animation={{
          variants: {
            hidden: { scale: 0, opacity: 0 },
            visible: { scale: 1, opacity: 1 },
          },
          initial: "hidden",
          whileInView: "visible",
        }}
      />

      <motion.div
        className="text-lg max-w-[80%] text-center"
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        whileInView="visible"
      >
        <p>
          Además de imanes de neodimio también ofrecemos otros artículos que
          podrían interesarle.
        </p>

        <p className="text-custom1 font-semibold">
          Los precios pueden variar ({date_price}).
        </p>
      </motion.div>

      <Tabs
        aria-label="Otros articulos"
        classNames={{
          tabList:
            "bg-gradient-to-t from-custom2 to-custom2-10 flex-wrap justify-center shadow-md",
          tabContent:
            "text-white group-data-[selected=true]:font-semibold group-data-[selected=true]:text-black",
          cursor: "bg-gradient-to-t from-custom1 to-custom1-10",
          panel: "w-full mt-4 ",
          tab: "w-fit",
        }}
      >
        {categorias.map((cat) => (
          <Tab key={cat.id} title={cat.label}>
            <motion.article
              className="overflow-auto h-[800px] w-full md:w-auto scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-custom1 scrollbar-track-custom1-6 scrollbar-w-2 scrollbar-h-2 hover:scrollbar-w-4"
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {cat.items.map((item, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center sm:flex-row gap-6 py-4`}
                >
                  {i !== 0 && (
                    <Divider className="sm:hidden w-2/3 self-center" />
                  )}
                  <div className="flex flex-col items-center justify-center rounded-lg gap-2 ps-2">
                    {item?.img_name && (
                      <Image
                        src={contextImgs(`./${cat.id}/${item?.img_name}`)}
                        className="max-w-[200px] object-contain "
                        removeWrapper
                        style={{
                          filter: "drop-shadow(2px 4px 6px black)",
                        }}
                      />
                    )}
                    <div
                      className={`bg-gradient-to-r py-2 px-3 rounded-xl text-center font-semibold text-xl shadow-lg flex gap-1 ${
                        props?.design === "navidad"
                          ? "from-success-200 to-success text-white"
                          : "from-custom1 to-custom1-6"
                      }`}
                    >
                      {Intl.NumberFormat("es-AR", {
                        style: "currency",
                        currency: "ARS",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      }).format(
                        discount
                          ? item?.price * (discount ? 1 - discount : 1)
                          : item?.price
                      )}
                      {item?.price_measure}
                      {discount && (
                        <div className="text-xs">
                          <p className="text-custom1-4">
                            -
                            {Intl.NumberFormat("es-AR", {
                              style: "percent",
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            }).format(discount)}
                          </p>
                          <p className="text-default-600 line-through">
                            {Intl.NumberFormat("es-AR", {
                              style: "currency",
                              currency: "ARS",
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            }).format(item?.price)}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="py-2 flex flex-col justify-between pe-4">
                    <div className="text-start text-lg">
                      <h1 className="capitalize text-3xl font-bold mb-2 border-b pe-4">
                        {item?.name}
                      </h1>

                      {item?.desc &&
                        Object.keys(item?.desc).map((key) => (
                          <p key={key} className="break-words">
                            <b className="capitalize">{key}</b>
                            {item?.desc[key] && <b>: </b>}
                            {item?.desc[key]}
                          </p>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.article>
          </Tab>
        ))}
      </Tabs>
    </motion.section>
  );
}

export default Otros;
