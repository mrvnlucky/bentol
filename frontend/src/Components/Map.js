import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "../Styles/Map.css";

mapboxgl.accessToken = process.env.MAPBOX_API_KEY;

const Map = () => {
  const mapContainerRef = useRef(null);

  // const [lng, setLng] = useState(5);
  // const [lat, setLat] = useState(34);
  // const [zoom, setZoom] = useState(1.5);
  const [routeDistance, setRouteDistance] = useState("");

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [106.82916, -6.17535],
      zoom: 12,
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      })
    );

    // Add directions control
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: "metric",
      profile: "mapbox/driving",
      controls: { instructions: false, profileSwitcher: false },
    });
    map.addControl(directions, "top-left");

    // Docs for route event is here:
    // https://github.com/mapbox/mapbox-gl-directions/blob/master/API.md#on`enter code here`
    directions.on("route", (e) => {
      // routes is an array of route objects as documented here:
      // https://docs.mapbox.com/api/navigation/#route-object
      let routes = e.route;
      let rDistance = routes.map((r) => r.distance);

      // Save the distance
      setRouteDistance(rDistance);
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="map-container" ref={mapContainerRef} />
      <div className="sidebarStyle">
        <div>
          <input type="radio" value="pertamax" id="pertamax" name="gasType" />
          <label for="pertamax">pertamax</label>

          <input type="radio" value="pertalite" id="pertalite" name="gasType" />
          <label for="pertalite">pertalite</label>
        </div>

        <div>Distance: {routeDistance / 1000} KM</div>
        <div>Liter: {routeDistance / 10000} L</div>

        <div>Rp: {(routeDistance / 10000) * 7000} rupiah</div>
      </div>
    </div>
  );
};

export default Map;
