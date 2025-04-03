import { useOutletContext } from "react-router";

import { Link } from "@nextui-org/react";

import ImageCustom from "../../layout/components/ImageCustom";

import { SiFacebook, SiGoogleforms, SiGooglemaps } from "react-icons/si";

import imgOpinions from "../../assets/home/Opiniones/people-text-baloon.webp";
import { title1 } from "../../libs/tvs";

export default function Opiniones() {
  const context = useOutletContext();

  const links = [
    {
      href: context?.links?.googlemaps,
      color: "success",
      label: "Google Maps",
      icon: <SiGooglemaps />,
    },
    {
      href: context?.links?.["form_encuesta-20250109"],
      color: "secondary",
      label: "Encuesta",
      icon: <SiGoogleforms />,
    },
    {
      href: context?.links?.facebook,
      color: "primary",
      label: "Facebook",
      icon: <SiFacebook />,
    },
  ];

  return (
    <section className="flex flex-col items-center sm:flex-row gap-4 sm:gap-8 w-full max-w-[900px]">
      <ImageCustom
        src={imgOpinions}
        shadow="sm"
        className="border-3 border-divider"
        classNames={{ wrapper: "w-full" }}
      />

      <article className="max-sm:text-center flex flex-col items-center gap-4">
        <p className={title1({ color: "yellow", size: "sm" })}>
          {" "}
          ¡Su opinión es importante para nosotros!
        </p>
        <span>⭐⭐⭐⭐⭐</span>

        <p>
          Ayúdenos a mejorar y ofrecerle la mejor experiencia posible. Dedique
          solo un minuto para dejar su reseña, compartir su opinión o completar
          nuestra breve encuesta.
        </p>

        <ol className="text-start">
          <li>✅ Su opinion nos ayuda a crecer</li>
          <li>✅ Mejoramos gracias a usted</li>
          <li>✅ Es rápido y sencillo</li>
        </ol>

        <p>
          Haga clic en cualquiera de los enlaces a continuación y cuéntanos su
          experiencia. Lo leemos con atención! 📢💬
        </p>

        <ol className="font-bold max-lg:space-y-2 lg:flex items-center gap-4 justify-center">
          {links.map((link) => (
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
