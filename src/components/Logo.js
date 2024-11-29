import { SVGMancha, SVGTextoImanes, SVGTextoTucuman } from "../assets/svgs";

function Logo({ classNames, className, styles }) {
  return (
    <div
      className={`font-['calvera'] flex items-center justify-center relative select-none ${
        className || ""
      }`}
    >
      <SVGTextoImanes
        id="logo"
        data-slot="svgA"
        className={`to-custom1 from-custom1-6 ${classNames?.svgA || ""}`}
      />

      <div
        data-slot="logoCenterContainer"
        className={`absolute flex items-center justify-center w-full h-full max-h-[60%] ${
          classNames?.logoCenterContainer || ""
        }`}
      >
        <div
          className={
            "relative flex items-center justify-center w-full h-full z-10 " +
            (classNames?.logoCenterSubContainer
              ? classNames.logoCenterSubContainer
              : "")
          }
          data-slot="logoCenterSubContainer"
        >
          <SVGTextoTucuman
            id="logo"
            data-slot="svgB"
            className={
              "h-1/2 tracking-[0.4em] z-10 overflow-visible " +
              (classNames?.svgB ? classNames.svgB : "")
            }
          />

          <SVGMancha
            id="logo"
            data-slot="svgC"
            className={
              "absolute from-custom1--8/60 to-custom1--9/60 h-full w-auto " +
              (classNames?.svgC ? classNames.svgC : "")
            }
            style={{
              transform: `scaleX(.4)`,
              ...styles?.svgC,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Logo;
