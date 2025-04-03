import CardUya from "../CardUya";

import { FaArrowCircleDown } from "react-icons/fa";

export default function Juguetes() {
  const contextImgs = require.context(
    "../../../assets/uya/sujecion/juguetes",
    true
  );

  return (
    <div className="flex flex-col items-center gap-4">
      <p>Los imanes pueden ser usados de distintas formas con los juguetes:</p>

      <div className="flex flex-col max-sm:items-center gap-4 sm:grid grid-cols-3 sm:gap-8 ">
        {[
          "Pueden unirse entre sí para generar distintas formas y estructuras",
          "Incorporados en peluches o amigurumis estos se pueden colgar o unir entre ellos",
          "Con pequeños imanes cualquier conjunto de piezas puede ser un juego de pesca o unión",
        ].map((item, i) => (
          <CardUya
            key={i + 1}
            src={contextImgs(`./300/${i + 1}.webp`)}
            srcSet={`
              ${contextImgs(`./300/${i + 1}.webp`)} 359w,
              ${contextImgs(`./380/${i + 1}.webp`)} 360w,
            `}
            text={item}
          />
        ))}
      </div>

      <div className="max-sm:max-w-[400px]">
        <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-7">
          <CardUya
            src={contextImgs(`./300/4.webp`)}
            srcSet={`
              ${contextImgs(`./300/4.webp`)} 359w,
              ${contextImgs(`./380/4.webp`)} 360w,
            `}
            alt="Juguetes desarmados"
            className="col-span-3 place-self-center"
          />

          <FaArrowCircleDown className="w-1/5 sm:w-full h-auto sm:-rotate-90" />

          <CardUya
            src={contextImgs(`./300/5.webp`)}
            srcSet={`
              ${contextImgs(`./300/5.webp`)} 359w,
              ${contextImgs(`./380/5.webp`)} 360w,
            `}
            alt="Juguetes armardos"
            className="col-span-3 place-self-center"
          />
        </div>

        <p className="p-4 sm:px-12">
          Pueden crearse piezas de arcilla o madera, o impresiones 3D; adherirle
          imanes y unirlas entre sí. Esto las hace fácilmente desarmables y/o
          intercambiables.
        </p>
      </div>
    </div>
  );
}
