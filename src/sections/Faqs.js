import { motion } from "framer-motion";

import { Tabs, Tab } from "@nextui-org/react";

import TitleCustom from "../components/TitleCustom";

import { MdOutlineMapsHomeWork } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { FaRegCalendar } from "react-icons/fa";
import { PiCity } from "react-icons/pi";
import {
  FaMoneyBillTransfer,
  FaMotorcycle,
  FaRegCreditCard,
  FaStore,
} from "react-icons/fa6";
import { IoCardOutline } from "react-icons/io5";
import { SiMercadopago } from "react-icons/si";
import { HiOutlineBanknotes } from "react-icons/hi2";

function Faqs({ links, ...props }) {
  const text_class =
    props?.design === "navidad" ? "text-success" : "text-custom1";

  const lista_envios = [
    {
      icon: <MdOutlineMapsHomeWork size={24} />,
      title: "Retiro",
      content: (
        <div className=" ps-8 ">
          <ol className="list-disc">
            <li>
              <p>
                Puede ver y comprar directamente en 9 de julio 4900, S.M. de
                Tucumán, Tucumán (Consulte Imanes Tucumán en{" "}
                <a
                  href={links?.googlemaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-custom1"
                >
                  Google Maps
                </a>
                ).
              </p>
            </li>
            <li>
              Horarios: Lunes a Sábados de 13-21hs (Irregular.{" "}
              <a
                href={links?.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-custom1"
              >
                Consultar
              </a>
              ).
            </li>
            {/* <li>Av. Juan Domingo Peron 2150, Yerba Buena, Tucumán</li> */}
          </ol>
        </div>
      ),
    },
    {
      icon: <FaRegCalendar size={24} />,
      title: "Entrega en zona centro",
      description: (
        <>
          Se puede coordinar en los días de entrega (
          <a
            href={links?.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-custom1"
          >
            Consultar
          </a>
          ).
        </>
      ),
    },
    {
      icon: <PiCity size={24} />,
      title: "Envío a zona centro ($3000)",
      description:
        "Deberá efectuar el pago del envío por transferencia antes de realizarlo, el resto lo pago en la entrega.",
    },
    {
      icon: <FaMotorcycle size={24} />,
      title: "Uber",
      description:
        "Deberá efectuar el pago del pedido+envío por transferencia.",
      content: (
        <div className=" ps-8">
          <ol className=" list-disc">
            <li>
              Si quiere enviar uno usted deberá solo transferir el costo del
              pedido antes de entregarlo al cadete.
            </li>
          </ol>
        </div>
      ),
    },
    {
      icon: <BsBoxSeam size={24} />,
      title: "Encomienda",
      content: (
        <div className=" ps-8">
          <ol className=" list-disc">
            <li>A cotizar por empresa, destino, tamaño y peso.</li>
            <li>+$3000 Envío prioritario(opcional).</li>
            <li>
              Contrareembolso: tiene un recargo(%) dependiendo la empresa.
            </li>
          </ol>
        </div>
      ),
    },
  ];

  const impuestos = [
    {
      nombre: "IVA",
      valor: "8%",
    },
    {
      nombre: "IIBB",
      valor: "4%",
    },
  ];
  const lista_pago = [
    {
      icon: <HiOutlineBanknotes size={24} />,
      title: "Efectivo",
    },
    {
      icon: <FaMoneyBillTransfer size={24} />,
      title: "Transferencia",
    },
    {
      icon: <IoCardOutline size={24} />,
      title: "Debito",
      description: (
        <>
          +3.25%(Comisión) +IVA = <b className={text_class}>+11.25%</b>
        </>
      ),
    },
    {
      icon: <FaRegCreditCard size={22} />,
      title: "Credito - 1 Pago",
      description: (
        <>
          +6.5%(Comisión) +IVA = <b className={text_class}>+14.5%</b>
        </>
      ),
    },
    {
      icon: <FaStore size={24} />,
      title: "Tiendas Online",
      description: (
        <>
          +5%(Comisión) +IVA = <b className={text_class}>+13%</b>
        </>
      ),
    },
    {
      icon: <SiMercadopago size={24} />,
      title: "Mercado Libre",
      description: (
        <>
          +14.5%(Comisión) +IVA = <b className={text_class}>+22.5%</b>
        </>
      ),
      content: (
        <ol className="ps-12 list-disc">
          <li>
            <p>
              Hasta $12.000: <b className={text_class}>+$900</b>
            </p>
          </li>
          <li>
            <p>
              Entre $12.000-$28.000: <b className={text_class}>+$1800</b>
            </p>
          </li>
        </ol>
      ),
    },
  ];

  return (
    <section
      id="faqs"
      className="w-full px-4 py-16 sm:px-16 bg-radial from-custom2-4 to-custom2 text-white pb-16 pt-24 relative flex flex-col items-center gap-6"
    >
      <motion.span
        className="absolute h-16 bg-content2 dark:bg-content1 -top-[.03rem] w-full left-0"
        style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 0)" }}
      />
      {/* <motion.span
        className="absolute h-16 bg-content2 dark:bg-content1 -bottom-[.03rem] w-full left-0"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
      /> */}

      <TitleCustom
        title={"FAQS"}
        animation={{
          variants: {
            hidden: { scale: 0, opacity: 0 },
            visible: { scale: 1, opacity: 1 },
          },
          initial: "hidden",
          whileInView: "visible",
        }}
      />

      <motion.p
        className="text-lg max-w-[80%] text-center"
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 },
        }}
        initial="hidden"
        whileInView="visible"
      >
        Cualquier duda que no se responda en esta seccion puede consultarla por
        las{" "}
        <a
          href={"#contacto"}
          rel="noopener noreferrer"
          className="text-custom1"
        >
          redes
        </a>
        .
      </motion.p>

      <motion.div
        className="w-full max-w-[1200px] min-h-[800px] flex flex-col items-center"
        initial={{ opacity: 0, x: "-100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <Tabs
          aria-label="Categorias del catalogo"
          className=""
          classNames={{
            tabList:
              "bg-gradient-to-t from-custom1 to-custom1-3 flex-wrap justify-center shadow-md ",
            tabContent:
              "text-custom2 font-bold group-data-[selected=true]:text-white",
            cursor: "bg-gradient-to-t from-custom2 to-custom2-10",
            panel: "w-full mt-4 ",
            tab: "w-fit",
          }}
        >
          <Tab key="envios" title="Envíos">
            <motion.ol
              className="text-start space-y-3 text-lg"
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {lista_envios.map((item, i) => (
                <li key={i}>
                  <div className={"flex gap-2 items-start"}>
                    <span>{item?.icon}</span>
                    <p>
                      <strong>{item?.title} </strong>
                      {item?.description}
                    </p>
                  </div>

                  {item?.content}
                </li>
              ))}
            </motion.ol>
          </Tab>

          <Tab key="pagos" title="Pagos">
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex gap-4 text-xl border-b w-fit pe-8 mb-2">
                <b>Impuestos:</b>

                {impuestos.map((item) => (
                  <p key={item?.nombre}>
                    {item?.nombre} = {item?.valor}
                  </p>
                ))}
              </div>

              <ol className="text-start space-y-2 text-lg">
                {lista_pago.map((item, i) => (
                  <li key={i}>
                    <div className={"flex gap-2 items-start"}>
                      <span>{item?.icon}</span>
                      <p>
                        <strong>{item?.title} </strong>
                        {item?.description}
                      </p>
                    </div>

                    {item?.content}
                  </li>
                ))}
              </ol>
            </motion.div>
          </Tab>
        </Tabs>
      </motion.div>
    </section>
  );
}

export default Faqs;
