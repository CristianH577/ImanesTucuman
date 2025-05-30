import { LuMagnet, LuPackageSearch } from "react-icons/lu";
import { AiOutlineNumber } from "react-icons/ai";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { GoBook } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";

export const NAV_ITEMS = [
  { id: "", href: "", label: "Inicio", icon: IoHomeOutline },
  {
    id: "search_view",
    href: "search",
    label: "Buscar",
    icon: LuPackageSearch,
  },
  { id: "imanes", href: "imanes", label: "imanes", icon: LuMagnet },
  // { id: "otros", href: "otros", label: "otros", icon: MdOutlineMore },
  {
    id: "caracteristicas",
    href: "caracteristicas",
    label: "Características",
    icon: AiOutlineNumber,
  },
  {
    id: "uya",
    href: "uya",
    label: "U&A",
    title: "Usos y Aplicaciones",
    icon: GoBook,
  },
  {
    id: "faqs",
    href: "faqs",
    label: "FAQs",
    title: "Preguntas Frecuentes",
    icon: FaRegCircleQuestion,
  },
  // { id: "contacto", label: "contacto" },
];

export const LINKS_SITES = {
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

export const FONTS_VALUES = {
  md: {
    primary: "medium",
    secondary: "small",
    tertiary: "large",
  },
  lg: {
    primary: "large",
    secondary: "medium",
    tertiary: "x-large",
  },
  xl: {
    primary: "x-large",
    secondary: "large",
    tertiary: "xx-large",
  },
};

export const COLORS_CUSTOM = {
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
  },
};

export const FILTERS_INPUTS = [
  {
    id: "orderBy",
    label: "Ordenar por",
    format: "select",
    items: [
      { id: "id-asc", label: "Mas antiguo" },
      { id: "id-desc", label: "Mas reciente" },
      { id: "label-desc", label: "Nombre 🡣" },
      { id: "label-asc", label: "Nombre 🡡" },
      { id: "price-desc", label: "Precio 🡡" },
      { id: "price-asc", label: "Precio 🡣" },
    ],
  },
  {
    id: "categorie",
    label: "Categoría",
    format: "select",
    items: [
      { id: "electricidad", label: "Electricidad" },
      { id: "imanes", label: "Imanes" },
      { id: "otros", label: "Otros" },
    ],
  },
  {
    id: "subcategorie",
    label: "Sub-categoría",
    format: "select",
    items: [
      { id: "arrastre", label: "De arrastre" },
      { id: "ferrita", label: "Ferrita" },
      { id: "neodimio", label: "Neodimio" },
      { id: "otros", label: "Otros" },
    ],
  },
  {
    id: "forma",
    label: "Forma",
    format: "select",
    items: [
      { id: "cuadrado", label: "Cuadrado" },
      { id: "cuadrado_fresado", label: "Cuadrado fresado" },
      { id: "redondo", label: "Redondo" },
      { id: "redondo_fresado", label: "Redondo fresado" },
    ],
  },
  // {
  //   id: "marca",
  //   label: "Marca",
  //   format: "text",
  // },
  {
    id: "price",
    label: "Precio",
    format: "number",
  },
];

export const FILTERS_VALUES_DEFAULT = {
  apply: false,
  orderBy: "",
  text: "",
  categorie: "",
  subcategorie: "",
  forma: "",
  price: {
    min: "",
    max: "",
  },
};
