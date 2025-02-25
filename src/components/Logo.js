import { useRef } from "react";
import { useInView } from "framer-motion";

import { Skeleton } from "@nextui-org/react";

import { SVGMancha, SVGTextoImanes, SVGTextoTucuman } from "../consts/svgs";

function Logo({ id, classNames, className, styles }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: 0.3,
    once: true,
  });

  return (
    <Skeleton
      ref={ref}
      isLoaded={isInView}
      className="dark:bg-transparent w-fit overflow-hidden before:hidden place-self-center"
      // className={`font-['calvera'] flex items-center justify-center relative select-none ${
      //   className || ""
      // }`}
      classNames={{
        content: `font-['calvera'] relative select-none flex items-center justify-center self-center ${
          className || ""
        }`,
      }}
      style={{}}
    >
      <SVGTextoImanes
        id={`${id || "logo"}_back`}
        data-slot="svgA"
        className={`to-custom1 from-custom1-6 navidad:from-custom1 navidad:to-custom1--6 w-full h-full ${
          classNames?.svgA || ""
        }`}
      />

      <SVGMancha
        id={`${id || "logo"}_midle`}
        data-slot="svgC"
        className={`absolute from-custom1--8/60 to-custom1--9/60 h-4/5 w-[60%] navidad:to-custom1--3/60 navidad:from-custom1--6/60 ${
          classNames?.svgC || ""
        }`}
        style={{
          ...styles?.svgC,
        }}
      />

      <SVGTextoTucuman
        id={`${id || "logo"}_front`}
        data-slot="svgB"
        className={`absolute h-3/5 w-1/2 tracking-[0.4em] z-10 overflow-visible ${
          classNames?.svgB || ""
        }`}
      />
    </Skeleton>
  );
}

export default Logo;
