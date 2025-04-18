import { useRef } from "react";
import { useInView } from "framer-motion";

import { Image } from "@nextui-org/react";

import UnknowImg from "../../assets/layout/unknow-img.webp";

export default function ImageCustom({ src, alt, className, ...props }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: 0.3,
    once: true,
  });

  return (
    <Image
      ref={ref}
      src={isInView && src ? src : UnknowImg}
      loading="lazy"
      decoding="async"
      className={"" + (className || null)}
      alt={alt || "Imagen desconocida"}
      {...props}
      classNames={{
        ...props?.classNames,
        wrapper:
          "" +
          (props?.classNames?.wrapper ? ` ${props.classNames.wrapper}` : ""),
      }}
    />
  );
}
