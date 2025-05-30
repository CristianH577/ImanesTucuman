import ImageCustom from "../../../components/ImageCustom";
import CardUya from "../CardUya";

export default function Cortinas() {
  const contextImgs = require.context(
    "../../../assets/uya/sujecion/cortinas",
    true
  );

  return (
    <div className="space-y-4">
      <p>
        Los imanes pueden ser usados de varias formas para colocar cortinas.
      </p>

      <div className="flex flex-col items-center justify-center gap-4 sm:gap-8 sm:flex-row sm:flex-wrap">
        <div className="max-w-[320px] sm:max-w-[660px]">
          <div className="sm:flex justify-center border-5 border-divider rounded-large shadow-md overflow-hidden">
            {[1, 2].map((_, i) => (
              <ImageCustom
                key={i}
                src={contextImgs(`./${i + 1}.webp`)}
                radius="none"
                className="w-full"
                classNames={{ wrapper: "max-w-none" }}
                alt={`Imagen de ejemplo ${i + 1}`}
              />
            ))}
          </div>

          <p className="p-2 xs:p-4">
            Incorporando un pitón o gancho a un imán se puede crear un soporte
            para caño de cortina sin necesidad de hacer perforaciones.
          </p>
        </div>

        {[
          "Con 2 imanes entre el doblez de una tela se puede hacer rápidamente una cortina",
          "Cociendo parches con imanes adentro en un lado de una tela impermeable se puede hacer una cortina de ducha para la caja de un vehículo de viaje",
        ].map((item, i) => (
          <CardUya
            key={i + 3}
            src={contextImgs(`./${i + 3}.webp`)}
            text={item}
            classNames={{
              img: "object-cover w-full object-bottom max-h-[350px]",
            }}
          />
        ))}
      </div>
    </div>
  );
}
