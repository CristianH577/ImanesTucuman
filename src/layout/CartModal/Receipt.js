import { Select, SelectItem, Divider } from "@nextui-org/react";

import Logo from "../components/Logo";
import List from "./List";

import { SiMercadopago } from "react-icons/si";
import { PiMoneyWavy } from "react-icons/pi";
import { CiBank } from "react-icons/ci";

import {
  SVGLogoGalicia,
  SVGLogoPaypal,
  SVGLogoSantander,
} from "../../assets/layout/svgs";

function Receipt({ downloading, cart, refReceipt, setConditions, conditions }) {
  const entrega_items = {
    retiro: {
      label: "Voy a retirar",
      description_item: "Quiero pasar a retirar",
      description_select: "Debe coordinar cuando quiera pasar.",
    },
    coordinar: {
      label: "Quiero coordinar",
      description_item: "Quiero saber cuando se hagan entregas en el centro",
    },
    cadete: {
      label: "Mando a buscarlo",
      description_item: "Quiero enviar a que lo busquen",
      description_select:
        "Si es un Uber, se transfiere el pago antes de entregar.",
    },
    envio_uber: {
      label: "Envío: Uber",
      description_item: "Quiero que me lo envíen por Uber",
      description_select: "Se transfiere el pago + envio antes.",
    },
    envio_online: {
      label: "Envío: Tienda Online",
      description_item: "Quiero intermediar con Mercado Libre",
      description_select:
        "Puede comprar y arreglar por medio de ML(se pagan comisiones).",
    },
    envio_encomienda: {
      label: "Envío: Encomienda",
      description_item: "Quiero arreglar un envío por correo",
    },
  };

  return (
    <div
      className={`flex flex-col gap-2 py-4 ${
        downloading ? "w-fit text-black" : ""
      }`}
      ref={refReceipt}
    >
      <Logo className="max-w-72 my-2" />

      <section className="flex flex-col items-center">
        <Select
          name="shipping"
          size="sm"
          label="Entrega"
          className="max-w-xs dark:text-white"
          classNames={{
            listbox: "dark:text-white",
            trigger: "border-2 border-custom1",
            popoverContent: "border-2 border-custom1",
            description: "text-neutral-400",
          }}
          selectedKeys={[conditions?.entrega?.value]}
          onSelectionChange={(e) =>
            setConditions({
              ...conditions,
              entrega: {
                value: e?.currentKey || "retiro",
                label: entrega_items?.[e?.currentKey]?.label || "Voy a retirar",
              },
            })
          }
          description={
            entrega_items?.[conditions?.entrega?.value]?.description_select
          }
        >
          {Object.entries(entrega_items).map(([key, obj]) => (
            <SelectItem key={key} description={obj?.description_item}>
              {obj?.label}
            </SelectItem>
          ))}
        </Select>

        {/* <Checkbox
      classNames={{
        wrapper: "before:border-custom1",
        label: "text-white",
      }}
      isSelected={conditions?.seguidor}
      onValueChange={(e) =>
        setConditions({ ...conditions, seguidor: e })
      }
    >
      Sigo las redes
    </Checkbox> */}
      </section>

      <List cart={cart} downloading={downloading} />

      <section className="flex flex-col items-center gap-2 text-neutral-400 text-center">
        <div className="w-full flex flex-wrap items-center justify-center gap-3">
          <PiMoneyWavy className="h-6 w-fit" />
          <CiBank className="h-6 w-fit" />
          <SVGLogoSantander className="h-6 w-fit" />
          <SVGLogoGalicia className="h-6 w-fit" />
          <SiMercadopago className="h-6 w-fit" />
          <SVGLogoPaypal className="h-5 w-fit" />
        </div>

        <Divider className="w-2/3 bg-neutral-400" />

        <p>Gracias por su compra.</p>
        {downloading && <p>{downloading}</p>}
      </section>
    </div>
  );
}

export default Receipt;
