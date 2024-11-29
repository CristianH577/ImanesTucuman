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
        id={`gradient-SVGTextoTucuman${props?.id || ""}`}
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
        id={`drop-shadow-SVGTextoTucuman${props?.id || ""}`}
        width="200%"
        height="200%"
        x="-50%"
        y="-50%"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur in="SourceAlpha"></feGaussianBlur>
        <feOffset dx="-3" dy="2"></feOffset>
        <feComponentTransfer result="offsetblur">
          <feFuncA slope="1" type="linear"></feFuncA>
        </feComponentTransfer>
        <feFlood floodColor="rgba(114,116,114,.1)"></feFlood>
        <feComposite in2="offsetblur" operator="in"></feComposite>
        <feMerge>
          <feMergeNode></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>
      <filter
        id={`outline-filter-SVGTextoTucuman${props?.id || ""}`}
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
      fill={`url(#gradient-SVGTextoTucuman${props?.id || ""})`}
      fontSize="100"
      fontWeight="700"
      filter={`url(#outline-filter-SVGTextoTucuman${
        props?.id || ""
      }) url(#drop-shadow-SVGTextoTucuman${props?.id || ""})`}
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
