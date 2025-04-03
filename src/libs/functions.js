export const scrollTop = () => {
  const app = document.querySelector("#app");
  if (app) app.scrollTo(0, 0);
};

export const definePriceToUse = (
  pricesObj = {},
  makeDiscountFollow = false
) => {
  let price_key = "base";

  Object.entries(pricesObj).forEach(([key, val]) => {
    let compare = Boolean(pricesObj?.[key]);

    if (compare && key === "follow") compare = makeDiscountFollow;

    if (compare) {
      if (val < pricesObj[price_key]) price_key = key;
    }
  });

  return price_key;
};

export const defineDiscountToUse = (obj = {}, makeDiscountFollow = false) => {
  let current = {
    key: "",
    val: 0,
  };

  Object.entries(obj).forEach(([key, val]) => {
    let compare = val > 0;
    if (compare && key === "follow") compare = makeDiscountFollow;

    if (compare) {
      if (current.val > 0) {
        if (val > current.val)
          current = {
            key: key,
            val: val,
          };
      } else {
        current = {
          key: key,
          val: val,
        };
      }
    }
  });

  return current.key;
};
