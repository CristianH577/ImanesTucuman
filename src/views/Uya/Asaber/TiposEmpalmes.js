import CardUya from "../CardUya";

export default function TiposEmpalmes() {
  const contextImgs = require.context(
    "../../../assets/uya/asaber/tipos_empalmes",
    true
  );

  const items = [
    {
      tipo: "Derivador",
      desc: "permite conectar un cable y derivar otro",
    },
    {
      tipo: "Terminal",
      desc: "solo se insertan los cables en las entradas de las terminales",
    },
    {
      tipo: "Terminal clip",
      desc: "se debe liberar el seguro de la entrada para insertar o quitar los cables",
    },
    {
      tipo: "Bornera",
      desc: "se inserta el cable de un lado y su continuación en el otro",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-6 justify-items-center">
      {items.map((item, i) => (
        <CardUya
          key={i + 1}
          src={contextImgs(`./${i + 1}.webp`)}
          alt={`Imagen de ${item.tipo}`}
          text={
            <>
              <b>{item.tipo}</b>: {item.desc}
            </>
          }
          classNames={{
            img: "h-full",
            wrapper: "h-full",
          }}
        />
      ))}
    </div>
  );
}
