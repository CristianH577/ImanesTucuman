import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Skeleton } from "@nextui-org/react";

import TitleCustom from "../components/TitleCustom";

function ViewDefault({ children, ...props }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: 0.3,
    once: true,
  });

  return (
    <motion.section
      id={props?.id || null}
      ref={ref}
      className={props?.className || null}
      style={props?.style || null}
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
    >
      <Skeleton
        isLoaded={isInView}
        className="w-full rounded-lg dark:bg-transparent"
        classNames={{
          content: `w-full max-w-[1200px] h-full flex flex-col items-center gap-6 place-self-center pt-16 ${
            props?.classNames?.content || ""
          }`,
        }}
      >
        {isInView && props?.title && (
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

        {isInView && children}
      </Skeleton>
    </motion.section>
  );
}

export default ViewDefault;
