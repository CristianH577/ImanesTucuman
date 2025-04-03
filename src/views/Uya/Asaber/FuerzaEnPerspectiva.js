import ImageCustom from "../../../layout/components/ImageCustom";

import fuerzaImg from "../../../assets/uya/asaber/fuerza.webp";

export default function FuerzaEnPerspectiva() {
  return (
    <div className="sm:text-start mt-4">
      <ImageCustom
        src={fuerzaImg}
        shadow="sm"
        className="object-contain p-4"
        classNames={{
          wrapper:
            "bg-white max-w-[400px] sm:w-[50%] sm:float-left sm:m-3  max-sm:justify-self-center border-3 border-divider",
        }}
        alt="Imanes con gancho sosteniendo pesos"
        width={400}
      />

      <div className="mt-4 indent-6">
        <p>
          La <b>orientación</b> de la superficie metálica a la que se adhieren
          los imanes <b>afecta a la potencia</b> de sujeción de los mismos.
        </p>
        <p>
          La <b>fuerza de tracción</b> indicada para cada imán se basa en
          levantar o unir contra acero de 10 mm de espesor en posición
          horizontal. Los imanes sobre una superficie vertical (de acero de 10
          mm de espesor) generalmente pueden contener alrededor del{" "}
          <b>30% de la fuerza</b> de tracción indicada debido a los efectos de
          la gravedad y la falta de tracción entre la superficie de acero y la
          superficie lisa o brillante del imán.
        </p>
        <p>
          <b>Cualquier espacio</b> creado por un material (como el papel) entre
          el imán y la superficie metálica a la que está adherido magnéticamente
          también <b>disminuirá ligeramente la fuerza</b> de sujeción del imán.
        </p>
      </div>
    </div>
  );
}
