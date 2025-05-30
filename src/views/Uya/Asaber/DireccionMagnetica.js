import CardUya from "../CardUya";

export default function DireccionMagnetica() {
  const contextImgs = require.context("../../../assets/uya/asaber", false);

  return (
    <div className="space-y-4">
      <p>
        La dirección de magnetización del imán se determinaría durante la
        pulsación y una vez hecha no se puede cambiar.
      </p>

      <CardUya
        src={contextImgs(`./direccion_magnetica.webp`)}
        className="place-self-center sm:max-w-[700px]"
        alt="Ejemplos de direcciones magnéticas"
        widht={700}
      />
    </div>
  );
}
