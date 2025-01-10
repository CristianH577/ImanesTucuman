import { useState, lazy, Suspense, Fragment } from "react";

import { Spinner, useDisclosure } from "@nextui-org/react";

import links from "./assets/links.json";

const NavbarCustom = lazy(() => import("./sections/NavbarCustom"));
const CartModal = lazy(() => import("./sections/CartModal"));

const Banners = lazy(() => import("./sections/Banners"));
const Formas = lazy(() => import("./sections/Formas"));
const Imanes = lazy(() => import("./sections/Imanes"));
const Otros = lazy(() => import("./sections/Otros"));
const Faqs = lazy(() => import("./sections/Faqs"));

const Footer = lazy(() => import("./sections/Footer"));

function App() {
  const [theme, setTheme] = useState("dark");
  const [cart, setCart] = useState({});
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const sections = [
    <Formas />,
    <Imanes links={links} cart={{ value: cart, set: setCart }} />,
    <Otros cart={{ value: cart, set: setCart }} />,
    <Faqs links={links} />,
  ];

  const handleTheme = (val) => {
    if (val) {
      document.body.classList?.remove(theme);
      setTheme(val);
      document.body.classList?.add(val);
    }
  };

  return (
    <div className="bg-content2 dark:bg-content1 text-foreground font-[menulis] min-h-screen overflow-x-hidden overflow-auto h-[100vh] scroll-smooth sm:scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-custom1 scrollbar-track-custom2-10 scrollbar-w-3 scrollbar-h-3 hover:scrollbar-thumb-custom1-6 ">
      <Suspense>
        <NavbarCustom
          theme={{ value: theme, set: handleTheme }}
          links={links}
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
              <Spinner />
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

      <main>
        <Suspense>
          <Banners />
        </Suspense>

        {sections.map((section, i) => (
          <Fragment key={i}>{section}</Fragment>
        ))}

        <Suspense>
          <Footer links={links} />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
