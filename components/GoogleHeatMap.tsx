"use client";
import {
  GoogleMap,
  HeatmapLayer,
  useJsApiLoader,
} from "@react-google-maps/api";
import React from "react";
import { darkTheme } from "./dark-theme";

const containerStyle = {
  width: "100%",
  height: "calc(100% - 3rem)",
};

// const center = {
//   lat: 43.016666,
//   lng: -7.550000,
// };

type Props = {
  coordinates: number[][];
  center: any;
  zoom?: number;
};

function GoogleHeatMap({ coordinates, center, zoom }: Props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: ["visualization"], // Add the 'visualization' library
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.setZoom(zoom)

    setMap(map);
  }, [center]);

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
      zoom={zoom || 6}
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
