import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import SlideCustom from "./SlideCustom";

function SliderCustom({ items, id }) {
  const button_class = `absolute h-full top-0 w-12 z-30 bg-content2 bg-opacity-0 hover:bg-opacity-30 dark:bg-content1 dark:bg-opacity-0 dark:hover:bg-opacity-30 cursor-pointer ${
    items.length === 1 ? "hidden" : ""
  }`;

  const containerRef = useRef(null);
  const [idx, setIdx] = useState(0);

  const scrollToIndex = () => {
    const container = containerRef?.current;
    if (container) {
      container.scrollTo({
        left: container.offsetWidth * idx,
      });
    }
  };

  const handleButtons = (num) => {
    let new_idx = idx + num;
    if (new_idx > items.length - 1) {
      new_idx = 0;
    } else if (new_idx < 0) {
      new_idx = items.length - 1;
    }

    setIdx(new_idx);
  };

  useEffect(scrollToIndex, [idx]);
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const targetScroll = idx * containerWidth;
        containerRef.current.scrollTo({ left: targetScroll });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line
  }, []);

  // const [isInView, setIsInView] = useState(0);
  // const handleScrollStop = () => {
  //   console.log("handleScrollStop", isInView);
  //   if (idx !== isInView) setIdx(isInView);
  // };
  // useEffect(() => {
  //   const handleScroll = () => {
  //     clearTimeout(containerRef.current.scrollTimeout);
  //     containerRef.current.scrollTimeout = setTimeout(handleScrollStop, 300);
  //   };

  //   const container = containerRef?.current;
  //   if (container) container.addEventListener("scroll", handleScroll);

  //   return () => {
  //     if (container) container.addEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <motion.section
      id={id || "slider"}
      data-slot="slider"
      className="w-full relative"
      initial={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}
      animate={{
        clipPath:
          idx % 2 === 0
            ? "polygon(0 0, 100% 0%, 100% calc(100% - 4rem), 0% 100%)"
            : "polygon(0 0, 100% 0%, 100% 100%, 0 calc(100% - 4rem))",
      }}
    >
      <div
        ref={containerRef}
        data-slot="container"
        className="w-screen flex overflow-x-scroll overflow-y-hidden scroll-smooth scrollbar-hide"
      >
        {items.map((item, i) => (
          <SlideCustom
            key={i}
            content={item}
            // onView={() => setIsInView(i)}
            // i={i}
          />
        ))}
      </div>

      {items.length > 1 && (
        <>
          <span
            data-slot="button-prev"
            className={`${button_class} left-0`}
            onClick={() => handleButtons(-1)}
          />
          <span
            data-slot="button-next"
            className={`${button_class} right-0`}
            onClick={() => handleButtons(1)}
          />

          <div
            data-slot="pagination"
            className="absolute bottom-12 z-10 w-full flex items-center justify-center gap-2"
          >
            {items.map((_, i) => (
              <span
                key={i}
                className="h-2 w-2 rounded-full border border-neutral-500 bg-background bg-opacity-20 data-[active=true]:bg-primary cursor-pointer hover:bg-custom1"
                data-active={idx === i}
                onClick={() => idx !== i && setIdx(i)}
              />
            ))}
          </div>
        </>
      )}
    </motion.section>
  );
}

export default SliderCustom;
