import { useState, lazy, Suspense } from "react";

import { Skeleton, Spinner, useDisclosure } from "@nextui-org/react";

import { fontsValues, links } from "./consts/consts";

const NavbarCustom = lazy(() => import("./views/NavbarCustom"));
const CartModal = lazy(() => import("./views/CartModal"));

const Banners = lazy(() => import("./views/Banners"));
const Formas = lazy(() => import("./views/Formas"));
const Imanes = lazy(() => import("./views/Imanes"));
const Otros = lazy(() => import("./views/Otros"));
const Caracteristicas = lazy(() => import("./views/Caracteristicas"));
const Faqs = lazy(() => import("./views/Faqs"));

const Footer = lazy(() => import("./views/Footer"));

function App() {
  const [theme, setTheme] = useState("dark");
  const [font, setFont] = useState("md");
  const [cart, setCart] = useState({});
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const sectionComponents = [
    <Formas />,
    <Imanes links={links} cart={{ value: cart, set: setCart }} />,
    <Otros cart={{ value: cart, set: setCart }} />,
    <Caracteristicas />,
    <Faqs links={links} />,
    <Footer links={links} />,
  ];

  const handleTheme = (val) => {
    if (val) {
      document.body.classList?.remove(theme);
      setTheme(val);
      document.body.classList?.add(val);
    }
  };
  const handleFont = () => {
    let i = fontsValues.findIndex((e) => e.key === font);
    i += 1;
    if (i > fontsValues.length - 1) i = 0;
    setFont(fontsValues[i].key);
    document.documentElement.style.setProperty(
      "--font-size",
      fontsValues[i].value
    );
  };

  return (
    <div className="bg-content2 dark:bg-content1 text-foreground font-[menulis] min-h-screen overflow-x-hidden overflow-auto h-[100vh] scroll-smooth sm:scrollbar scrollbar-thumb-custom1 scrollbar-track-custom2-10 scrollbar-w-3 scrollbar-h-3 hover:scrollbar-thumb-custom1-6">
      <Suspense>
        <NavbarCustom
          theme={{ value: theme, set: handleTheme }}
          font={{ value: font, set: handleFont }}
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
        <Suspense
          fallback={
            <Skeleton className="min-h-[600px] xs:min-h-[700px] sm:min-h-[500px]" />
          }
        >
          <Banners />
        </Suspense>

        {sectionComponents.map((section, i) => (
          <Suspense key={i}>{section}</Suspense>
        ))}
      </main>
    </div>
  );
}

export default App;
