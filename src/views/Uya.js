import { lazy } from "react";
import { motion } from "framer-motion";

import { Tabs, Tab } from "@nextui-org/react";

import ArticleView from "./Uya/ArticleView";
import ArticlesList from "./Uya/ArticlesList";
// import vid from "../assets/uya/neocube-v20.mp4";

const NeodimioVSFerrita = lazy(() => import("./Uya/Asaber/NeodimioVSFerrita"));
const SeparacionSegura = lazy(() => import("./Uya/Asaber/SeparacionSegura"));
const FuerzaEnPerspectiva = lazy(() =>
  import("./Uya/Asaber/FuerzaEnPerspectiva")
);
const TiposEmpalmes = lazy(() => import("./Uya/Asaber/TiposEmpalmes"));
const AguasDuras = lazy(() => import("./Uya/Asaber/AguasDuras"));
const PeligroVsSeguridad = lazy(() =>
  import("./Uya/Asaber/PeligroVsSeguridad")
);

const Colgar = lazy(() => import("./Uya/Sujecion/Colgar"));
const Cortinas = lazy(() => import("./Uya/Sujecion/Cortinas"));
const Macetas = lazy(() => import("./Uya/Sujecion/Macetas"));
const Atados = lazy(() => import("./Uya/Sujecion/Atados"));
const Pulseras = lazy(() => import("./Uya/Sujecion/Pulseras"));
const Juguetes = lazy(() => import("./Uya/Sujecion/Juguetes"));

const Destornillador = lazy(() => import("./Uya/Utilidades/Destornillador"));
const Perfiles = lazy(() => import("./Uya/Utilidades/Perfiles"));
const Puertas = lazy(() => import("./Uya/Utilidades/Puertas"));
const UsarBorneraClip = lazy(() => import("./Uya/Utilidades/UsarBorneraClip"));

const SoporteFrascos = lazy(() => import("./Uya/Ideas/SoporteFrascos"));
const SoporteHerramientas = lazy(() =>
  import("./Uya/Ideas/SoporteHerramientas")
);
const Esponja = lazy(() => import("./Uya/Ideas/Esponja"));
const Pulsera = lazy(() => import("./Uya/Ideas/Pulsera"));
const PuestaTierra = lazy(() => import("./Uya/Ideas/PuestaTierra"));
const Llaveros = lazy(() => import("./Uya/Ideas/Llaveros"));
const RecogedorSimple = lazy(() => import("./Uya/Ideas/RecogedorSimple"));
const Recogedor = lazy(() => import("./Uya/Ideas/Recogedor"));

export default function UyA() {
  const tabs = [
    {
      id: "asaber",
      title: "A saber",
    },
    {
      id: "utilidades",
      title: "Utilidades",
    },
    {
      id: "sujecion",
      title: "Sujeción",
    },
    {
      id: "ideas",
      title: "Ideas",
    },
  ];

  const items = {
    asaber: [
      {
        id: "fuerza",
        title: "Fuerza en perspectiva",
        content: <FuerzaEnPerspectiva />,
      },
      {
        id: "separacion",
        title: "Separación segura",
        content: <SeparacionSegura />,
      },
      {
        id: "vs",
        title: "Neodimio VS Ferrita",
        content: <NeodimioVSFerrita />,
      },
      {
        id: "tipos_empalmes",
        title: "Tipos de empalmes",
        content: <TiposEmpalmes />,
      },
      {
        id: "peligro_vs_seguridad",
        title: "Peligro VS Seguridad",
        content: <PeligroVsSeguridad />,
      },
      {
        id: "aguas_duras",
        title: "Aguas duras",
        content: <AguasDuras />,
      },
    ],
    sujecion: [
      {
        id: "cortinas",
        title: "Cortinas magnéticas",
        content: <Cortinas />,
      },
      {
        id: "colgar",
        title: "Colgar sin perforar",
        content: <Colgar />,
      },
      {
        id: "macetas",
        title: "Casas más verdes",
        content: <Macetas />,
      },
      {
        id: "atados",
        title: "Atados magnéticos",
        content: <Atados />,
      },
      {
        id: "pulseras",
        title: "Cierre de pulseras y collares",
        content: <Pulseras />,
      },
      {
        id: "juguetes",
        title: "Juguetes magnéticos",
        content: <Juguetes />,
      },
    ],
    utilidades: [
      {
        id: "destornillador",
        title: "Destornilladores magnetizados",
        content: <Destornillador />,
      },
      {
        id: "perfiles",
        title: "Encontrar perfiles de durlock",
        content: <Perfiles />,
      },
      {
        id: "puertas",
        title: "Reparar puertas",
        content: <Puertas />,
      },
      {
        id: "usar_bornera_clip",
        title: "Usar bornera clip",
        content: <UsarBorneraClip />,
      },
    ],
    ideas: [
      {
        id: "soporte_herramientas",
        title: "Soporte para herramientas",
        content: <SoporteHerramientas />,
      },
      {
        id: "soporte_frascos",
        title: "Soporte para frascos",
        content: <SoporteFrascos />,
      },
      {
        id: "esponja",
        title: "Limpiador magnetico",
        content: <Esponja />,
      },
      {
        id: "pulsera",
        title: "Pulsera magnetica",
        content: <Pulsera />,
      },
      {
        id: "puesta_tierra",
        title: "Puesta a tierra",
        content: <PuestaTierra />,
      },
      {
        id: "llaveros",
        title: "Llavero magnético",
        content: <Llaveros />,
      },
      {
        id: "recogedor_simple",
        title: "Recogedor Magnético Simple",
        content: <RecogedorSimple />,
      },
      {
        id: "recogedor",
        title: "Recogedor Magnético",
        content: <Recogedor />,
      },
    ],
  };
  // const YouTubeEmbed = ({ videoUrl }) => {
  //   const videoId = new URL(videoUrl).searchParams.get("v");
  //   const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;

  //   return (
  //     <div className="w-full aspect-video">
  //       <iframe
  //         className="w-full h-full"
  //         src={embedUrl}
  //         title="YouTube video player"
  //         frameBorder="0"
  //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //         allowFullScreen
  //       ></iframe>
  //     </div>
  //   );
  // };

  return (
    <motion.div
      className="w-full max-w-4xl text-center md:flex flex-col items-center"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
    >
      {/* <motion.section
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <video src={vid} autoPlay controls />

        <YouTubeEmbed videoUrl="https://www.youtube.com/watch?v=wlsuwhU2zA8" />
      </motion.section> */}
      <Tabs
        aria-label="Usos y aplicaciones"
        classNames={{
          tabList:
            "bg-gradient-to-t from-custom1 to-custom1-3 flex-wrap justify-center shadow-md",
          tabContent:
            "text-custom2 font-bold group-data-[selected=true]:text-white",
          cursor: "bg-gradient-to-t from-custom2 to-custom2-10",
          panel: "mt-4 flex flex-col items-center w-full",
          tab: "w-fit",
        }}
      >
        {tabs.map((tab) => (
          <Tab key={tab.id} title={tab.title}>
            <ArticlesList list={items[tab.id]} />

            {items[tab.id].map((item) => (
              <ArticleView key={item.id} id={item.id} h1={item.title}>
                {item.content}
              </ArticleView>
            ))}
          </Tab>
        ))}
      </Tabs>
    </motion.div>
  );
}
