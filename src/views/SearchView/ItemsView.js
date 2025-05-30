import { useOutletContext } from "react-router";

import ImageCustom from "../../components/ImageCustom";
import ButtonAddCart from "../../components/ButtonAddCart";
import PriceLabel from "../../components/PriceLabel";

import { HiViewGridAdd } from "react-icons/hi";

export default function ItemsView({
  items = [],
  showMoreItems = () => {},
  totalItems = 0,
}) {
  const context = useOutletContext();
  const cart = context.cart.value;

  return (
    <section className="w-full grid xs:grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4 sm:gap-8 md:gap-10">
      {items.map((item) => (
        <div key={item.id} className="relative">
          <ButtonAddCart
            inCart={item.id in cart}
            itemData={item}
            handleAdd={context.cart.add}
            className="absolute top-2 z-20 right-2"
          />

          <a href={`#search/${item.id}`} title="Ver el producto" className="">
            <div className="hover:scale-105 transition-transform bg-content1 rounded-lg shadow-md">
              {item.imgs_data.preview.type === "svg" &&
              item.imgs_data.preview?.src ? (
                <div className="shadow-small rounded-lg p-4 self-center h-[150px] w-full">
                  <item.imgs_data.preview.src className="h-full w-full" />
                </div>
              ) : (
                <ImageCustom
                  alt={`Imagen de ${item.label}`}
                  className="w-full object-contain p-4 h-[150px] rounded-lg shadow-small"
                  src={item.imgs_data.preview.src}
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
                  className=""
                  classNames={{
                    price:
                      "font-semibold text-tert text-custom2 dark:text-custom1",
                  }}
                />
              </div>
            </div>
          </a>
        </div>
      ))}

      {items.length < totalItems && (
        <div
          className="hover:scale-105 transition-transform bg-warning rounded-lg cursor-pointer"
          onClick={showMoreItems}
        >
          <div className="shadow-small rounded-lg p-4 self-center h-[150px] w-full">
            <HiViewGridAdd className="h-full w-full" />
          </div>

          <div className="items-center justify-center h-full p-3 text-center">
            <b>Cargar mas</b>
          </div>
        </div>
      )}
    </section>
  );
}
