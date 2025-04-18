import { useEffect, useState } from "react";
import Cookies from "js-cookie";

import { FONTS_VALUES } from "../consts/siteConfig";

export function useConfigs() {
  const [configs, setConfigs] = useState({
    theme: "light",
    font: "md",
    fontSecondary: "small",
  });

  const handleSet = (configs_) => {
    if (configs_.theme !== configs.theme) handleTheme(configs_);
    if (configs_.font !== configs.font) handleFont(configs_);

    setConfigs(configs_);
  };

  const handleTheme = (configs_) => {
    const theme_remove = configs_.theme === "dark" ? "light" : "dark";
    document.body.classList?.remove(theme_remove);
    document.body.classList?.add(configs_.theme);
    Cookies.set("theme", configs_.theme, { expires: 365 });
  };

  const handleFont = (configs_) => {
    document.documentElement.style.setProperty(
      "--font-size",
      FONTS_VALUES[configs_.font]
    );

    document.documentElement.style.setProperty(
      "--font-size-secondary",
      configs_.fontSecondary
    );

    Cookies.set("font", configs_.font, { expires: 365 });
  };

  useEffect(() => {
    const configs_ = structuredClone(configs);

    const theme_ = Cookies.get("theme");
    if (theme_ && theme_ === "dark") configs_.theme = theme_;

    const font_ = Cookies.get("font");
    if (font_ && font_ !== "md") configs_.font = font_;

    handleSet(configs_);
  }, []);

  return { value: configs, set: handleSet };
}
