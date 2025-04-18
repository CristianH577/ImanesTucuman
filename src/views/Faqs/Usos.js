import LinkCustom from "../../layout/components/LinkCustom";

function Usos({ linkFacebook = "#" }) {
  const conditions = [
    "Sostener o colgar objetos",
    "Separación de materiales",
    "Limpieza fin de obra (clavos, tornillos, virutas metálicas, trozos de alambre, etc.)",
    "Cierres para accesorios, cortinas, etc",
    "Crear objetos o juegues desarmables",
    "Detectar perfiles o columnas detrás de placas de Durlock",
    "Detección de oro falso",
    "Mantener cerradas puertas sin trabas",
    "Pesca magnética: recuperación de objetos ferro magnéticos caídos al mar, ríos, lagunas, cámaras sépticas, pozos ciegos o dentro de cañerías",
    "Detección de impurezas en procesos industriales o alimenticios",
    "Otros usos industriales específicos",
  ];
  return (
    <>
      <ol className="list-disc list-inside">
        {conditions.map((cond, i) => (
          <li key={i}>{cond}.</li>
        ))}
      </ol>

      <p className="mt-4">
        Encuentre algunas ideas sobre lo que se puede hacer con imanes en la
        pagina de{" "}
        <LinkCustom
          href={linkFacebook}
          title="Ir a la pagina de Facebook"
          text="Facebook"
        />{" "}
        o en la pagina de{" "}
        <LinkCustom
          href="#uya"
          title="Ir a U&A"
          text="Usos y aplicaciones"
          target="_self"
        />
        .
      </p>
    </>
  );
}

export default Usos;
