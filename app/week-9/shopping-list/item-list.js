'use client';
import { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
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
      <div>
        {itemsCopy.map((item) => (
          <Item
            key={item.id}
            item={item}
            onSelect={onItemSelect ? () => onItemSelect(item) : undefined}
          />
        ))}
      </div>
      <button className="bg-yellow-500 m-4 rounded p-2 text-xl font-bold" onClick={handleNameSort}>
        Sort by Name
      </button>
      <button
        className="bg-yellow-500 m-4 rounded p-2 text-xl font-bold"
        onClick={handleCategorySort}
      >
        Sort by Category
      </button>
    </div>
  );
}
