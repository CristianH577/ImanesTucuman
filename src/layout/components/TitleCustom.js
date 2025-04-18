import { motion } from "framer-motion";

import { SVGMancha } from "../../assets/layout/svgs";

function TitleCustom({
  title,
  titleClassName,
  classNames,
  id,
  animation,
  className,
}) {
  return (
    <motion.div
      className={`flex items-center justify-center py-3 sm:py-6 relative w-fit break-all ${
        className || ""
      }`}
      style={{
        filter: "drop-shadow(2px 4px 6px rgba(0,0,0,.5))",
      }}
      {...(animation || {})}
    >
      <h2
        className={`text-2xl sm:text-5xl font-extrabold uppercase text-center px-10 z-10 text-white ${
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
      />
    </motion.div>
  );
}

export default TitleCustom;
