import { lazy, Suspense } from "react";

import { Skeleton } from "@nextui-org/react";

import ViewDefault from "../layout/components/ViewDefault";

const Hero = lazy(() => import("./Home/Hero"));
const Formas = lazy(() => import("./Home/Formas"));
const AdvertisementsOwn = lazy(() => import("./Home/AdvertisementsOwn"));
const Opiniones = lazy(() => import("./Home/Opiniones"));

export default function Home() {
  return (
    <div>
      <Suspense fallback={<Skeleton className="w-screen h-[150vh]" />}>
        <Hero />
      </Suspense>

      <ViewDefault id="formas" title="Formas">
        <Suspense>
          <Formas />
        </Suspense>
      </ViewDefault>

      <ViewDefault title="variedades" className="2xl:max-w-[1500px]">
        <Suspense>
          <AdvertisementsOwn />
        </Suspense>
      </ViewDefault>

      <ViewDefault title="Opiniones">
        <Suspense>
          <Opiniones />
        </Suspense>
      </ViewDefault>
    </div>
  );
}
