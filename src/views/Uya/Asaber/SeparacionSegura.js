import CardUya from "../CardUya";

import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";

export default function SeparacionSegura() {
  const contextImgs = require.context(
    "../../../assets/uya/asaber/separacion",
    true
  );

  const class_icon = "absolute text-4xl z-10 left-3 top-3";

  const items = [
    "Retirar el imán de la pila deslizándolo hacia un lado",
    "Una vez la mayor parte este fuera de la pila, levantar",
    "No jalar, levantar ni hacer palanca sin primero deslizar hacia el costado",
    "No permitir que los imanes se golpeen entre sí o con cualquier superficie magnética porque puede romperlos",
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-8">
      {items.map((item, i) => (
        <CardUya
          key={i + 1}
          src={contextImgs(`./${i + 1}.webp`)}
          text={item}
          className="relative w-full"
          classNames={{
            img: "object-contain",
            wrapper:
              "bg-white w-full max-h-[250px] max-w-none flex justify-center " +
              (i < 2 ? "border-success" : "border-danger"),
          }}
          contentPlus={
            i < 2 ? (
              <FaRegCheckCircle className={`text-success ${class_icon}`} />
            ) : (
              <FaRegTimesCircle className={`text-danger ${class_icon}`} />
            )
          }
        />
      ))}
    </div>
  );
}
