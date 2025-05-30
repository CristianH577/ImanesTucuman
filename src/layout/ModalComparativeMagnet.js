import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { scrollStyle } from "../libs/tvs";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  ModalBody,
} from "@nextui-org/react";

import ImageCustom from "../components/ImageCustom";

import { IoMdArrowRoundBack, IoIosRefresh } from "react-icons/io";

import tapa_img from "../assets/imanes/tapa.webp";

const contextImg = require.context("../assets/formas", true);

const tapa = {
  id: "tapa",
  label: "30x13mm",
  forma: "redondo",
  size: "30x13",
  r: 15,
  h: 13,
  img_data: { src: tapa_img, alt: "Tapa plástica común" },
};

const views = [
  { label: "Superior", id: "sup" },
  { label: "Frontal", id: "front" },
  { label: "Lateral", id: "lat" },
];

export default function ModalComparativeMagnet({
  magnetData = {},
  onClose = () => {},
}) {
  const constraintsRef = useRef(null);

  const [magnet, setMagnet] = useState(false);
  const [count, setCount] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
    onClose();
  };
  const MakeMagnet = () => {
    const magnet_ = { id: "magnet" };

    let img = null;
    const measures = magnetData?.measures || {};

    magnet_.label = magnetData.label;
    magnet_.forma = magnetData?.info?.forma || "redondo";

    let h = 0;
    switch (magnet_.forma) {
      case "redondo":
        const r = measures.largo / 2;
        h = measures.alto;
        magnet_.r = r;
        magnet_.h = h;

        if (magnetData?.subcategorie === "arrastre") {
          img = "de_arrastre";
        } else if (h < r) {
          img = "plano";
        } else if (h >= r * 1.4) {
          img = "cilindro";
        } else {
          img = "boton";
        }
        break;
      case "redondo fresado":
        magnet_.r = ["largo", "diametro superior", "diametro inferior"].reduce(
          (a, v) => {
            a.push(measures[v] / 2);
            return a;
          },
          []
        );
        magnet_.h = measures.alto;

        img = "arandela";
        break;
      case "cuadrado":
        const a = measures.ancho;
        const l = measures.largo;
        h = measures.alto;
        magnet_.a = a;
        magnet_.l = l;
        magnet_.h = h;

        if (a / 2 <= l) {
          img = "cuadrado";
        } else {
          if (h <= 3) {
            img = "plancha";
          } else {
            img = "ladrillo";
          }
        }
        break;
      case "cuadrado fresado":
        magnet_.a = measures.ancho;
        magnet_.l = measures.largo;
        magnet_.h = measures.alto;

        magnet_.r = ["diametro superior", "diametro inferior"].reduce(
          (a, v) => {
            a.push(measures[v] / 2);
            return a;
          },
          []
        );

        img = "cuadrado-fresado";
        break;

      default:
        break;
    }

    if (img) img = contextImg(`./${img}.webp`);
    magnet_.img_data = { src: img, alt: "Referencia de forma del iman" };

    setMagnet(magnet_);
    setOpenModal(true);
  };
  const MakeSvgView = (view, item) => {
    let fix_w = 0;
    let fix_h = 0;
    let content = [];
    let w = 0;
    let h = 0;
    let obj = {};

    switch (view) {
      case "sup":
        switch (item?.forma) {
          case "de_arrastre":
          case "redondo":
            obj.r = [item?.r];
            break;
          case "cuadrado":
            obj.sizes = [item?.l, item?.a];
            break;
          case "redondo fresado":
            obj.r = item?.r;
            break;
          case "cuadrado fresado":
            obj.sizes = [item?.l, item?.a];
            obj.r = item?.r;
            break;

          default:
            break;
        }
        break;
      case "front":
        switch (item?.forma) {
          case "de_arrastre":
          case "redondo":
            obj.sizes = [item?.r * 2, item?.h];
            break;
          case "cuadrado":
            obj.sizes = [item?.l, item?.h];
            break;
          case "redondo fresado":
            obj.sizes = [item?.r[0] * 2, item?.h];
            break;
          case "cuadrado fresado":
            obj.sizes = [item?.l, item?.h];
            break;

          default:
            break;
        }
        break;
      case "lat":
        switch (item?.forma) {
          case "de_arrastre":
          case "redondo":
            obj.sizes = [item?.r * 2, item?.h];
            break;
          case "cuadrado":
            obj.sizes = [item?.a, item?.h];
            break;
          case "redondo fresado":
            obj.sizes = [item?.r[0] * 2, item?.h];
            break;
          case "cuadrado fresado":
            obj.sizes = [item?.a, item?.h];
            break;

          default:
            break;
        }
        break;

      default:
        break;
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

    if (item?.forma === "redondo fresado" && ["front", "lat"].includes(view)) {
      content.push([
        <polygon
          key={`${view}_l`}
          points={`${item?.r[0] - item?.r[1]},0 ${item?.r[0] - item?.r[2]},${
            item?.h
          }`}
          fill="none"
          stroke="black"
          strokeDasharray="1"
          strokeWidth={0.2}
        />,
        <polygon
          key={`${view}_r`}
          points={`${item?.r[0] + item?.r[1]},0 ${item?.r[0] + item?.r[2]},${
            item?.h
          }`}
          fill="none"
          stroke="black"
          strokeDasharray="1"
          strokeWidth={0.2}
        />,
      ]);
    } else if (item?.forma === "cuadrado fresado") {
      let mitad = 0;
      if (view === "front") {
        mitad = item?.l / 2;
      } else if (view === "lat") {
        mitad = item?.a / 2;
      }
      if (mitad) {
        content.push([
          <polygon
            key={`${view}_l`}
            points={`${mitad - item?.r[0]},0 ${mitad - item?.r[1]},${item?.h}`}
            fill="none"
            stroke="black"
            strokeDasharray="1"
            strokeWidth={0.2}
          />,
          <polygon
            key={`${view}_r`}
            points={`${mitad + item?.r[0]},0 ${mitad + item?.r[1]},${item?.h}`}
            fill="none"
            stroke="black"
            strokeDasharray="1"
            strokeWidth={0.2}
          />,
        ]);
      }
    }

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={`${w}mm`}
        height={`${h}mm`}
        viewBox={`0 0 ${w + fix_w} ${h + fix_h}`}
        stroke={obj?.r?.length > 1 ? "black" : "none"}
        strokeWidth={0.2}
        className={`${item?.id === "tapa" ? "fill-custom1-5" : "fill-custom1"}`}
      >
        {content}
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

  useEffect(MakeMagnet, [magnetData]);

  return (
    <Modal
      isOpen={openModal}
      placement="top-center"
      className="text-foreground max-w-3xl"
      onClose={handleClose}
      classNames={{
        wrapper: scrollStyle,
      }}
    >
      <ModalContent className="!my-auto max-sm:max-w-none max-sm:mx-0 max-sm:mb-0 max-sm:rounded-none overflow-y-auto self-start max-sm:min-h-full">
        {(onClose) => (
          <>
            <ModalHeader className="text-2xl">Comparar tamaños</ModalHeader>

            <ModalBody className="overflow-hidden max-sm:px-2">
              <p className="max-sm:text-center">
                La comparación es con una tapa plástica común de botella.
                <br />
                Asegúrese de que el circulo amarillo tenga 30mm de diámetro con
                una regla. Si no los tiene ajuste el zoom de la pantalla hasta
                que lo tenga.
              </p>

              <p className="font-size-secondary text-neutral-400 text-center">
                Las imágenes y esquemas son solo a modo ilustrativo y pueden no
                coincidir con la realidad.
              </p>

              <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[tapa, magnet].map((e, i) => (
                  <article key={i} className="flex flex-col items-center">
                    <p className="max-w-[250px] text-2xl font-semibold">
                      {e.label}
                    </p>

                    <div className="rounded-lg p-4 sm:h-full select-none flex items-center justify-center place-self-center">
                      <ImageCustom
                        src={e?.img_data?.src}
                        width={150}
                        className="w-full max-w-[150px]"
                        alt={e?.img_data?.alt || ""}
                        style={{
                          filter: "drop-shadow(2px 4px 6px black)",
                        }}
                      />
                    </div>
                  </article>
                ))}
              </section>

              <h2 className="text-center text-xl font-semibold">Vistas</h2>

              {magnet && (
                <section
                  ref={constraintsRef}
                  key={count}
                  className={`flex flex-col items-center gap-6 sm:flex-row text-center pt-2 pb-6 px-4 rounded-lg relative overflow-y-hidden overflow-x-auto shadow-medium border-3 border-neutral-400 ${scrollStyle}`}
                >
                  <Button
                    variant="light"
                    onPress={handleResetView}
                    isIconOnly
                    className="text-xl absolute top-2 left-2"
                    title="Acomodar vista"
                  >
                    <IoIosRefresh />
                  </Button>

                  {views.map((view) => (
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
                              filter: "drop-shadow(0px 0px 1px black)",
                            }}
                          >
                            {MakeSvgView(view.id, item)}
                          </motion.span>
                        ))}
                      </div>
                    </article>
                  ))}
                </section>
              )}

              <p className="max-sm:text-center text-neutral-400 font-size-secondary">
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
                className="text-2xl"
                title="Cerrar vista"
              >
                <IoMdArrowRoundBack className="h-4/5 w-fit" />
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
