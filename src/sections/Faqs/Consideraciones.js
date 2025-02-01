function Consideraciones() {
  const conditions = [
    "Adhiriéndolo a materiales 100% ferromagnéticos (no se logra con otros materiales, fundición, acero inoxidable, bronce, cobre, aluminio, latón, oro, plata, etc.)",
    "Adhesión del 100% de la superficie del imán (no se logra si se adhiere en forma parcial o en una superficie curva, garrafa, caño de bicicleta, llanta, varilla redonda, etc.)",
    "En elementos con más de 10mm de espesor (no se logra en una heladera, lavarropas, zinguería, chapas finas o similar, ya que el imán no tiene el material necesario para ejercer campo magnético)",
    "No hay ningún tipo de material entre el imán y la superficie metálica",
    "Superficies sucias, pintadas, oxidadas restaran poder de atracción",
    "Los Kg de atracción indicados son en forma horizontal (si se adhiere a una superficie vertical, el imán tendrá alrededor del 30% de la fuerza)",
  ];

  const sugerencias = [
    "Mantenga alejado de tarjetas con banda magnética",
    "El neodimio es un compuesto artificial que si bien es muy duro, es frágil ante los golpes",
    "Si se va a usar para recoger objetos chicos es recomendable primero poner el imán dentro de una bolsa de nylon para facilitar quitar lo adherido",
  ];

  return (
    <ol className="text-start space-y-4">
      <li>
        <b className="text-lg">
          La totalidad de la fuerza de atracción indicadas SOLO se logran en
          condiciones óptimas:
        </b>

        <ol className="list-decimal list-inside sm:ps-2">
          {conditions.map((e, i) => (
            <li key={i}>{e}.</li>
          ))}
        </ol>
      </li>

      <li>
        <b className="text-lg">Sugerencias:</b>

        <ol className="list-disc list-inside sm:ps-4">
          {sugerencias.map((e, i) => (
            <li key={i}>{e}.</li>
          ))}
        </ol>
      </li>
    </ol>
  );
}

export default Consideraciones;
