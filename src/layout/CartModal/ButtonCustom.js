import { Button, Tooltip } from "@nextui-org/react";

function ButtonCustom(props) {
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
        className="text-2xl"
        isDisabled={props?.isDisabled}
        onPress={props?.onPress || null}
      >
        {props?.icon || null}
      </Button>
    </Tooltip>
  );
}

export default ButtonCustom;
