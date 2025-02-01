import { SVGMancha, SVGTextoImanes, SVGTextoTucuman } from "../assets/svgs";

function Logo({ id, classNames, className, styles, style }) {
  return (
    <span
      className={`font-['calvera'] flex items-center justify-center relative select-none ${
        className || ""
      }`}
      style={style}
    >
      <SVGTextoImanes
        id={`${id || "logo"}_back`}
        data-slot="svgA"
        className={`to-custom1 from-custom1-6 navidad:from-custom1 navidad:to-custom1--6 w-full h-full ${
          classNames?.svgA || ""
        }`}
      />

      <SVGMancha
        id={`${id || "logo"}_midle`}
        data-slot="svgC"
        className={`absolute from-custom1--8/60 to-custom1--9/60 h-4/5 w-[60%] navidad:to-custom1--3/60 navidad:from-custom1--6/60 ${
          classNames?.svgC || ""
        }`}
        style={{
          ...styles?.svgC,
        }}
      />

      <SVGTextoTucuman
        id={`${id || "logo"}_front`}
        data-slot="svgB"
        className={`absolute h-3/5 w-1/2 tracking-[0.4em] z-10 overflow-visible ${
          classNames?.svgB || ""
        }`}
      />

      {/* <div
        data-slot="logoCenterContainer"
        className={`absolute flex items-center justify-center w-full h-full max-h-[60%] ${
          classNames?.logoCenterContainer || ""
        }`}
      >
        <div
          data-slot="logoCenterSubContainer"
          className={`relative flex items-center justify-center w-3/5 h-full z-10 ${
            classNames?.logoCenterSubContainer || ""
          }`}
        >
          <SVGTextoTucuman
            id={`${id || "logo"}_front`}
            data-slot="svgB"
            className={`h-1/2 w-full tracking-[0.4em] z-10 overflow-visible ${
              classNames?.svgB || ""
            }`}
          />

          <SVGMancha
            id={`${id || "logo"}_midle`}
            data-slot="svgC"
            className={`absolute from-custom1--8/60 to-custom1--9/60 h-full w-full navidad:to-custom1--3/60 navidad:from-custom1--6/60 ${
              classNames?.svgC || ""
            }`}
            style={{
              ...styles?.svgC,
            }}
          />
        </div>
      </div> */}
    </span>
  );
}

export default Logo;
