'use client';

import React, { useState } from 'react';
import axios from 'axios';

type Props = {
  setCoordinates: (coordinates: [number, number][]) => void;
  setData: any;
};

const InputForm: React.FC<Props> = ({ setCoordinates, setData }) => {
  const [textInput, setTextInput] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // const response = await axios.post('http://localhost:8000', { text: textInput });
      const nameInfo = `The name "Jorge" is a Spanish variant of the name "George" and is commonly used in Spain. It has a strong connection to the country's geographical location as it derives from the Greek name "Georgios," meaning "farmer" or "earthworker." Spain's rich agricultural heritage and diverse landscapes make the name "Jorge" a fitting representation of the country's close ties to the land.`
      setData(nameInfo);
      // setCoordinates(response.data);

    } catch (error) {
      console.error('Error fetching coordinates:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="fixed bottom-0 w-full bg-white p-4">
      <div className="flex items-center">
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className="flex-grow bg-gray-300 p-2 rounded-md"
          placeholder="Enter text"
        />
        <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md">
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
