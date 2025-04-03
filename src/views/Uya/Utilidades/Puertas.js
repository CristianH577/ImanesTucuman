import ImageCustom from "../../../layout/components/ImageCustom";

export default function Puertas() {
  const contextImgs = require.context("../../../assets/uya/utilidades", true);

  return (
    <div className="flex flex-col items-center gap-4">
      <p>
        Las bisagras de uso cotidiano tienden a cerrar mal con el tiempo y
        cuando pasa se puede solucionar fácilmente agregando un imán para un
        conseguir un cierre completo y cómodo.
      </p>

      <div className="grid sm:grid-cols-2 gap-8">
        {[...Array(4)].map((_, i) => (
          <ImageCustom
            key={i + 1}
            src={contextImgs(`./puertas/${i + 1}.webp`)}
            shadow="md"
            radius="full"
            className="object-cover w-[300px] h-[300px] border-5 border-divider"
            alt={`Imagen de ejemplo ${i + 1}`}
            height={300}
            widht={300}
          />
        ))}
      </div>
    </div>
  );
}
