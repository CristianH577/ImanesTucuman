import { useOutletContext } from "react-router";

import { title1 } from "../../libs/tvs";

import { Link } from "@nextui-org/react";

import ImageCustom from "../../components/ImageCustom";

import FacebookIcon from "@mui/icons-material/Facebook";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import DescriptionIcon from "@mui/icons-material/Description";

import imgOpinions from "../../assets/home/Opiniones/people-text-baloon.webp";

export default function Opiniones() {
  const context = useOutletContext();

  const linksObj = [
    {
      href: context?.links?.googlemaps,
      color: "success",
      label: "Google Maps",
      icon: <LocationPinIcon />,
    },
    {
      href: context?.links?.facebook,
      color: "primary",
      label: "Facebook",
      icon: <FacebookIcon />,
    },
    {
      href: context?.links?.["form_encuesta-20250109"],
      color: "secondary",
      label: "Encuesta",
      icon: <DescriptionIcon />,
    },
  ];

  return (
    <section className="flex flex-col items-center sm:flex-row gap-4 sm:gap-8 w-full max-w-[900px]">
      <ImageCustom
        src={imgOpinions}
        className="border-3 border-divider"
        classNames={{ wrapper: "w-full" }}
        alt="Imagen de opiniones"
        width={300}
      />

      <article className="text-center prose dark:prose-invert">
        <h2 className={title1({ color: "custom2", darkColor: "custom1" })}>
          ¡Su opinión es importante para nosotros!
        </h2>
        <div>⭐⭐⭐⭐⭐</div>

        <p>
          Ayúdenos a mejorar y ofrecerle la mejor experiencia posible. Dedique
          solo un minuto para dejar su reseña, compartir su opinión o completar
          nuestra breve encuesta.
        </p>

        <ol className="list-none text-start">
          <li>✅ Su opinion nos ayuda a crecer</li>
          <li>✅ Mejoramos gracias a usted</li>
          <li>✅ Es rápido y sencillo</li>
        </ol>

        <p>
          Haga clic en cualquiera de los enlaces a continuación y cuéntanos su
          experiencia. Lo leemos con atención! 📢💬
        </p>

        <ol className="list-none">
          {linksObj.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                isExternal
                showAnchorIcon
                className="text-xl gap-1"
                color={link.color}
                title={`Ir a ${link.label}`}
              >
                {link.icon} {link.label}
              </Link>
            </li>
          ))}
        </ol>
      </article>
    </section>
  );
}
