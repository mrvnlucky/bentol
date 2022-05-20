import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "../styles/Map.css";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../features/auth/authSlice";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFydmluMTkwMDEiLCJhIjoiY2wyZWNoaDh3MTZ1bTNqbGFlb2VtdjkzdyJ9.xv0Q840ksCmbWY7HX_l2sQ";

const Map = () => {
  const mapContainerRef = useRef(null);

  // const [lng, setLng] = useState(5);
  // const [lat, setLat] = useState(34);
  // const [zoom, setZoom] = useState(1.5);
  const [routeDistance, setRouteDistance] = useState("");

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

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
    return () => {
      map.remove();
      dispatch(reset());
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getDistance = () => {
    return Math.round((routeDistance / 1000) * 100) / 100;
  };

  const getLiterConsumption = () => {
    if (!user) {
      return Math.round((routeDistance / 1000 / 10) * 100) / 100;
    } else {
      return Math.round((routeDistance / 1000 / user.vehicle.kmpl) * 100) / 100;
    }
  };

  const getPriceForTrip = () => {
    if (!user) {
      return Math.round((routeDistance / 1000 / 10) * 7000 * 100) / 100;
    } else {
      return (
        Math.round((routeDistance / 1000 / user.vehicle.kmpl) * 7000 * 100) /
        100
      );
    }
  };

  return (
    <div>
      <div className="map-container" ref={mapContainerRef} />
      <div className="sidebarStyle">
        {/* <div>
          <input type="radio" value="pertamax" id="pertamax" name="gasType" />
          <label for="pertamax">pertamax</label>

          <input type="radio" value="pertalite" id="pertalite" name="gasType" />
          <label for="pertalite">pertalite</label>
        </div> */}

        <div className="mb-4">
          <h2 className="mt-7 mb-4 mx-9 text-center">CEK KEBUTUHAN BENSIN<br />UNTUK TRIP KAMU</h2>
          <hr className="mb-4" />
          <div className="flex flex-row mx-3 mb-2">
            <span className="basis-1/2">Distance</span>
            <span className="basis-1/4 text-center">:</span>
            <span className="basis-1/2 text-center">{getDistance()}</span>
            <span className="basis-1/4 text-center">KM</span>
          </div>
          <div className="flex flex-row mx-3 mb-2">
            <span className="basis-1/2">Liter</span>
            <span className="basis-1/4 text-center">:</span>
            <span className="basis-1/2 text-center">{getLiterConsumption()}</span>
            <span className="basis-1/4 text-center">L</span>
          </div>
          <div className="flex flex-row mx-3 mb-2">
            <span className="basis-1/2">Harga</span>
            <span className="basis-1/4 text-center">:</span>
            <span className="basis-1/2 text-center">{getPriceForTrip()}</span>
            <span className="basis-1/4 text-center">Rp</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
