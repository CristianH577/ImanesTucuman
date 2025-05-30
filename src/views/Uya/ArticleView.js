import { title } from "../../libs/tvs";
import { scrollToTop } from "../../libs/functions";

import { Button } from "@nextui-org/react";

import SuspenseCustom from "../../components/SuspenseCustom";

import { LuArrowBigUpDash } from "react-icons/lu";

export default function ArticleView({ children, h1, id }) {
  return (
    <article id={id || null} className="space-y-4 sm:space-y-8 pt-20">
      <span className="inline-flex max-xs:flex-col-reverse gap-3 items-center">
        <h1
          className={
            "max-xs:break-all " +
            title({ size: "md", color: "custom2", darkColor: "custom1" })
          }
        >
          {h1}
        </h1>

        <Button
          isIconOnly
          variant="ghost"
          color="secondary"
          size="sm"
          title="Ir al principia de la pagina"
          onPress={scrollToTop}
        >
          <LuArrowBigUpDash className="w-full h-fit" />
        </Button>
      </span>

      <SuspenseCustom
        classnames={{
          suspenseFall: "min-h-[150vh]",
        }}
      >
        {children}
      </SuspenseCustom>
    </article>
  );
}
