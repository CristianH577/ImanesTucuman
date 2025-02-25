import { motion } from "framer-motion";

import { handleLink } from "../../libs/functions";

import { Image } from "@nextui-org/react";

function BannerDefault({ image, title, text, icon, content }) {
  return (
    <section className="relative w-full h-full bg-radial from-custom2-10 to-custom2 text-white flex justify-center pb-20 pt-24 overflow-hidden">
      {icon && <span className="absolute top-0 w-fit h-full">{icon}</span>}

      <div className="flex flex-col justify-center items-center sm:grid grid-cols-1 gap-6 md:grid-cols-2 text-center md:flex-row max-w-[1000px] px-2 sm:px-4">
        <article
          className="flex items-center justify-center w-full h-full max-h-[320px] sm:h-[320px] shadow-black hover:shadow-custom1/80 transition-all"
          style={{
            filter: "drop-shadow(2px 4px 6px var(--tw-shadow-color))",
          }}
        >
          {content ? (
            content
          ) : (
            <motion.a
              className="w-full h-full max-h-[320px] sm:h-[320px] shadow-black hover:shadow-custom1/80 transition-all"
              variants={{
                hidden: { scale: 0, opacity: 0 },
                visible: { scale: 1, opacity: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.2 }}
              href={`#${image?.href || ""}`}
              onClick={() => handleLink(image?.href || "")}
            >
              <Image
                src=""
                loading="lazy"
                removeWrapper
                className="object-contain place-self-center"
                alt={title}
                {...image?.data}
              />
            </motion.a>
          )}
        </article>

        <article className="z-10">
          <motion.h1
            className="text-2xl xs:text-4xl lg:text-5xl uppercase font- font-[calvera] text-custom1"
            style={{
              filter: "drop-shadow(2px 4px 6px black)",
            }}
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-lg xs:text-2xl md:text-3xl lg:text-4xl p-3 xs:px-8 md:px-2 "
            initial={{ y: "80%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {text}.
          </motion.p>
        </article>
      </div>
    </section>
  );
}

export default BannerDefault;
