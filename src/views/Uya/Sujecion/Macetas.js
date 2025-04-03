import CardUya from "../CardUya";

export default function Macetas() {
  const contextImgs = require.context(
    "../../../assets/uya/sujecion/macetas",
    true
  );

  return (
    <div className="space-y-4">
      <p>
        Uniendo imanes a macetas chicas y medianas, se pueden tener plantas en
        casi cualquier lugar sin presentar una molestia; mejorando la calidad de
        vida en el hogar o espacio de trabajo.
      </p>

      <div className="max-sm:flex flex-col max-sm:items-center max-sm:gap-4 sm:grid grid-cols-4 grid-rows-3 sm:shadow-medium">
        {[
          {
            class: "row-span-2",
            class_img: "sm:rounded-tl-lg",
          },
          {
            class: "col-span-2",
            wrapper: "col-span-2",
          },
          { class_img: "sm:rounded-tr-lg" },
          { class: "row-span-2 col-span-2" },
          {
            class: "row-span-2",
            class_img: "sm:rounded-br-lg",
          },
          { class_img: "sm:rounded-bl-lg" },
        ].map((item, i) => (
          <CardUya
            key={i + 1}
            src={contextImgs(`./320/${i + 1}.webp`)}
            srcSet={`
                ${contextImgs(`./320/${i + 1}.webp`)} 359w,
                ${contextImgs(`./${i + 1}.webp`)} 360w,
              `}
            className={"sm:max-w-none" + (item?.class ? ` ${item.class}` : "")}
            classNames={{
              img:
                "w-full h-full" + (item?.class_img ? ` ${item.class_img}` : ""),
              wrapper:
                "sm:border-0 sm:rounded-none h-full" +
                (item?.wrapper ? ` ${item.wrapper}` : ""),
            }}
          />
        ))}
      </div>
    </div>
  );
}
