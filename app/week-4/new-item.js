"use client";
import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <form className="mx-auto my-4 justify-center flex space-x-4 bg-white w-45 p-2 ">
      <input
        type="text"
        readOnly
        className="text-black w-12 text-lg font-extrabold text-center border border-black rounded"
        value={quantity}
      />
      <button
        type="button"
        className={`px-3 py-1 rounded font-extrabold text-lg text-white ${quantity <= 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 cursor-pointer'}`}

        onClick={decrement}
        disabled={quantity <= 1}
      >
        -
      </button>
      <button
        type="button"
        className={`px-3 py-1 rounded font-extrabold text-lg text-white ${quantity >= 20 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 cursor-pointer'}`}
        onClick={increment}
        disabled={quantity >= 20}
      >
        +
      </button>
    </form>
  );
}
   