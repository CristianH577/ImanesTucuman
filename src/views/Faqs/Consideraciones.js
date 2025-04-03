import { Accordion, AccordionItem } from "@nextui-org/react";

function Consideraciones() {
  const lists = [
    {
      title:
        "La totalidad de la fuerza de atracción indicadas SOLO se logran en condiciones óptimas",
      items: [
        "Adhiriéndolo a materiales 100% ferromagnéticos (no se logra con otros materiales, fundición, acero inoxidable, bronce, cobre, aluminio, latón, oro, plata, etc.)",
        "Adhesión del 100% de la superficie del imán (no se logra si se adhiere en forma parcial o en una superficie curva, garrafa, caño de bicicleta, llanta, varilla redonda, etc.)",
        "En elementos con más de 10mm de espesor (no se logra en una heladera, lavarropas, zinguería, chapas finas o similar, ya que el imán no tiene el material necesario para ejercer campo magnético)",
        "No hay ningún tipo de material entre el imán y la superficie metálica",
        "Superficies sucias, pintadas, oxidadas restaran poder de atracción",
        "Los Kg de atracción indicados son en forma horizontal (si se adhiere a una superficie vertical, el imán tendrá alrededor del 30% de la fuerza)",
      ],
    },
    {
      title: "Sugerencias",
      items: [
        "Mantenga alejado de tarjetas con banda magnética",
        "El neodimio(NdFeB)(neodimio, hierro y boro) es un compuesto artificial que si bien es muy duro, es frágil ante los golpes",
        "Si se va a usar para recoger objetos chicos es recomendable primero poner el imán dentro de una bolsa de nylon para facilitar quitar lo adherido",
        "Se desaconseja cortar o taladrar imanes de neodimio, dado que están hechos por extrusión de polvos, son muy frágiles y propensos a daños. Además, la magnetización podría perderse",
        "Al quitar un iman es recomendable deslizar hacia un lado antes de levantarlo",
      ],
    },
    {
      title: "Información",
      items: [
        "Los imanes de neodimio son alrededor de 10 veces mas fuertes que los de ferrita pero a su vez 10 veces mas caros",
        "El numero que acompaña la N representa el grado(fuerza magnética) del imán, entre mayor sea mayor la fuerza",
        "Un imán de neodimio permanente estándar, mantenido en condiciones de almacenamiento adecuadas y no sujeto a otros factores externos, perderá en promedio menos del 5% de su magnetización en un lapso de un siglo entero",
        "Si están expuestos a temperaturas más altas de lo recomendado o a descargas eléctricas es probable que pierdan su magnetismo por completo",
        "Los imanes de neodimio, en general, pueden resistir una temperatura máxima de 80°C",
      ],
    },
  ];

  return (
    <Accordion className="space-y-4" selectionMode="multiple" isCompact>
      {lists.map((list, idx) => (
        <AccordionItem
          key={idx}
          aria-label={list.title}
          title={list.title}
          classNames={{
            title: "font-bold",
          }}
        >
          <ol className="list-disc list-inside sm:ps-4">
            {list.items.map((item, i) => (
              <li key={i}>{item}.</li>
            ))}
          </ol>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default Consideraciones;
