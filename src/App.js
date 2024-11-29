import "./App.css";
import { useState } from "react";

import NavbarCustom from "./components/NavbarCustom";

import Banner from "./sections/Banner";
import Footer from "./sections/Footer";
import Formas from "./sections/Formas";
import Imanes from "./sections/Imanes";
import Faqs from "./sections/Faqs";

import links from "./assets/links.json";
import Otros from "./sections/Otros";

function App() {
  const [esthetic, setEsthetic] = useState("light");

  const handleEsthetic = (val) => {
    if (val) {
      document.body.classList.remove(esthetic);
      setEsthetic(val);
      if (val === "navidad") val = "light";
      document.body.classList.add(val);
    }
  };

  return (
    <div
      className={"bg-content2 dark:bg-content1 text-foreground font-[menulis] "}
    >
      <NavbarCustom
        esthetic={{ value: esthetic, set: handleEsthetic }}
        links={links}
      />

      <main className="w-full min-h-screen flex flex-col items-center ">
        <Banner esthetic={esthetic} />
        <Formas />
        <Imanes links={links} />
        <Otros />
        <Faqs links={links} />
        <Footer links={links} />
      </main>
    </div>
  );
}

export default App;
