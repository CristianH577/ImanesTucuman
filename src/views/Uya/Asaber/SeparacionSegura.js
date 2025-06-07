import CardUya from "../CardUya";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function SeparacionSegura() {
  const contextImgs = require.context(
    "../../../assets/uya/asaber/separacion",
    true
  );

  const class_icon = "absolute z-10 left-3 top-3 text-4xl";

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
              <CheckCircleOutlineIcon
                className={`text-success ${class_icon}`}
              />
            ) : (
              <HighlightOffIcon className={`text-danger ${class_icon}`} />
            )
          }
        />
      ))}
    </div>
  );
}
