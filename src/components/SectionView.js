import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Skeleton } from "@nextui-org/react";

import TitleCustom from "../components/TitleCustom";

function SectionView({ children, ...props }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: 0.3,
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
    >
      <Skeleton
        isLoaded={isInView}
        className="w-full rounded-lg dark:bg-transparent data-[view=false]:min-h-[180vh] xs:data-[view=false]:min-h-[150vh] md:data-[view=false]:min-h-[100vh] data-[view=true]:min-h-[20vh]"
        classNames={{
          content:
            "w-full max-w-[1200px] flex flex-col items-center gap-6 place-self-center",
        }}
        data-view={isInView}
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

        {isInView && children}
      </Skeleton>
    </motion.section>
  );
}

export default SectionView;
