import { toPercentageFormat, toPriceFormat } from "../libs/functions";

export default function PriceLabel({
  itemData = {},
  className = "",
  classNames = {},
}) {
  const usePrice = itemData.price_data.usePrice;
  const price = itemData.price_data.prices[usePrice];

  return (
    <div className={`text-end${className ? ` ${className}` : ""}`}>
      {usePrice !== "base" && (
        <div
          className={`whitespace-nowrap${
            classNames?.discountWrapper ? ` ${classNames?.discountWrapper}` : ""
          }`}
        >
          <b className="text-danger">
            -
            {toPercentageFormat(
              itemData.price_data.discounts_percentages[usePrice]
            )}
          </b>{" "}
          <span className="text-neutral-400 line-through">
            {toPriceFormat(itemData.price_data.prices.base)}
          </span>
        </div>
      )}
      <p className={classNames?.price || null}>
        {toPriceFormat(price)}
        {itemData?.format_sell ? "/" + itemData.format_sell : ""}
      </p>
    </div>
  );
}
