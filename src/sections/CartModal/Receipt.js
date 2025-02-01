import { Select, SelectItem, Divider } from "@nextui-org/react";

import List from "./List";
import Logo from "../../components/Logo";

import { SiMercadopago } from "react-icons/si";
import { PiMoneyWavy } from "react-icons/pi";
import { CiBank } from "react-icons/ci";

import {
  SVGLogoGalicia,
  SVGLogoPaypal,
  SVGLogoSantander,
} from "../../assets/svgs";

function Receipt({ downloading, cart, refReceipt, setConditions, conditions }) {
  const entrega_items = {
    retiro: {
      label: "Voy a retirar",
      description: "Quiero pasar a retirar en la dirección",
    },
    coordinar: {
      label: "Quiero coordinar",
      description: "Quiero saber cuando se hagan entregas en el centro",
    },
    envio: {
      label: "Envío",
      description: "Quiero que me lo envíen",
    },
    cadete: {
      label: "Mando a buscarlo",
      description: "Quiero enviar a que lo busquen",
    },
  };

  return (
    <div
      className={`flex flex-col gap-2 py-4 ${
        downloading ? "w-fit text-black" : ""
      }`}
      ref={refReceipt}
    >
      <span
        className="flex justify-center py-2"
        style={{
          filter: "drop-shadow(2px 4px 6px black)",
        }}
      >
        <Logo className="max-w-72" />
      </span>

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
        >
          {Object.entries(entrega_items).map(([key, obj]) => (
            <SelectItem key={key} description={obj?.description}>
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
