function LinkCustom({ href, title, text, className, target, icon }) {
  return (
    <a
      href={href || null}
      target={target || "_blank"}
      rel="noopener noreferrer"
      title={title || ""}
      aria-label={title || ""}
      className={`font-bold text-custom1--9 dark:text-custom1 hover:underline ${
        icon ? "inline-flex items-center gap-1" : ""
      } ${className || ""}`}
    >
      {text || "Link"}
      {icon ? icon : null}
    </a>
  );
}

export default LinkCustom;
