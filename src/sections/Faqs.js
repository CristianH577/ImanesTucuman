import { motion } from "framer-motion";

import { Tabs, Tab } from "@nextui-org/react";

import SectionView from "../components/SectionView";

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

function Faqs({ links }) {
  const text_class = "text-custom1 navidad:text-custom1-4";
  const link_class = "hover:text-custom1-3 hover:border-b";

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
                  title="Ir a ubicacion en Google Maps"
                  className={`${text_class} ${link_class}`}
                >
                  Google Maps
                </a>
                ).
              </p>
            </li>
            <li>
              Horarios: Lunes a Sábados(
              <a
                href={
                  links?.whatsapp +
                  "&text=Hola. Quiero consultar por los horarios de atención."
                }
                target="_blank"
                rel="noopener noreferrer"
                title="Consultar horarios por Wharsapp"
                className={`${text_class} ${link_class}`}
              >
                Consultar
              </a>
              ).
            </li>
          </ol>
        </div>
      ),
    },
    {
      icon: <FaRegCalendar size={24} />,
      title: "Entrega en zona centro",
      description: (
        <>
          Se puede coordinar en los días de entrega(
          <a
            href={
              links?.whatsapp + "&text=Hola. Quiero coordinar para un entrega."
            }
            target="_blank"
            rel="noopener noreferrer"
            title="Coordinar por Wharsapp"
            className={text_class}
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
      nombre: "IIBB(Tuc.)",
      valor: "6%",
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
          +3.25%(Comisión) +IVA+IIBB = <b className={text_class}>+17.25%</b>
        </>
      ),
    },
    {
      icon: <FaRegCreditCard size={22} />,
      title: "Credito - 1 Pago",
      description: (
        <>
          +6.5%(Comisión) +IVA+IIBB = <b className={text_class}>+20.5%</b>
        </>
      ),
    },
    {
      icon: <FaStore size={24} />,
      title: "Tiendas Online",
      description: (
        <>
          +5%(Comisión) +IVA+IIBB = <b className={text_class}>+19%</b>
        </>
      ),
    },
    {
      icon: <SiMercadopago size={24} />,
      title: "Mercado Libre",
      description: (
        <>
          +14.5%(Comisión) +IVA+IIBB = <b className={text_class}>+28.5%</b>
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
    <SectionView
      id="faqs"
      title="FAQS"
      className="bg-radial from-custom2-4 to-custom2 text-white px-4 sm:px-16 py-24"
      style={{
        clipPath: "polygon(0 0, 100% 4rem, 100% 100%, 0 100%)",
      }}
      content={
        <>
          <motion.p
            className="text-lg max-w-[80%] text-center"
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            Cualquier duda que no se responda en esta sección puede consultarla
            por las{" "}
            <a
              href="#contacto"
              rel="noopener noreferrer"
              title="Ver los links de las redes"
              className={`${text_class} ${link_class}`}
            >
              redes
            </a>
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
                  "w-full mt-4 min-h-[600px] md:min-h-[500px] xl:min-h-[450px]",
                tab: "w-fit",
              }}
            >
              <Tab key="envios" title="Envíos">
                <ol className="text-start space-y-3 text-lg">
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
                </ol>
              </Tab>

              <Tab key="pagos" title="Pagos">
                <div>
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
                        <div className="flex gap-2 items-start">
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
                </div>
              </Tab>
            </Tabs>
          </motion.article>
        </>
      }
    />
  );
}

export default Faqs;
