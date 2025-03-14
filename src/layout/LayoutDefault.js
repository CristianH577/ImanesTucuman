import { lazy, Suspense, useState } from "react";
import { Outlet } from "react-router";

import { links } from "../consts/siteConfig";
import { dbImanes } from "../consts/dbs";

import { Spinner, useDisclosure } from "@nextui-org/react";

import Footer from "./Footer.js";

const NavbarCustom = lazy(() => import("./NavbarCustom"));
const CartModal = lazy(() => import("./CartModal"));
// const Footer = lazy(() => import("./Footer"));

export default function LayoutDefault() {
  const [cart, setCart] = useState({});
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const addToCart = (cat, itemId, itemCartData = {}) => {
    const cart_ = structuredClone(cart);
    const itemCartData_ = structuredClone(itemCartData);

    if (!cart_.hasOwnProperty(cat)) cart_[cat] = {};
    if (!itemCartData_.hasOwnProperty("qtt")) itemCartData_.qtt = 1;

    itemCartData_.priceToUse = "base";

    cart_[cat][itemId] = itemCartData_;

    setCart(cart_);
  };

  return (
    <div
      id="app"
      className="min-h-screen h-[100vh] bg-gradient-to-b from-background to-content3 dark:from-content2 dark:to-content1 text-foreground font-[menulis] overflow-x-hidden overflow-y-auto scroll-smooth sm:scrollbar scrollbar-thumb-custom1 scrollbar-track-custom2-10 scrollbar-w-3 scrollbar-h-3 hover:scrollbar-thumb-custom1-6 flex flex-col justify-between bg-danger-50"
    >
      <Suspense>
        <NavbarCustom
          onOpenCart={onOpen}
          cartLength={Object.values(cart).reduce(
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
            cart={{ value: cart, set: setCart }}
            links={links}
          />
        </Suspense>
      )}

      <main className="flex-grow pb-12 px-2 xs:px-4 sm:px-10 lg:px-12">
        <Suspense
          fallback={
            <span className="w-full h-screen flex items-center justify-center">
              <Spinner color="secondary" />
            </span>
          }
        >
          <Outlet
            context={{
              cart: { value: cart, set: setCart, add: addToCart },
              links: links,
              db: dbImanes,
            }}
          />
        </Suspense>
      </main>

      <Footer links={links} />
    </div>
  );
}
