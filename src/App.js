import { lazy, Suspense } from "react";

import { NAV_ITEMS } from "./consts/siteConfig";

import { Route, Routes } from "react-router";

import LayoutDefault from "./layout/LayoutDefault";
import NotFound from "./layout/NotFound";
import ViewDefault from "./layout/components/ViewDefault.js";
import { Spinner } from "@nextui-org/react";

const Home = lazy(() => import("./views/Home"));
const Imanes = lazy(() => import("./views/Imanes"));
const Otros = lazy(() => import("./views/Otros"));
const Caracteristicas = lazy(() => import("./views/Caracteristicas"));
const UyA = lazy(() => import("./views/Uya.js"));
const Faqs = lazy(() => import("./views/Faqs"));

function App() {
  const routesComponent = {
    imanes: <Imanes />,
    otros: <Otros />,
    caracteristicas: <Caracteristicas />,
    uya: <UyA />,
    faqs: <Faqs />,
  };

  return (
    <Routes>
      <Route path="" element={<LayoutDefault />}>
        <Route index element={<Home />} />

        {NAV_ITEMS.map((route) => {
          if (route?.id in routesComponent) {
            return (
              <Route
                key={route?.id}
                path={`${route?.id}`}
                element={
                  <Suspense
                    fallback={
                      <span className="w-full h-screen flex items-center justify-center">
                        <Spinner color="secondary" />
                      </span>
                    }
                  >
                    <ViewDefault
                      id={route?.id}
                      title={route?.title || route?.label}
                    >
                      {routesComponent?.[route?.id]}
                    </ViewDefault>
                  </Suspense>
                }
              />
            );
          }

          return null;
        })}

        <Route
          path="*"
          element={
            <ViewDefault
              title="pagina no encontrada"
              className="justify-center h-screen"
            >
              <NotFound />
            </ViewDefault>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
