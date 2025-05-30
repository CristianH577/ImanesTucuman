import ImageCustom from "../../components/ImageCustom";

export default function CardUya({
  src = null,
  text = "",
  className = "",
  classNames = {},
  alt = "",
  id = null,
  contentPlus = null,
  widht = 300,
  srcSet = null,
}) {
  return (
    <div
      className={
        "flex flex-col items-center gap-2 h-full max-w-xs" +
        (className ? ` ${className}` : "")
      }
    >
      <ImageCustom
        src={src}
        alt={alt || id ? `Imagen de ejemplo ${id}` : null}
        className={
          "object-cover rounded-none" +
          (classNames?.img ? ` ${classNames.img}` : "")
        }
        classNames={{
          wrapper:
            "border-5 border-divider overflow-hidden" +
            (classNames?.wrapper ? ` ${classNames.wrapper}` : ""),
        }}
        widht={widht}
        srcSet={srcSet}
      />

      {text && <p>{text}.</p>}

      {contentPlus}
    </div>
  );
}
