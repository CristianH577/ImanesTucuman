import LinkCustom from "../../components/LinkCustom";

import MapUbication from "./Envios/MapUbication";

import { MdOutlineMapsHomeWork } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { FaDirections, FaRegCalendar, FaWhatsapp } from "react-icons/fa";
import { PiCity } from "react-icons/pi";
import { FaMotorcycle } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

function Envios({ links = {} }) {
  const lista_envios = [
    {
      icon: MdOutlineMapsHomeWork,
      title: "Retiro",
      content: (
        <ol className="list-disc">
          <li>
            Puede retirar por 9 de julio 4900, S.M. de Tucumán, Tucumán
            (Consulte Imanes Tucumán en{" "}
            <LinkCustom
              href={links?.googlemaps}
              title="Ir a ubicacion en Google Maps"
              text="Google Maps"
              icon={<SiGooglemaps />}
            />
            ). No es local pero puede ver los productos aqui.
          </li>
          <li>
            Horarios: Lunes a Sábados (
            <LinkCustom
              href={
                links?.whatsapp +
                "&text=Hola. Quiero consultar por los horarios de atención."
              }
              title="Consultar horarios por Wharsapp"
              text="Consultar"
              icon={<FaWhatsapp />}
            />
            ).
          </li>
          <li>
            Indicaciones sugeridas de{" "}
            <LinkCustom
              href={links?.googlemaps_indicaciones}
              title="Ir a indicaciones en Google Maps"
              text="como llegar"
              icon={<FaDirections />}
            />
            .
          </li>
        </ol>
      ),
    },
    {
      icon: FaRegCalendar,
      title: "Entrega en zona centro",
      content: (
        <p>
          Se puede coordinar en los días de entrega (
          <LinkCustom
            href={
              links?.whatsapp + "&text=Hola. Quiero coordinar para un entrega."
            }
            title="Coordinar por Wharsapp"
            text="Consultar"
            icon={<FaWhatsapp />}
          />
          ).
        </p>
      ),
    },
    {
      icon: PiCity,
      title: "Envío a zona centro ($3500)",
      content: (
        <p>
          Deberá efectuar el pago del envío por transferencia antes de
          realizarlo, el resto lo paga en la entrega.
        </p>
      ),
    },
    {
      icon: FaMotorcycle,
      title: "Uber",
      content: (
        <p>
          Deberá efectuar el pago del pedido+envío por transferencia.
          <br />
          Si quiere enviar uno deberá solo transferir el pago del pedido antes
          de entregarlo al cadete. La ubicación aparece como Imanes Tucumán.
        </p>
      ),
    },
    {
      icon: BsBoxSeam,
      title: "Encomienda",
      content: (
        <div>
          <ol className="list-disc">
            <li>A cotizar por empresa, destino, tamaño y peso.</li>
            <li>+$3500 Envío prioritario(opcional).</li>
            <li>
              Correo Argentino(Contrareembolso): Paga el pedido en sucursal al
              retirarlo, tiene un recargo del 20% al total. El envio cuesta
              aprox. +$15000 y debe transferirse antes.
            </li>
            <li>
              Andreani: Paga el pedido por transferencia y el envio se paga por
              un cupon de pago de la empresa. Puede cotizar en la{" "}
              <LinkCustom
                href="https://www.andreani.com/?tab=cotizar-envio"
                text="web de Andreani"
                icon={<FiExternalLink />}
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
    <article className="pb-4">
      <ol className="list-none ps-0">
        {lista_envios.map((item, i) => (
          <li key={i}>
            <div className="flex items-center gap-2 text-tert">
              <item.icon className="h-full w-fit" />
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
