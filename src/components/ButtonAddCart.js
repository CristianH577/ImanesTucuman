import { Button } from "@nextui-org/react";
import { FaCartPlus } from "react-icons/fa";

export default function ButtonAddCart({
  itemData = {},
  inCart = false,
  handleAdd = () => {},
  className = "",
  ...props
}) {
  const color = inCart ? "success" : "secondary";

  if (inCart) {
    itemData.qtt = 0;
  } else {
    if (!itemData?.qtt) itemData.qtt = 1;
  }

  return (
    <Button
      color={color}
      isIconOnly
      title="Agregar al carrito"
      className={`shadow-md${className ? " " + className : ""}`}
      onPress={() => handleAdd(itemData)}
      {...props}
    >
      <FaCartPlus size={18} />
    </Button>
  );
}
