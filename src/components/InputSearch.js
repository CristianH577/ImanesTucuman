import { Input, Button } from "@nextui-org/react";

import SearchIcon from "@mui/icons-material/Search";

export default function InputSearch({
  value = false,
  setValue = () => {},
  handleSearch = () => {},
}) {
  const handleKey = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="flex">
      <Button
        isIconOnly
        variant="light"
        title="Buscar"
        className="border-3 border-custom1-3 border-e-0 rounded-e-none"
        onPress={handleSearch}
      >
        <SearchIcon className="h-3/5 w-fit" />
      </Button>

      <Input
        name="text"
        placeholder="Buscar..."
        title="Buscar..."
        classNames={{
          inputWrapper: "border-3 border-custom1-3 border-s-0 rounded-s-none",
        }}
        value={value}
        onValueChange={(e) => setValue(e)}
        onKeyDown={handleKey}
        isClearable
      />
    </div>
  );
}
