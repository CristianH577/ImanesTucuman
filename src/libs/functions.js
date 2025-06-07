export const scrollToTop = () => {
  const app = document.querySelector("#app");
  if (app) app.scrollTo(0, 0);
};
export const scrollToBottom = () => {
  // const app = document.querySelector("#app");
  // if (app) app.scrollTo(0, app.scrollHeight);
  const footer = document.querySelector("#footer");
  if (footer) footer.scrollIntoView();
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
