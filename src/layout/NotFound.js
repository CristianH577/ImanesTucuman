import { Link } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";

export default function NotFound() {
  return (
    <Link
      href="#"
      className={buttonStyles({
        variant: "ghost",
        color: "warning",
        size: "lg",
      })}
    >
      Ir al inicio
    </Link>
  );
}
