import CardUya from "../CardUya";

export default function Pulseras() {
  const contextImgs = require.context(
    "../../../assets/uya/sujecion/pulseras",
    true
  );

  return (
    <div className="flex flex-col-reverse items-center gap-4 sm:flex-row">
      <div className="space-y-4 sm:w-full">
        {[...Array(3)].map((_, i) => (
          <CardUya key={i + 1} src={contextImgs(`./${i + 1}.webp`)} />
        ))}
      </div>

      <p className="text-xl sm:text-4xl md:text-5xl">
        Los imanes proporcionan un cierre fuerte y cómodo para accesorios de uso
        cotidiano.
      </p>
    </div>
  );
}
