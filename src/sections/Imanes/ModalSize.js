import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  ModalBody,
} from "@nextui-org/react";

import { IoMdArrowRoundBack, IoIosRefresh } from "react-icons/io";

function ModalSize({ isOpen, setIsOpen }) {
  const tapa = {
    label: "Tapa",
    form: "redondos",
    size: [30, 13],
    r: [15],
    h: 13,
  };
  const constraintsRef = useRef(null);

  const [magnet, setMagnet] = useState(false);
  const [count, setCount] = useState(0);

  const SvgView = (view, item) => {
    let fix = 0;
    let content = [];
    let w = 0;
    let h = 0;
    let obj = { label: item?.label };

    if (item?.form === "esferas") {
      obj.r = [item?.r];
    } else {
      switch (view) {
        case "sup":
          switch (item?.form) {
            case "redondos":
              obj.r = [item?.r];
              break;
            case "cuadrados":
              obj.sizes = [item?.a, item?.l];
              break;
            case "arandelas":
              obj.r = item?.r;
              break;

            default:
              break;
          }
          break;
        case "front":
          switch (item?.form) {
            case "redondos":
              obj.sizes = [item?.r * 2, item?.h];
              break;
            case "cuadrados":
              obj.sizes = [item?.a, item?.h];
              break;
            case "arandelas":
              obj.sizes = [item?.r[0] * 2, item?.h];
              break;

            default:
              break;
          }
          break;
        case "lat":
          switch (item?.form) {
            case "redondos":
              obj.sizes = [item?.r * 2, item?.h];
              break;
            case "cuadrados":
              obj.sizes = [item?.l, item?.h];
              break;
            case "arandelas":
              obj.sizes = [item?.r[0] * 2, item?.h];
              break;

            default:
              break;
          }
          break;

        default:
          break;
      }
    }

    if (obj?.r) {
      fix = 0.2;
      w = obj?.r[0] * 2;
      h = obj?.r[0] * 2;
      obj?.r.forEach((item) => {
        content.push(<circle key={item} cx="50%" cy="50%" r={item} />);
      });
    }

    if (obj?.sizes) {
      w = obj?.sizes[0];
      h = obj?.sizes[1];
      content.push(
        <rect
          key={`${view}`}
          x="0"
          y="0"
          width={w}
          height={h}
          // strokeWidth={1.5}
          rx=".2"
          // ry="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      );
    }

    if (item?.form === "arandelas" && ["front", "lat"].includes(view)) {
      content.push([
        <polygon
          key={`${view}_l`}
          points={`${item?.r[0] - item?.r[1]},0 ${item?.r[0] - item?.r[2]},${
            item?.h
          }`}
          fill="none"
          stroke="black"
          strokeWidth={0.2}
        />,
        <polygon
          key={`${view}_r`}
          points={`${item?.r[0] + item?.r[1]},0 ${item?.r[0] + item?.r[2]},${
            item?.h
          }`}
          fill="none"
          stroke="black"
          strokeWidth={0.2}
        />,
      ]);
    }

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={`${w}mm`}
        height={`${h}mm`}
        viewBox={`0 0 ${w + fix} ${h + fix}`}
        stroke={obj?.r?.length > 1 ? "black" : "none"}
        strokeWidth={0.2}
        className={`${
          obj?.label === "Tapa" ? "fill-yellow-400" : "fill-custom1"
        }`}
      >
        {content}
      </svg>
    );
  };

  useEffect(() => {
    if (isOpen?.size) {
      const new_item = structuredClone(isOpen);
      let size = new_item?.size;

      if (new_item?.form === "arandelas") {
        size = size.replace("_", "x").replace("a", "x");
      }
      const sizes = size?.split("x").map(Number);

      new_item.label = "Iman";

      switch (new_item?.form) {
        case "redondos":
          new_item.r = sizes[0] / 2;
          new_item.h = sizes[1];
          break;
        case "cuadrados":
          new_item.a = sizes[0];
          new_item.l = sizes[1];
          new_item.h = sizes[2];
          break;
        case "arandelas":
          new_item.r = sizes.reduce((a, v, i) => {
            if (i !== 1) a.push(v / 2);
            return a;
          }, []);
          new_item.h = sizes[1];
          break;
        case "esferas":
          new_item.r = sizes[0] / 2;
          break;

        default:
          break;
      }
      setMagnet(new_item);
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      placement="top-center"
      className="text-white max-w-3xl bg-radial from-custom2-10 to-custom2 "
      onClose={() => setIsOpen(false)}
      classNames={{
        wrapper:
          "scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-custom1 scrollbar-track-custom2-10 scrollbar-w-3 scrollbar-h-3 hover:scrollbar-thumb-custom1-6",
      }}
    >
      <ModalContent className="!my-auto max-sm:max-w-none max-sm:mx-0 max-sm:mb-0 max-sm:rounded-none overflow-y-auto self-start max-sm:min-h-full">
        {(onClose) => (
          <>
            <ModalHeader className="text-2xl">Comparar tamaños</ModalHeader>

            <ModalBody className="overflow-hidden max-xs:px-2">
              <section className="max-sm:text-center">
                <p>
                  Asegúrese de que el circulo amarillo tenga 30mm de diámetro
                  con una regla. Si no los tiene ajuste el zoom de la pantalla
                  hasta que lo tenga.
                </p>
                <p>La comparación es con una tapa plástica común de botella.</p>
                <p>
                  Los tamaños son aproximados y pueden tener un error de +-1mm.
                </p>
                <p>Puede arrastrar los iconos para sobreponerlos.</p>
              </section>

              <section className="xs:flex gap-4 justify-center w-full text-center font-semibold text-xl">
                <p className="text-yellow-400">Tapa: 30x13mm</p>
                <p className="text-custom1">
                  Iman: {magnet?.size?.replace("_", " ")}mm
                </p>
              </section>

              <h2 className="text-center text-xl font-semibold">Vistas</h2>

              {magnet && (
                <motion.section
                  ref={constraintsRef}
                  key={count}
                  className="flex flex-col items-center gap-6 sm:flex-row text-center bg-custom2-10/30 pt-2 pb-6 px-4 rounded-lg relative overflow-y-hidden overflow-x-auto scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-custom1 scrollbar-track-custom2-10 scrollbar-w-3 scrollbar-h-3 hover:scrollbar-thumb-custom1-6"
                >
                  <Button
                    variant="light"
                    onPress={() => setCount(count + 1)}
                    isIconOnly
                    className="text-xl text-white absolute top-0 right-0"
                  >
                    <IoIosRefresh />
                  </Button>

                  {[
                    { label: "Superior", id: "sup" },
                    { label: "Frontal", id: "front" },
                    { label: "Lateral", id: "lat" },
                  ].map((view) => (
                    <article
                      key={view.id}
                      className="flex flex-col gap-4 w-full"
                    >
                      <p>{view.label}</p>

                      <div className="flex flex-col items-start min-[250px]:items-center gap-8 w-full">
                        {[tapa, magnet].map((item, i) => (
                          <motion.span
                            key={i}
                            drag
                            dragConstraints={constraintsRef}
                            whileDrag={{
                              zIndex: 20,
                              filter: "drop-shadow(0px 0px 1px black)",
                            }}
                            className={`flex items-center h-full cursor-pointer ${
                              i > 0 ? "z-10" : ""
                            }`}
                            style={{
                              filter: "drop-shadow(0px 0px 5px black)",
                            }}
                          >
                            {SvgView(view.id, item)}
                          </motion.span>
                        ))}
                      </div>
                    </article>
                  ))}
                </motion.section>
              )}
            </ModalBody>

            <ModalFooter className="items-center ">
              <Button
                variant="light"
                onPress={onClose}
                isIconOnly
                className="text-2xl text-white"
              >
                <IoMdArrowRoundBack />
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default ModalSize;
