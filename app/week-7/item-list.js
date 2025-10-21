'use client';
import { useState } from 'react';
import Item from './item';

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('name');

  let itemsCopy = [...items];
  if (sortBy === 'name') {
    itemsCopy.sort((a, b) => (a.name > b.name ? 1 : -1));
  } else if (sortBy === 'category') {
    itemsCopy.sort((a, b) => (a.category > b.category ? 1 : -1));
  }

  const handleNameSort = () => {
    setSortBy('name');
  };

  const handleCategorySort = () => {
    setSortBy('category');
  };

  return (
    <div>
      <div className="space-y-2">
        {itemsCopy.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <div className="flex gap-2 mb-4">
        <button
          className={`m-4 p-2 font-bold text-xl rounded ${
            sortBy === 'name' ? 'bg-yellow-500' : 'bg-gray-500'
          }`}
          onClick={handleNameSort}
        >
          Sort by Name
        </button>
        <button
          className={`m-4 p-2 font-bold text-xl rounded ${
            sortBy === 'category' ? 'bg-yellow-500' : 'bg-gray-500'
          }`}
          onClick={handleCategorySort}
        >
          Sort by Category
        </button>
      </div>
    </div>
  );
}
