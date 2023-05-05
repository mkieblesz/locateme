'use client';

import type { NextPage } from 'next';
import { useState } from 'react';
import InputForm from '../components/InputForm';
import GoogleHeatMap from '../components/GoogleHeatMap';

const Home: NextPage = () => {
  const [coordinates, setCoordinates] = useState<[number, number][]>([
    [52.237049, 21.017532],
    [52.237289, 21.019674],
    [52.235429, 21.015162],
    [52.239857, 21.016392],
    [52.238552, 21.013597],
  ]);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow">
        <GoogleHeatMap coordinates={coordinates} />
      </div>
      <InputForm setCoordinates={setCoordinates} />
    </div>
  );
};

export default Home;