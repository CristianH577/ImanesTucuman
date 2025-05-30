export default function LinkCustom({
  href = "",
  title = "",
  text = "",
  className = "",
  target = "",
  icon = null,
}) {
  return (
    <a
      href={href || null}
      target={target || "_blank"}
      rel="noopener noreferrer"
      title={title || ""}
      aria-label={title || ""}
      className={`font-bold text-custom1--9 dark:text-custom1 hover:underline${
        icon ? " inline-flex items-center gap-1" : ""
      }${className ? " " + className : ""}`}
    >
      {text || "Link"}
      {icon || null}
    </a>
  );
}
