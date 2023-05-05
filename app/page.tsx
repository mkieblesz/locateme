'use client';

import type { NextPage } from 'next';
import { useState } from 'react';
import InputForm from '../components/InputForm';
import HeatMap from '../components/HeatMap';

const Home: NextPage = () => {
  const [coordinates, setCoordinates] = useState<[number, number][]>([]);

  return (
    <div className="h-screen">
      <HeatMap coordinates={coordinates} />
      <InputForm setCoordinates={setCoordinates} />
    </div>
  );
};

export default Home;