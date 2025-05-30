import { useEffect, useState } from "react";

import { scrollStyle } from "../../libs/tvs";

import { Button } from "@nextui-org/react";

import ImageCustom from "../../components/ImageCustom";

import { GrCompare } from "react-icons/gr";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function ImagesSection({
  imgsData = {},
  isComparable = false,
  onComparate = () => {},
}) {
  const [index, setIndex] = useState(0);

  const handleButtons = (num) => {
    let idx_ = index + num;
    const max = imgsData.imgs?.length || 0;
    if (idx_ < 0) {
      idx_ = max - 1;
    } else if (idx_ >= max) {
      idx_ = 0;
    }
    setIndex(idx_);
  };

  return (
    <section className="flex flex-col items-center justify-center p-2 sm:p-4 relative">
      {imgsData?.thumbnails && imgsData?.thumbnails?.length > 1 && (
        <>
          <Button
            isIconOnly
            variant="ghost"
            radius="full"
            size="lg"
            className="absolute top-1/2 left-0 text-custom2 dark:text-custom1"
            title="Mostrar imagen anterior"
            onPress={() => handleButtons(-1)}
          >
            <FaChevronLeft className="h-3/5 w-full" />
          </Button>

          <Button
            isIconOnly
            variant="ghost"
            radius="full"
            size="lg"
            className="absolute top-1/2 right-0 text-custom2 dark:text-custom1"
            title="Mostrar imagen siguiente"
            onPress={() => handleButtons(1)}
          >
            <FaChevronRight className="h-3/5 w-full" />
          </Button>

          <article
            className={`w-full max-w-[90vw] p-4 place-self-center grid grid-flow-col auto-cols-[50px] overflow-auto gap-2 ${scrollStyle}`}
          >
            {imgsData?.thumbnails?.map((img, i) => (
              <div
                key={i}
                className="cursor-pointer rounded-medium hover:scale-95 hover:opacity-100 opacity-70 data-[selected=true]:opacity-100 data-[selected=true]:border-3 data-[selected=true]:border-custom1 overflow-hidden"
                data-selected={index === i}
              >
                {img.type === "svg" ? (
                  <img.src
                    className="w-full h-[50px]"
                    onClick={() => setIndex(i)}
                  />
                ) : (
                  <ImageCustom
                    alt={`Miniatura ${i}`}
                    className="object-cover h-[50px] w-full"
                    removeWrapper
                    radius="md"
                    src={img?.src}
                    onClick={() => setIndex(i)}
                  />
                )}
              </div>
            ))}
          </article>
        </>
      )}

      <article className="w-full h-[350px] flex items-center justify-center p-4">
        {imgsData?.imgs && imgsData?.imgs?.length > 0 ? (
          imgsData?.imgs.map((img, i) =>
            img?.type === "svg" && img?.src ? (
              <img.src
                key={i}
                className="w-full max-w-[300px] h-full p-4"
                style={{ display: index === i ? "block" : "none" }}
              />
            ) : (
              <ImageCustom
                key={i}
                src={img?.src}
                className="object-contain drop-shadow-custom h-full"
                alt="Imagen seleccionada"
                width="100%"
                radius="none"
                classNames={{
                  wrapper: "h-full max-w-[300px]",
                }}
                style={{ display: index === i ? "block" : "none" }}
              />
            )
          )
        ) : (
          <ImageCustom className="bg-neutral-500/50" />
        )}
      </article>

      {isComparable && (
        <Button
          color="secondary"
          isIconOnly
          className="shadow-md absolute bottom-3 right-3 z-10"
          title="Mostrar referencia de tamaño"
          onPress={onComparate}
        >
          <GrCompare size={22} />
        </Button>
      )}
    </section>
  );
}
