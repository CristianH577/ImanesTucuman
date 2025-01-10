import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Skeleton } from "@nextui-org/react";

import TitleCustom from "../components/TitleCustom";

function SectionView(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: 0.1,
    once: true,
  });

  return (
    <motion.section
      id={props?.id || ""}
      ref={ref}
      className={props?.className || ""}
      style={props?.style || {}}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: 0.1,
            staggerChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      animate={isInView && "visible"}
      data-test={isInView}
    >
      <Skeleton
        isLoaded={isInView}
        className="w-full rounded-lg dark:bg-transparent"
        classNames={{
          content:
            "w-full max-w-[1200px] flex flex-col items-center gap-6 place-self-center",
        }}
        style={{
          minHeight: isInView ? "20vh" : "100vh",
        }}
      >
        {isInView && props?.title && (
          <TitleCustom
            title={props?.title}
            animation={{
              variants: {
                hidden: { scale: 0, opacity: 0 },
                visible: { scale: 1, opacity: 1 },
              },
            }}
          />
        )}

        {isInView && (props?.content || null)}
      </Skeleton>
    </motion.section>
  );
}

export default SectionView;
