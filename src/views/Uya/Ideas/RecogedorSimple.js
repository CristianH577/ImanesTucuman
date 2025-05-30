import { Divider } from "@nextui-org/react";
import ImageCustom from "../../../components/ImageCustom";
import { FaArrowDown } from "react-icons/fa";

export default function RecogedorSimple() {
  const contextImgs = require.context("../../../assets/uya/ideas", true);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="flex flex-col items-center gap-6">
        <ImageCustom
          src={contextImgs("./recogedor_simple/2.webp")}
          className="object-contain drop-shadow-custom"
          height={300}
          alt="Recogedor comercial simple"
        />

        <span className="flex flex-col items-center gap-4">
          <p>
            Solo colocando un imán en la punta de una varilla de metal puede
            tener un recogedor rígido para clavos, alambres, etc.
          </p>

          <FaArrowDown size={32} />
        </span>

        <ImageCustom
          src={contextImgs("./recogedor_simple/1.webp")}
          className="object-contain drop-shadow-custom"
          height={300}
          alt="Tubo de metal con un iman en la punta"
        />
      </div>

      <Divider className="sm:hidden" />

      <div className="flex flex-col items-center gap-6">
        <ImageCustom
          src={contextImgs("./recogedor_simple/3.webp")}
          className="object-contain drop-shadow-custom"
          height={300}
          alt="Recogedor comercial flexible"
        />

        <span className="flex flex-col items-center gap-4">
          <p>
            Introduciendo uno o varios imanes en una bolsa de tela y atándola a
            una cuerda se puede hacer un recogedor flexible para levantar.
          </p>

          <FaArrowDown size={32} />
        </span>

        <ImageCustom
          src={contextImgs("./recogedor_simple/4.webp")}
          className="object-contain drop-shadow-custom"
          height={400}
          alt="Cuerda, iman y bolsa de tela"
        />
      </div>
    </div>
  );
}
