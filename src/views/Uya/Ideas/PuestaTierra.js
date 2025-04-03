import CardUya from "../CardUya";

export default function PuestaTierra() {
  const contextImgs = require.context("../../../assets/uya/ideas", true);

  return (
    <div className="space-y-4">
      <p>
        Con un imán de tipo arandela, un tornillo, una placa de madera, una
        varilla roscada de cobre, tuercas y arandelas se puede hacer una puesta
        a tierra cómoda para usar soldadores.
      </p>

      <CardUya
        src={contextImgs(`./puesta_tierra.webp`)}
        className="place-self-center"
        alt="Brazo con pulsera de ejemplo"
      />
    </div>
  );
}
