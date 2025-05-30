import { lazy } from "react";

import { NAV_ITEMS } from "./consts/siteConfig";

import { Route, Routes } from "react-router";

import LayoutDefault from "./layout/LayoutDefault";
import NotFound from "./layout/NotFound";
import ViewDefault from "./components/ViewDefault.js";
import SuspenseCustom from "./components/SuspenseCustom.js";
import ItemView from "./views/ItemView.js";

const Home = lazy(() => import("./views/Home"));
const Imanes = lazy(() => import("./views/Imanes"));
const Caracteristicas = lazy(() => import("./views/Caracteristicas"));
const UyA = lazy(() => import("./views/Uya.js"));
const Faqs = lazy(() => import("./views/Faqs"));
const SearchView = lazy(() => import("./views/SearchView"));
const CartView = lazy(() => import("./views/CartView"));

const routesComponent = {
  imanes: <Imanes />,
  caracteristicas: <Caracteristicas />,
  uya: <UyA />,
  faqs: <Faqs />,
  search_view: <SearchView />,
  cart: <CartView />,
  view: <ItemView />,
};
const views = [
  {
    id: "cart",
    href: "cart",
    label: "Carrito",
  },
  {
    id: "view",
    href: "/search/:id",
  },
];

function App() {
  return (
    <Routes>
      <Route path="" element={<LayoutDefault />}>
        <Route index element={<Home />} />

        {[...NAV_ITEMS, ...views].map((route) => {
          if (route?.id in routesComponent) {
            return (
              <Route
                key={route?.id}
                path={route?.href}
                element={
                  <SuspenseCustom
                    classnames={{
                      suspenseFall: "h-screen",
                    }}
                  >
                    <ViewDefault
                      id={route?.id}
                      title={route?.title || route?.label || null}
                    >
                      {routesComponent?.[route?.id]}
                    </ViewDefault>
                  </SuspenseCustom>
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
