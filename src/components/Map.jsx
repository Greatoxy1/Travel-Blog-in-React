import { useEffect, useRef } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';

maptilersdk.config.apiKey = '';

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
  }
];

export function Map() {
  const mapContainer = useRef(null);
  const mapRef = useRef(null); 

  useEffect(() => {
    if (mapRef.current) return;

    mapRef.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [20, 0],
      zoom: 2,
    });

    cities.forEach(city => {
      const marker = new maptilersdk.Marker()
        .setLngLat(city.coordinates)
        .setPopup(
          new maptilersdk.Popup().setHTML(`
            <h3>${city.title}</h3>
            <p>${city.city}${city.name ? `<br><strong>By:</strong> ${city.name}` : ''}</p>
          `)
        )
        .addTo(mapRef.current);
    });

    return () => mapRef.current?.remove();
  }, []);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}

export default Map;
