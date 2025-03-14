import { lazy, Suspense, useEffect } from "react";

import { navItems } from "./consts/siteConfig";

import { Route, Routes, useLocation } from "react-router";

import ViewDefault from "./layout/ViewDefault";
import LayoutDefault from "./layout/LayoutDefault";
import NotFound from "./layout/NotFound";

const Home = lazy(() => import("./views/Home"));
const Imanes = lazy(() => import("./views/Imanes"));
const Otros = lazy(() => import("./views/Otros"));
const Caracteristicas = lazy(() => import("./views/Caracteristicas"));
const Faqs = lazy(() => import("./views/Faqs"));

function App() {
  const routesComponent = {
    imanes: <Imanes />,
    otros: <Otros />,
    caracteristicas: <Caracteristicas />,
    faqs: <Faqs />,
  };

  const { pathname } = useLocation();
  useEffect(() => {
    const element = document.querySelector("#app");
    if (element) element.scrollTo(0, 0);
  }, [pathname]);

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
              classNames={{
                content: "justify-center h-screen",
              }}
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
