function CustomLink({ href, title, text, className, target }) {
  return (
    <a
      href={href || null}
      target={target || "_blank"}
      rel="noopener noreferrer"
      title={title || ""}
      aria-label={title || ""}
      className={`text-custom1 navidad:text-custom1-4 hover:text-custom1-3 hover:border-b ${
        className || ""
      }`}
    >
      {text || "Link"}
    </a>
  );
}

export default CustomLink;
