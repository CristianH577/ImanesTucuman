import { Accordion, AccordionItem } from "@nextui-org/react";

export default function ArticlesList({ list }) {
  const handleClick = (e) => {
    const id = e?.target?.dataset?.id;
    if (id) {
      const article = document.querySelector("#" + id);
      if (article) {
        article.scrollIntoView();
      } else {
        setTimeout(() => {
          if (article) article.scrollIntoView();
        }, 500);
      }
    }
  };

  return (
    <Accordion variant="splitted" className="w-full max-w-sm">
      <AccordionItem
        key="articles"
        aria-label="Artículos"
        title="Artículos"
        className="border-3 border-custom1-2"
        classNames={{
          title: "font-bold border-b",
          content: "pt-0 pb-4",
        }}
      >
        <ul className="list-disc list-inside text-start space-y-2">
          {list.map((item, i) => (
            <li
              key={i}
              className="hover:text-custom1 cursor-pointer hover:font-semibold"
              data-id={item?.id}
              onClick={handleClick}
            >
              {item?.title}
            </li>
          ))}
        </ul>
      </AccordionItem>
    </Accordion>
  );
}
