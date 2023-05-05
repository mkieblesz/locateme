'use client';

import type { NextPage } from 'next';
import { useState } from 'react';
import InputForm from '../components/InputForm';
import GoogleHeatMap from '../components/GoogleHeatMap';
import HeatMap from '../components/HeatMap';

const Home: NextPage = () => {
  const [coordinates, setCoordinates] = useState<[number, number][]>([]);

  return (
    <div className="h-screen">
      <GoogleHeatMap />
      {/* <HeatMap coordinates={coordinates} /> */}
      <InputForm setCoordinates={setCoordinates} />
    </div>
  );
};

export default Home;