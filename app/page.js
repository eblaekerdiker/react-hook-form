'use client';
import React from "react";
import { useForm } from "react-hook-form";
import '../styles.css';

export default function App() {
  const { register, getValues } = useForm({
    defaultValues: {
      checkbox: []
    }
  });

  const handleSubmit = () => {
    const checkboxValues = getValues(["clickMe", "orClickMe", "noClick"]);
    console.log("Checkbox Value:", checkboxValues);
  };

 
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="w-96 bg-white p-8 rounded-lg shadow-lg">
        <label className="text-2xl font-bold mb-4 text-center">Select:</label>
        <div className="flex items-center mt-4">
          <input
            {...register("clickMe")}
            type="checkbox"
            value="Click Me!"
            className="mr-2 h-5 w-5 text-blue-500"
          />
          <label className="text-lg text-gray-700">Click Me!</label>
        </div>
        <div className="flex items-center mt-2">
          <input
            {...register("orClickMe")}
            type="checkbox"
            value="Or Click Me!"
            className="mr-2 h-5 w-5 text-green-500"
          />
          <label className="text-lg text-gray-700">Or Click Me!</label>
        </div>
        <div className="flex items-center mt-2">
          <input
            {...register("noClickMe")}
            type="checkbox"
            value="No Click Me!!"
            className="mr-2 h-5 w-5 text-red-500"
          />
          <label className="text-lg text-gray-700">No Click Me!!</label>
        </div>
        <button
          type="submit"
          className="mt-6 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 w-full"
        >
          Gönder
        </button>
      </form>
    </div>
  );
}
