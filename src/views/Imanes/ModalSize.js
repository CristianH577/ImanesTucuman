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

import ImageCustom from "../../layout/components/ImageCustom";

import { IoMdArrowRoundBack, IoIosRefresh } from "react-icons/io";

import tapa_img from "../../assets/imanes/tapa.webp";

const contextImg = require.context("../../assets/formas", true);

function ModalSize({ isOpen, setIsOpen }) {
  const tapa = {
    label: "Tapa",
    form: "redondos",
    size: "30x13",
    r: [15],
    h: 13,
    img: { src: tapa_img, alt: "Tapa plástica común" },
  };

  const constraintsRef = useRef(null);
  const [magnet, setMagnet] = useState(false);
  const [count, setCount] = useState(0);

  const SvgView = (view, item) => {
    let fix_w = 0;
    let fix_h = 0;
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
            case "de_arrastre":
            case "redondos":
              obj.r = [item?.r];
              break;
            case "cuadrados":
              obj.sizes = [item?.a, item?.l];
              break;
            case "redondos_fresados":
              obj.r = item?.r;
              break;
            case "cuadrados_fresados":
              obj.sizes = [item?.a, item?.l];
              obj.r = item?.r;
              break;

            default:
              break;
          }
          break;
        case "front":
          switch (item?.form) {
            case "de_arrastre":
            case "redondos":
              obj.sizes = [item?.r * 2, item?.h];
              break;
            case "cuadrados":
              obj.sizes = [item?.a, item?.h];
              break;
            case "redondos_fresados":
              obj.sizes = [item?.r[0] * 2, item?.h];
              break;
            case "cuadrados_fresados":
              obj.sizes = [item?.a, item?.h];
              break;

            default:
              break;
          }
          break;
        case "lat":
          switch (item?.form) {
            case "de_arrastre":
            case "redondos":
              obj.sizes = [item?.r * 2, item?.h];
              break;
            case "cuadrados":
              obj.sizes = [item?.l, item?.h];
              break;
            case "redondos_fresados":
              obj.sizes = [item?.r[0] * 2, item?.h];
              break;
            case "cuadrados_fresados":
              obj.sizes = [item?.l, item?.h];
              break;

            default:
              break;
          }
          break;

        default:
          break;
      }
    }

    if (obj?.sizes) {
      w = obj?.sizes[0];
      h = obj?.sizes[1];
      content.push(
        <rect
          key={`${view}`}
          x="0"
          y="0"
          width={obj?.sizes[0]}
          height={obj?.sizes[1]}
          rx=".2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      );
    }
    if (obj?.r) {
      const d = obj?.r[0] * 2;
      if (d > w) {
        fix_w = 0.2;
        w = d;
      }
      if (d > h) {
        fix_h = 0.2;
        h = d;
      }
      obj?.r.forEach((item) => {
        content.push(<circle key={item} cx="50%" cy="50%" r={item} />);
      });
    }

    // let content_test = null;
    // if (obj?.r && obj?.label === "Tapa") {
    //   content_test = [];
    //   obj?.r.forEach((item) => {
    //     content_test.push(
    //       <circle
    //         key={item}
    //         cx="50%"
    //         cy="50%"
    //         r={Number(item) + 1}
    //         stroke={"black"}
    //         strokeWidth={1}
    //         strokeDasharray="5,2"
    //       />
    //     );
    //   });
    // }

    if (item?.form === "redondos_fresados" && ["front", "lat"].includes(view)) {
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
    if (item?.form === "cuadrados_fresados" && view === "front") {
      content.push([
        <polygon
          key={`${view}_l`}
          points={`${item?.r[0]},0 ${item?.a / 2 - item?.r[1]},${item?.h}`}
          fill="none"
          stroke="black"
          strokeWidth={0.2}
        />,
        <polygon
          key={`${view}_r`}
          points={`${item?.a - item?.r[0]},0 ${item?.a / 2 + item?.r[1]},${
            item?.h
          }`}
          fill="none"
          stroke="black"
          strokeWidth={0.2}
        />,
      ]);
    }
    if (item?.form === "cuadrados_fresados" && view === "lat") {
      content.push([
        <polygon
          key={`${view}_l`}
          points={`${item?.l / 2 - item?.r[0]},0 ${item?.l / 2 - item?.r[1]},${
            item?.h
          }`}
          fill="none"
          stroke="black"
          strokeWidth={0.2}
        />,
        <polygon
          key={`${view}_r`}
          points={`${item?.l / 2 + item?.r[0]},0 ${item?.l / 2 + item?.r[1]},${
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
        viewBox={`0 0 ${w + fix_w} ${h + fix_h}`}
        stroke={obj?.r?.length > 1 ? "black" : "none"}
        strokeWidth={0.2}
        className={`${
          obj?.label === "Tapa" ? "fill-yellow-400" : "fill-custom1"
        }`}
      >
        {content}

        {/* {content_test ? content_test : null} */}
      </svg>
    );
  };

  const handleResetView = () => setCount(count + 1);

  useEffect(() => {
    const handleResetView = () => {
      setCount(count + 1);
    };
    window.addEventListener("resize", handleResetView);
    return () => window.removeEventListener("resize", handleResetView);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isOpen?.size) {
      const new_item = structuredClone(isOpen);

      let img = null;
      let size = new_item?.size;

      if (["redondos_fresados", "cuadrados_fresados"].includes(new_item?.form))
        size = size.replace("_", "x").replace("a", "x");
      const sizes = size?.split("x").map(Number);

      new_item.label = "Iman";

      switch (new_item?.form) {
        case "de_arrastre":
          new_item.r = sizes[0] / 2;
          new_item.h = sizes[1];

          img = "de_arrastre";
          break;
        case "redondos":
          new_item.r = sizes[0] / 2;
          new_item.h = sizes[1];

          if (new_item?.h < new_item?.r / 2) {
            img = "plano";
          } else if (new_item?.h >= new_item?.r * 1.4) {
            img = "cilindro";
          } else {
            img = "boton";
          }
          break;
        case "cuadrados":
          new_item.a = sizes[0];
          new_item.l = sizes[1];
          new_item.h = sizes[2];

          if (new_item?.a / 2 <= new_item?.l) {
            img = "cuadrado";
          } else {
            if (new_item?.h <= 3) {
              img = "plancha";
            } else {
              img = "ladrillo";
            }
          }
          break;
        case "redondos_fresados":
          new_item.r = sizes.reduce((a, v, i) => {
            if (i !== 1) a.push(v / 2);
            return a;
          }, []);
          new_item.h = sizes[1];

          img = "arandela";
          break;
        case "cuadrados_fresados":
          new_item.a = sizes[0];
          new_item.l = sizes[1];
          new_item.h = sizes[2];

          new_item.r = sizes?.slice(3, 5).reduce((a, v) => {
            a.push(v / 2);
            return a;
          }, []);

          img = "cuadrado-fresado";
          break;
        case "esferas":
          new_item.r = sizes[0] / 2;
          img = "esfera";
          break;

        default:
          break;
      }

      if (img) img = contextImg(`./${img}.webp`);
      new_item.img = { src: img, alt: "Imán de neodimio" };

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
              <p className="max-sm:text-center">
                La comparación es con una tapa plástica común de botella.
                <br />
                Asegúrese de que el circulo amarillo tenga 30mm de diámetro con
                una regla. Si no los tiene ajuste el zoom de la pantalla hasta
                que lo tenga.
              </p>

              <p className="text-sm text-neutral-400 text-center">
                Las imágenes y esquemas son solo a modo ilustrativo y pueden no
                coincidir con la realidad.
              </p>

              <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[tapa, magnet].map((e, i) => (
                  <article key={i} className="flex flex-col items-center">
                    <div className="bg-neutral-500/20 rounded-lg p-4 sm:h-full select-none flex items-center justify-center place-self-center border-3 border-divider">
                      <ImageCustom
                        src={e?.img?.src}
                        width={200}
                        className="w-full max-w-[200px]"
                        alt={e?.alt?.alt || ""}
                        style={{
                          filter: "drop-shadow(2px 4px 6px black)",
                        }}
                      />
                    </div>

                    <p
                      className={`bg-neutral-500/20 rounded-b-lg max-w-[250px] text-2xl p-2 font-semibold border-b-3 border-x-3 border-divider ${
                        i === 0 ? "text-yellow-400" : "text-custom1"
                      }`}
                    >
                      {e?.size?.replace("_", " ")}mm
                    </p>
                  </article>
                ))}
              </section>

              <h2 className="text-center text-xl font-semibold">Vistas</h2>

              {magnet && (
                <section
                  ref={constraintsRef}
                  key={count}
                  className="flex flex-col items-center gap-6 sm:flex-row text-center bg-custom2-10/30 pt-2 pb-6 px-4 rounded-lg relative overflow-y-hidden overflow-x-auto scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-custom1 scrollbar-track-custom2-10 scrollbar-w-3 scrollbar-h-3 hover:scrollbar-thumb-custom1-6 shadow-small"
                >
                  <Button
                    variant="light"
                    onPress={handleResetView}
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

                      <div className="flex flex-col items-start xs:items-center gap-8 w-full">
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
                </section>
              )}

              <p className="max-sm:text-center text-neutral-400 text-sm">
                Los tamaños son aproximados y pueden tener errores de medidas.
                <br />
                Puede arrastrar los iconos para sobreponerlos.
              </p>
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
