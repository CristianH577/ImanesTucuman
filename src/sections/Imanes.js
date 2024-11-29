import { motion } from "framer-motion";

import {
  Tabs,
  Tab,
  Image,
  CardFooter,
  Card,
  Tooltip,
  Button,
} from "@nextui-org/react";

import TitleCustom from "../components/TitleCustom";

import {
  SVGArandelaFresada,
  SVGCuadrado,
  SVGEsfera,
  SVGRedondo,
} from "../assets/svgs";

import lista from "../assets/imanes/info-imanes.json";

function Imanes({ links, ...props }) {
  const contextImg = require.context("../assets/imanes", true);

  const date_price = "7/11/24";
  const td_class = "p-2";
  const priceTableCategories = {
    1: [1, 20, 50, 100],
    2: [1, 10, 25, 50],
    3: [1, 5, 15, 30],
  };
  const discounts =
    props?.design === "navidad"
      ? {
          8: 0.2,
          7: 0.2,
          6: 0.15,
          5: 0.1,
          4: 0.1,
        }
      : false;

  const formas = {
    Redondos: {
      label: "Redondos",
      img: <SVGRedondo className="h-full w-full max-h-[200px]" />,
      medidas: "AxB",
    },
    Cuadrados: {
      label: "Cuadrados",
      img: <SVGCuadrado className="h-full w-full" />,
      medidas: "AxBxC",
    },
    Arandelas: {
      label: "Arandelas",
      subtitle: "Fresadas",
      img: <SVGArandelaFresada className="h-full w-full" />,
      medidas: "AxB D-d",
    },
    Esferas: {
      label: "Esferas",
      subtitle: "Multicolor",
      img: <SVGEsfera className="h-full w-full max-h-[200px]" />,
      medidas: "D",
    },
  };

  const fotos = [
    {
      forma: "redondos",
      medida: "5x2",
    },
    {
      forma: "redondos",
      medida: "7x1.5",
    },
    {
      forma: "redondos",
      medida: "10x3",
    },
    {
      forma: "redondos",
      medida: "12x5",
    },
    {
      forma: "redondos",
      medida: "20x2",
    },
    {
      forma: "redondos",
      medida: "10x20",
    },
    {
      forma: "cuadrados",
      medida: "10x8x3",
    },
    {
      forma: "cuadrados",
      medida: "14.5x7x2",
    },
    {
      forma: "cuadrados",
      medida: "15x10x5",
    },
    {
      forma: "arandelas",
      medida: "12x3-6a3.5-f",
    },
    {
      forma: "arandelas",
      medida: "12x3-6a3.5-d",
    },
  ];

  return (
    <motion.section
      id="imanes"
      className="w-full bg-radial from-custom2-4 to-custom2 text-white pb-16 pt-24 px-2 sm:px-4 relative flex flex-col items-center gap-6"
      // style={{ clipPath: "polygon(0 0, 100% 5%, 100% 95%, 0% 100%)" }}
    >
      <motion.span
        className="absolute h-16 bg-content2 dark:bg-content1 -top-[.03rem] w-full left-0"
        style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 0)" }}
      />
      <motion.span
        className="absolute h-16 bg-content2 dark:bg-content1 -bottom-[.03rem] w-full left-0"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
      />

      <TitleCustom
        title={"Imanes"}
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
          Seleccione la forma que le interese y revise las medidas y precios.
          <br />
          En la tabla podrá ver que varia el precio por unidad según la
          cantidad.
          <br />
          Todas las medidas están en milímetros.
        </p>

        <p className="text-custom1 font-semibold">
          Los precios pueden variar ({date_price}).
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center w-full"
        initial={{ opacity: 0, x: "-100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <Tabs
          aria-label="Categorias del imanes"
          className=""
          classNames={{
            tabList:
              "bg-gradient-to-t from-custom1 to-custom1-3 flex-wrap justify-center shadow-md ",
            tabContent:
              "text-custom2 font-bold group-data-[selected=true]:text-white",
            cursor: "bg-gradient-to-t from-custom2 to-custom2-10",
            panel: "w-full max-w-[1200px] mt-4 min-h-[900px] ",
            tab: "w-fit",
          }}
        >
          {Object.keys(lista).map((item) => (
            <Tab key={item} title={formas?.[item]?.label}>
              <motion.div
                className="flex flex-col items-center "
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      delayChildren: 0.2,
                      staggerChildren: 0.5,
                    },
                  },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex items-center justify-center h-[250px] font-bold"
                  variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                >
                  {formas?.[item].img}
                </motion.div>

                <motion.div
                  className="overflow-auto pb-8 px-4 sm:px-8 h-[800px] w-full md:w-auto scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-custom1 scrollbar-track-custom1-6 scrollbar-w-2 scrollbar-h-2 hover:scrollbar-w-4"
                  variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                >
                  <table
                    aria-label={`Tabla de precios: ${formas?.[item]?.label}`}
                    className="text-[20px] xs:text-[24px] font-semibold"
                  >
                    <thead className="border-b-3">
                      <tr>
                        <td
                          className={`${td_class} text-center whitespace-nowrap`}
                        >
                          <p>Medida</p>
                          {formas?.[item]?.medidas}(mm)
                        </td>
                        <td colSpan={4} className="border-s-3 ">
                          <div className="flex items-end justify-center">
                            <p className="">Precio(xU)</p>
                            <p className="text-sm">Unidades minimas</p>
                          </div>
                        </td>
                      </tr>
                    </thead>

                    <tbody>
                      {Object.entries(lista?.[item]).map(([size, info]) => (
                        <tr
                          key={size}
                          className={`text-center ${
                            props?.design === "navidad"
                              ? "even:text-success"
                              : "even:text-custom1"
                          }`}
                        >
                          <td>{size.replace("_", " ")}</td>

                          {[1, 2, 3, 4].map((key, i) => {
                            const price = info?.prices?.[i];
                            const umin =
                              priceTableCategories?.[info?.table_qtts]?.[i];
                            const discount =
                              discounts?.[info?.table_prices_cat];
                            return (
                              <td
                                key={`precio_${key}`}
                                className={`${td_class} ${
                                  i === 0 && "border-s-3  ps-4"
                                } ${
                                  i === 0 &&
                                  discount &&
                                  "flex items-center justify-center gap-1"
                                }`}
                              >
                                {i === 0 && discount ? (
                                  <>
                                    <p className="">
                                      {Intl.NumberFormat("es-AR", {
                                        style: "currency",
                                        currency: "ARS",
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 0,
                                      }).format(price * (1 - discount))}
                                    </p>
                                    <div className="text-xs">
                                      <p className="text-danger">
                                        -
                                        {Intl.NumberFormat("es-AR", {
                                          style: "percent",

                                          minimumFractionDigits: 0,
                                          maximumFractionDigits: 0,
                                        }).format(discount)}
                                      </p>
                                      <p className="text-default-400 line-through">
                                        {Intl.NumberFormat("es-AR", {
                                          style: "currency",
                                          currency: "ARS",
                                          minimumFractionDigits: 0,
                                          maximumFractionDigits: 0,
                                        }).format(price)}
                                      </p>
                                    </div>
                                  </>
                                ) : (
                                  <div className="flex items-end justify-center">
                                    {Intl.NumberFormat("es-AR", {
                                      style: "currency",
                                      currency: "ARS",
                                      minimumFractionDigits: 0,
                                      maximumFractionDigits: 0,
                                    }).format(price)}
                                    <p className="text-sm">x{umin}u</p>
                                  </div>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              </motion.div>
            </Tab>
          ))}

          <Tab key="photos" title="Fotos">
            <motion.div
              className="grid xs:grid-cols-2 xs:grid-rows-6 sm:grid-cols-3 sm:grid-rows-4 lg:grid-cols-4 lg:grid-rows-3 gap-6 max-w-[900px] "
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    delayChildren: 0.1,
                    staggerChildren: 0.2,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
            >
              {fotos.map((e, i) => {
                return (
                  <motion.div
                    key={i}
                    className="flex justify-center items-center"
                    variants={{
                      hidden: { opacity: 0, scale: 0 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                  >
                    <Card
                      isFooterBlurred
                      radius="lg"
                      shadow="none"
                      className="w-full h-full bg-transparent items-center"
                      style={{
                        filter: "drop-shadow(0px 0px 10px rgba(0,0,0,.8))",
                      }}
                    >
                      <Image
                        src={contextImg(`./fotos/${e?.medida}.webp`)}
                        className="object-cover h-full w-full max-h-[200px] max-w-[200px] "
                        removeWrapper
                      />
                      <CardFooter className="border-divider border-3 border-t-0 capitalize w-fit">
                        <p
                          className="text-white text-2xl"
                          style={{
                            textShadow: `0 2px 3px black`,
                          }}
                        >
                          {e?.medida.replace("-", " ")}
                        </p>
                      </CardFooter>
                    </Card>
                  </motion.div>
                );
              })}

              <motion.div
                className="flex items-center justify-center"
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: { opacity: 1, scale: 1 },
                }}
                viewport={{ once: true }}
              >
                <Tooltip
                  content="Ver mas fotos"
                  className="text-foreground"
                  showArrow
                >
                  <Button
                    variant=""
                    className="w-fit h-fit"
                    onPress={() => {
                      const newWindow = window.open(
                        links?.fotos,
                        "_blank",
                        "noopener,noreferrer"
                      );
                      if (newWindow) newWindow.focus();
                    }}
                  >
                    <Image
                      src={contextImg(`./more-imgs.svg`)}
                      className="w-full h-full"
                      classNames={{
                        wrapper: "w-full h-full ",
                      }}
                    />
                  </Button>
                </Tooltip>
              </motion.div>
            </motion.div>
          </Tab>
        </Tabs>
      </motion.div>
    </motion.section>
  );
}

export default Imanes;
