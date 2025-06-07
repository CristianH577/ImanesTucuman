import { Button } from "@nextui-org/react";

import { scrollStyle } from "../../libs/tvs";

import ButtonAddCart from "../../components/ButtonAddCart";
import PriceLabel from "../../components/PriceLabel";

import CompareIcon from "@mui/icons-material/Compare";

import { SVGDragMagnetMeasures } from "../../assets/imanes/svgs";

function DragMagnets({
  setItemToComparate = () => {},
  rows = [],
  cart = {},
  handleAdd = () => {},
}) {
  const cols = [
    { id: "alto", label: "B" },
    { id: "alto total", label: "C" },
    { id: "peso", label: "Peso" },
    { id: "fuerza", label: "Fuerza" },
  ];
  const cols_measure = {
    alto: "mm",
    "alto total": "mm",
    peso: "g",
    fuerza: "kg",
  };

  return (
    <>
      <div className="flex items-center justify-center h-[250px]">
        <SVGDragMagnetMeasures className="h-full w-full max-h-[250px]" />
      </div>

      <div
        data-slot="table-container"
        className={"w-full overflow-x-auto " + scrollStyle}
      >
        <table
          aria-label="Tabla de precios: imanes de arrastre"
          className="w-full sm:min-w-[750px] text-tert table-dinamic max-sm:border-separate border-spacing-y-3 lg:w-fit lg:place-self-center"
        >
          <thead className="border-b-3">
            <tr>
              <th className="p-2 border-e-3">A</th>

              {cols.map((col) => (
                <th key={col.id} className="p-2">
                  <div className="flex flex-col gap-1">
                    <span className="capitalize">{col.label}</span>(
                    {cols_measure?.[col.id]})
                  </div>
                </th>
              ))}

              <th className="p-2 text-end">Precio</th>
              <th className="p-2"></th>
            </tr>
          </thead>

          <tbody>
            {rows.map((item) => {
              const noStock = item?.noStock;
              const inCart = item.id in cart;

              return (
                <tr
                  key={item.id}
                  className="even:text-custom2-10 dark:even:text-custom1 group hover:text-white hover:font-semibold"
                >
                  <td
                    className="p-2 text-start whitespace-nowrap sm:border-e-3 max-sm:border-3 max-sm:rounded-t-lg data-[incart=false]:group-hover:bg-custom2 data-[nostock=true]:bg-divider data-[incart=true]:!bg-success/30"
                    data-incart={inCart}
                    data-nostock={noStock}
                  >
                    <div className="flex gap-2 justify-end items-center w-full sm:flex-row-reverse">
                      <span>{item.label}</span>
                      <Button
                        color="secondary"
                        isIconOnly
                        className="shadow-md"
                        title="Ver referencia de tamaños"
                        onPress={() => setItemToComparate(item)}
                      >
                        <CompareIcon className="h-7 w-fit" />
                      </Button>
                    </div>
                  </td>

                  {cols.map((col) => (
                    <td
                      key={`${item.id}_${col.id}`}
                      className="p-2 hover:!text-custom1-5 max-sm:last:border-b-3 max-sm:border-x-3 max-sm:last:rounded-b-lg group-hover:bg-custom2 data-[nostock=true]:bg-divider"
                      data-nostock={noStock}
                      data-label={`${col.label}(${cols_measure?.[col.id]})`}
                    >
                      {item.measures?.[col.id] || "-"}
                    </td>
                  ))}

                  <td
                    className="p-2 hover:!text-custom1-5 max-sm:last:border-b-3 max-sm:border-x-3 max-sm:last:rounded-b-lg group-hover:bg-custom2 data-[nostock=true]:bg-divider"
                    data-nostock={noStock}
                    data-label="Precio"
                  >
                    <PriceLabel itemData={item} />
                  </td>

                  <td
                    className="p-2 hover:!text-custom1-5 max-sm:last:border-b-3 max-sm:border-x-3 max-sm:last:rounded-b-lg group-hover:bg-custom2 data-[nostock=true]:bg-divider"
                    data-nostock={noStock}
                    data-label=""
                  >
                    <ButtonAddCart
                      inCart={inCart}
                      itemData={item}
                      handleAdd={() => {
                        let qtt_ = 0;
                        if (!inCart) qtt_ = 1;
                        item.qtt = qtt_;

                        handleAdd(item);
                      }}
                    />
                  </td>
                </tr>
              );
            })}

            <tr>
              <td colSpan="full" className="pt-4"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DragMagnets;
