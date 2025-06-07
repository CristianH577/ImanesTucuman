import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import {
  FILTERS_INPUTS,
  FILTERS_VALUES_DEFAULT,
} from "../../consts/siteConfig";

import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Input,
  Link,
  Select,
  SelectItem,
} from "@nextui-org/react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { SVGBroom } from "../../assets/layout/svgs";

export default function DrawerFilters({
  isOpen = false,
  onOpenChange = () => {},
  filtersValues = {},
}) {
  const navigate = useNavigate();

  const [filtersValuesTemp, setFiltersValuesTemp] = useState(
    FILTERS_VALUES_DEFAULT
  );

  const handleFilterChange = (e) => {
    const filters_values_ = structuredClone(filtersValuesTemp);
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;

    if (type === "number") {
      filters_values_[name] = Number(value);
    } else {
      filters_values_[name] = value;
    }

    setFiltersValuesTemp(filters_values_);
  };

  const handleSelectFilterChange = (e) => {
    const filters_values_ = structuredClone(filtersValuesTemp);
    const name = e.target.name;
    const value = e.target.value;

    filters_values_[name] = value;

    setFiltersValuesTemp(filters_values_);
  };

  const handleApply = () => {
    const add = [];
    for (const key in filtersValuesTemp) {
      if (!["apply", "page"].includes(key)) {
        const val = filtersValuesTemp[key];
        if (val) add.push([key, val]);
      }
    }

    if (add.length > 0) {
      let href = "";
      add.forEach((e, i) => {
        href += i === 0 ? "?" : "&";
        href += e[0] + "=" + e[1];
      });

      navigate(href);
    }

    onOpenChange();
  };

  const handleClean = () => {
    setFiltersValuesTemp(structuredClone(FILTERS_VALUES_DEFAULT));
    onOpenChange();
  };

  const makeInput = (input) => {
    const id = `${input.format}-${input.id}`;
    switch (input.format) {
      case "select":
        return (
          <Select
            className="max-w-xs text-foreground"
            classNames={{
              listbox: "text-foreground ",
              popoverContent: "border-3 border-custom1-3",
            }}
            label={input.label}
            name={input.id}
            selectedKeys={[filtersValuesTemp[input.id]]}
            onChange={handleSelectFilterChange}
          >
            <SelectItem key="" value="">
              Seleccione un valor
            </SelectItem>

            {input?.items &&
              input.items.map((item) => (
                <SelectItem key={item.id}>{item.label}</SelectItem>
              ))}
          </Select>
        );
      case "number":
        return (
          <div>
            <p>{input.label}</p>

            <div className="xs:flex gap-1">
              {["Min", "Max"].map((key) => (
                <Input
                  key={key}
                  type="number"
                  className="capitalize"
                  variant="standard"
                  id={`input-${input.id + key}`}
                  label={key}
                  name={`${input.id + key}`}
                  value={filtersValuesTemp[input.id + key] || ""}
                  onChange={handleFilterChange}
                />
              ))}
            </div>
          </div>
        );

      default:
        return (
          <Input
            id={id}
            label={input.label}
            variant="standard"
            name={input.id}
            value={filtersValuesTemp[input.id]}
            onChange={handleFilterChange}
          />
        );
    }
  };

  useEffect(() => {
    const filters_values_ = { ...filtersValuesTemp, ...filtersValues };

    setFiltersValuesTemp(filters_values_);
  }, [filtersValues]);

  return (
    <Drawer
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="max-w-[250px] text-foreground"
    >
      <DrawerContent>
        <DrawerHeader className="flex flex-col gap-1">Filtros</DrawerHeader>

        <DrawerBody>
          <Divider />

          <ol aria-label="Actions" className="space-y-4">
            {FILTERS_INPUTS.map((input) => (
              <li key={input.id}>{makeInput(input)}</li>
            ))}
          </ol>

          <Divider />
        </DrawerBody>

        <DrawerFooter>
          <Button
            isIconOnly
            variant="light"
            onPress={onOpenChange}
            title="Cerrar lista de filtros"
          >
            <ArrowBackIcon className="h-4/5 w-fit" />
          </Button>

          <Button
            isIconOnly
            title="Limpiar filtros"
            as={Link}
            href="#search?orderBy=price-asc"
            onPress={handleClean}
          >
            <SVGBroom className="h-3/5 w-fit" />
          </Button>

          <Button color="primary" onPress={handleApply} title="Aplicar filtros">
            Aplicar
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
