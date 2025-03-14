import { Button, Link } from "@nextui-org/react";

export default function NotFound() {
  return (
    <Button
      as={Link}
      href="#"
      color="warning"
      variant="ghost"
      size="lg"
      className="font-semibold"
    >
      Ir al inicio
    </Button>
  );
}
