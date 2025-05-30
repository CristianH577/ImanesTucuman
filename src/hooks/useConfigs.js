import { useEffect, useState } from "react";

import { FONTS_VALUES } from "../consts/siteConfig";

export function useConfigs() {
  const [configs, setConfigs] = useState({
    theme: "light",
    font: "md",
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

    localStorage.setItem("theme", configs_.theme);
  };

  const handleFont = (configs_) => {
    const fonts = FONTS_VALUES[configs_.font];

    Object.entries(fonts).forEach(([key, val]) => {
      document.documentElement.style.setProperty("--font-size-" + key, val);
    });

    localStorage.setItem("font", configs_.font);
  };

  useEffect(() => {
    const configs_ = structuredClone(configs);

    const theme_ = localStorage.getItem("theme");
    if (theme_ && theme_ === "dark") configs_.theme = theme_;

    const font_ = localStorage.getItem("font");
    if (font_ && font_ !== "md") configs_.font = font_;

    handleSet(configs_);
  }, []);

  return { value: configs, set: handleSet };
}
