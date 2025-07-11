import { useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./map.css";

const cities = [
  {
    id: 1,
    title: "Journey to Russia",
     name: "John Terry", 
     image: "John.jpg",
    city: "Moscow",
     date: "2023-10-01",
    coordinates: [37.6173, 55.7558],
  },
  {
    id: 2,
    title: "Exploring the Wonders of Japan",
     name: "Jane Mensah",
      image: "Jane.jpg",
    city: "Tokyo",
     date: "2023-09-15",
    coordinates: [139.6917, 35.6895],
  },
  {
    id: 3,
    title: "A Culinary Adventure in Italy",
    name: "Alice Addai", 
    image: "Alice.jpg",
    city: "Rome",
       date: "2023-08-20",
    coordinates: [12.4964, 41.9028],
  },
  {
    id: 4,
    title: "Safari in Kenya",
    name: "Kudjo Asare", 
    image: "kudjo.jpg",
    city: "Nairobi",
     date: "2023-07-10",
    coordinates: [36.8219, -1.2921],
  },
];
export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const zoom = 14;
  maptilersdk.config.apiKey = "qymMswSxXygq2lWOZ8Cd";


useEffect(() => {
  if (!mapContainer.current || map.current) return;

  map.current = new maptilersdk.Map({
    container: mapContainer.current,
    style: maptilersdk.MapStyle.STREETS,
    center: [10, 50],
    zoom: zoom,
  });

  map.current.on("load", () => {
    const popup = new maptilersdk.Popup().setHTML();
    new maptilersdk.Marker({ color: "#FF0000" })
      .setLngLat([139.7525, 35.6846])
      .setPopup(popup)
      .addTo(map.current);

      cities.forEach((city) => {
      new maptilersdk.Marker()
        .setLngLat(city.coordinates)
        .setPopup(
          new maptilersdk.Popup().setHTML(`
          <div style="max-width:200px;">
            <h3>${city.title}</h3>
            <div class="popup-author">
              <strong>Author:</strong>
              <img src="Alice.jpg" alt="image" />
              <p>${city.city}${
                city.name ? `<br><strong>By:</strong> ${city.name}` : ""
              }</p>
              <a href="/posts/${city.id}">Read more</a>
            </div>
            <img src="${city.image}" alt="${city.title}" class="popup-image" />
            <p>${city.city}</p>
            <p>${city.date}</p>
          </div>
        `)
        )
        .addTo(map.current);
    });
  });
});

  return (
    <>
      <div className="map-wrap">
        <div ref={mapContainer} className="map" />
      </div>
    </>
  );
}
