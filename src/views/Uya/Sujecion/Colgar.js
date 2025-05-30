import ImageCustom from "../../../components/ImageCustom";
import CardUya from "../CardUya";

export default function Colgar() {
  const contextImgs = require.context(
    "../../../assets/uya/sujecion/colgar",
    true
  );

  return (
    <div className="space-y-4">
      <p>
        Con imanes se pueden colgar fotos, posters, afiches o marcos sin tener
        que hacer perforaciones en la pared ni pegar cintas sobre los mismos que
        puedan dañarlos al retirarlos.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 justify-items-center">
        <div className="sm:col-span-2 sm:col-start-2 relative ">
          <ImageCustom
            src={contextImgs(`./2.webp`)}
            className="min-h-0"
            classNames={{
              wrapper:
                "absolute z-20 w-[64px] top-2 left-6 overflow-hidden shadow-md",
            }}
            alt="Clip con cinta"
            width={64}
          />

          <CardUya key={1} src={contextImgs(`./1.webp`)} />
        </div>

        {[3, 4].map((key) => (
          <CardUya
            key={key}
            src={contextImgs(`./${key}.webp`)}
            className="sm:col-span-2 h-full"
            classNames={{
              img: "h-full",
              wrapper: "h-full",
            }}
          />
        ))}
      </div>
    </div>
  );
}
