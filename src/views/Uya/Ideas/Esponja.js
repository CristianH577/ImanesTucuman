import CardUya from "../CardUya";
import LinkToFont from "../components/LinkToFont";

export default function Esponja() {
  const contextImgs = require.context(
    "../../../assets/uya/ideas/esponja",
    true
  );

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
        {[
          "Hacer un corte en el centro de la esponja donde entre el imán",
          "Introducir un imán del tamaño adecuado",
          "Sellar el corte con pegamento",
          "Hacer lo mismo con otra esponja y comprobar que funcione",
        ].map((item, i) => (
          <CardUya
            key={i + 1}
            src={contextImgs(`./${i + 1}.webp`)}
            text={`${i + 1}. ${item}.`}
            className="md:max-w-[400px]"
            width={400}
          />
        ))}
      </div>

      <LinkToFont
        href="https://www.youtube.com/watch?v=ApjyZ_hwxBE"
        text="Youtube/ComoHacerPara"
      />
    </div>
  );
}
