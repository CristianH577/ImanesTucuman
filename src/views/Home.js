import { lazy, Suspense } from "react";

import { Skeleton } from "@nextui-org/react";

import ViewDefault from "../layout/components/ViewDefault";
import Test from "../z/Test";

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
    <div>
      {/* <Test /> */}
      <Suspense fallback={<Skeleton className="w-screen h-[150vh]" />}>
        <Hero />
      </Suspense>

      {sections.map((section) => (
        <ViewDefault
          key={section.label}
          id={section?.id}
          title={section.label}
          className={section?.className || ""}
          disabledInView
        >
          <Suspense>{section.content}</Suspense>
        </ViewDefault>
      ))}
    </div>
  );
}
