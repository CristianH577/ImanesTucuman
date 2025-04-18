import { Suspense } from "react";

import { title } from "../../libs/tvs";
import { scrollTop } from "../../libs/functions";

import { Button, Skeleton } from "@nextui-org/react";

import { LuArrowBigUpDash } from "react-icons/lu";

export default function ArticleView({ children, h1, id }) {
  return (
    <article id={id || null} className="space-y-4 sm:space-y-8 pt-20">
      <span className="inline-flex max-xs:flex-col-reverse gap-3 items-center">
        <h1 className={"max-xs:break-all " + title({ size: "md" })}>{h1}</h1>

        <Button
          isIconOnly
          variant="ghost"
          color="warning"
          size="sm"
          onPress={scrollTop}
        >
          <LuArrowBigUpDash className="w-full h-fit" />
        </Button>
      </span>

      <Suspense fallback={<Skeleton className="min-h-[150vh]"></Skeleton>}>
        {children}
      </Suspense>
    </article>
  );
}
