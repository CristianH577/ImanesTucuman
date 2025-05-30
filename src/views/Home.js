import { lazy } from "react";

import SuspenseCustom from "../components/SuspenseCustom";
import TitleCustom from "../components/TitleCustom";

const Hero = lazy(() => import("./Home/Hero"));
const Formas = lazy(() => import("./Home/Formas"));
const AdvertisementsOwn = lazy(() => import("./Home/AdvertisementsOwn"));
const Opiniones = lazy(() => import("./Home/Opiniones"));

export default function Home() {
  const sections = [
    { id: "opiniones", label: "Opiniones", content: <Opiniones /> },
    {
      id: "formas",
      label: "Formas",
      content: <Formas />,
    },
    {
      label: "variedades",
      className: "2xl:max-w-[1500px]",
      content: <AdvertisementsOwn />,
    },
  ];

  return (
    <>
      <SuspenseCustom
        classnames={{
          suspenseFall: "w-screen h-[150vh]",
        }}
      >
        <Hero />
      </SuspenseCustom>

      {sections.map((section, i) => (
        <div
          key={i}
          id={section?.id || null}
          className={`w-full max-w-[1200px] flex flex-col items-center gap-4 place-self-center pt-16 ${
            section?.className ? section?.className : ""
          }`}
        >
          <TitleCustom title={section?.label} />

          {section.content}
        </div>
      ))}
    </>
  );
}
