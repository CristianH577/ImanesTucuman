import { Button, Tooltip } from "@nextui-org/react";

function ButtonCart(props) {
  return (
    <Tooltip
      content={props?.label}
      className="border-2 border-custom1-5"
      classNames={{
        content: "dark:text-white text-center font-semibold",
      }}
      hidden={!props?.label}
    >
      <Button
        color={props?.color}
        isIconOnly
        className="p-2 max-xs:w-full"
        isDisabled={props?.isDisabled}
        onPress={props?.onPress || null}
      >
        {props?.icon ? <props.icon className="h-full w-fit" /> : null}
      </Button>
    </Tooltip>
  );
}

export default ButtonCart;
