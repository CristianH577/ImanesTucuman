import { useRef } from "react";
import { useInView } from "framer-motion";

import TitleCustom from "./TitleCustom";

export default function ViewDefault({
  children,
  disabledInView = false,
  id = null,
  className = "",
  title = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: 0.3,
    once: true,
  });
  const isInView_ = disabledInView ? true : isInView;

  return (
    <div
      id={id}
      ref={ref}
      className={`w-full max-w-[1200px] flex flex-col items-center gap-6 place-self-center pt-16 min-h-[100dvh]${
        className ? " " + className : ""
      }`}
      // style={{
      //   minHeight: isInView_ ? "100dvh" : "none",
      // }}
    >
      {isInView_ && title && <TitleCustom title={title} />}

      {isInView_ && children}
    </div>
  );
}
