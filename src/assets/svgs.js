// plantilla svg
export const SVG = ({ fill, stroke, size, height, width, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 135 135"
    fill={fill || "currentColor"}
    stroke={stroke || "currentColor"}
    width={size || width || 135}
    height={size || height || 135}
    {...props}
  ></svg>
);

export const SVGMancha = ({ size, height, width, id, ...props }) => {
  const stop0 = "var(--tw-gradient-from)";
  const stop1 = "var(--tw-gradient-to)";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 550 90"
      width={size * 550 || width || 550}
      height={size * 90 || height || 90}
      shapeRendering="geometricprecision"
      preserveAspectRatio="none"
      {...props}
    >
      <defs>
        <linearGradient
          id={`gradient-SVGMancha-1${id || ""}`}
          x1="378.5"
          x2="378.5"
          y1="91.5"
          y2="93.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={stop0}></stop>
          <stop offset="1" stopColor={stop1}></stop>
        </linearGradient>
        <linearGradient
          id={`gradient-SVGMancha-2${id || ""}`}
          x1="403"
          x2="403"
          y1="90.494"
          y2="92.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={stop0}></stop>
          <stop offset="1" stopColor={stop1}></stop>
        </linearGradient>
        <linearGradient
          id={`gradient-SVGMancha-3${id || ""}`}
          x1="285.5"
          x2="285.5"
          y1="89.439"
          y2="92.562"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={stop0}></stop>
          <stop offset="1" stopColor={stop1}></stop>
        </linearGradient>
        <linearGradient
          id={`gradient-SVGMancha-4${id || ""}`}
          x1="414.127"
          x2="414.127"
          y1="84.668"
          y2="88.442"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={stop0}></stop>
          <stop offset="1" stopColor={stop1}></stop>
        </linearGradient>
        <linearGradient
          id={`gradient-SVGMancha-5${id || ""}`}
          x1="389"
          x2="389"
          y1="85.616"
          y2="88.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={stop0}></stop>
          <stop offset="1" stopColor={stop1}></stop>
        </linearGradient>
        <linearGradient
          id={`gradient-SVGMancha-6${id || ""}`}
          x1="515.5"
          x2="515.5"
          y1="79.5"
          y2="82.407"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={stop0}></stop>
          <stop offset="1" stopColor={stop1}></stop>
        </linearGradient>
        <linearGradient
          id={`gradient-SVGMancha-7${id || ""}`}
          x1="541"
          x2="541"
          y1="78.434"
          y2="81.51"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={stop0}></stop>
          <stop offset="1" stopColor={stop1}></stop>
        </linearGradient>
        <linearGradient
          id={`gradient-SVGMancha-8${id || ""}`}
          x1="542"
          x2="542"
          y1="61.5"
          y2="63.325"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={stop0}></stop>
          <stop offset="1" stopColor={stop1}></stop>
        </linearGradient>
        <linearGradient
          id={`gradient-SVGMancha-9${id || ""}`}
          x1="554"
          x2="554"
          y1="49.472"
          y2="51.565"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={stop0}></stop>
          <stop offset="1" stopColor={stop1}></stop>
        </linearGradient>
        <linearGradient
          id={`gradient-SVGMancha-10${id || ""}`}
          x1="339.5"
          x2="339.5"
          y1="20.5"
          y2="22.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={stop0}></stop>
          <stop offset="1" stopColor={stop1}></stop>
        </linearGradient>
        <linearGradient
          id={`gradient-SVGMancha-11${id || ""}`}
          x1="259"
          x2="259"
          y1="16.443"
          y2="19.609"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={stop0}></stop>
          <stop offset="1" stopColor={stop1}></stop>
        </linearGradient>
        <linearGradient
          id={`gradient-SVGMancha-12${id || ""}`}
          x1="149.5"
          x2="149.5"
          y1="14.5"
          y2="17.431"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={stop0}></stop>
          <stop offset="1" stopColor={stop1}></stop>
        </linearGradient>
        <linearGradient
          id={`gradient-SVGMancha-13${id || ""}`}
          x1="244.5"
          x2="244.5"
          y1="14.5"
          y2="18.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={stop0}></stop>
          <stop offset="1" stopColor={stop1}></stop>
        </linearGradient>
        <linearGradient
          id={`gradient-SVGMancha-14${id || ""}`}
          x1="44"
          x2="44"
          y1="15.5"
          y2="16.561"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={stop0}></stop>
          <stop offset="1" stopColor={stop1}></stop>
        </linearGradient>
        <linearGradient
          id={`gradient-SVGMancha-15${id || ""}`}
          x1="376.877"
          x2="376.877"
          y1="13.5"
          y2="17.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={stop0}></stop>
          <stop offset="1" stopColor={stop1}></stop>
        </linearGradient>
        <linearGradient
          id={`gradient-SVGMancha-16${id || ""}`}
          x1="434.5"
          x2="434.5"
          y1="12.5"
          y2="15.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={stop0}></stop>
          <stop offset="1" stopColor={stop1}></stop>
        </linearGradient>
        <linearGradient
          id={`gradient-SVGMancha-17${id || ""}`}
          x1="179.5"
          x2="179.5"
          y1="11.48"
          y2="25.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={stop0}></stop>
          <stop offset="1" stopColor={stop1}></stop>
        </linearGradient>
        <linearGradient
          id={`gradient-SVGMancha-18${id || ""}`}
          x1="231"
          x2="231"
          y1="12.5"
          y2="14.562"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={stop0}></stop>
          <stop offset="1" stopColor={stop1}></stop>
        </linearGradient>
        <linearGradient
          id={`gradient-SVGMancha-19${id || ""}`}
          x1="149.818"
          x2="149.818"
          y1="12.731"
          y2="14.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={stop0}></stop>
          <stop offset="1" stopColor={stop1}></stop>
        </linearGradient>
        <linearGradient
          id={`gradient-SVGMancha-20${id || ""}`}
          x1="480.031"
          x2="480.031"
          y1="10.5"
          y2="13.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={stop0}></stop>
          <stop offset="1" stopColor={stop1}></stop>
        </linearGradient>
        <linearGradient
          id={`gradient-SVGMancha-21${id || ""}`}
          x1="293"
          x2="293"
          y1="9.38"
          y2="96.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={stop0}></stop>
          <stop offset="1" stopColor={stop1}></stop>
        </linearGradient>
        <linearGradient
          id={`gradient-SVGMancha-22${id || ""}`}
          x1="511"
          x2="511"
          y1="8.377"
          y2="10.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={stop0}></stop>
          <stop offset="1" stopColor={stop1}></stop>
        </linearGradient>
        <linearGradient
          id={`gradient-SVGMancha-23${id || ""}`}
          x1="480.5"
          x2="480.5"
          y1="7.5"
          y2="10.592"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={stop0}></stop>
          <stop offset="1" stopColor={stop1}></stop>
        </linearGradient>
        <linearGradient
          id={`gradient-SVGMancha-24${id || ""}`}
          x1="412"
          x2="412"
          y1="7.49"
          y2="9.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={stop0}></stop>
          <stop offset="1" stopColor={stop1}></stop>
        </linearGradient>
      </defs>

      <path
        fill={`url(#gradient-SVGMancha-24${id || ""})`}
        d="M403.5 8.5c5.485-1.152 11.151-1.318 17-.5A113.54 113.54 0 00406 9.5c-.671-.752-1.504-1.086-2.5-1z"
        opacity="0.843"
        transform="translate(97.307 -35.82) translate(-116.136 29.267)"
      ></path>
      <path
        fill={`url(#gradient-SVGMancha-23${id || ""})`}
        d="M490.5 8.5v2h-10c-3.478.316-6.812-.184-10-1.5a4.452 4.452 0 012-1.5 86.735 86.735 0 0018 1z"
        transform="translate(97.307 -35.82) translate(-116.136 29.267)"
      ></path>
      <path
        fill={`url(#gradient-SVGMancha-22${id || ""})`}
        d="M490.5 8.5c13.844-.329 27.51.004 41 1-6.854-.324-13.521.01-20 1h-21v-2z"
        opacity="0.927"
        transform="translate(97.307 -35.82) translate(-116.136 29.267)"
      ></path>
      <path
        fill={`url(#gradient-SVGMancha-21${id || ""})`}
        d="M511.5 10.5c6.479-.99 13.146-1.324 20-1a2.427 2.427 0 012 .5 14.984 14.984 0 00-3 3.5 147.843 147.843 0 019 3.5 20.625 20.625 0 01-6 2c8.01.927 16.01 1.927 24 3l5 3c-6.317 1.8-5.984 3.467 1 5l-4 3a14.585 14.585 0 016 4 52.472 52.472 0 01-16 11 10.122 10.122 0 004 1.5l-1 2a56.296 56.296 0 00-13 2.5c2.405 2.032 1.905 3.532-1.5 4.5-.47 1.077-.303 2.077.5 3 2.155 2.034 4.488 2.367 7 1 4.247-1.102 8.58-1.268 13-.5.457.414.791.914 1 1.5a26.864 26.864 0 01-6 3.5 18.95 18.95 0 015 3 31.944 31.944 0 01-12 4c9.949 2 9.283 3.5-2 4.5-2.779-.221-5.446.112-8 1a111.864 111.864 0 00-26 0c-1.21.432-2.21 1.099-3 2-5.468.775-10.968.441-16.5-1a4249.714 4249.714 0 01-71.5 5c-2.668-1.11-5.501-1.11-8.5 0-2.359-.176-2.859.49-1.5 2a14.068 14.068 0 01-3.5-1c-2.886 1.725-6.052 2.392-9.5 2-4.974-3.845-9.974-3.845-15 0-29.67.079-59.337.412-89 1a40.939 40.939 0 00-9 .5c-2.153.1-3.819.933-5 2.5a1658.37 1658.37 0 01-66-1 972.173 972.173 0 00-22 2 9.208 9.208 0 01-4.5-2 144.339 144.339 0 00-13.5 5c-1.196-.346-1.196-.846 0-1.5-3.603-1.712-7.27-1.88-11-.5-2.455-.394-4.455-1.56-6-3.5l-6-1a67.363 67.363 0 0113-1.5c.543-.06.876-.393 1-1a9.864 9.864 0 00-6-1 437.728 437.728 0 00-25.5 2c-2.352.195-4.352-.472-6-2l-1 1a4.458 4.458 0 00-1.5-2c-1.823 1.247-3.823 1.914-6 2v1a714.894 714.894 0 01-5 3.5 104.388 104.388 0 00-20 3 42.498 42.498 0 01-13 0 20.473 20.473 0 00-3.5-2.5 62.787 62.787 0 01-15.5 1 23.313 23.313 0 00-6-3 789.074 789.074 0 0134-1.5c1.333-.667 1.333-1.333 0-2-8.84-1.735-17.673-1.568-26.5.5A350.088 350.088 0 0136.5 85l-3-2.5 1.5-1A256.464 256.464 0 0051.5 79a454.291 454.291 0 00-26-2c-3.166-.934-4.166-2.767-3-5.5 1.333-1.333 1.333-2.667 0-4-1.057-.706-.724-1.04 1-1 .934-1.068 1.268-2.401 1-4h-3c-.597-.235-.93-.735-1-1.5 1.86-7.116 6.194-11.783 13-14a42.336 42.336 0 01-8.5-1.5c.379-7.211 4.212-10.878 11.5-11-1.493-5.552.507-8.552 6-9 6.342-2.175 13.009-3.175 20-3-.11.617-.444 1.117-1 1.5a93.724 93.724 0 0011 1.5c16.802-1.5 33.635-2.833 50.5-4 2.379-.017 4.546.65 6.5 2a2704.823 2704.823 0 01120-5c-.457-.797-1.124-1.13-2-1 0-.667.333-1 1-1 25.439-1.976 51.106-2.643 77-2 9.413-.458 15.413-.124 18 1a1625.116 1625.116 0 01-79 1 27.876 27.876 0 00-11 1.5c2.094 1.352 4.427 1.852 7 1.5 25.683-.266 51.35.067 77 1 1.333 2.667 2.667 2.667 4 0 23.336-.167 46.669 0 70 .5-3.138 1.244-6.472 1.911-10 2 3.939 2.555 7.939 2.888 12 1v-3a348.909 348.909 0 0145 .5 258.699 258.699 0 0120-1.5 1273.81 1273.81 0 00-63-2.5c3.858-.794 7.858-1.46 12-2a57.946 57.946 0 0114-2c13.186.212 26.186.212 39 0a80.364 80.364 0 0124 0 61.254 61.254 0 0013-1 8.435 8.435 0 004-.5c-3.188-1.316-6.522-1.816-10-1.5zm-168 5a355.334 355.334 0 0027.5 2 352.096 352.096 0 0144.5 0 1273.81 1273.81 0 0163 2.5c-6.696.242-13.362.742-20 1.5a348.909 348.909 0 00-45-.5v3c-4.061 1.888-8.061 1.555-12-1 3.528-.089 6.862-.756 10-2-23.331-.5-46.664-.667-70-.5h-4a1647.684 1647.684 0 00-77-1 9.818 9.818 0 014-3c26.365.307 52.699-.027 79-1zm156 2c1.422.209 2.755.709 4 1.5-1.963.844-3.296.344-4-1.5zm-91 9l6 1.5-3 .5c-1.53-.14-2.53-.806-3-2zm26 3c3.14-1.14 6.473-1.308 10-.5-2.724.27-5.391.77-8 1.5a44.043 44.043 0 00-2-1zm-26 4c-3.125.98-6.458 1.313-10 1-1.929.27-3.595-.23-5-1.5l2-.5a52.37 52.37 0 0013 1zm-143 49a31.29 31.29 0 0110 1.5c-3.719 1.753-7.386 1.753-11 0 .556-.383.889-.883 1-1.5zm-14 1c1.679.392 3.346.892 5 1.5-2 .667-4 .667-6 0 .556-.383.889-.883 1-1.5zm-134 4c-5.344.166-10.677 0-16-.5a155.567 155.567 0 0110-1.5c2.383-.139 4.383.528 6 2zm49-2a91.699 91.699 0 0115 1.5c-4.576 1.476-9.243 1.81-14 1-.752-.67-1.086-1.504-1-2.5zm31 0c4.48-.232 8.813.435 13 2-1.059 1.196-2.393 1.863-4 2a33.39 33.39 0 00-9-2v-2z"
        transform="translate(97.307 -35.82) translate(-116.136 29.267)"
      ></path>
      <path
        fill={`url(#gradient-SVGMancha-20${id || ""})`}
        d="M480.5 10.5h3a10.162 10.162 0 00-3 3c-5.251-1.02-5.251-2.02 0-3z"
        transform="translate(97.307 -35.82) translate(-116.136 29.267)"
      ></path>
      <path
        fill={`url(#gradient-SVGMancha-19${id || ""})`}
        d="M148.5 14.5c-.111-.617-.444-1.117-1-1.5 5.829-.639 6.162-.139 1 1.5z"
        opacity="0.145"
        transform="translate(97.307 -35.82) translate(-116.136 29.267)"
      ></path>
      <path
        fill={`url(#gradient-SVGMancha-18${id || ""})`}
        d="M224.5 12.5h17c-1.452.802-3.118 1.302-5 1.5-5.323.5-10.656.666-16 .5l4-2z"
        opacity="0.873"
        transform="translate(97.307 -35.82) translate(-116.136 29.267)"
      ></path>
      <path
        fill={`url(#gradient-SVGMancha-17${id || ""})`}
        d="M325.5 13.5v1c-25.894-.643-51.561.024-77 2-.291-1.15-1.124-1.816-2.5-2-2.111.2-3.945.867-5.5 2a773.406 773.406 0 01-82.5 1c-4.438 1.768-8.938 2.101-13.5 1a10674.784 10674.784 0 00-82 4c-6.991-.175-13.658.825-20 3-1.324-2.166-3.157-2.5-5.5-1-1.662.113-2.83-.554-3.5-2a967.516 967.516 0 0139-4.5 1168.128 1168.128 0 0174-1.5c2.111 1.242 4.111 1.242 6 0 8.488-.651 16.988-1.318 25.5-2 10.097.152 20.263.152 30.5 0h12c5.344.166 10.677 0 16-.5 1.882-.198 3.548-.698 5-1.5 23.159.31 46.493-.023 70-1 4.924-.146 9.591.52 14 2z"
        transform="translate(97.307 -35.82) translate(-116.136 29.267)"
      ></path>
      <path
        fill={`url(#gradient-SVGMancha-16${id || ""})`}
        d="M427.5 13.5c4.667-1.333 9.333-1.333 14 0a57.946 57.946 0 00-14 2c1.006-.896 1.006-1.562 0-2z"
        opacity="0.486"
        transform="translate(97.307 -35.82) translate(-116.136 29.267)"
      ></path>
      <path
        fill={`url(#gradient-SVGMancha-15${id || ""})`}
        d="M427.5 13.5c1.006.438 1.006 1.104 0 2-4.142.54-8.142 1.206-12 2a352.096 352.096 0 00-44.5 0 355.334 355.334 0 01-27.5-2c-2.587-1.124-8.587-1.458-18-1v-1c33.795.606 67.795.606 102 0z"
        transform="translate(97.307 -35.82) translate(-116.136 29.267)"
      ></path>
      <path
        fill={`url(#gradient-SVGMancha-14${id || ""})`}
        d="M39.5 16.5c2.803-1.138 5.803-1.305 9-.5a40.936 40.936 0 01-9 .5z"
        opacity="0.98"
        transform="translate(97.307 -35.82) translate(-116.136 29.267)"
      ></path>
      <path
        fill={`url(#gradient-SVGMancha-13${id || ""})`}
        d="M248.5 16.5c-.667 0-1 .333-1 1 .065.438-.101.772-.5 1a4.458 4.458 0 00-1.5-2c-1.628 1.035-3.295 1.035-5 0 1.555-1.133 3.389-1.8 5.5-2 1.376.184 2.209.85 2.5 2z"
        opacity="0.686"
        transform="translate(97.307 -35.82) translate(-116.136 29.267)"
      ></path>
      <path
        fill={`url(#gradient-SVGMancha-12${id || ""})`}
        d="M148.5 14.5c1.014 1.174 2.347 1.84 4 2-1.889 1.242-3.889 1.242-6 0 .333-1 1-1.667 2-2z"
        opacity="0.996"
        transform="translate(97.307 -35.82) translate(-116.136 29.267)"
      ></path>
      <path
        fill={`url(#gradient-SVGMancha-11${id || ""})`}
        d="M264.5 16.5a9.818 9.818 0 00-4 3c-2.573.352-4.906-.148-7-1.5a27.876 27.876 0 0111-1.5z"
        opacity="0.787"
        transform="translate(97.307 -35.82) translate(-116.136 29.267)"
      ></path>
      <path
        fill={`url(#gradient-SVGMancha-10${id || ""})`}
        d="M337.5 20.5h4c-1.333 2.667-2.667 2.667-4 0z"
        opacity="0.667"
        transform="translate(97.307 -35.82) translate(-116.136 29.267)"
      ></path>
      <path
        fill={`url(#gradient-SVGMancha-9${id || ""})`}
        d="M553.5 49.5c.876-.13 1.543.203 2 1-.825.886-1.825 1.219-3 1l1-2z"
        opacity="0.553"
        transform="translate(97.307 -35.82) translate(-116.136 29.267)"
      ></path>
      <path
        fill={`url(#gradient-SVGMancha-8${id || ""})`}
        d="M538.5 61.5c2.361.174 4.694.507 7 1-2.512 1.367-4.845 1.034-7-1z"
        opacity="0.494"
        transform="translate(97.307 -35.82) translate(-116.136 29.267)"
      ></path>
      <path
        fill={`url(#gradient-SVGMancha-7${id || ""})`}
        d="M544.5 78.5c.304.65.637 1.317 1 2-2.606 1.152-5.273 1.318-8 .5-.556-.383-.889-.883-1-1.5 2.554-.888 5.221-1.221 8-1z"
        opacity="0.485"
        transform="translate(97.307 -35.82) translate(-116.136 29.267)"
      ></path>
      <path
        fill={`url(#gradient-SVGMancha-6${id || ""})`}
        d="M510.5 79.5a117.28 117.28 0 0013 2.5 50.945 50.945 0 01-16-.5c.79-.901 1.79-1.568 3-2z"
        opacity="0.511"
        transform="translate(97.307 -35.82) translate(-116.136 29.267)"
      ></path>
      <path
        fill={`url(#gradient-SVGMancha-5${id || ""})`}
        d="M396.5 88.5h-15c5.026-3.845 10.026-3.845 15 0z"
        opacity="0.444"
        transform="translate(97.307 -35.82) translate(-116.136 29.267)"
      ></path>
      <path
        fill={`url(#gradient-SVGMancha-4${id || ""})`}
        d="M419.5 85.5c-1.21.432-2.21 1.099-3 2-2.441 1.256-4.774 1.256-7 0-1.359-1.51-.859-2.176 1.5-2 2.999-1.11 5.832-1.11 8.5 0z"
        opacity="0.92"
        transform="translate(97.307 -35.82) translate(-116.136 29.267)"
      ></path>
      <path
        fill={`url(#gradient-SVGMancha-3${id || ""})`}
        d="M292.5 89.5c-1.792.81-3.792 1.31-6 1.5l6 1c-4.655.5-9.321.666-14 .5 1.181-1.567 2.847-2.4 5-2.5a40.939 40.939 0 019-.5z"
        opacity="0.515"
        transform="translate(97.307 -35.82) translate(-116.136 29.267)"
      ></path>
      <path
        fill={`url(#gradient-SVGMancha-2${id || ""})`}
        d="M396.5 92.5v-1c4.146-1.147 8.48-1.314 13-.5-4.363.37-8.696.87-13 1.5z"
        opacity="0.295"
        transform="translate(97.307 -35.82) translate(-116.136 29.267)"
      ></path>
      <path
        fill={`url(#gradient-SVGMancha-1${id || ""})`}
        d="M360.5 91.5h36v1c-7.99.523-15.99.856-24 1l-12-2z"
        transform="translate(97.307 -35.82) translate(-116.136 29.267)"
      ></path>
    </svg>
  );
};

export const SVGTextoImanes = ({ fill, size, height, width, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 285 || width || 285}
    height={size * 100 || height || 100}
    viewBox={`0 0 285 100`}
    {...props}
  >
    <defs>
      <linearGradient
        id={`gradient-SVGTextoImanes${props?.id}`}
        x1="220"
        x2="220"
        y1="100"
        y2="200"
        gradientTransform="translate(-27 -100)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="var(--tw-gradient-from)"></stop>
        <stop offset="1" stopColor="var(--tw-gradient-to)"></stop>
      </linearGradient>
    </defs>
    <text
      y="100"
      x="1"
      fill={`url(#gradient-SVGTextoImanes${props?.id})`}
      fontSize="100"
      fontWeight="700"
    >
      IMANES
    </text>
  </svg>
);

export const SVGTextoTucuman = ({ fill, size, height, width, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size * 420 || width || 420}
    height={size * 110 || height || 110}
    viewBox={`0 0 420 110`}
    {...props}
  >
    <defs>
      <linearGradient
        id={`gradient-SVGTextoTucuman-${props?.id || ""}`}
        x1="0%"
        y1="0%"
        x2="60%"
        y2="100%"
        gradientTransform="rotate(45)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#727472" />
        <stop offset="50%" stopColor="rgb(171, 174, 171)" />
        <stop offset="100%" stopColor="#727472" />
      </linearGradient>

      <filter
        id={`drop-shadow-SVGTextoTucuman-${props?.id || ""}`}
        width="200%"
        height="200%"
        x="-50%"
        y="-50%"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur in="SourceAlpha"></feGaussianBlur>
        <feOffset dx="-3" dy="2"></feOffset>
        <feFlood floodColor="rgba(114,116,114,.1)"></feFlood>
        <feComposite in2="offsetblur" operator="in"></feComposite>
        <feMerge>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>

      <filter
        id={`outline-filter-SVGTextoTucuman-${props?.id || ""}`}
        width="200%"
        height="200%"
        x="-50%"
        y="-50%"
        colorInterpolationFilters="sRGB"
      >
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius="4"
          result="dilated"
        ></feMorphology>
        <feFlood floodColor="#000" result="flood"></feFlood>
        <feComposite
          in="flood"
          in2="dilated"
          operator="in"
          result="outline"
        ></feComposite>
        <feMerge>
          <feMergeNode in="outline"></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>
    </defs>
    <text
      y="104"
      x="8"
      fill={`url(#gradient-SVGTextoTucuman-${props?.id || ""})`}
      fontSize="100"
      fontWeight="700"
      filter={`url(#outline-filter-SVGTextoTucuman-${
        props?.id || ""
      }) url(#drop-shadow-SVGTextoTucuman-${props?.id || ""})`}
      style={{
        textShadow: `0 1px 1px black`,
      }}
    >
      TUCUMÀN
    </text>
  </svg>
);

//formas
export const SVGCuadrado = ({ fill, size, height, width, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 103 68"
    fill={fill || "currentColor"}
    width={size * 103 || width || 103}
    height={size * 68 || height || 68}
    {...props}
  >
    <path
      d="M 80.334 39.013 C 80.331 39.025 80.324 39.035 80.32 39.047 C 80.298 39.119 80.271 39.189 80.234 39.254 C 80.219 39.281 80.197 39.303 80.179 39.329 C 80.147 39.374 80.116 39.42 80.077 39.46 C 80.051 39.486 80.02 39.507 79.991 39.53 C 79.959 39.556 79.93 39.586 79.894 39.609 C 79.886 39.614 79.876 39.616 79.868 39.621 C 79.86 39.626 79.854 39.633 79.845 39.638 L 61.845 49.469 C 61.553 49.628 61.203 49.633 60.907 49.48 L 20.907 28.836 C 20.893 28.829 20.883 28.817 20.87 28.809 C 20.854 28.8 20.835 28.795 20.819 28.784 C 20.789 28.764 20.765 28.738 20.738 28.715 C 20.711 28.693 20.683 28.672 20.658 28.647 C 20.618 28.607 20.585 28.562 20.553 28.516 C 20.536 28.49 20.516 28.467 20.5 28.44 C 20.466 28.38 20.441 28.316 20.42 28.25 C 20.414 28.232 20.405 28.217 20.4 28.199 C 20.379 28.117 20.367 28.032 20.367 27.946 L 20.367 11.234 C 20.367 10.842 20.596 10.486 20.953 10.324 L 39.953 1.68 C 39.968 1.673 39.985 1.676 40 1.67 C 40.118 1.622 40.241 1.59 40.367 1.59 C 40.455 1.59 40.542 1.604 40.627 1.627 C 40.655 1.635 40.68 1.648 40.708 1.658 C 40.749 1.673 40.792 1.684 40.831 1.705 L 79.831 22.146 C 80.161 22.318 80.367 22.659 80.367 23.031 L 80.367 38.759 C 80.367 38.846 80.356 38.931 80.334 39.013 Z M 61.353 47.458 L 77.194 38.806 L 40.343 20.693 L 23.687 28.018 L 61.353 47.458 Z M 22.367 26.381 L 39.367 18.508 L 39.367 4.143 L 22.367 11.878 L 22.367 26.381 Z M 41.367 4.243 L 41.367 18.43 L 78.367 37.133 L 78.367 23.636 L 41.367 4.243 Z"
      transform="matrix(-1, 0, 0, -1, 0.000007, 0.000002)"
      style={{
        WebkitTransformBox: "fill-box",
        MsTransformBox: "fill-box",
        transformBox: "fill-box",
        WebkitTransformOrigin: "50% 50%",
        MsTransformOrigin: "50% 50%",
        transformOrigin: "50% 50%",
      }}
    ></path>

    <g
      transform="matrix(2.429822, 0.428438, -0.163969, 0.929912, -92.642012, -20.15154)"
      style={{
        WebkitTransformOrigin: "122.366px 62.841px",
        MsTransformOrigin: "122.366px 62.841px",
        transformOrigin: "122.366px 62.841px",
      }}
    >
      <path d="M 116.59 52.228 L 118.187 53.432 L 112.169 61.418 L 110.572 60.214 L 116.59 52.228 Z"></path>
      <path d="M 122.082 57.314 L 122.36 59.294 L 119.8 59.655 L 126.135 64.429 L 125.776 61.868 L 127.756 61.59 L 128.591 67.532 L 122.65 68.366 L 122.372 66.386 L 124.932 66.026 L 118.596 61.252 L 118.957 63.813 L 116.976 64.091 L 116.141 58.15 L 122.082 57.314 Z"></path>
      <path d="M 134.16 65.468 L 132.563 64.264 L 126.545 72.25 L 128.142 73.454 L 134.16 65.468 Z"></path>
    </g>

    <g
      transform="matrix(0.906309, -0.422615, 0.422623, 0.906309, -42.193092, -19.162357)"
      style={{
        WebkitTransformOrigin: "115.681px 69.971px",
        MsTransformOrigin: "115.681px 69.971px",
        transformOrigin: "115.681px 69.971px",
      }}
    >
      <path d="M 104.681 64.971 L 106.681 64.971 L 106.681 74.971 L 104.681 74.971 L 104.681 64.971 Z"></path>
      <path d="M 112.129 65.728 L 113.543 67.143 L 111.714 68.971 L 119.647 68.971 L 117.819 67.143 L 119.233 65.728 L 123.476 69.971 L 119.233 74.214 L 117.819 72.799 L 119.647 70.971 L 111.714 70.971 L 113.543 72.799 L 112.129 74.214 L 107.886 69.971 L 112.129 65.728 Z"></path>
      <path d="M 126.681 64.971 L 124.681 64.971 L 124.681 74.971 L 126.681 74.971 L 126.681 64.971 Z"></path>
    </g>

    <g
      transform="matrix(-0.000001, 0.780502, -0.921713, 0.000002, -17.726858, -5.692921)"
      style={{
        WebkitTransformOrigin: "104.621px 37.398px",
        MsTransformOrigin: "104.621px 37.398px",
        transformOrigin: "104.621px 37.398px",
      }}
    >
      <path d="M 93.621 32.398 L 95.621 32.398 L 95.621 42.398 L 93.621 42.398 L 93.621 32.398 Z"></path>
      <path d="M 101.069 33.155 L 102.483 34.569 L 100.654 36.398 L 108.587 36.398 L 106.759 34.569 L 108.173 33.155 L 112.416 37.398 L 108.173 41.64 L 106.759 40.226 L 108.587 38.398 L 100.655 38.398 L 102.483 40.226 L 101.069 41.64 L 96.826 37.398 L 101.069 33.155 Z"></path>
      <path d="M 115.621 32.398 L 113.621 32.398 L 113.621 42.398 L 115.621 42.398 L 115.621 32.398 Z"></path>
    </g>

    <text style={{ whiteSpace: "pre" }} x="92.313" y="35.779" fontSize="12">
      C
    </text>
    <text style={{ whiteSpace: "pre" }} x="73.486" y="65.041" fontSize="12">
      B
    </text>
    <text style={{ whiteSpace: "pre" }} x="17.723" y="53.703" fontSize="12">
      A
    </text>
  </svg>
);

export const SVGArandelaFresada = ({
  fill,
  stroke,
  size,
  height,
  width,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 170 200"
    fill={fill || "currentColor"}
    stroke={stroke || "currentColor"}
    width={size * 170 || width || 200}
    height={size * 200 || height || 200}
    {...props}
  >
    <g>
      <text
        style={{ whiteSpace: "pre" }}
        x="158.837"
        y="94.731"
        fontSize="30"
        transform="translate(-101.914 -69.39)"
      >
        A
      </text>
      <path
        d="M108.613 100.613c-1.681-.473-1.681-1.243 0-1.719l17.179-4.856c2.337-.66 6.338-.357 7.189.547.404.42-.024.866-1.108 1.172l-9.854 2.782h90.927l-9.851-2.782c-2.346-.66-1.27-1.789 1.923-2.032 1.488-.112 3.069.007 4.159.313l17.178 4.856c1.683.476 1.683 1.246 0 1.719l-17.178 4.856c-2.345.663-6.339.359-7.199-.544-.395-.42.028-.867 1.117-1.175l9.851-2.783h-90.927l9.854 2.783c2.335.663 1.271 1.792-1.932 2.034-1.479.112-3.067-.007-4.149-.315l-17.179-4.856z"
        transform="translate(-101.914 -69.39)"
      ></path>
    </g>
    <g>
      <text
        transform="translate(28.402 55.171) matrix(1 0 0 .97035 -150.753 -362.593)"
        style={{ lineHeight: 1529.36, whiteSpace: "pre" }}
        x="270.463"
        y="450.562"
        fontSize="30.917"
      >
        B
      </text>
      <path
        d="M93.948 65.179c-.618-.473-.618-1.243 0-1.719l6.343-4.856c.861-.66 2.34-.357 2.651.547.15.42-.007.866-.407 1.172l-3.639 2.782h33.566l-3.639-2.782c-.863-.66-.467-1.789.711-2.032.553-.112 1.133.007 1.536.313l6.343 4.856c.618.476.618 1.246 0 1.719l-6.343 4.856c-.864.663-2.34.359-2.656-.544-.147-.42.009-.867.409-1.175l3.639-2.783H98.896l3.639 2.783c.862.663.469 1.792-.716 2.034-.545.112-1.129-.007-1.528-.315l-6.343-4.856z"
        transform="translate(28.402 55.171) rotate(90 0 0)"
        style={{
          WebkitTransformBox: "fill-box",
          MsTransformBox: "fill-box",
          transformBox: "fill-box",
          WebkitTransformOrigin: "50% 50%",
          MsTransformOrigin: "50% 50%",
          transformOrigin: "50% 50%",
        }}
      ></path>
    </g>
    <g>
      <text
        transform="translate(-4.816 37.935) matrix(1 0 0 .97035 -209.189 -414.102)"
        style={{ lineHeight: 1529.36, whiteSpace: "pre" }}
        x="270.463"
        y="450.562"
        fontSize="30.917"
      >
        D
      </text>
      <path
        d="M25.717 28.011c-1.27-.265-1.27-.696 0-.962l13.03-2.718c1.768-.37 4.806-.2 5.445.306.309.235-.015.485-.836.656L35.88 26.85h68.951l-7.474-1.557c-1.773-.369-.96-1.001 1.46-1.137 1.135-.063 2.328.004 3.155.175l13.03 2.718c1.269.266 1.269.697 0 .962l-13.03 2.718c-1.774.371-4.806.201-5.456-.304-.302-.235.018-.485.841-.658l7.474-1.558H35.88l7.476 1.558c1.77.371.964 1.003-1.471 1.139-1.12.062-2.319-.004-3.138-.177l-13.03-2.718z"
        style={{
          WebkitTransformBox: "fill-box",
          MsTransformBox: "fill-box",
          transformBox: "fill-box",
          WebkitTransformOrigin: "50% 50%",
          MsTransformOrigin: "50% 50%",
          transformOrigin: "50% 50%",
        }}
        transform="translate(-4.816 37.935)"
      ></path>
    </g>
    <g>
      <text
        transform="translate(-64.373 173.792) matrix(1 0 0 .97035 -150.097 -417.048)"
        style={{ lineHeight: 1529.36, whiteSpace: "pre" }}
        x="270.463"
        y="450.562"
        fontSize="30.917"
      >
        d
      </text>
      <path
        d="M108.973-7.443c-.61-.265-.61-.696 0-.962l6.263-2.718c.85-.37 2.31-.2 2.618.306.147.235-.009.485-.403.656l-3.592 1.557H147l-3.593-1.557c-.852-.369-.46-1.001.702-1.137.546-.063 1.119.004 1.516.175l6.265 2.718c.608.266.608.697 0 .962l-6.265 2.718c-.852.371-2.309.201-2.621-.304-.145-.235.007-.485.403-.658L147-7.245h-33.141l3.592 1.558c.851.371.465 1.003-.706 1.139-.54.062-1.115-.004-1.509-.177l-6.263-2.718z"
        style={{
          WebkitTransformBox: "fill-box",
          MsTransformBox: "fill-box",
          transformBox: "fill-box",
          WebkitTransformOrigin: "50% 50%",
          MsTransformOrigin: "50% 50%",
          transformOrigin: "50% 50%",
        }}
        transform="translate(-64.373 173.792)"
      ></path>
    </g>
    <g fill="none" transform="translate(3.293 26.876)">
      <ellipse
        cx="62.409"
        cy="77.107"
        strokeWidth="3"
        rx="60"
        ry="30"
      ></ellipse>
      <ellipse
        cx="62.523"
        cy="86.07"
        strokeWidth="2"
        rx="22.087"
        ry="10.545"
      ></ellipse>
      <ellipse
        cx="166.46"
        cy="172.031"
        strokeWidth="2"
        rx="46.082"
        ry="20.309"
        transform="matrix(1 .00013 0 1 -103.723 -94.593)"
      ></ellipse>
      <path
        strokeDasharray="2"
        d="M36.083 60.474l14.14 15.051m57.769 1.215L84.61 86.103"
      ></path>
      <path
        strokeWidth="3"
        d="M2.328 76.891L2.249 99.24m120.077-23.716l-.191 23.506m-119.99-.274c-.107 37.04 114.363 43.431 120.065.158"
      ></path>
      <path
        strokeDasharray="2"
        d="M74.537 75.525l14.148-15.051M40.436 86.103l-23.349-7.969"
      ></path>
    </g>
  </svg>
);

export const SVGEsfera = ({ fill, size, height, width, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 140 100"
    fill={fill || "currentColor"}
    width={size * 140 || width || 140}
    height={size * 100 || height || 100}
    {...props}
  >
    <g transform="matrix(1, 0, 0, 1, -2.246479, -11.360136)">
      <text
        style={{ lineHeight: 49.4665, whiteSpace: "pre" }}
        x="270"
        y="458"
        fontSize="30.917"
        transform="translate(-2.246 -11.36) matrix(1 0 0 .97035 -150.753 -362.593)"
      >
        D
      </text>
      <path
        d="M 68.803 60.095 C 67.471 59.622 67.471 58.852 68.803 58.376 L 82.485 53.52 C 84.342 52.86 87.532 53.163 88.204 54.067 C 88.527 54.487 88.188 54.933 87.326 55.239 L 79.476 58.021 L 151.878 58.021 L 144.029 55.239 C 142.167 54.579 143.021 53.45 145.563 53.207 C 146.755 53.095 148.006 53.214 148.876 53.52 L 162.558 58.376 C 163.89 58.852 163.89 59.622 162.558 60.095 L 148.876 64.951 C 147.013 65.614 143.829 65.31 143.147 64.407 C 142.83 63.987 143.166 63.54 144.029 63.232 L 151.878 60.449 L 79.476 60.449 L 87.326 63.232 C 89.185 63.895 88.338 65.024 85.782 65.266 C 84.606 65.378 83.345 65.259 82.485 64.951 L 68.803 60.095 Z"
        transform="matrix(0, 0.999996, -1.000004, 0, 0.000002, 0.000002)"
        style={{
          WebkitTransformBox: "fill-box",
          MsTransformBox: "fill-box",
          transformBox: "fill-box",
          WebkitTransformOrigin: "50% 50%",
          MsTransformOrigin: "50% 50%",
          transformOrigin: "50% 50%",
        }}
        // transform="translate(-2.246 -11.36)"
      ></path>
    </g>
    <path d="M50.038 0c-38.462 0-62.5 41.666-43.27 75C26 108.333 74.076 108.333 93.306 75A50.025 50.025 0 00100 50C99.972 22.398 77.62.03 50.038 0zm42.276 50c0 2.884-8.168 7.802-23.43 10.178.246-3.366.37-6.77.37-10.178 0-15.5-2.57-31.116-7.562-40.674C79.806 14.554 92.288 31.134 92.314 50zM50.038 7.692c3.916 0 11.53 14.932 11.53 42.308 0 3.962-.164 7.654-.448 11.092-3.434.282-7.124.446-11.082.446-27.354 0-42.276-7.62-42.276-11.538C7.788 26.646 26.7 7.718 50.038 7.692zM9.394 61.664c9.552 4.994 25.156 7.566 40.644 7.566 3.393 0 6.786-.123 10.17-.37-2.374 15.274-7.288 23.448-10.17 23.448-18.852-.026-35.42-12.516-40.644-30.644zm52.298 29.008c3.022-5.768 5.156-13.782 6.37-22.634 8.846-1.216 16.816-3.366 22.618-6.374a42.477 42.477 0 01-28.988 29.008z"></path>
  </svg>
);

export const SVGRedondo = ({ fill, size, height, width, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 140 90"
    fill={fill || "currentColor"}
    stroke={props?.stroke || "currentColor"}
    width={size * 140 || width || 140}
    height={size * 90 || height || 90}
    {...props}
  >
    <text
      style={{ whiteSpace: "pre" }}
      x="43.626"
      y="23.624"
      fontSize="30"
      stroke="none"
    >
      A
    </text>
    <path
      stroke="none"
      d="M5.748 27.56c-1.323-.473-1.323-1.243 0-1.719l13.509-4.856c1.837-.66 4.984-.357 5.654.547.317.42-.02.866-.872 1.172l-7.749 2.782h71.506l-7.748-2.782c-1.844-.66-1-1.789 1.512-2.032 1.17-.112 2.414.007 3.271.313l13.509 4.856c1.324.476 1.324 1.246 0 1.719l-13.509 4.856c-1.844.663-4.984.359-5.661-.544-.31-.42.021-.867.878-1.175l7.748-2.783H16.29l7.749 2.783c1.837.663 1 1.792-1.52 2.034-1.161.112-2.41-.007-3.262-.315L5.748 27.56z"
    ></path>
    <text
      style={{ lineHeight: 49.4665, whiteSpace: "pre" }}
      x="270.463"
      y="450.562"
      fontSize="30.917"
      transform="matrix(1 0 0 .97035 -150.753 -362.593)"
      stroke="none"
    >
      B
    </text>
    <path
      stroke="none"
      d="M 93.948 65.179 C 93.33 64.706 93.33 63.936 93.948 63.46 L 100.291 58.604 C 101.152 57.944 102.631 58.247 102.942 59.151 C 103.092 59.571 102.935 60.017 102.535 60.323 L 98.896 63.105 L 132.462 63.105 L 128.823 60.323 C 127.96 59.663 128.356 58.534 129.534 58.291 C 130.087 58.179 130.667 58.298 131.07 58.604 L 137.413 63.46 C 138.031 63.936 138.031 64.706 137.413 65.179 L 131.07 70.035 C 130.206 70.698 128.73 70.394 128.414 69.491 C 128.267 69.071 128.423 68.624 128.823 68.316 L 132.462 65.533 L 98.896 65.533 L 102.535 68.316 C 103.397 68.979 103.004 70.108 101.819 70.35 C 101.274 70.462 100.69 70.343 100.291 70.035 L 93.948 65.179 Z"
      transform="matrix(0, 0.999996, -1.000004, 0, 0.000004, -0.000006)"
      style={{
        WebkitTransformBox: "fill-box",
        MsTransformBox: "fill-box",
        transformBox: "fill-box",
        WebkitTransformOrigin: "50% 50%",
        MsTransformOrigin: "50% 50%",
        transformOrigin: "50% 50%",
      }}
    ></path>

    <g fill="none" strokeWidth="3" transform="translate(0 10.218)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 44v20c10 16 86 16 100 0V44"
      ></path>
      <ellipse cx="52" cy="44" rx="50" ry="12"></ellipse>
    </g>
  </svg>
);
export const SVGImanBoton = ({ fill, size, height, width, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 103 47"
    fill={fill || "none"}
    stroke={props?.stroke || "currentColor"}
    width={size * 103 || width || 103}
    height={size * 47 || height || 47}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M1.5 13.5v20c10 16 86 16 100 0v-20"
    ></path>
    <ellipse cx="51.5" cy="13.5" strokeWidth="3" rx="50" ry="12"></ellipse>
  </svg>
);

//navidad
// export const SVGLucesNAvidad = ({ size, height, width, ...props }) => {
//   const luzA = "#548afe";
//   const luzB = "#ffc430";
//   const luzC = "#ee5e3a";
//   // #fec431
//   // dfedfe

//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 512 512"
//       width={size || width || 512}
//       height={size || height || 512}
//       fillRule="evenodd"
//       clipRule="evenodd"
//       imageRendering="optimizeQuality"
//       shapeRendering="geometricPrecision"
//       textRendering="geometricPrecision"
//       preserveAspectRatio="none"
//       {...props}
//     >
//       <path
//         fill={props?.fillCable || "#02c269"}
//         d="M352.5 143.5q-1.491 15.73-1 32 .232 50.586-27 93a401 401 0 0 1-22 26q-39.37 39.437-95 48-.353-.895-1.5-1a179.5 179.5 0 0 1-30.5 2q-32.928-1.77-65 5.5-27.493 8.727-47 29.5-2.276.016-3.5 2a149 149 0 0 0-10 13 32.7 32.7 0 0 0-5.5 12q-12.322 23.288-12.5 50a800 800 0 0 0-.5 40h-16q-.25-28.005.5-56 10.613-68.824 72.5-100a227 227 0 0 1 32-11 4684 4684 0 0 0 80-2.5 162.4 162.4 0 0 0 30-6.5 199 199 0 0 0 18-6.5q7.169-3.454 13-8.5 44.513-26.498 63-75 7.72-14.855 9-32a1177 1177 0 0 0 2.5-70 114 114 0 0 1 6.5-27 315 315 0 0 1 15-30q33.358-46.04 90-54.5 23.995-.75 48-.5v16a372 372 0 0 0-53 2.5q-71.25 17.25-88.5 88.5a111.4 111.4 0 0 0-1.5 21"
//         opacity="0.981"
//       ></path>

//       <path
//         data-slot="base-1"
//         fill={props?.base || "#3dde8d"}
//         d="M331.5 62.5a585 585 0 0 0 26 8 315 315 0 0 0-15 30l-21-6a891 891 0 0 0 10-32"
//         opacity="0.98"
//       ></path>
//       <path
//         data-slot="luz-1"
//         fill={props?.luces?.a || luzA}
//         d="M331.5 62.5a891 891 0 0 1-10 32q-17.128 3.402-33-3.5A478 478 0 0 1 260 67.5q-6.552-11.898 4.5-19.5a270.4 270.4 0 0 1 41-2q16.322 3.082 26 16.5"
//         opacity="0.986"
//       ></path>
//       <path
//         // fill="#3cde8c"
//         data-slot="base-2"
//         fill={props?.base || "#3dde8d"}
//         d="M352.5 143.5h23v32h-24q-.491-16.27 1-32"
//       ></path>
//       <path
//         data-slot="luz-2"
//         fill={props?.luces?.b || luzB}
//         d="M375.5 175.5v-32q15.151-11.283 34-7.5a702 702 0 0 1 33 13q7.067 6.21 4.5 15.5a17.8 17.8 0 0 1-4.5 5.5 702 702 0 0 1-33 13q-18.83 3.783-34-7.5"
//         opacity="0.982"
//       ></path>
//       <path
//         // fill="#3ddd8c"
//         data-slot="base-3"
//         fill={props?.base || "#3dde8d"}
//         d="M310.5 190.5a457 457 0 0 0 23 7q-1.28 17.145-9 32a272 272 0 0 1-25-8 841 841 0 0 1 11-31"
//         opacity="0.979"
//       ></path>
//       <path
//         // fill="#fec431"
//         data-slot="luz-3"
//         fill={props?.luces?.c || luzC}
//         d="M310.5 190.5a841 841 0 0 0-11 31q-17.683 5.158-34-3.5a1290 1290 0 0 1-26.5-21.5q-7.486-10.366 1.5-19.5a22.5 22.5 0 0 1 7-2 284 284 0 0 1 38-1 45.9 45.9 0 0 1 14 6 161 161 0 0 0 11 10.5"
//         opacity="0.981"
//       ></path>
//       <path
//         // fill="#3ddd8c"
//         data-slot="base-4"
//         fill={props?.base || "#3dde8d"}
//         d="M324.5 268.5a180.5 180.5 0 0 1 17 15 538 538 0 0 1-20 25q-9.472-6.963-19-14a401 401 0 0 0 22-26"
//         opacity="0.976"
//       ></path>
//       <path
//         // fill="#ee5e3a"
//         data-slot="luz-4"
//         fill={props?.luces?.a || luzA}
//         d="M341.5 283.5q17.194 1.141 29.5 13a268.4 268.4 0 0 1 19 33q2.808 14.423-11.5 17a475 475 0 0 1-37-11.5q-15.624-8.994-20-26.5a538 538 0 0 0 20-25"
//         opacity="0.987"
//       ></path>
//       <path
//         // fill="#3cdd8d"
//         data-slot="base-5"
//         fill={props?.base || "#3dde8d"}
//         d="m250.5 284.5 11 20q-5.831 5.046-13 8.5a199 199 0 0 1-18 6.5l-9-20a592 592 0 0 1 29-15"
//         opacity="0.98"
//       ></path>
//       <path
//         // fill="#548afe"
//         data-slot="luz-5"
//         fill={props?.luces?.b || luzB}
//         d="M250.5 284.5a592 592 0 0 0-29 15q-16.558-8.814-21.5-27a1754 1754 0 0 1-3.5-34q3.557-17.529 20-10.5a1181 1181 0 0 1 24.5 21.5q12.444 15.267 9.5 35"
//         opacity="0.983"
//       ></path>
//       <path
//         // fill="#3bdd8c"
//         data-slot="base-6"
//         fill={props?.base || "#3dde8d"}
//         d="M207.5 342.5v25h-32v-24q15.353.3 30.5-2 1.147.105 1.5 1"
//       ></path>
//       <path
//         // fill="#e0edff"
//         data-slot="luz-6"
//         fill={props?.luces?.c || luzC}
//         d="M175.5 367.5h32q11.283 15.151 7.5 34a702 702 0 0 1-13 33q-6.21 7.067-15.5 4.5a17.8 17.8 0 0 1-5.5-4.5 702 702 0 0 1-13-33q-3.783-18.849 7.5-34"
//         opacity="0.985"
//       ></path>
//       <path
//         // fill="#3ddd8c"
//         data-slot="base-7"
//         fill={props?.base || "#3dde8d"}
//         d="M110.5 305.5a361 361 0 0 0 10 23 227 227 0 0 0-32 11 291 291 0 0 0-9-21 889 889 0 0 1 31-13"
//         opacity="0.975"
//       ></path>
//       <path
//         // fill="#ee5e3a"
//         data-slot="luz-7"
//         fill={props?.luces?.a || luzA}
//         d="M110.5 305.5a889 889 0 0 0-31 13q-13.194-8.855-18.5-24a248 248 0 0 1-1-43q7.54-11.049 19.5-4.5l22.5 22.5q11.769 16.082 8.5 36"
//         opacity="0.986"
//       ></path>
//       <path
//         // fill="#3ddd8c"
//         data-slot="base-8"
//         fill={props?.base || "#3dde8d"}
//         d="M63.5 378.5a206 206 0 0 1 18 16 649 649 0 0 0-19.5 23q-1.005 1.129-2.5 1a140 140 0 0 1-15-13 32.7 32.7 0 0 1 5.5-12 149 149 0 0 1 10-13q1.224-1.984 3.5-2"
//         opacity="0.977"
//       ></path>
//       <path
//         // fill="#fec431"
//         data-slot="luz-8"
//         fill={props?.luces?.b || luzB}
//         d="M81.5 394.5q17.874 2.31 29.5 16a262 262 0 0 1 17.5 36.5q-3.136 14.586-18 11a461 461 0 0 1-32-12q-14.874-9.987-19-27.5 1.495.129 2.5-1a649 649 0 0 1 19.5-23"
//         opacity="0.982"
//       ></path>
//     </svg>
//   );
// };

// export const SVGGift = ({ fill, size, height, width, ...props }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill={fill || "none"}
//     stroke={props?.stroke || "currentColor"}
//     width={size || width || 24}
//     height={size || height || 24}
//     {...props}
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M18.5 9.885s.5 1.726.5 4.615-.389 5.417-.778 5.778S15.112 21 12 21c-3.111 0-5.833-.361-6.222-.722S5 17.388 5 14.5c0-2.889.5-4.615.5-4.615m13 0c.307-.017.518-.034.611-.052.445-.083.889-.666.889-1.333s-.444-1.25-.889-1.333C18.667 7.083 15.556 7 12 7s-6.667.083-7.111.167C4.444 7.25 4 7.833 4 8.5s.444 1.25.889 1.333c.093.018.304.035.611.052m13 0c-1.158.063-3.69.115-6.5.115s-5.342-.052-6.5-.115m6.366-3.035c.549-2.049 3.696-5.598 5.196-3s-3.147 3.55-5.196 3m.196 0c-.549-2.049-3.696-5.598-5.196-3s3.147 3.55 5.196 3"
//     ></path>
//   </svg>
// );

// export const SVGGiftBag = ({ fill, size, height, width, ...props }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 512 512"
//     fill={fill || "currentColor"}
//     width={size || width || 512}
//     height={size || height || 512}
//     xmlSpace="preserve"
//     {...props}
//   >
//     <path d="m388.479 147.286-11.33 10.852c46.742 48.799 74.647 110.506 74.647 165.067 0 46.31-20.244 89.757-57.004 122.336-36.941 32.741-86.233 50.771-138.793 50.771s-101.852-18.03-138.793-50.771c-36.76-32.58-57.004-76.027-57.004-122.337 0-54.023 27.619-115.4 73.882-164.183l-11.385-10.796c-48.957 51.625-78.186 117.038-78.186 174.98 0 50.862 22.121 98.479 62.287 134.077C146.613 492.566 199.601 512 256 512c56.4 0 109.386-19.433 149.201-54.72 40.166-35.598 62.287-83.215 62.287-134.077-.002-58.507-29.537-124.27-79.009-175.917"></path>
//     <path d="M100.929 326.898H85.24c0 41.81 18.829 79.471 53.02 106.048l9.628-12.388c-30.282-23.538-46.959-56.8-46.959-93.66M165.721 432.398l-7.714 13.663c8.561 4.832 17.763 9.033 27.348 12.484l5.313-14.762c-8.759-3.153-17.152-6.983-24.947-11.385M327.337 68.264 367.709 0H140.836l41.913 67.83-39.714-19.857v129.982l73.218-36.608v10.58H294.7v-10.58l73.218 36.608V47.973zm-111.085 36.595h-21.965v15.689h21.965v3.258l-57.528 28.762V73.36l57.528 28.764zm62.758 31.378h-47.068V89.169h47.068zm10.585-62.758 17.074-28.673-13.482-8.027-21.853 36.7h-7.491V51.252h-15.689v22.227h-7.494l-21.892-36.708-13.475 8.037 17.099 28.671h-6.139v11.103l-6.817-3.408-40.463-65.485h171.228l-38.745 65.514-6.757 3.378V73.479zm62.633 79.09L294.7 123.805v-3.258h21.965v-15.689H294.7v-2.735l57.528-28.764z"></path>
//   </svg>
// );

// export const SVGArbolNavidad = ({ fill, size, height, width, ...props }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 723 1280"
//     fill={fill || "currentColor"}
//     width={size * 723 || width || 723}
//     height={size * 1280 || height || 1280}
//     {...props}
//   >
//     <path
//       fill={props?.star || fill}
//       d="M338.1 2.6C335 6.5 334.4 9.3 330 40c-2.2 15.7-4.8 30.6-5.6 33.1-1.6 5-5.3 9.2-9.6 10.8-1.5.6-15.9 3.5-32 6.6s-30.4 6.3-31.7 7.2c-2.3 1.5-2.3 1.5-.5 3.4 1.1 1 8.8 3.8 18.4 6.4 31 8.7 32.3 9.2 35.7 12.7 7.9 8.4 8.4 13.6 4.4 48.8-1.6 14.6-2.6 26.9-2.1 27.3 1.1 1.3 7.5-5.8 27.5-30.8 17.5-21.9 22.3-26.5 27.4-26.5 1.4 0 17.8 5.3 36.5 11.9 34.7 12.1 40.1 13.6 43 12.5 4.3-1.7.1-6.7-25.9-30.9-12.4-11.6-22.8-22-23.1-23.3-.9-3.4 1.2-5.2 18-15.4C437.7 77.2 441 75 441.6 72.3c.4-1.6.2-2.8-.6-3.3-.7-.4-15.5-1.1-32.9-1.4s-33.6-1.1-36.1-1.7c-9.2-2.1-10.2-4.2-19.5-40.4-4.3-16.8-6-21.1-9.1-24.3-1.8-1.8-3-1.5-5.3 1.4"
//     ></path>
//     <path
//       fill={props?.body || fill}
//       d="M372 197.7c-2.2 2.3-4 4.5-4 5s2.3 1.5 5.2 2.2c6.2 1.4 13.8 5.6 13.8 7.6 0 1.5-14.8 12.2-58.5 42-67.8 46.4-100.3 72-128.1 100.7C180.9 375.4 173 390 173 406c0 8.3 2.8 14.2 8.9 18.5 3.9 2.7 5 3 11.4 2.9 5.3-.1 9.6-1 16.1-3.4 18.9-6.7 68.7-31.3 116.6-57.5 50.6-27.6 74.7-38.7 100.2-46 19.1-5.6 21.1-4.5 10.1 5.2-16.2 14.2-35.9 28.8-77.3 57.3-70.2 48.3-104.6 76.4-149 121.6-56.3 57.4-93 107.6-93 127.2 0 6 2 8.8 7 10.2 11.6 3.1 27-2.5 80.5-29.6 121.8-61.6 230.7-107.8 299.5-127 16-4.4 26.5-5.2 26.5-2 0 2.5-4.3 5.7-24.6 18C384.8 574.8 160 743.2 90.5 812.5c-23.9 23.8-43.7 57.3-49.1 82.8-4.7 22.6 2.6 40.6 19.1 46.7 5.1 1.8 7.5 2.1 15.5 1.8 10.8-.5 12.8-1.1 43.9-13.5 65.3-25.8 113.6-50 216.1-108.3 76.6-43.5 113.4-63.9 164.4-91 38.1-20.2 59.8-29.2 85.6-35.6 9.4-2.2 13.8-2.8 24-2.8 14.7-.1 19.2 1.4 22.3 7.7 1.7 3.4 1.7 4 .3 9.1-3.2 11-19.6 28.8-37.4 40.6-5.6 3.8-18.9 11.2-29.5 16.6-18.9 9.6-30.4 15.3-110.2 54.1-41.5 20.2-122.6 61-168.5 84.8-107.3 55.7-225.8 119.9-237 128.3-4.1 3.1-12.5 10.6-18.6 16.7-16.2 16.1-24.3 27.4-28.9 40.1-3 8.3-3.1 9.4-.5 14.3 2.8 5.6 7.2 8.8 15.3 11.3 6.2 2 9.3 2.3 23.2 2.2 16.8 0 23.8-.8 53-5.4 48.6-7.8 102.5-21.2 169.2-42 48.1-15.1 161.4-52.5 190.3-62.8 30.7-11 72.5-26.8 127-47.9 16.2-6.3 40.1-15.5 53-20.4 24.6-9.4 27.7-11 26.5-13-1.8-2.8-38.8 1.1-68.5 7.2-44.9 9.3-91.4 22.5-203.8 57.8-29.5 9.3-63.4 19.8-75.2 23.4-97 29.6-149.4 40.2-175.6 35.6-12.2-2.1-12-4.7.9-13.3 13.1-8.7 36.1-21.1 80.7-43.5 39.8-20 55.7-27.8 155-75.8 105.8-51.2 172.9-85 204.5-103.1 66-37.7 122.9-91.3 138.9-130.9 3.1-7.6 6.6-20.3 6.6-24 0-3.5-3.1-12.1-6-16.7-4.5-7.3-14.3-12.9-28.5-16.2-12.8-3-45.6-2.5-68 1-74.5 11.7-120.8 31.8-266 115.6-85.9 49.5-115.4 65.8-154.5 85.4-25.8 12.8-62.9 29.8-68.3 31.1-3.8 1-4.3-1.3-1.8-7C138.8 833.3 179 796.4 260 734c12.4-9.5 60.9-46.1 107.7-81.2C485.7 564.4 532.6 528.1 577 491c19.1-16 23.3-20.3 26.1-26.4 2.3-5.2 2.3-9 0-14.1-2.3-5.2-6.6-8.8-13.8-11.6-7.2-2.7-20.4-2.9-43.3-.5-73 7.7-141 29.3-258.8 82.5-30.5 13.8-34.2 14.9-34.2 10.1 0-4 19.1-25.3 38.3-42.8 26.4-23.9 41.5-35.9 109.7-86.8 27.2-20.4 55.6-42.1 63-48.3 16.9-14 32.8-29.6 38.8-38.1l4.7-6.5V299c0-8.3-.3-10.1-2.5-13.8-1.5-2.7-4.2-5.4-7-7-4.2-2.5-5.3-2.7-17-2.7-14.6.1-19.4 1.1-51.6 11.6-37.2 12.1-68.1 25.1-135.7 56.8-14.2 6.7-26.2 12.1-26.7 12.1-2.2 0-1-8.8 2-14.6 9.7-19.3 32.4-40.9 97.5-92.9 33.6-26.9 41.5-33.9 41.5-37.2 0-5-17.1-15.8-26.7-17-5.1-.6-5.4-.5-9.3 3.4"
//     ></path>
//     <path
//       fill={props?.base || fill}
//       d="M442.4 1069.5c-23.6 3.5-46.9 12-65.9 24.3-9.6 6.1-25 18.5-23.7 19 .6.2 9.8-1.7 20.4-4.2 26.5-6.3 36.8-7.9 46.3-7.4 14.4.7 20 5.9 20 18.3 0 8.9-2.9 18.3-10.5 34.3-6.4 13.3-9 22.9-11.1 41.1-1.7 15-.7 38.4 2.1 48.5 4.4 16.5 13 29.7 22.4 34.7 4.4 2.3 4.6 2.3 5.9.5 1-1.4 1.7-6.6 2.1-17 2.1-44.2 8-63.6 28.7-92.6 23.9-33.7 33.6-60.2 28.4-77.7-5.4-18.2-30.9-26.7-65.1-21.8"
//     ></path>
//   </svg>
// );

//logos
export const SVGLogoSantander = ({ fill, size, height, width, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill={fill || "currentColor"}
    width={size || width || 64}
    height={size || height || 64}
    {...props}
  >
    <path d="M 31.853516 2.3027344 A 1.0001 1.0001 0 0 0 31.064453 2.7597656 C 28.554437 6.6546921 28.223024 11.290008 30.298828 14.951172 A 1.0001 1.0001 0 0 0 30.302734 14.957031 L 38.363281 28.921875 C 40.007921 31.770379 40.174875 35.173678 39.023438 38.283203 L 32.226562 26.507812 A 1.0001 1.0001 0 0 0 31.359375 26.007812 L 31.921875 26.007812 L 25.699219 15.232422 A 1.0001 1.0001 0 0 0 23.964844 15.236328 C 21.7597 19.103939 21.664225 23.713014 23.578125 27.587891 A 1.0001 1.0001 0 0 0 23.710938 28.019531 L 31.267578 41.107422 C 32.854052 43.855421 32.973523 47.17129 31.785156 50.224609 L 20.179688 30.123047 C 19.884013 29.611538 19.648088 29.056066 19.4375 28.466797 A 1.0001 1.0001 0 0 0 18.220703 27.841797 C 13.795924 29.106019 10.05059 30.958033 7.3574219 33.267578 C 4.6642539 35.577123 3 38.407649 3 41.5 C 3 46.025812 6.4887944 49.921111 11.740234 52.640625 C 16.991675 55.360139 24.128062 57 32 57 C 39.871938 57 47.008325 55.360139 52.259766 52.640625 C 57.511206 49.921111 61 46.025812 61 41.5 C 61 38.322958 59.246062 35.42356 56.419922 33.076172 C 53.742189 30.85205 50.022528 29.106182 45.712891 27.876953 C 45.652482 26.159314 45.279634 24.467466 44.408203 22.958984 L 44.408203 22.957031 L 32.771484 2.8007812 A 1.0001 1.0001 0 0 0 31.853516 2.3027344 z M 31.976562 5.4238281 L 42.677734 23.957031 A 1.0001 1.0001 0 0 0 42.677734 23.958984 C 43.478654 25.344815 43.839032 26.923295 43.789062 28.572266 A 1.0001 1.0001 0 0 0 44.53125 29.568359 C 48.939374 30.742753 52.620468 32.520373 55.142578 34.615234 C 57.664688 36.710049 59 39.056042 59 41.5 C 59 44.982188 56.222403 48.336749 51.339844 50.865234 C 46.457284 53.39372 39.592062 55 32 55 C 24.407938 55 17.542716 53.39372 12.660156 50.865234 C 7.7775969 48.336749 5 44.982188 5 41.5 C 5 39.121351 6.2653243 36.838861 8.6601562 34.785156 C 10.888628 32.874115 14.145784 31.261436 17.972656 30.070312 C 18.126263 30.422995 18.246247 30.777243 18.447266 31.125 L 31.046875 52.941406 A 1.0001 1.0001 0 0 0 32.773438 52.949219 C 35.153185 48.90183 35.258331 44.019175 33 40.107422 A 1.0001 1.0001 0 0 0 32.998047 40.107422 L 25.574219 27.25 A 1.0001 1.0001 0 0 0 25.492188 27.041016 C 23.995487 24.250494 23.866229 20.976795 24.974609 17.976562 L 30.478516 27.507812 A 1.0001 1.0001 0 0 0 31.296875 28.007812 L 30.783203 28.007812 L 38.302734 41.033203 A 1.0001 1.0001 0 0 0 40.037109 41.027344 C 42.382508 36.913196 42.414257 31.937586 40.095703 27.921875 L 32.037109 13.964844 C 30.618899 11.4635 30.645516 8.3610163 31.976562 5.4238281 z M 5.984375 18.986328 A 1.0001 1.0001 0 0 0 5 20 L 5 22 A 1.0001 1.0001 0 1 0 7 22 L 7 20 A 1.0001 1.0001 0 0 0 5.984375 18.986328 z M 10.984375 18.986328 A 1.0001 1.0001 0 0 0 10 20 L 10 22 A 1.0001 1.0001 0 1 0 12 22 L 12 20 A 1.0001 1.0001 0 0 0 10.984375 18.986328 z M 15.984375 18.986328 A 1.0001 1.0001 0 0 0 15 20 L 15 22 A 1.0001 1.0001 0 1 0 17 22 L 17 20 A 1.0001 1.0001 0 0 0 15.984375 18.986328 z M 48.984375 18.986328 A 1.0001 1.0001 0 0 0 48 20 L 48 22 A 1.0001 1.0001 0 1 0 50 22 L 50 20 A 1.0001 1.0001 0 0 0 48.984375 18.986328 z M 53.984375 18.986328 A 1.0001 1.0001 0 0 0 53 20 L 53 22 A 1.0001 1.0001 0 1 0 55 22 L 55 20 A 1.0001 1.0001 0 0 0 53.984375 18.986328 z M 58.984375 18.986328 A 1.0001 1.0001 0 0 0 58 20 L 58 22 A 1.0001 1.0001 0 1 0 60 22 L 60 20 A 1.0001 1.0001 0 0 0 58.984375 18.986328 z M 53.707031 36.583984 C 53.451906 36.561234 53.189516 36.636953 52.978516 36.814453 C 52.555516 37.168453 52.499516 37.798656 52.853516 38.222656 C 53.614516 39.132656 54 40.066 54 41 C 54 43.684 50.800406 46.325406 45.441406 48.066406 C 44.916406 48.237406 44.630781 48.801172 44.800781 49.326172 C 44.937781 49.748172 45.329953 50.017578 45.751953 50.017578 C 45.853953 50.017578 45.957547 50.00175 46.060547 49.96875 C 52.377547 47.91675 56 44.647 56 41 C 56 39.584 55.456719 38.218453 54.386719 36.939453 C 54.209219 36.727953 53.962156 36.606734 53.707031 36.583984 z M 40.720703 49.240234 C 39.786703 49.410234 38.809406 49.555875 37.816406 49.671875 C 37.268406 49.735875 36.875453 50.23225 36.939453 50.78125 C 36.999453 51.29025 37.431641 51.664062 37.931641 51.664062 C 37.970641 51.664062 38.010781 51.663203 38.050781 51.658203 C 39.085781 51.537203 40.104078 51.386031 41.080078 51.207031 C 41.623078 51.108031 41.983766 50.588922 41.884766 50.044922 C 41.784766 49.501922 41.269703 49.137234 40.720703 49.240234 z" />
  </svg>
);
export const SVGLogoGalicia = ({ fill, size, height, width, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 207"
    fill={fill || "currentColor"}
    width={size || width || 100}
    height={size * (207 / 100) || height || 207}
    {...props}
  >
    <g
      transform="translate(0.000000,207.000000) scale(0.100000,-0.100000)"
      stroke="none"
    >
      <path d="M439 2041 c-34 -35 -36 -53 -9 -145 20 -70 46 -273 37 -283 -10 -9 -209 17 -294 39 -76 20 -87 21 -111 7 -39 -21 -63 -74 -51 -108 15 -39 49 -71 76 -71 13 0 58 9 101 20 96 25 262 44 274 32 12 -12 -8 -157 -33 -239 -12 -39 -33 -79 -54 -101 l-33 -37 79 -565 c43 -311 79 -572 80 -580 2 -34 11 21 58 360 114 809 112 788 85 811 -42 35 -90 186 -96 304 l-3 50 85 -4 c47 -2 119 -12 160 -24 122 -33 155 -33 184 -3 20 19 26 35 26 67 0 35 -6 47 -36 76 -24 22 -42 32 -53 28 -102 -41 -371 -80 -371 -54 0 48 24 206 40 270 26 103 25 116 -11 150 -42 40 -90 40 -130 0z" />
    </g>
  </svg>
);
export const SVGLogoPaypal = ({ fill, size, height, width, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill={fill || "currentColor"}
    width={size || width || 512}
    height={size || height || 512}
    {...props}
  >
    <path
      d="M420.645,129.402C414.208,56.922,353.179,0,279.046,0H110.984c-5.208,0-9.621,3.727-10.346,8.885l-58.74,417.9
        c-0.423,3,0.474,6.112,2.459,8.398c1.985,2.286,4.862,3.673,7.888,3.673h52.341c-4.932,34.185-10.279,60.255-10.33,60.521
        c-0.633,3.071,0.153,6.311,2.138,8.74c1.985,2.439,4.954,3.883,8.097,3.883h107.837c5.194,0,9.602-4.352,10.342-9.495
        l19.622-136.791h90.582c75.725,0,137.331-59.635,137.331-133.586C470.204,191.916,452.154,155.004,420.645,129.402z
         M120.067,20.898h158.98c66.883,0,121.296,54.592,121.296,121.566c0,66.822-54.413,121.372-121.296,121.372H178.434
        c-5.209,0-9.622,3.653-10.347,8.816l-20.444,145.306H64.266L120.067,20.898z M332.873,344.816H233.24
        c-5.194,0-9.603,4.352-10.342,9.495l-19.623,136.791h-86.128c2.072-10.449,5.179-28.791,8.133-49.281
        c0.148-1.031,0.092-2.964-0.054-2.964h31.497c5.209,0,9.622-3.653,10.347-8.816l20.444-145.306h91.531
        c73.098,0,133.463-55.7,141.306-126.766c18.579,20.524,28.954,46.298,28.954,74.253
        C449.306,294.651,397.077,344.816,332.873,344.816z"
    />
  </svg>
);
