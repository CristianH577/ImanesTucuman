function Info() {
  const conditions = [
    "Los imanes de neodimio son alrededor de 10 veces mas fuertes que los de ferrita pero a su vez 10 veces mas caros",
    "El numero que acompaña la N representa el grado(fuerza magnética) del imán, entre mayor sea mayor la fuerza",
    "Un imán de neodimio permanente estándar, mantenido en condiciones de almacenamiento adecuadas y no sujeto a otros factores externos, perderá en promedio menos del 5% de su magnetización en un lapso de un siglo entero",
    "Si están expuestos a temperaturas más altas de lo recomendado o a descargas eléctricas es probable que pierdan su magnetismo por completo",
    "Los imanes de neodimio, en general, pueden resistir una temperatura máxima de 80°C",
  ];
  return (
    <ol className="list-disc list-inside">
      {conditions.map((e, i) => (
        <li key={i}>{e}.</li>
      ))}
    </ol>
  );
}

export default Info;
