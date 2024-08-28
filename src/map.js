
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGl2eWFzbSIsImEiOiJjbTAwenprMGwxa3hoMmtyMnh6ZncxZGRzIn0.b4rIdvAo-J3t3kEKV0dxWA';

const SimpleMap = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/divyasm/cm0axhbxd00p801ph9shc0r95', // A basic Mapbox style
      center: [80.013,13.012,], // Longitude, Latitude for testing
      zoom: 9,
    });
  }, []);

  return <div ref={mapContainer} style={{ width: '100%', height: '100vh' }} />;
};

export default SimpleMap;
