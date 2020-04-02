import { useEffect, useState, useRef } from "react";
import mapStyle from "./mapStyle.json";

import "./index.module.css";

const pop = {
    "Islip": 332862,
    "Poospatuck Reservation": 692,
    "Shinnecock Reservation": 16,
    "Southampton": 57975,
    "Brookhaven": 484671,
    "Smithtown": 117031,
    "Babylon": 211562,
    "Riverhead": 33625,
    "Southold": 22147,
    "East Hampton": 21903,
    "Shelter Island": 2744,
    "Huntington": 202673
};

export default function SuffolkCountyCovid19Map() {
  const root = useRef(null);
  const map = useRef(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.mapbox = require("mapbox-gl");
    console.log(mapStyle);
    const newMap = new mapbox.Map({
      container: root.current,
      style: mapStyle,
      maxBounds: [
        [-75.9, 39],
        [-70.35, 43]
      ],
      center: [-72.845697, 40.824823],
      zoom: 8,
      minZoom: 8,
      maxZoom: 18,
      dragRotate: false
    });

    newMap.once("load", () => {
      window.map = newMap;
      map.current = newMap;
      map.current.resize();
      window.addEventListener("resize", () =>
        setTimeout(() => map.current.resize(), 0)
      );
      window.addEventListener("orientationchange", () =>
        setTimeout(() => map.current.resize(), 0)
      );

      //  Add controls and Popup
      map.current.addControl(
        new mapbox.NavigationControl({ showCompass: true }),
        "bottom-right"
      );

      const dataQuery = fetch("https://jpiss.s3.amazonaws.com/covid19/suffolkTowns.json")
        .then(res => res.json())
        .then(data => {
          console.log(data.map(d => ({
            ...d,
            pop: pop[d.town],
            percent: ( d.cases / pop[d.town] ) * 100
          })))
        });
        

      fetch("https://jpiss.s3.amazonaws.com/covid19/suffolk_towns.geojson")
      .then(res => res.json())
      .then(geojson => {
        map.current.addSource("town_source", {
          type: "geojson",
          data: geojson
        });
        map.current.addLayer(
          {
            id: `town_line`,
            type: "line",
            source: `town_source`,
            paint: {
              "line-color": "#333",
              "line-width": 2
            }
          },
          "watername_ocean"
        );

        setLoaded(true);
      });
    });
  }, []);

  return <div className="map" ref={root} style={{ height: "100vh" }}></div>;
}
