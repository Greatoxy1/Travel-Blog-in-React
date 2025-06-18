
import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import maplibregl from 'maplibre-gl';
import './navbar.css';

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

export default function Navbar() {
  const navigate = useNavigate();
  const mapcontainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; 

   
  
  });

  return (
    <div className="navbar">
      <div ref={mapcontainer} style={{ width: '100%', height: '400px' }} />
    </div>
  );
}