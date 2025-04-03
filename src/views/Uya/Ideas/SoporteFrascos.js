import CardUya from "../CardUya";
import LinkToFont from "../components/LinkToFont";

export default function SoporteFrascos() {
  const contextImgs = require.context(
    "../../../assets/uya/ideas/soporte_frascos",
    true
  );

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        {[
          "Conseguir frascos(de preferencia de tapa melánica)",
          "Pegar un imán ancho en cada tapa",
          "Conseguir una tira o barra fina metálica",
          "Colocar una cinta doble faz en la tira",
          "Pegar la tira en el lugar donde se quieren tener los frascos",
          "Probar que los frascos queden bien sujetos",
        ].map((item, i) => (
          <CardUya
            key={i + 1}
            src={contextImgs(`./${i + 1}.webp`)}
            text={`${i + 1}. ${item}.`}
          />
        ))}
      </div>

      <LinkToFont
        href="https://www.youtube.com/watch?v=0WhJmS7423E"
        text="Youtube/IDEAS EN 5 MINUTOS"
      />
    </div>
  );
}
