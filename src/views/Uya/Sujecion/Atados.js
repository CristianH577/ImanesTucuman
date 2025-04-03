import CardUya from "../CardUya";

export default function Atados() {
  const contextImgs = require.context(
    "../../../assets/uya/sujecion/atados",
    true
  );

  const class_img_wrapper = "md:rounded-none md:shadow-none md:border-none";

  return (
    <div className="space-y-4">
      <p>
        Con un cordón o linga con imanes en sus puntas se puede hacer un atado o
        enrollado rápido y sencillo.
      </p>

      <div className="max-md:space-y-4 md:grid md:grid-cols-4 md:rounded-lg md:overflow-hidden md:shadow-medium max-sm:max-w-xs max-sm:place-self-center sm:justify-items-center">
        <CardUya
          src={contextImgs(`./320/1.webp`)}
          srcSet={`
              ${contextImgs(`./320/1.webp`)} 359w,
              ${contextImgs(`./650/1.webp`)} 360w,
            `}
          alt="Cortina atada y accesorio"
          className="col-span-2 row-span-3 md:max-w-full"
          classNames={{
            img: "h-full",
            wrapper: `h-full ${class_img_wrapper}`,
          }}
        />

        <CardUya
          src={contextImgs(`./320/2.webp`)}
          srcSet={`
              ${contextImgs(`./320/2.webp`)} 359w,
              ${contextImgs(`./650/2.webp`)} 360w,
            `}
          alt="Cuerda con imanes en las puntas"
          className="col-span-2 col-start-3 md:max-w-full"
          classNames={{
            img: "h-full",
            wrapper: `h-full ${class_img_wrapper}`,
          }}
        />

        <div className="flex flex-col max-md:items-center md:col-span-2 md:col-start-3 sm:flex-row max-md:gap-4">
          <CardUya
            src={contextImgs(`./3.webp`)}
            alt="Lingas con imanes en las puntas"
            className="md:w-2/3"
            classNames={{
              img: "h-full",
              wrapper: `h-full ${class_img_wrapper}`,
            }}
          />

          <CardUya
            src={contextImgs(`./4.jpg`)}
            alt="Persiana sostenida con cuerdas agarradas a ganchos magnéticos"
            className="md:w-2/3"
            classNames={{
              img: "h-full",
              wrapper: `h-full ${class_img_wrapper}`,
            }}
            width={225}
          />
        </div>
      </div>
    </div>
  );
}
