import CardUya from "../CardUya";

export default function Llaveros() {
  const contextImgs = require.context(
    "../../../assets/uya/ideas/llaveros",
    true
  );

  return (
    <div className="flex flex-col items-center gap-4">
      <p>
        Introduciendo un imán en una funda de cuero, agregándole un mosquetón
        con una tira de cuero y un remache se puede hacer un llavero que sirve
        para colgar bolsos o mochilas en muchos lugares.
      </p>

      <CardUya src={contextImgs(`./1.webp`)} alt="Llavero de cuero con iman" />

      <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
        {[2, 3].map((key) => (
          <CardUya key={key} src={contextImgs(`./${key}.webp`)} />
        ))}
      </div>
    </div>
  );
}
