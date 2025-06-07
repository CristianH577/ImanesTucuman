import { useOutletContext } from "react-router";

import ImageCustom from "../../components/ImageCustom";
import ButtonAddCart from "../../components/ButtonAddCart";
import PriceLabel from "../../components/PriceLabel";

import {
  SVGArrastre,
  SVGCuadrado,
  SVGCuadradoFresado,
  SVGRedondo,
  SVGRedondoFresado,
} from "../../assets/imanes/svgs";
import { SVGViewGridAdd } from "../../assets/layout/svgs";

const contextImg = require.context("../../assets/items");

const SVG_FORMA = {
  redondo: SVGRedondo,
  cuadrado: SVGCuadrado,
  "redondo fresado": SVGRedondoFresado,
  "cuadrado fresado": SVGCuadradoFresado,
  arrastre: SVGArrastre,
};

export default function ItemsView({
  items = [],
  showMoreItems = () => {},
  totalItems = 0,
}) {
  const context = useOutletContext();
  const cart = context.cart.value;

  return (
    <section className="w-full grid xs:grid-cols-[repeat(auto-fit,_minmax(160px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-2 sm:gap-4 md:gap-10 justify-center">
      {items.map((item) => {
        const SvgForma =
          item.imgs_data.preview.type === "svg" && item.imgs_data.preview.src
            ? SVG_FORMA?.[item.imgs_data.preview.src]
            : false;

        return (
          <div key={item.id} className="relative">
            <ButtonAddCart
              inCart={item.id in cart}
              itemData={item}
              handleAdd={context.cart.add}
              className="absolute top-2 z-20 right-2"
            />

            <a href={`#search/${item.id}`} title="Ver el producto" className="">
              <div className="hover:scale-105 transition-transform bg-content1 rounded-lg shadow-md">
                {SvgForma ? (
                  <div className="shadow-small rounded-lg p-4 self-center h-[150px] w-full">
                    <SvgForma className="h-full w-full" />
                  </div>
                ) : (
                  <ImageCustom
                    alt={`Imagen de ${item.label}`}
                    className="w-full object-contain p-4 h-[150px] rounded-lg shadow-small"
                    src={contextImg("./" + item.imgs_data.preview.src)}
                    width="100%"
                  />
                )}

                <div className="p-2">
                  <p className="text-second self-start text-neutral-400 capitalize line-clamp-1">
                    {item.categorie} {item?.subcategorie || ""}
                  </p>
                  <b className="line-clamp-1 text-start">{item.label}</b>
                  {item?.noStock ? (
                    <b className="text-danger">Sin Stock</b>
                  ) : null}

                  <PriceLabel
                    itemData={item}
                    classNames={{
                      price:
                        "font-semibold text-tert text-custom2 dark:text-custom1",
                    }}
                  />
                </div>
              </div>
            </a>
          </div>
        );
      })}

      {items.length < totalItems && (
        <div
          className="hover:scale-105 transition-transform bg-warning rounded-lg cursor-pointer"
          onClick={showMoreItems}
        >
          <div className="shadow-small rounded-lg p-4 self-center h-[150px] w-full">
            <SVGViewGridAdd className="h-full w-full" />
          </div>

          <div className="items-center justify-center h-full p-3 text-center">
            <b>Cargar mas</b>
          </div>
        </div>
      )}
    </section>
  );
}
