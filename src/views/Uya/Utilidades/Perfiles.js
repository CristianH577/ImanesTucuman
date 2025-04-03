import ImageCustom from "../../../layout/components/ImageCustom";

export default function Perfiles() {
  const contextImgs = require.context("../../../assets/uya/utilidades", true);

  return (
    <div className="grid sm:grid-cols-2 gap-4 items-center">
      <ImageCustom
        src={contextImgs("./perfiles/perfiles-1.webp")}
        shadow="md"
        radius="full"
        className="object-cover w-full h-full"
        classNames={{
          wrapper:
            "w-[300px] h-[300px] place-self-center border-5 border-divider",
        }}
        height={300}
      />
      <p>
        Utilizando imanes se puede fácilmente encontrar la ubicación de los
        perfiles de aluminio detrás de las placas de Durlock.
      </p>

      <p>
        Simplemente moviendo el imán suavemente sobre la placa al estar sobre el
        perfil quedara fijo.
      </p>

      <ImageCustom
        src={contextImgs("./perfiles/perfiles-2.webp")}
        shadow="md"
        radius="full"
        className="object-cover h-full object-left"
        classNames={{
          wrapper:
            "w-[300px] h-[300px] place-self-center border-5 border-divider",
        }}
        height={300}
      />
    </div>
  );
}
