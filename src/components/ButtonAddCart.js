import { Button } from "@nextui-org/react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

export default function ButtonAddCart({
  itemData = {},
  inCart = false,
  handleAdd = () => {},
  className = "",
  ...props
}) {
  if (inCart) {
    itemData.qtt = 0;
  } else {
    if (!itemData?.qtt) itemData.qtt = 1;
  }

  return (
    <Button
      color={inCart ? "success" : "secondary"}
      isIconOnly
      title={inCart ? "Quitar del carrito" : "Agregar al carrito"}
      className={`group shadow-md ${inCart ? "hover:bg-danger" : ""}${
        className ? " " + className : ""
      }`}
      onPress={() => handleAdd(itemData)}
      {...props}
    >
      {inCart ? (
        <>
          <ShoppingCartIcon className="group-hover:hidden" />
          <RemoveShoppingCartIcon className="hidden group-hover:block" />
        </>
      ) : (
        <AddShoppingCartIcon />
      )}
    </Button>
  );
}
