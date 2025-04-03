import ImageCustom from "../../../layout/components/ImageCustom";
import LinkToFont from "../components/LinkToFont";

import {
  FaArrowDown,
  FaLongArrowAltDown,
  FaLongArrowAltUp,
} from "react-icons/fa";
import { FaArrowsUpDown } from "react-icons/fa6";

import {
  SVGImanes,
  SVGTapaA,
  SVGTapaB,
  SVGTaponB,
  SVGTope,
  SVGTuboA,
  SVGTuboB,
} from "../../../assets/uya/ideas/recogedor/svgs";

export default function Recogedor() {
  const contextImgs = require.context("../../../assets/uya/ideas", true);

  const scale = 3.5;

  const items = [
    {
      desc: "Conseguir 2 tubos de PVC que entre uno dentro de otro casi justo",
      img: (
        <div className="flex gap-4 h-[200px]">
          <SVGTuboA size={6} className="from-slate-400 to-slate-500" />
          <SVGTuboB size={6} className="from-slate-200 to-slate-300" />
        </div>
      ),
    },
    {
      desc: "En el mas chico introducir varios imanes con separadores y poner un tapón",
      img: (
        <div className="flex flex-col items-center gap-2 relative rotate-45 h-[200px]">
          <FaLongArrowAltDown
            size={44}
            className="absolute top-2 -right-9 text-black"
          />

          <SVGTapaB size={scale} className="from-slate-300 to-slate-400" />
          <SVGTuboB size={scale} className="from-slate-200 to-slate-300" />
          <SVGImanes size={scale - 1} className="from-gray-300 to-gray-500" />
          <SVGTaponB size={scale} />

          <FaLongArrowAltUp
            size={44}
            className="absolute bottom-12 -right-9 text-black"
          />
        </div>
      ),
    },
    {
      desc: "Al mas grande poner un tapón y una pieza perforada que entre a presión",
      img: (
        <div className="flex flex-col items-center gap-2 relative rotate-45 h-[200px]">
          <SVGTope
            size={scale}
            className="from-yellow-200 to-yellow-500 absolute top-1"
          />
          <SVGTuboA size={scale} className="from-slate-400 to-slate-500" />
          <SVGTapaA size={scale} className="from-slate-500 to-slate-600" />

          <FaLongArrowAltUp
            size={44}
            className="absolute bottom-2 -right-9 text-black"
          />
        </div>
      ),
    },
    {
      desc: "Introducir el mas chico en el mas grande",
      img: (
        <div className="flex flex-col items-center relative pt-16 rotate-45 h-[200px]">
          <SVGTuboB
            size={scale}
            className="from-slate-200 to-slate-300 absolute top-0"
          />
          <SVGTapaB
            size={scale}
            className="from-slate-300 to-slate-400 absolute top-0"
          />

          <SVGTuboA size={scale} className="from-slate-400 to-slate-500 z-10" />
          <SVGTapaA
            size={scale}
            className="from-slate-500 to-slate-600 absolute bottom-0 z-10"
          />
          <SVGTope
            size={scale}
            className="from-yellow-200 to-yellow-500 absolute top-[4.2rem] z-10"
          />

          <FaArrowsUpDown
            size={64}
            className="absolute bottom-[45%] -right-20 text-black"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col items-center">
        <ImageCustom
          src={contextImgs(`./recogedor/5-7-1.png`)}
          className="drop-shadow-custom"
          alt="Recogedor magnético comercial con virutas pegadas"
          width={290}
        />

        <FaArrowDown size={36} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            {item?.img}

            <p>
              {i + 1}. {item?.desc}.
            </p>
          </div>
        ))}
      </div>

      <LinkToFont
        href="https://www.youtube.com/watch?v=vEklMkmyG3A"
        text="Youtube/PacoRekena"
      />
    </div>
  );
}
