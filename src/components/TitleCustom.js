import { motion } from "framer-motion";

import { SVGMancha } from "../assets/svgs";

function TitleCustom({
  title,
  scaleX,
  scaleY,
  titleClassName,
  classNames,
  id,
  animation,
  className,
  ...props
}) {
  return (
    <motion.div
      className={`flex items-center justify-center py-4 relative w-fit ${
        className || ""
      }`}
      style={{
        filter: "drop-shadow(2px 4px 6px rgba(0,0,0,.5))",
      }}
      {...(animation || {})}
    >
      <h2
        className={`text-[40px] font-extrabold uppercase text-center px-10 z-10 text-white ${
          titleClassName || ""
        }`}
      >
        {title}
      </h2>

      <SVGMancha
        id={id || "TitleCustom"}
        className={`absolute from-custom1/80 to-custom1--8/80 w-full h-full ${
          classNames?.svg || ""
        }`}
        // style={{
        //   transform: `scaleX(${scaleX || 1}) scaleY(${scaleY || 1})`,
        // }}
      />
    </motion.div>
  );
}

export default TitleCustom;