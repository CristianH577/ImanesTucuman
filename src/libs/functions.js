import {
  SVGArrastre,
  SVGCuadrado,
  SVGCuadradoFresado,
  SVGRedondo,
  SVGRedondoFresado,
} from "../assets/imanes/svgs";

export const scrollToTop = () => {
  const app = document.querySelector("#app");
  if (app) app.scrollTo(0, 0);
};
export const scrollToBottom = () => {
  const app = document.querySelector("#app");
  if (app) app.scrollTo(0, app.scrollHeight);
};

export const toPriceFormat = (price = 0) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
export const toPercentageFormat = (num = 0) => {
  return new Intl.NumberFormat("es-AR", {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
};

export function cartItemsComparator(col, order) {
  return function (a, b) {
    let type = "text";
    if (["price", "id", "qtt", "subtotal"].includes(col)) type = "number";

    let val_a = a?.[col] || "";
    let val_b = b?.[col] || "";

    if (type === "text" && val_a === "") {
      val_a = a?.info?.[col] || "";
      val_b = b?.info?.[col] || "";
    }

    let bool = 0;
    if (type === "number") {
      if (col === "price") {
        const use_a = a?.price_data?.usePrice;
        const use_b = b?.price_data?.usePrice;

        val_a = a?.price_data?.prices?.[use_a] || "";
        val_b = b?.price_data?.prices?.[use_b] || "";
      }
      bool = val_a - val_b;
    } else {
      bool = val_a.localeCompare(val_b);
    }

    if (order === "desc") return -bool;
    return bool;
  };
}

export const handlePriceData = (itemData = {}) => {
  const price_data = itemData?.price_data;
  const prices_qtts = price_data?.prices_qtts;

  if (prices_qtts) {
    let price_qtt = 0;

    for (const umin in prices_qtts) {
      if (umin !== "1") {
        if (itemData?.qtt >= Number(umin)) {
          price_qtt = prices_qtts[umin];
        } else {
          break;
        }
      }
    }

    const base = price_data.prices.base;
    price_data.prices.qtt = price_qtt;
    price_data.discounts_percentages.qtt = (base - price_qtt) / base;

    let use = "base";
    const prices = price_data.prices;
    for (const key in prices) {
      if (prices[key] && prices[key] < prices[use]) use = key;
    }
    price_data.usePrice = use;
  }

  return price_data;
};

export const loadImgsPreview = async (items = []) => {
  const contextImg = require.context("../assets/items", true);

  const formas = {
    redondo: SVGRedondo,
    cuadrado: SVGCuadrado,
    "redondo fresado": SVGRedondoFresado,
    "cuadrado fresado": SVGCuadradoFresado,
    arrastre: SVGArrastre,
  };

  await Promise.all(
    items.map((item) => {
      return new Promise((resolve) => {
        if (!item.imgs_data.preview?.src) {
          if (item.imgs_data.preview.type === "svg") {
            const forma = item?.info?.forma || "arrastre";
            item.imgs_data.preview.src = formas[forma];
          } else {
            let src = "";
            try {
              src = contextImg(`./${item.id}/preview.webp`);
            } catch (error) {
              try {
                src = contextImg(`./${item.id}.webp`);
              } catch (error) {
                src = "";
              }
            }

            let thumbnails = "";
            try {
              thumbnails = contextImg(`./${item.id}/thumbnails/1.webp`);
            } catch (error) {
              thumbnails = src;
            }

            item.imgs_data.preview.src = src;
            item.imgs_data.preview.thumbnails = thumbnails;
          }
        }

        resolve();
      });
    })
  );

  return items;
};

export const loadImgsAll = async (itemData = {}) => {
  const contextImg = require.context("../assets/items", true);
  const itemData_ = structuredClone(itemData);

  const formas = {
    redondo: SVGRedondo,
    cuadrado: SVGCuadrado,
    "redondo fresado": SVGRedondoFresado,
    "cuadrado fresado": SVGCuadradoFresado,
    arrastre: SVGArrastre,
  };

  await new Promise((resolve) => {
    let svgs = [];
    if (itemData_.imgs_data.preview.type === "svg") {
      const forma = itemData_?.info?.forma || "arrastre";
      svgs = [
        {
          type: "svg",
          src: formas[forma],
        },
      ];
    }

    let imgs_ = [];
    let thumbnails_ = [];
    try {
      const keys = contextImg.keys();
      const folder = keys.filter(
        (path) =>
          path.includes(`./${itemData_.id}/`) && !path.includes("preview")
      );

      const thumbnails_paths = folder.filter((path) =>
        path.includes("thumbnails")
      );
      const imgs_paths = folder.filter((path) => !path.includes("thumbnails"));

      thumbnails_ = thumbnails_paths.map((path) => {
        return { type: "img", src: contextImg(path) };
      });
      imgs_ = imgs_paths.map((path) => {
        return { type: "img", src: contextImg(path) };
      });
    } catch (error) {}

    if (!imgs_.length) {
      try {
        imgs_ = [
          {
            type: "img",
            src: contextImg(`./${itemData_.id}.webp`),
          },
        ];
      } catch (error) {}
    }

    let imgs = [];
    let thumbnails = [];
    imgs = [...svgs, ...imgs_];
    thumbnails = [...svgs, ...thumbnails_];

    itemData_.imgs_data.thumbnails = thumbnails;
    itemData_.imgs_data.imgs = imgs;

    resolve();
  });

  return itemData_;
};
