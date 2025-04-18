import "./MapUbication.css";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { divIcon } from "leaflet";

import { renderToStaticMarkup } from "react-dom/server";
import { BsArrowDown, BsGeoAltFill } from "react-icons/bs";
import { Fragment } from "react";

export default function MapUbication() {
  const entrances = [
    {
      color: "red",
      className: "text-red-600 hover:text-red-500",
      label: "Entrada por Gbor. Barbieri",
      positions: [
        [-26.87842, -65.2254],
        [-26.87934342880932, -65.22058875379908],
        [-26.8838, -65.22214],
        [-26.88598, -65.22325],
      ],
    },
    {
      color: "blue",
      className: "text-blue-600 hover:text-blue-500",
      label: "Entrada por Gaspar Lasalle",
      positions: [
        [-26.883994046043476, -65.22816128030537],
        [-26.88598, -65.22325],
        [-26.886881394247986, -65.22367662501989],
        [-26.889341522050035, -65.22508852597979],
        [-26.889341522050035, -65.22508852597979],
        [-26.889505032443612, -65.22474274825518],
      ],
    },
    {
      color: "green",
      className: "text-green-600 hover:text-green-500",
      label: "Entrada por ruta",
      positions: [
        [-26.892434853863872, -65.22139693068809],
        [-26.892646856062843, -65.22207027778505],
        [-26.892758692090627, -65.22277787556926],
        [-26.89259093800744, -65.22335111934383],
        [-26.89212761591221, -65.22358399962724],
        [-26.89192418372975, -65.22334482309404],
        [-26.89068004494401, -65.22589047882366],
        [-26.889341522050035, -65.22508852597979],
      ],
    },
  ];

  const getIcon = (iconDesign = <BsArrowDown size={50} />) => {
    // const icon_comp = <design size={50} />;
    const iconMarkup = renderToStaticMarkup(iconDesign);
    const customMarketIcon = divIcon({
      html: iconMarkup,
      iconSize: [50, 50],
      iconAnchor: [25, 50],
      popupAnchor: [0, -30],
      className: "",
    });

    return customMarketIcon;
  };

  return (
    <section id="ubicacion" className="w-full drop-shadow-custom">
      <MapContainer
        center={[-26.887, -65.2247]}
        zoom={15}
        className="w-full max-w-96 h-96 place-self-center rounded-lg"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />

        <Marker
          position={[-26.88945, -65.2247]}
          icon={getIcon(
            <BsGeoAltFill
              size={50}
              className=" text-custom1 hover:text-custom1-3"
              style={{
                filter: "drop-shadow(1px 2px 2px black)",
              }}
            />
          )}
        >
          <Popup>No es local. Solo retiro.</Popup>
        </Marker>

        {entrances.map((entrance, i) => (
          <Fragment key={i}>
            <Marker
              position={entrance.positions[0]}
              icon={getIcon(
                <BsArrowDown size={50} className={entrance.className} />
              )}
              className="Popup"
            >
              <Popup className="Popup">{entrance.label}.</Popup>
            </Marker>

            <Polyline
              pathOptions={{ color: entrance.color }}
              positions={entrance.positions}
            />
          </Fragment>
        ))}
      </MapContainer>
    </section>
  );
}
