import CardUya from "../CardUya";

export default function Pulsera() {
  const contextImgs = require.context("../../../assets/uya/ideas", true);

  return (
    <div className="space-y-4">
      <p>
        Añadiendo pequeños imanes adentro de una pulsera de tela se puede tener
        un accesorio de trabajo para sostener fácil y cómodamente pequeños
        objetos que vayan a usarse.
      </p>

      <CardUya
        src={contextImgs(`./pulsera.webp`)}
        className="place-self-center"
        alt="Brazo con pulsera de ejemplo"
      />
    </div>
  );
}
