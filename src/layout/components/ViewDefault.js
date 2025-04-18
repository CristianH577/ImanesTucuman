import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import TitleCustom from "./TitleCustom";

function ViewDefault({ children, disabledInView, ...props }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: 0.3,
    once: true,
  });
  const isInView_ = disabledInView ? true : isInView;

  return (
    <motion.div
      id={props?.id || null}
      ref={ref}
      className={`w-full max-w-[1200px] flex flex-col items-center gap-6 place-self-center pt-16 ${
        props?.className ? props?.className : ""
      }`}
      style={{
        ...(props?.style || {}),
      }}
      variants={{
        hidden: { minHeight: "100vh" },
        visible: {
          minHeight: "none",
          transition: {
            delayChildren: 0.1,
            staggerChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      animate={isInView_ ? "visible" : "hidden"}
    >
      {props?.title && (
        <TitleCustom
          title={props?.title}
          animation={{
            variants: {
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            },
          }}
        />
      )}

      {isInView_ && children}
    </motion.div>
  );
}

export default ViewDefault;
