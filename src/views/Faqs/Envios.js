import LinkCustom from "../../layout/components/LinkCustom";

import { MdOutlineMapsHomeWork } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { FaDirections, FaRegCalendar, FaWhatsapp } from "react-icons/fa";
import { PiCity } from "react-icons/pi";
import { FaMotorcycle } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

import MapUbication from "./Envios/MapUbication";

function Envios({ LINKS_SITES = {} }) {
  const link_class = "text-custom1--8 dark:text-custom1";
  const lista_envios = [
    {
      icon: <MdOutlineMapsHomeWork size={24} />,
      title: "Retiro",
      content: (
        <div className="space-y-2">
          <ol className="list-disc list-inside">
            <li>
              Puede retirar por 9 de julio 4900, S.M. de Tucumán, Tucumán
              (Consulte Imanes Tucumán en{" "}
              <LinkCustom
                href={LINKS_SITES?.googlemaps}
                title="Ir a ubicacion en Google Maps"
                text="Google Maps"
                icon={<SiGooglemaps />}
                className={link_class}
              />
              ). No es local pero puede ver los productos aqui.
            </li>
            <li>
              Horarios: Lunes a Sábados (
              <LinkCustom
                href={
                  LINKS_SITES?.whatsapp +
                  "&text=Hola. Quiero consultar por los horarios de atención."
                }
                title="Consultar horarios por Wharsapp"
                text="Consultar"
                icon={<FaWhatsapp />}
                className={link_class}
              />
              ).
            </li>
            <li>
              Indicaciones sugeridas de{" "}
              <LinkCustom
                href={LINKS_SITES?.googlemaps_indicaciones}
                title="Ir a indicaciones en Google Maps"
                text="como llegar"
                icon={<FaDirections />}
                className={link_class}
              />
              .
            </li>
          </ol>
        </div>
      ),
    },
    {
      icon: <FaRegCalendar size={24} />,
      title: "Entrega en zona centro",
      content: (
        <p>
          Se puede coordinar en los días de entrega (
          <LinkCustom
            href={
              LINKS_SITES?.whatsapp +
              "&text=Hola. Quiero coordinar para un entrega."
            }
            title="Coordinar por Wharsapp"
            text="Consultar"
            icon={<FaWhatsapp />}
            className={link_class}
          />
          ).
        </p>
      ),
    },
    {
      icon: <PiCity size={24} />,
      title: "Envío a zona centro ($3500)",
      content: (
        <p>
          Deberá efectuar el pago del envío por transferencia antes de
          realizarlo, el resto lo paga en la entrega.
        </p>
      ),
    },
    {
      icon: <FaMotorcycle size={24} />,
      title: "Uber",
      content: (
        <div>
          <p>Deberá efectuar el pago del pedido+envío por transferencia.</p>

          <ol className="list-disc list-inside">
            <li>
              Si quiere enviar uno deberá solo transferir el pago del pedido
              antes de entregarlo al cadete. La ubicación aparece como Imanes
              Tucumán.
            </li>
          </ol>
        </div>
      ),
    },
    {
      icon: <BsBoxSeam size={24} />,
      title: "Encomienda",
      content: (
        <div>
          <ol className="list-disc list-inside">
            <li>A cotizar por empresa, destino, tamaño y peso.</li>
            <li>+$3000 Envío prioritario(opcional).</li>
            <li>
              Correo Argentino(Contrareembolso): Paga el pedido en sucursal al
              retirarlo, tiene un recargo del 20% al total. El envio cuesta
              aprox. +$15000 y debe transferirse antes.
            </li>
            <li>
              Andreani: Paga el pedido por transferencia y el envio se paga por
              un link de pago de la empresa. Puede cotizar en la{" "}
              <LinkCustom
                href="https://www.andreani.com/?tab=cotizar-envio"
                text="web de Andreani"
                icon={<FiExternalLink />}
                className={link_class}
              />
              .
            </li>
            <li>
              Mercado Libre: Puede gestionar todo por la pagina. Tiene un
              recargo del 20% aprox.
            </li>
          </ol>
        </div>
      ),
    },
  ];

  return (
    <article className="space-y-6">
      <ol className="space-y-4">
        {lista_envios.map((item, i) => (
          <li key={i}>
            <div className="flex gap-2">
              <span>{item?.icon}</span>
              <b>{item?.title}</b>
            </div>

            {item?.content}
          </li>
        ))}
      </ol>

      <MapUbication />
    </article>
  );
}

export default Envios;
