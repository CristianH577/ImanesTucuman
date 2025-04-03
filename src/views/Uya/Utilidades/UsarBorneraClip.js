import ImageCustom from "../../../layout/components/ImageCustom";

export default function UsarBorneraClip() {
  const contextImgs = require.context(
    "../../../assets/uya/utilidades/usar_bornera_clip",
    true
  );

  const items = [
    "Medir el largo de punta a pelar",
    "Levantar el seguro del empalme",
    "Insertar el cable",
    "Bajar el seguro para fijar",
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-6 justify-items-center">
      {items.map((item, i) => (
        <div key={i + 1} className="flex flex-col justify-around max-w-xs">
          <ImageCustom
            src={contextImgs(`./${i + 1}.webp`)}
            classNames={{ wrapper: "drop-shadow-custom" }}
            alt={`Imagen de instruccion ${i + 1}`}
            widht={300}
          />

          <p className="p-2 xs:p-4">
            {i + 1}. {item}.
          </p>
        </div>
      ))}
    </div>
  );
}
