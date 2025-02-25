import { useRef } from "react";
import { useInView } from "framer-motion";

function SlideCustom({ content }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2, once: true });

  return (
    <article
      ref={ref}
      data-slot="slide"
      className="w-screen min-w-screen flex items-center"
    >
      {isInView && content}
    </article>
  );
}

export default SlideCustom;
