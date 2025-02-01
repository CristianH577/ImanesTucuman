import { motion } from "framer-motion";

import { Image, CardFooter, Card, Tooltip, Button } from "@nextui-org/react";

function Fotos({ link }) {
  const contextImg = require.context("../../assets/imanes", true);
  const fotos = [
    {
      forma: "redondos",
      medida: "5x2",
    },
    {
      forma: "redondos",
      medida: "7x1.5",
    },
    {
      forma: "redondos",
      medida: "10x3",
    },
    {
      forma: "redondos",
      medida: "12x5",
    },
    {
      forma: "redondos",
      medida: "20x2",
    },
    {
      forma: "redondos",
      medida: "10x20",
    },
    {
      forma: "cuadrados",
      medida: "10x8x3",
    },
    {
      forma: "cuadrados",
      medida: "14.5x7x2",
    },
    {
      forma: "cuadrados",
      medida: "15x10x5",
    },
    {
      forma: "arandelas",
      medida: "12x3-6a3.5-f",
    },
    {
      forma: "arandelas",
      medida: "12x3-6a3.5-d",
    },
  ];

  return (
    <motion.div
      className="grid xs:grid-cols-2 xs:grid-rows-6 sm:grid-cols-3 sm:grid-rows-4 lg:grid-cols-4 lg:grid-rows-3 gap-6 max-w-[900px] "
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
      whileInView="visible"
    >
      {fotos.map((e, i) => {
        return (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <Card
              isFooterBlurred
              radius="lg"
              shadow="none"
              className="w-full h-full bg-transparent items-center"
              style={{
                filter: "drop-shadow(0px 0px 10px rgba(0,0,0,.8))",
              }}
            >
              <Image
                src={contextImg(`./fotos/${e?.medida}.webp`)}
                loading="lazy"
                width={200}
                height={200}
                className="object-cover h-full w-full max-h-[200px] max-w-[200px] "
                removeWrapper
              />
              <CardFooter className="border-divider border-3 border-t-0 capitalize w-fit">
                <p
                  className="text-white text-2xl"
                  style={{
                    textShadow: `0 2px 3px black`,
                  }}
                >
                  {e?.medida.replace("-", " ")}
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        );
      })}

      <motion.div
        className="flex items-center justify-center"
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 },
        }}
      >
        <Tooltip
          content="Ver mas fotos"
          className="text-foreground bg-custom1 font-semibold text-xl"
        >
          <Button
            variant=""
            className="w-fit h-fit"
            onPress={() => {
              if (link) {
                const newWindow = window.open(
                  link,
                  "_blank",
                  "noopener,noreferrer"
                );
                if (newWindow) newWindow.focus();
              }
            }}
          >
            <Image
              src={contextImg(`./more-imgs.svg`)}
              removeWrapper
              loading="lazy"
              className="w-full h-full"
              width={200}
              height={200}
            />
          </Button>
        </Tooltip>
      </motion.div>
    </motion.div>
  );
}

export default Fotos;
