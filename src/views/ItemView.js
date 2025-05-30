import { useOutletContext, useParams } from "react-router";
import { useEffect, useState } from "react";

import { loadImgsAll } from "../libs/functions";

import { DB_ALL } from "../consts/dbs";

import { Divider, Spinner } from "@nextui-org/react";

import TableItemPrices from "./ItemView/TableItemPrices";
import NotFound from "../layout/NotFound";
import ImagesSection from "./ItemView/ImagesSection";
import TooltipFuerzaExp from "./ItemView/TooltipFuerzaExp";

const measures = {
  largo: "mm",
  ancho: "mm",
  alto: "mm",
  "alto total": "mm",
  peso: "g",
  fuerza: "kg",
  "diametro superior": "mm",
  "diametro inferior": "mm",
};

export default function ItemView() {
  const context = useOutletContext();
  const { id } = useParams();

  const [itemData, setItemData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadItem = async () => {
      setLoading(true);
      if (id) {
        const items_filter = DB_ALL.filter((item) => item.id === Number(id));
        const item_ = structuredClone(items_filter[0]);
        const item_imgs = await loadImgsAll(item_);

        setItemData(item_imgs);
      }

      setLoading(false);
    };

    loadItem();
  }, []);

  if (loading) {
    return <Spinner color="secondary" />;
  } else if (Object.keys(itemData)?.length < 1) {
    return <NotFound />;
  }

  return (
    <div className="w-full max-w-[600px] mt-4">
      <h1 className="text-4xl font-bold">{itemData?.label}</h1>

      <Divider />
      <ImagesSection
        imgsData={itemData.imgs_data}
        onComparate={() => context.setMagnetData(itemData)}
        isComparable={
          itemData?.categorie === "imanes" &&
          ["neodimio", "arrastre", "ferrita"].includes(itemData?.subcategorie)
        }
      />

      <Divider />
      <TableItemPrices itemData={itemData} />

      <section className="space-y-2 prose dark:prose-invert">
        {itemData?.measures ? (
          <>
            <Divider />
            <article>
              <h3 className="text-tertiary">Medidas</h3>

              <ol className="list-none ps-0">
                {Object.entries(itemData.measures).map(([key, value]) => {
                  return (
                    <li key={key}>
                      <span className="capitalize italic">{key}: </span>
                      {value}
                      {measures?.[key] ? measures[key] : ""}
                    </li>
                  );
                })}
              </ol>
            </article>
          </>
        ) : null}

        {itemData?.caracteristicas ? (
          <>
            <Divider />
            <article>
              <h3 className="text-tertiary">Caracteristicas</h3>

              <ol className="list-none ps-0 flex flex-wrap gap-4">
                {itemData.caracteristicas.map((caract) => (
                  <li
                    key={caract}
                    className="capitalize break-words italic font-bold"
                  >
                    {caract}
                  </li>
                ))}
              </ol>
            </article>
          </>
        ) : null}

        {itemData?.info ? (
          <>
            <Divider />
            <article>
              <h3 className="text-tertiary">Especificaciones</h3>

              <ol className="list-none ps-0">
                {Object.entries(itemData.info).map(([key, value]) => (
                  <li key={key}>
                    <span className="capitalize italic">
                      {key.replace(/_/g, " ")}:{" "}
                    </span>
                    {value}
                    {key === "fuerza_experimental" ? (
                      <TooltipFuerzaExp />
                    ) : null}
                  </li>
                ))}
              </ol>
            </article>
          </>
        ) : null}

        {itemData?.description ? (
          <>
            <Divider />
            <article>
              <h3 className="text-tertiary">Descripcion</h3>
              <p>{itemData.description}.</p>
            </article>
          </>
        ) : null}
      </section>
    </div>
  );
}
