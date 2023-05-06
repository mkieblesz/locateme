'use client';

import type { NextPage } from 'next';
import { useState } from 'react';
import InputForm from '../components/InputForm';
import GoogleHeatMap from '../components/GoogleHeatMap';
import heatmapData from '../population_galicia.json'
const Home: NextPage = () => {
  const [coordinates, setCoordinates] = useState<[number, number][]>(heatmapData as [number, number][]);
  const [data, setData] = useState('')  // [
  //   [52.237049, 21.017532],
  //   [52.237289, 21.019674],
  //   [52.235429, 21.015162],
  //   [52.239857, 21.016392],
  //   [52.238552, 21.013597],
  // ]);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow grid grid-cols-6">
        <div className="col-span-5">
          <GoogleHeatMap coordinates={coordinates} />
        </div>
        <div className="bg-gray-200 col-span-1 p-5">
          <nav className='flex flex-col gap-1 bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg'>
            <h1 className="text-xl font-bold text-white">
              <span className="inline-block transition-transform ease-in-out transform hover:rotate-180 cursor-pointer">
                🌏
              </span>
              {` `} LocateMe
            </h1>
            <small className='text-gray-200'>Locate individuals based on their names</small>
          </nav>
          <hr className='border border-gray-500 my-5' />
          <div>
            {
              data ? <p className='my-2 p-4 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                {data}
              </p> : ''
            }


          </div>
        </div>
      </div>
      <InputForm setCoordinates={setCoordinates} setData={setData} />
    </div>
  );
};

export default Home;