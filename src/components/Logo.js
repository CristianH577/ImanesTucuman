import {
  SVGMancha,
  SVGTextoImanes,
  SVGTextoTucuman,
} from "../assets/layout/svgs";

function Logo({ id = null, classNames = {}, className = "" }) {
  return (
    <div
      id={id}
      className={`font-['calvera'] relative select-none flex items-center justify-center self-center drop-shadow-custom${
        className ? " " + className : ""
      }`}
    >
      <SVGTextoImanes
        id={`${id || "logo"}_back`}
        data-slot="svgA"
        className={`to-custom1 from-custom1-6 w-full h-full${
          classNames?.svgA ? " " + classNames?.svgA : ""
        }`}
      />

      <SVGMancha
        id={`${id || "logo"}_midle`}
        className="absolute from-custom1--8/60 to-custom1--9/60 h-4/5 w-[60%]"
      />

      <SVGTextoTucuman
        id={`${id || "logo"}_front`}
        className="absolute h-3/5 w-1/2 tracking-[0.4em] z-10 overflow-visible"
      />
    </div>
  );
}

export default Logo;
