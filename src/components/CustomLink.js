function CustomLink({ href, title, text, className, target, icon }) {
  return (
    <a
      href={href || null}
      target={target || "_blank"}
      rel="noopener noreferrer"
      title={title || ""}
      aria-label={title || ""}
      className={`text-custom1 hover:text-custom1-3 hover:underline ${
        icon ? "inline-flex items-center gap-1" : ""
      } ${className || ""}`}
    >
      {text || "Link"}
      {icon ? icon : null}
    </a>
  );
}

export default CustomLink;
