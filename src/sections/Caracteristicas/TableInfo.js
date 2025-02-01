import { Button } from "@nextui-org/react";

function TableInfo({ cat, formas_data, data, showMore }) {
  const columns = [
    {
      key: "medida",
      label: (
        <>
          Medida
          <br />
          (mm)
        </>
      ),
    },
    {
      key: "peso",
      label: (
        <>
          Peso
          <br />
          (g)
        </>
      ),
    },
    {
      key: "grade",
      label: (
        <>
          Grado
          <br />N
        </>
      ),
    },
    {
      key: "fuerza",
      label: (
        <>
          Fuerza
          <br />
          (kg)
        </>
      ),
    },
    {
      key: "gauss",
      label: (
        <>
          Campo
          <br />
          (Gauss)
        </>
      ),
    },
  ];

  const makeCell = (row, key) => {
    const val = row[1]?.[key];

    switch (key) {
      case "medida":
        return row[0].replace("_", " ");
      case "peso":
        return val ? `${val}g` : "-";
      case "grade":
        return row[1]?.N
          ? Object.keys(row[1]?.N).map((g, i) => <p key={i}>N{g}</p>)
          : 35;
      case "fuerza":
      case "gauss":
        return row[1]?.N
          ? Object.values(row[1]?.N).map((v, i) => (
              <div key={i}>
                {v?.[key]}
                {key === "fuerza" && "kg"}
              </div>
            ))
          : "-";

      default:
        return val;
    }
  };

  return (
    <article className="overflow-auto pb-8 px-2 sm:px-8 h-[800px] w-full max-w-[900px] scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-custom1 scrollbar-track-custom2-10 scrollbar-w-3 scrollbar-h-3 hover:scrollbar-thumb-custom1-6">
      <table
        aria-label={`Tabla de precios: ${formas_data?.[cat]?.label}`}
        className="w-full text-[20px] xs:text-[24px] font-semibold min-w-[750px]"
      >
        <thead className="border-b-3">
          <tr>
            {columns.map((col) => (
              <td key={col?.key}>{col?.label}</td>
            ))}
          </tr>
        </thead>

        <tbody>
          {data?.rows?.map((row, i) => (
            <tr
              key={row?.[0]}
              className="text-center even:text-custom1 navidad:even:text-custom1-2 border-t"
            >
              {columns.map((col) => (
                <td key={`${row?.[0]}_${col?.key}`} className="py-2">
                  {makeCell(row, col?.key)}
                </td>
              ))}
            </tr>
          ))}

          <tr>
            <td colSpan={1} className="text-center">
              {data?.rows?.length < data?.total && (
                <Button
                  size="lg"
                  className="m-2 bg-custom1-2 text-custom2--2 font-bold text-lg"
                  onPress={() => showMore(cat)}
                >
                  Mas
                </Button>
              )}
            </td>
            <td colSpan={4}></td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}

export default TableInfo;
