import { useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./map.css";

const cities = [
  {
    id: 1,
    title: "Journey to Russia",
    city: "Moscow",
    name: "Jane Mensah",
    coordinates: [37.6173, 55.7558],
  },
  {
    id: 2,
    title: "Exploring the Wonders of Japan",
    city: "Tokyo",
    coordinates: [139.6917, 35.6895],
  },
  {
    id: 3,
    title: "A Culinary Adventure in Italy",
    city: "Rome",
    coordinates: [12.4964, 41.9028],
  },
  {
    id: 4,
    title: "Safari in Kenya",
    city: "Nairobi",
    coordinates: [36.8219, -1.2921],
  },
];
export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const zoom = 14;
  maptilersdk.config.apiKey = "qymMswSxXygq2lWOZ8Cd";


  useEffect(() => {
    if (map.current) return;
   
    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [10, 50],
      zoom: zoom,
    });
  }, []);

  map.current.on(
    "load",
    () => {
      const popup = new maptilersdk.Popup("").setHTML(" ");
      new maptilersdk.Marker({ color: "#FF0000" })
        .setLngLat([139.7525, 35.6846])
        .setPopup(popup)
        .addTo(map.current);

      cities.forEach((city) => {
        new maptilersdk.Marker()
          .setLngLat(city.coordinates)
          .setPopup(
            new maptilersdk.Popup("").setHTML(`
            <h3>${city.title}</h3>
            <p>${city.city}${
              city.name ? `<br><strong>By:</strong> ${city.name}` : ""
            }</p>
          `)
          )
          .addTo(map.current);
      });
    },
    []
  );

  return (
    <>
      <div className="map-wrap">
        <div ref={mapContainer} className="map" />
      </div>
    </>
  );
}
