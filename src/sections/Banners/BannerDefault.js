import { motion } from "framer-motion";

function BannerDefault({ image, title, text }) {
  return (
    <section className="w-full h-full bg-radial from-custom2-10 to-custom2 text-white flex justify-center pb-20 pt-24 ">
      <div className="flex flex-col justify-center sm:grid grid-cols-1 gap-6 md:grid-cols-2 text-center md:flex-row max-w-[1200px] items-center px-2 sm:px-4">
        <article
          className="flex items-center justify-center h-full max-h-[320px] sm:h-[320px] shadow-black hover:shadow-custom1/80 transition-all"
          style={{
            filter: "drop-shadow(2px 4px 6px var(--tw-shadow-color))",
          }}
        >
          {image}
        </article>

        <article>
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
            // viewport={{ once: false, amount: 0.8 }}
          >
            {text}.
          </motion.p>
        </article>
      </div>
    </section>
  );
}

export default BannerDefault;
