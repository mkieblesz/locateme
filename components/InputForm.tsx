"use client";

import React, { useState } from "react";
import axios from "axios";
import heatmapData from "../population_galicia.json";
import heatmapData_1 from "../heatmap_data_1.json";
import heatmapData_2 from "../heatmap_data_2.json";
let i = 0;

const data: {
  [key: number]: {
    nameInfo: string;
    center: {
      lat: number;
      lng: number;
    };
    data: number[][];
    zoom?: number;
  };
} = {
  1: {
    nameInfo: `The name "Jorge" is a Spanish variant of the name "George" and is commonly used in Spain. It has a strong connection to the country's geographical location as it derives from the Greek name "Georgios," meaning "farmer" or "earthworker." Spain's rich agricultural heritage and diverse landscapes make the name "Jorge" a fitting representation of the country's close ties to the land.`,
    center: {
      lat: 43.016666,
      lng: -7.55,
    },
    data: heatmapData,
  },

  2: {
    nameInfo: `London is the capital and largest city of England and the United Kingdom, located in the southeastern part of the country. It is a global hub for commerce, finance, culture, and tourism, with a rich history that dates back to Roman times. The city is home to many iconic landmarks and attractions, such as Buckingham Palace, the Tower of London, and the British Museum, as well as a diverse population of over 9 million people. With its bustling streets, world-class museums, and vibrant nightlife, London is an exciting and dynamic destination that offers something for everyone. The city is well-connected by public transportation, including the iconic London Underground (also known as the Tube), making it easy to navigate and explore. As a location for the lookup.me app, London would provide a wealth of location data for users, ranging from popular tourist spots to lesser-known neighborhoods and local businesses.`,
    center: {
      lat: 51.522568,
      lng: -0.132753,
    },
    data: heatmapData_1,
  },

  3: {
    nameInfo: `The United States of America (USA) is a vast and diverse country located in North America, bordered by Canada to the north and Mexico to the south. It is the third largest country in the world by both area and population, with 50 states and a federal district (Washington, D.C.). The country has a rich and varied history, shaped by Native American cultures, European exploration and colonization, and the fight for independence and civil rights. Today, the USA is a global leader in technology, entertainment, politics, and more, with major cities like New York, Los Angeles, and Chicago serving as hubs for innovation and creativity. As a location for the lookup.me app, the USA offers a vast and diverse array of location data, from major landmarks and tourist attractions to small businesses and local neighborhoods. With its wide variety of landscapes, cultures, and communities, the USA is a fascinating and endlessly rich source of location information for users of the lookup.me app.`,
    center: {
      lat: 34.0234337,
      lng: -84.6154897,
    },
    data: heatmapData_2,
    zoom: 4,
  },
};

type Props = {
  setCoordinates: (coordinates: number[][]) => void;
  setData: any;
  setCenter: any;
  setZoom: any;
};

const InputForm: React.FC<Props> = ({ setCoordinates, setData, setCenter, setZoom }) => {
  const [textInput, setTextInput] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      i += 1;

      // const response = await axios.post('http://localhost:8000', { text: textInput });
      const promptResult = data[i];
      setData(promptResult.nameInfo);
      const center = {
        lat: 43.016666,
        lng: -7.55,
      };
      setCenter(promptResult.center);
      setZoom(promptResult.zoom as number | 6);
      setCoordinates(promptResult.data);
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-0 w-full bg-white p-4"
    >
      <div className="flex items-center">
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className="flex-grow bg-gray-300 p-2 rounded-md"
          placeholder="Enter text"
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Send
        </button>
      </div>
      <style global jsx>{`
        input {
          color: black;
        }
      `}</style>
    </form>
  );
};

export default InputForm;
