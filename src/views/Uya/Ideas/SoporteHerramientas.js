import CardUya from "../CardUya";
import LinkToFont from "../components/LinkToFont";

export default function SoporteHerramientas() {
  const contextImgs = require.context(
    "../../../assets/uya/ideas/soporte_herramientas",
    true
  );

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
        <p className="sm:col-span-2">
          Esto puede usarse tanto con utensilios de cocina como con herramientas
          de construcción, artículos de librería, piezas de juegos, etc.
        </p>

        {[
          "Conseguir una pieza de madera",
          "Calar y pegar imanes en los huecos",
          "Barnizar la superficie",
          "Colgar en una superficie metálica o agregar soportes",
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
