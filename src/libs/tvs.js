import { tv } from "tailwind-variants";

import { button as buttonStyles } from "@nextui-org/theme";

export const spanDiscount = tv({
  base: "h-fit font-size-secondary bg-radial text-custom1-5 font-bold rounded-xl px-2 shadow-md",
  variants: {
    color: {
      secondary:
        "from-secondary-600 to-secondary dark:from-secondary dark:to-secondary-300",
      danger: "from-danger-600 to-danger dark:from-danger dark:to-danger-300",
    },
  },
  defaultVariants: {
    color: "secondary",
  },
  compoundVariants: [
    {
      color: ["secondary", "danger"],
    },
  ],
});

export const title = tv({
  base: "uppercase font-[calvera] drop-shadow-custom",
  variants: {
    size: {
      sm: "text-2xl sm:text-3xl lg:text-5xl",
      md: "text-3xl sm:text-5xl md:text-6xl lg:text-7xl",
    },
    color: {
      custom1: "from-custom1 to-custom1-3",
      custom2: "from-custom2-5 to-custom2-10",
    },
  },
  defaultVariants: {
    size: "sm",
    color: "custom1",
  },
  compoundVariants: [
    {
      color: ["custom1", "custom2"],
      class: "bg-clip-text text-transparent bg-gradient-to-t",
    },
  ],
});

export const title1 = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
      custom1: "from-custom1 to-custom1-3",
      custom2: "from-custom2-5 to-custom2-10/80",
    },
    darkColor: {
      custom1: "dark:from-custom1 dark:to-custom1-3",
    },
    size: {
      "": "font-size-primary",
      sm: "text-xl sm:text-2xl",
      md: "text-2xl lg:text-3xl leading-9",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
        "custom1",
        "custom2",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-t",
    },
  ],
});

export const subtitle = tv({
  base: "my-2 text-lg lg:text-xl text-default-400 dark:text-default-600",
});

export const buttonCustom = tv({
  extend: buttonStyles,
  variants: {
    color: {
      custom1:
        "bg-custom1 text-white hover:bg-bustom1-2 from-custom1 to-custom1-3",
    },
    skew: {
      false: "",
      true: "-skew-x-12",
    },
    variant: {
      degree: "bg-gradient-to-tr hover:to-50%",
    },
    shadow: {
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
    },
  },
});
