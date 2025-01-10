import { useState } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  ModalBody,
  Select,
  SelectItem,
  Divider,
} from "@nextui-org/react";

import List from "./CartModal/List";
import Logo from "../components/Logo";

import { IoMdArrowRoundBack } from "react-icons/io";
import { SiMercadopago } from "react-icons/si";
import { PiMoneyWavy } from "react-icons/pi";
import { CiBank } from "react-icons/ci";
import { GiBroom } from "react-icons/gi";
import { IoSend } from "react-icons/io5";

import {
  SVGLogoGalicia,
  SVGLogoPaypal,
  SVGLogoSantander,
} from "../assets/svgs";

function CartModal({ isOpen, onOpenChange, cart, links }) {
  const default_conditions = {
    entrega: "retiro",
    seguidor: false,
  };
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

  const [conditions, setConditions] = useState(default_conditions);

  const formatPrice = (num) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  const handleSend = () => {
    const items_msg = ["Hola, me interesa hacer este pedido:"];
    items_msg.push(`*${entrega_items?.[conditions?.entrega]?.label}`);

    if (conditions?.seguidor) items_msg.push("*Sigo las redes.");
    items_msg.push("");
    let total = 0;
    Object.entries(cart.value).forEach(([cat, items]) => {
      const categoria =
        "►" + cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase();
      items_msg.push(categoria);

      Object.entries(items).forEach(([key, obj]) => {
        let array = [];
        let price = obj?.price;
        let subtotal = obj?.subtotal;
        let discount = false;

        if (conditions?.seguidor && obj?.price_discount < obj?.price) {
          price = obj?.price_discount;
          subtotal = obj?.subtotal_discount;
          discount = discount = Intl.NumberFormat("es-AR", {
            style: "percent",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(obj?.discount);
        }

        total += subtotal;
        price = "x" + formatPrice(price);
        subtotal = "=" + formatPrice(subtotal);

        array.push((obj?.name || key) + " =>");
        array.push(`${obj?.qtt}${obj?.price_measure || "u"}`);
        array.push(discount ? `${price}(-${discount})` : price);
        array.push(subtotal);
        array = array.join(" ");

        items_msg.push(array);
      });
    });

    total = formatPrice(total);

    items_msg.push(`\nTotal ${total}`);

    const msg = items_msg.join("\n");
    const encoded_message = encodeURIComponent(msg);
    const url = `${links?.whatsapp}&text=${encoded_message}`;
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.focus();
    // console.log(decodeURIComponent(encoded_message));
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="top-center"
      className="text-white max-w-3xl bg-radial from-custom2-7 to-custom2"
    >
      <ModalContent className="!my-auto max-sm:max-w-none max-sm:mx-0 max-sm:mb-0 max-sm:rounded-none overflow-y-auto self-start max-sm:min-h-full">
        {(onClose) => (
          <>
            <ModalHeader className="text-2xl">Carrito</ModalHeader>

            <ModalBody className="overflow-hidden max-xs:px-2">
              <section>
                <b>Presione en los precios para agregar artículos.</b>
                <p>
                  Cuanto termine de revisar la lista envié el pedido y será
                  redirigido a whatsapp para continuar.
                </p>
              </section>

              <span
                className="flex justify-center my-2"
                style={{
                  filter: "drop-shadow(2px 4px 6px black)",
                }}
              >
                <Logo className="max-w-72" />
              </span>

              <section className="flex flex-col gap-4 sm:flex-row justify-center">
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
                  selectedKeys={[conditions?.entrega]}
                  onSelectionChange={(e) =>
                    setConditions({
                      ...conditions,
                      entrega: e?.currentKey || "retiro",
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

              <List cart={cart} />

              <section className="flex flex-col items-center gap-2 text-neutral-400">
                <div className="flex items-center gap-3 h-6">
                  <PiMoneyWavy className="h-full w-fit" />
                  <CiBank className="h-full w-fit" />
                  <SVGLogoSantander className="h-full w-fit" />
                  <SVGLogoGalicia className="h-full w-fit" />
                  <SiMercadopago className="h-full w-fit" />
                  <SVGLogoPaypal className="h-4 w-fit" />
                </div>

                <Divider className="w-2/3 bg-neutral-400" />

                <p>Gracias por su compra.</p>
              </section>
            </ModalBody>

            <ModalFooter className="items-center max-xs:px-2 max-[250px]:flex-col-reverse">
              <Button
                variant="light"
                onPress={onClose}
                isIconOnly
                className="text-2xl text-white"
              >
                <IoMdArrowRoundBack />
              </Button>

              <Button
                color="default"
                isIconOnly
                className="text-2xl"
                isDisabled={Object.keys(cart.value).length < 1}
                onPress={() => cart.set({})}
              >
                <GiBroom />
              </Button>

              <Button
                color="primary"
                isIconOnly
                className="text-2xl"
                isDisabled={Object.keys(cart.value).length < 1}
                onPress={handleSend}
              >
                <IoSend />
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default CartModal;
