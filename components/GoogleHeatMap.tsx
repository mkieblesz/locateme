"use client";
import { darkTheme } from "./dark-theme";
import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  HeatmapLayer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "calc(100% - 3rem)",
};

const center = {
  lat: 52.237049,
  lng: 21.017532,
};

type Props = {
  coordinates: [number, number][];
};

function GoogleHeatMap({ coordinates }: Props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "__REPLACE_ME",
    libraries: ["visualization"], // Add the 'visualization' library
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  const mapOptions = {
    styles: darkTheme,
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={mapOptions}
    >
      <HeatmapLayer
        data={coordinates.map(
          ([lat, lng]) => new window.google.maps.LatLng(lat, lng)
        )}
      />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(GoogleHeatMap);
