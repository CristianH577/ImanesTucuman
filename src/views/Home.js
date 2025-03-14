import { lazy, Suspense } from "react";

import { Skeleton } from "@nextui-org/react";

import ViewDefault from "../layout/ViewDefault";

const Hero = lazy(() => import("./Home/Hero"));
const Formas = lazy(() => import("./Home/Formas"));
const AdvertisementsOwn = lazy(() => import("./Home/AdvertisementsOwn"));
// const Banners = lazy(() => import("./Home/Banners"));

export default function Home() {
  return (
    <div className="">
      {/* <Suspense
        fallback={
          <Skeleton className="min-h-[700px] xs:min-h-[800px] sm:min-h-[500px]" />
        }
      >
        <Banners />
      </Suspense> */}
      <Suspense fallback={<Skeleton className="h-[150vh]" />}>
        <Hero />
      </Suspense>

      <ViewDefault id="formas" title="Formas">
        <Suspense>
          <Formas />
        </Suspense>
      </ViewDefault>

      <ViewDefault
        title="variedades"
        classNames={{ content: "2xl:max-w-[1500px]" }}
      >
        <Suspense>
          <AdvertisementsOwn />
        </Suspense>
      </ViewDefault>
    </div>
  );
}
