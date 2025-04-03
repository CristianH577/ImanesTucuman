import { LuMagnet } from "react-icons/lu";
import { MdOutlineMore } from "react-icons/md";
import { AiOutlineNumber } from "react-icons/ai";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { GoBook } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";

export const navItems = [
  { id: "", label: "Inicio", icon: IoHomeOutline },
  { id: "imanes", label: "imanes", icon: LuMagnet },
  { id: "otros", label: "otros", icon: MdOutlineMore },
  { id: "caracteristicas", label: "Características", icon: AiOutlineNumber },
  { id: "uya", label: "U&A", icon: GoBook },
  { id: "faqs", label: "FAQs", icon: FaRegCircleQuestion },
  // { id: "contacto", label: "contacto" },
];

export const links = {
  whatsapp: "https://api.whatsapp.com/send?phone=543813156907",
  googlemaps:
    "https://www.google.com.ar/maps/place/Imanes+Tucum%C3%A1n/@-26.8887704,-65.2256411,17.54z/data=!4m6!3m5!1s0x94225b001419003b:0x46095acd3879452e!8m2!3d-26.8894591!4d-65.2246928!16s%2Fg%2F11wb1cdws9?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
  facebook: "https://www.facebook.com/profile.php?id=61560974355591",
  instagram: "https://www.instagram.com/imanestucuman/",
  x: "https://x.com/imanestucuman",
  tiendanube: "https://imanestucuman.mitiendanube.com/",
  catalogo:
    "https://drive.google.com/file/d/1TFOWDem-Iqdg3zdf3W0KKzgLELq4ZmHw/view?usp=drive_link",
  fotos:
    "https://drive.google.com/drive/folders/1C2T_BZKXTpU-GPEH9PLk1QRGViV85Iz_?usp=drive_link",
  mercadoshops: "https://imanestucuman.mercadoshops.com.ar/",
  web: "https://www.imanestucuman.com.ar/",
  telegram: "https://t.me/imanestucuman",
  signal: "https://signal.me/#p/+543813156907",
  "form_encuesta-20250109": "https://forms.gle/Qo8PUYAkysYGuTPK8",
  googlemaps_indicaciones:
    "https://www.google.com.ar/maps/dir/Av.+Gral.+Roca+%26+Pcia+de+Jujuy,+T4000+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n/Imanes+Tucum%C3%A1n,+9+de+Julio,+San+Miguel+de+Tucum%C3%A1n,+Provincia+de+Tucum%C3%A1n/@-26.8639462,-65.2214478,14.26z/data=!4m14!4m13!1m5!1m1!1s0x94225c0b2e16d2d5:0x2df6ddf6da9766ac!2m2!1d-65.2140368!2d-26.8420076!1m5!1m1!1s0x94225b001419003b:0x46095acd3879452e!2m2!1d-65.2246979!2d-26.8894679!3e0?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D",
  short: {
    whatsapp: "https://tinyurl.com/3amwj9vt.",
    googlemaps: "https://tinyurl.com/3wxjm6bn",
    facebook: "https://tinyurl.com/mu4n496h",
    catalogo: "https://tinyurl.com/bdcwxh75",
    mercadoshops: "https://tinyurl.com/3mfpadr8",
    web: "https://tinyurl.com/3ace3xj8",
    fotos: "https://tinyurl.com/cjb6z65z",
    googlemaps_indicaciones: "https://tinyurl.com/yc65a8dj",
  },
};

export const fontsValues = [
  { key: "md", value: "medium" },
  { key: "lg", value: "large" },
  { key: "xl", value: "x-large" },
];

export const colorsCustom = {
  custom1: {
    DEFAULT: "#FF8B00",
    1: "rgba(255, 153, 0, 1)",
    2: "rgba(255, 167, 0, 1)",
    3: "rgba(255, 181, 0, 1)",
    4: "rgba(255, 195, 0, 1)",
    5: "rgba(255, 209, 0, 1)",
    6: "rgba(255, 222, 0, 1)",
    7: "rgba(255, 236, 0, 1)",
    8: "rgba(255, 250, 0, 1)",
    9: "rgba(255, 255, 0, 1)",
    10: "rgba(255, 255, 0, 1)",

    "-9": "rgba(230, 125, 0, 1)",
    "-8": "rgba(204, 111, 0, 1)",
    "-7": "rgba(179, 97, 0, 1)",
    "-6": "rgba(153, 83, 0, 1)",
    "-5": "rgba(128, 70, 0, 1)",
    "-4": "rgba(102, 56, 0, 1)",
    "-3": "rgba(76, 42, 0, 1)",
    "-2": "rgba(51, 28, 0, 1)",
    "-1": "rgba(25, 14, 0, 1)",
  },
  custom2: {
    DEFAULT: "#202355",
    1: "rgba(35, 39, 94, 1)",
    2: "rgba(38, 42, 102, 1)",

    3: "rgba(42, 46, 111, 1)",

    4: "rgba(45, 49, 119, 1)",

    5: "rgba(48, 53, 128, 1)",

    6: "rgba(51, 56, 136, 1)",

    7: "rgba(54, 60, 145, 1)",

    8: "rgba(58, 63, 153, 1)",

    9: "rgba(61, 67, 162, 1)",

    10: "rgba(64, 70, 170, 1)",

    "-9": "rgba(29, 32, 77, 1)",

    "-8": "rgba(26, 28, 68, 1)",

    "-7": "rgba(22, 25, 59, 1)",

    "-6": "rgba(19, 21, 51, 1)",

    "-5": "rgba(16, 18, 43, 1)",

    "-4": "rgba(13, 14, 34, 1)",

    "-3": "rgba(10, 10, 25, 1)",

    "-2": "rgba(6, 7, 17, 1)",

    "-1": "rgba(3, 3, 8, 1)",
  },
};

// export const colorsNavidad = {
//   custom1: {
//     DEFAULT: "#17c964",
//     1: "rgba(25, 221, 110, 1)",
//     2: "rgba(28, 241, 120, 1)",
//     3: "rgba(30, 255, 130, 1)",
//     4: "rgba(32, 255, 140, 1)",
//     5: "rgba(35, 255, 150, 1)",
//     6: "rgba(37, 255, 160, 1)",
//     7: "rgba(39, 255, 170, 1)",
//     8: "rgba(41, 255, 180, 1)",
//     9: "rgba(44, 255, 190, 1)",
//     10: "rgba(46, 255, 200, 1)",
//     "-9": "rgba(21, 181, 90, 1)",
//     "-8": "rgba(18, 161, 80, 1)",
//     "-7": "rgba(16, 141, 70, 1)",
//     "-6": "rgba(14, 121, 60, 1)",
//     "-5": "rgba(12, 101, 50, 1)",
//     "-4": "rgba(9, 80, 40, 1)",
//     "-3": "rgba(7, 60, 30, 1)",
//     "-2": "rgba(5, 40, 20, 1)",
//     "-1": "rgba(2, 20, 10, 1)",
//   },
//   custom2: {
//     DEFAULT: "#dd1729",
//     1: "rgba(243, 25, 45, 1)",
//     2: "rgba(255, 28, 49, 1)",
//     3: "rgba(255, 30, 53, 1)",
//     4: "rgba(255, 32, 57, 1)",
//     5: "rgba(255, 35, 62, 1)",
//     6: "rgba(255, 37, 66, 1)",
//     7: "rgba(255, 39, 70, 1)",
//     8: "rgba(255, 41, 74, 1)",
//     9: "rgba(255, 44, 78, 1)",
//     10: "rgba(255, 46, 82, 1)",
//     "-9": "rgba(199, 21, 37, 1)",
//     "-8": "rgba(177, 18, 33, 1)",
//     "-7": "rgba(155, 16, 29, 1)",
//     "-6": "rgba(133, 14, 25, 1)",
//     "-5": "rgba(111, 12, 21, 1)",
//     "-4": "rgba(88, 9, 16, 1)",
//     "-3": "rgba(66, 7, 12, 1)",
//     "-2": "rgba(44, 5, 8, 1)",
//     "-1": "rgba(22, 2, 4, 1)",
//   },
// };
