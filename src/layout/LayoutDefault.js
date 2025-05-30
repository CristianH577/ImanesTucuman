import { lazy, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";

import { LINKS_SITES } from "../consts/siteConfig";

import { scrollToTop } from "../libs/functions.js";
import { useCart } from "../hooks/useCart.js";

import Footer from "./Footer.js";
import SuspenseCustom from "../components/SuspenseCustom.js";

const NavbarCustom = lazy(() => import("./NavbarCustom"));
const ModalComparativeMagnet = lazy(() => import("./ModalComparativeMagnet"));

export default function LayoutDefault() {
  const cart = useCart();
  const { search, pathname } = useLocation();
  const [magnetData, setMagnetData] = useState({});

  useEffect(scrollToTop, [pathname]);
  useEffect(() => {
    if (search) {
      const params = new URLSearchParams(search);
      const paramsObj = {};
      Array.from(params.entries()).map(([k, v]) => (paramsObj[k] = v));

      if ("view" in paramsObj) {
        setTimeout(() => {
          const element = document.querySelector("#" + paramsObj.view);

          if (element) element.scrollIntoView({ block: "nearest" });
        }, 1000);
      }
    }
  }, [search]);

  return (
    <div
      id="app"
      className="min-h-screen h-[100dvh] bg-background text-foreground dark:bg-content2 font-[menulis] flex flex-col justify-between overflow-x-hidden overflow-y-auto scroll-smooth sm:scrollbar scrollbar-thumb-custom1 scrollbar-track-custom2-10 scrollbar-w-3 scrollbar-h-3 hover:scrollbar-thumb-custom1-6"
    >
      <SuspenseCustom
        classnames={{
          suspenseFall: "absolute h-14 bg-black/50 inset-0 z-50",
        }}
      >
        <NavbarCustom
          cartLength={Object.keys(cart.value).length}
          links={LINKS_SITES}
        />
      </SuspenseCustom>

      {JSON.stringify(magnetData) !== "{}" && (
        <SuspenseCustom
          classnames={{
            suspenseFall: "absolute h-screen bg-black/50 inset-0 z-50",
          }}
        >
          <ModalComparativeMagnet
            magnetData={magnetData}
            onClose={() => setMagnetData({})}
          />
        </SuspenseCustom>
      )}

      <main className="pb-12 px-2 xs:px-4 sm:px-10 lg:px-12">
        <SuspenseCustom
          classnames={{
            suspenseFall: "h-screen",
          }}
        >
          <Outlet
            context={{
              cart: cart,
              links: LINKS_SITES,
              setMagnetData: setMagnetData,
            }}
          />
        </SuspenseCustom>
      </main>

      <Footer links={LINKS_SITES} />
    </div>
  );
}
