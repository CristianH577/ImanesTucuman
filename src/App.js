import { lazy, Suspense, useEffect } from "react";

import { navItems } from "./consts/siteConfig";
import { scrollTop } from "./libs/functions.js";

import { Route, Routes, useLocation } from "react-router";

import LayoutDefault from "./layout/LayoutDefault";
import NotFound from "./layout/NotFound";
import ViewDefault from "./layout/components/ViewDefault.js";

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

  const { pathname } = useLocation();
  useEffect(scrollTop, [pathname]);

  return (
    <Routes>
      <Route path="" element={<LayoutDefault />}>
        <Route index element={<Home />} />

        {navItems.map((route) => {
          if (route?.id in routesComponent) {
            return (
              <Route
                key={route?.id}
                path={`${route?.id}`}
                element={
                  <Suspense>
                    <ViewDefault title={route?.label}>
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
              // classNames={{
              //   content: "justify-center h-screen",
              // }}
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
