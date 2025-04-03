import CardUya from "../CardUya";

import { FaCheck, FaX } from "react-icons/fa6";

export default function PeligroVsSeguridad() {
  const contextImgs = require.context(
    "../../../assets/uya/asaber/peligro_vs_seguridad",
    true
  );

  const cols = [
    {
      id: "tradicional",
      header: {
        icon: FaX,
        label: "Tradicional",
        bg: "from-danger to-danger-400 dark:to-danger-300",
      },
      items: [
        {
          src_idx: 1,
          text: "La cinta aislante se seca y puede causar incendios",
        },
        {
          src_idx: 2,
          text: "Las altas temperaturas son relativamente faciles de filtrar",
        },
      ],
    },
    {
      id: "terminales",
      header: {
        icon: FaCheck,
        label: "Con Terminales",
        bg: "from-success to-success-400 dark:to-success-300",
      },
      items: [
        {
          src_idx: 3,
          text: "Los terminales son fáciles de operar y evitan riesgos de seguridad",
        },
        {
          src_idx: 4,
          text: "Material ignífugo resistente a las altas temperaturas",
        },
      ],
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-8 justify-items-center">
      {cols.map((col) => (
        <div key={col.id} className="grid grid-rows-5 gap-6">
          <div
            className={`rounded-lg h-full flex flex-col items-center justify-evenly text-3xl shadow-md px-2 bg-gradient-to-t dark:bg-gradient-to-b ${col.header.bg}`}
          >
            <col.header.icon className="text-white" />

            <b className="text-white break-all">{col.header.label}</b>
          </div>

          {col.items.map((item, i) => (
            <CardUya
              key={col.id + i + 1}
              id={col.id + i + 1}
              src={contextImgs(`./${item.src_idx}.webp`)}
              alt={`Imagen de ${item.tipo}`}
              text={item.text}
              className="row-span-2"
              classNames={{
                img: "sm:h-[200px]",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
