import CustomLink from "../../components/CustomLink";

import { MdOutlineMapsHomeWork } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { FaDirections, FaRegCalendar, FaWhatsapp } from "react-icons/fa";
import { PiCity } from "react-icons/pi";
import { FaMotorcycle } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

function Envios({ links }) {
  const link_class = "text-custom1--8 dark:text-custom1";
  const lista_envios = [
    {
      icon: <MdOutlineMapsHomeWork size={24} />,
      title: "Retiro",
      content: (
        <div className="ps-8">
          <ol className="list-disc">
            <li>
              <p>
                Puede retirar por 9 de julio 4900, S.M. de Tucumán, Tucumán
                (Consulte Imanes Tucumán en{" "}
                <CustomLink
                  href={links?.googlemaps}
                  title="Ir a ubicacion en Google Maps"
                  text="Google Maps"
                  icon={<SiGooglemaps />}
                  className={link_class}
                />
                ). No es local ni showroom pero puede ver los productos aqui.
              </p>
            </li>
            <li>
              Horarios: Lunes a Sábados (
              <CustomLink
                href={
                  links?.whatsapp +
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
              <p>
                Indicaciones sugeridas de{" "}
                <CustomLink
                  href={links?.googlemaps_indicaciones}
                  title="Ir a indicaciones en Google Maps"
                  text="como llegar"
                  icon={<FaDirections />}
                  className={link_class}
                />
                .
              </p>
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
          Se puede coordinar en los días de entrega (
          <CustomLink
            href={
              links?.whatsapp + "&text=Hola. Quiero coordinar para un entrega."
            }
            title="Coordinar por Wharsapp"
            text="Consultar"
            icon={<FaWhatsapp />}
            className={link_class}
          />
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
              pedido antes de entregarlo al cadete. La ubicación aparece como
              Imanes Tucumán.
            </li>
          </ol>
        </div>
      ),
    },
    {
      icon: <BsBoxSeam size={24} />,
      title: "Encomienda",
      content: (
        <div className="ps-8">
          <ol className=" list-disc">
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
              <CustomLink
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
    <ol className="space-y-3">
      {lista_envios.map((item, i) => (
        <li key={i}>
          <div className="flex gap-2">
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
  );
}

export default Envios;
