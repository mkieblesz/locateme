import React, { useState } from 'react';
import axios from 'axios';

type Props = {
  setCoordinates: (coordinates: [number, number][]) => void;
};

const InputForm: React.FC<Props> = ({ setCoordinates }) => {
  const [textInput, setTextInput] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000', { text: textInput });
      setCoordinates(response.data);
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
          className="flex-grow bg-gray-100 p-2 rounded-md"
          placeholder="Enter text"
        />
        <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md">
          Send
        </button>
      </div>
    </form>
  );
};

export default InputForm;
