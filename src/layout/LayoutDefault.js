import { lazy, Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router";

import { LINKS_SITES } from "../consts/siteConfig";
import { DB_IMANES } from "../consts/dbs";

import { scrollTop } from "../libs/functions.js";
import { useCart } from "../hooks/useCart.js";

import { Spinner, useDisclosure } from "@nextui-org/react";

import Footer from "./Footer.js";

const NavbarCustom = lazy(() => import("./NavbarCustom"));
const CartModal = lazy(() => import("./CartModal"));

export default function LayoutDefault() {
  const cart = useCart();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { search, pathname } = useLocation();

  useEffect(scrollTop, [pathname]);
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
      className="min-h-screen h-[100vh] bg-background text-foreground dark:bg-content2 font-[menulis] overflow-x-hidden overflow-y-auto scroll-smooth sm:scrollbar scrollbar-thumb-custom1 scrollbar-track-custom2-10 scrollbar-w-3 scrollbar-h-3 hover:scrollbar-thumb-custom1-6 flex flex-col justify-between"
    >
      <Suspense>
        <NavbarCustom
          onOpenCart={onOpen}
          cartLength={Object.values(cart.value).reduce(
            (acc, obj) => acc + Object.keys(obj).length,
            0
          )}
        />
      </Suspense>

      {isOpen && (
        <Suspense
          fallback={
            <span className="absolute w-full h-screen flex items-center justify-center bg-black/50 inset-0 z-50">
              <Spinner color="secondary" />
            </span>
          }
        >
          <CartModal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            cart={cart}
            linkWhatsApp={LINKS_SITES?.whatsapp}
          />
        </Suspense>
      )}

      <main className="pb-12 px-2 xs:px-4 sm:px-10 lg:px-12">
        <Suspense
          fallback={
            <span className="w-full h-screen flex items-center justify-center">
              <Spinner color="secondary" />
            </span>
          }
        >
          <Outlet
            context={{
              cart: cart,
              LINKS_SITES: LINKS_SITES,
              db: DB_IMANES,
            }}
          />
        </Suspense>
      </main>

      <Footer LINKS_SITES={LINKS_SITES} />
    </div>
  );
}
