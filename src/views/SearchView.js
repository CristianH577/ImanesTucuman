import { lazy, useEffect, useState } from "react";
import { useLocation } from "react-router";

import { cartItemsComparator, loadImgsPreview } from "../libs/functions";

import { DB_ALL } from "../consts/dbs";
import { FILTERS_VALUES_DEFAULT } from "../consts/siteConfig";

import { Button, ButtonGroup, Spinner, useDisclosure } from "@nextui-org/react";

import ItemsView from "./SearchView/ItemsView";
import SuspenseCustom from "../components/SuspenseCustom";
import InputSearch from "../components/InputSearch";

import { TbFilter } from "react-icons/tb";
import { GiBroom } from "react-icons/gi";

const DrawerFilters = lazy(() => import("./SearchView/DrawerFilters"));

const itemsPerView = 30;

export default function SearchView() {
  const { search } = useLocation();

  const [items, setItems] = useState([]);
  const [filtersValues, setFiltersValues] = useState({
    ...FILTERS_VALUES_DEFAULT,
    apply: true,
    orderBy: "price-asc",
  });
  const [totalVisibleItems, setTotalVisibleItems] = useState(itemsPerView);
  const [visibleItems, setVisibleItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputText, setInputText] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const searhItems = () => {
    let items_ = structuredClone(DB_ALL);

    items_ = items_.filter((item) => !item?.hidden);

    if (filtersValues?.categorie) {
      items_ = items_.filter((item) => {
        const categorie = filtersValues.categorie;
        if (categorie === "otros") {
          return item.categorie === categorie || !item?.categorie;
        } else {
          return item.categorie === categorie;
        }
      });
    }

    if (filtersValues?.subcategorie) {
      items_ = items_.filter((item) => {
        return item.subcategorie === filtersValues.subcategorie;
      });
    }

    ["forma"].forEach((filterKey) => {
      if (filtersValues?.[filterKey]) {
        const filter_value = String(filtersValues[filterKey])
          .toLowerCase()
          .replace(/_/g, " ");
        items_ = items_.filter(
          (item) =>
            item?.info &&
            item.info?.[filterKey] &&
            item.info[filterKey].toLowerCase().includes(filter_value)
        );
      }
    });

    if (filtersValues?.price?.min || filtersValues?.price?.max) {
      const min = Number(filtersValues?.price?.min);
      const max = Number(filtersValues?.price?.max);
      items_ = items_.filter((item) => {
        let bool = true;
        if (min) bool = Number(item.price) >= min;
        if (max) bool = bool && Number(item.price) <= max;
        return bool;
      });
    }

    if (filtersValues?.text) {
      const text_ = filtersValues.text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      items_ = items_.filter((item) =>
        JSON.stringify(item)
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(filtersValues.text.toLowerCase(text_))
      );
    }

    if (filtersValues?.orderBy) {
      const [col, order] = filtersValues.orderBy.split("-");
      items_.sort(cartItemsComparator(col, order));
    }

    setItems(items_);
  };

  const handleSearch = () => {
    const filters_values_ = structuredClone(filtersValues);
    filters_values_.text = inputText;
    setFiltersValues(filters_values_);
  };
  const handleClean = () => {
    setInputText("");
    setFiltersValues(FILTERS_VALUES_DEFAULT);
  };

  const showMoreItems = () => {
    setTotalVisibleItems(totalVisibleItems + itemsPerView);
  };

  useEffect(() => {
    if (search) {
      const params = new URLSearchParams(search);
      const paramsObj = {};
      Array.from(params.entries()).map(
        ([k, v]) => (paramsObj[k] = v.replace(/%/g, " "))
      );

      const filters_values_ = structuredClone(filtersValues);
      Object.keys(paramsObj).forEach((key) => {
        if (filters_values_.hasOwnProperty(key)) {
          filters_values_[key] = paramsObj[key];
          filters_values_.apply = true;
        }
      });

      const text = filters_values_?.text;
      if (text) setInputText(text);

      setFiltersValues(filters_values_);
    }
  }, [search]);

  useEffect(searhItems, [filtersValues]);

  useEffect(() => {
    const loadImgs = async () => {
      setLoading(true);

      const visible_add = items.slice(visibleItems.length, totalVisibleItems);
      const visible_add_imgs = await loadImgsPreview(visible_add);
      const visible_ = [...visibleItems, ...visible_add_imgs];

      setVisibleItems(visible_);
      setLoading(false);
    };

    loadImgs();
  }, [totalVisibleItems]);

  useEffect(() => {
    const loadImgs = async () => {
      setLoading(true);
      setTotalVisibleItems(itemsPerView);

      const visible_ = items.slice(0, itemsPerView);
      const visible_imgs = await loadImgsPreview(visible_);

      setVisibleItems(visible_imgs);
      setLoading(false);
    };

    loadImgs();
  }, [items]);

  return (
    <>
      <section className="flex flex-col items-center gap-2">
        <article className="flex flex-col gap-2 items-center xs:flex-row">
          <InputSearch
            value={inputText}
            setValue={setInputText}
            handleSearch={handleSearch}
          />

          <ButtonGroup variant="ghost">
            <Button isIconOnly title="Limpiar filtros" onPress={handleClean}>
              <GiBroom className="h-3/5 w-fit" />
            </Button>

            <Button
              isIconOnly
              color={filtersValues?.apply ? "warning" : "default"}
              title="Abrir lista de filtros"
              onPress={onOpen}
            >
              <TbFilter className="h-4/5 w-fit" />
            </Button>
          </ButtonGroup>
        </article>

        <article className="text-center text-neutral-400">
          <span>Total: {items.length}</span>
          <br />
          <span className="text-second">Los precios pueden variar.</span>
        </article>

        <SuspenseCustom
          classnames={{
            suspenseFall: "absolute w-screen min-h-[100dvh] bg-black/50 z-30",
          }}
        >
          <DrawerFilters
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            filtersValues={filtersValues}
            setFiltersValues={setFiltersValues}
          />
        </SuspenseCustom>
      </section>

      {items.length < 1 ? (
        <b>Sin Resultados</b>
      ) : loading ? (
        <Spinner color="secondary" />
      ) : (
        <ItemsView
          items={visibleItems}
          showMoreItems={showMoreItems}
          totalItems={items.length}
        />
      )}
    </>
  );
}
