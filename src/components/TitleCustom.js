import { SVGMancha } from "../assets/layout/svgsLogo";

export default function TitleCustom({ title = "", id = null }) {
  return (
    <div className="flex items-center justify-center py-3 sm:py-6 relative w-fit max-xs:break-all">
      <h2 className="text-2xl sm:text-5xl font-extrabold uppercase text-center px-10 z-10 text-white">
        {title}
      </h2>

      <SVGMancha
        id={id}
        className="absolute from-custom1/80 to-custom1--8/80 w-full h-full"
      />
    </div>
  );
}
