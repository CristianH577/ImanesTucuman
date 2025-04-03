import CardUya from "../CardUya";

export default function Destornillador() {
  const contextImgs = require.context(
    "../../../assets/uya/utilidades/destornillador",
    true
  );

  const items = [
    {
      text: "Pasando suavemente un imán de abajo hacia arriba en la punta el destornillador quedará imantado. Se recomienda usar un imán potente para esto",
      alt: "Manos pasando un imán por un destornillador",
    },
    {
      text: "Colocando un pequeño imán cerca de la punta del destornillador este quedará magnetizado y puede retirarse al dejar de usarlo",
      alt: "Destornillador con un imán en la punta",
    },
  ];

  return (
    <div className="space-y-4">
      <p>
        Imantar un destornillador es un truco muy útil que puede ahorrar tiempo
        y hacer que las tareas de reparación sean más fáciles. Esto puede
        hacerse de 2 maneras.
      </p>

      <div className="flex flex-col max-sm:items-center sm:justify-center sm:flex-row gap-8">
        {items.map((item, i) => (
          <CardUya
            key={i + 1}
            src={contextImgs(`./${i + 1}.webp`)}
            alt={item.alt}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}
