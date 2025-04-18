import { useRef, useState } from "react";
import { toPng } from "html-to-image";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  ModalBody,
  Spinner,
} from "@nextui-org/react";

import ButtonCart from "./CartModal/ButtonCart";
import Receipt from "./CartModal/Receipt";

import { IoMdArrowRoundBack } from "react-icons/io";
import { GiBroom } from "react-icons/gi";
import { IoSend } from "react-icons/io5";
import { MdOutlineSimCardDownload } from "react-icons/md";
import { TbHandClick } from "react-icons/tb";

function CartModal({ isOpen, onOpenChange, linkWhatsApp = "", cart = {} }) {
  const refReceipt = useRef(null);
  const [downloading, setDownloading] = useState(false);
  const [conditions, setConditions] = useState({
    entrega: { value: "retiro", label: "Voy a retirar" },
  });

  const formatPrice = (num) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  const handleSend = () => {
    const items_msg = ["Hola. Me interesa hacer este pedido:"];
    items_msg.push(`*${conditions?.entrega?.label}`);

    if (conditions?.seguidor) items_msg.push("*Sigo las redes.");
    items_msg.push("");

    let total = 0;
    Object.entries(cart?.value).forEach(([cat, items]) => {
      const categoria =
        "➤" +
        cat.charAt(0).toUpperCase() +
        cat.slice(1).toLowerCase().replace("_", " ");
      items_msg.push(categoria);

      Object.entries(items).forEach(([key, obj]) => {
        let array = [];
        let price = obj?.prices?.[obj?.priceToUse] || 0;
        let subtotal = obj?.subtotals?.[obj?.priceToUse] || 0;
        let discount = obj?.discountToUse
          ? obj?.discounts?.[obj?.discountToUse]
          : false;
        const name = (obj?.name || key || "").replace("_", " ");

        if (discount) {
          discount = Intl.NumberFormat("es-AR", {
            style: "percent",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(discount);
        }

        total += subtotal;
        price = formatPrice(price);
        subtotal = formatPrice(subtotal);

        array.push(name + " =>");
        array.push(discount ? `${price}(-${discount})` : price);
        array.push(`x${obj?.qtt}${obj?.price_measure || "u"}`);
        array.push(`= ${subtotal}`);
        array = array.join(" ");

        items_msg.push(array);
      });
      items_msg.push("");
    });

    total = formatPrice(total);

    items_msg.push(`Total ${total}`);

    const msg = items_msg.join("\n");
    const encoded_message = encodeURIComponent(msg);
    const url = `${linkWhatsApp}&text=${encoded_message}`;
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.focus();
    // console.log(decodeURIComponent(encoded_message));
  };

  const getDate = () => {
    const fechaActual = new Date();

    const año = fechaActual.getFullYear();
    const mes = String(fechaActual.getMonth() + 1).padStart(2, "0");
    const dia = String(fechaActual.getDate()).padStart(2, "0");

    const horas = String(fechaActual.getHours()).padStart(2, "0");
    const minutos = String(fechaActual.getMinutes()).padStart(2, "0");

    return `${año}/${mes}/${dia}-${horas}:${minutos}`;
  };

  const downloadReceipt = async () => {
    if (refReceipt.current) {
      const date = getDate();
      setDownloading(date);

      setTimeout(async () => {
        try {
          const dataUrl = await toPng(refReceipt.current, {
            backgroundColor: "white",
            pixelRatio: 2,
          });
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = `presupuesto-imanes_tucuman-${date}.png`;
          link.click();
        } catch (error) {
          console.error("Error al generar la imagen:", error);
        }
        setDownloading(false);
      }, 200);
    }
  };

  const buttonConsole = [
    {
      label: "Limpiar lista",
      icon: GiBroom,
      color: "default",
      onPress: () => cart?.set({}),
    },
    {
      label: "Descargar como imagen",
      icon: MdOutlineSimCardDownload,
      color: "secondary",
      onPress: downloadReceipt,
    },
    {
      label: "Continuar por WhatsApp",
      icon: IoSend,
      color: "primary",
      onPress: handleSend,
    },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="top-center"
      className="max-w-3xl bg-radial from-custom2-7 to-custom2 text-white"
      classNames={{
        wrapper:
          "scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-custom1 scrollbar-track-custom2-10 scrollbar-w-3 scrollbar-h-3 hover:scrollbar-thumb-custom1-6",
      }}
    >
      <ModalContent className="!my-auto max-sm:max-w-none max-sm:mx-0 max-sm:mb-0 max-sm:rounded-none overflow-y-auto self-start max-sm:min-h-full max-sm:text-center">
        {(onClose) => (
          <>
            <ModalHeader className="text-2xl">Carrito</ModalHeader>

            <ModalBody
              className={`overflow-hidden max-xs:px-2 ${
                downloading ? "items-center" : ""
              }`}
            >
              <section>
                <b>
                  <span className="inline-block align-middle">
                    <TbHandClick />
                  </span>
                  Presione en los precios para agregar artículos.
                </b>
                <p>
                  Cuanto termine de revisar la lista envié el pedido y será
                  redirigido a whatsapp para continuar.
                </p>
              </section>

              <Receipt
                refReceipt={refReceipt}
                cart={cart}
                downloading={downloading}
                conditions={conditions}
                setConditions={setConditions}
              />
              {downloading && (
                <span className="bg-black/50 absolute inset-0 z-10 flex items-center justify-center">
                  <Spinner size="lg" color="secondary" />
                </span>
              )}

              <p className="font-size-secondary text-neutral-400 sm:hidden">
                Si esta usando un dispositivo móvil y quiere descargar el pedido
                en una imagen es recomendable estar conectado a una red wifi
                dado que la imagen generada tendrá un peso considerable.
              </p>
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

              {buttonConsole.map((button, i) => (
                <ButtonCart
                  key={i}
                  isDisabled={
                    Object.keys(cart?.value)?.length < 1 || downloading
                  }
                  {...button}
                />
              ))}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default CartModal;
