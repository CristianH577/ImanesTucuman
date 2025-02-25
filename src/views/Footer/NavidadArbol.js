import { LiaGiftsSolid } from "react-icons/lia";

import { SVGArbolNavidad } from "../assets/svgs";

function NavidadArbol() {
  return (
    <article className="flex flex-col items-center gap-2 font-[cakecafe] min-[960px]:absolute left-12 ">
      <div
        className="text-3xl min-[220px]:text-5xl flex flex-col text-custom1 "
        style={{
          filter: "drop-shadow(2px 4px 6px black)",
        }}
      >
        <p>Feliz</p>
        <p>Navidad!</p>
      </div>

      <div className="relative pb-[80px]">
        <SVGArbolNavidad
          className="w-32 h-fit"
          star="gold"
          body="#9acd32"
          base="brown"
        />
        <LiaGiftsSolid size={128} className="absolute bottom-0 z-10" />
      </div>
    </article>
  );
}

export default NavidadArbol;
