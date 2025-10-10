'use client';
import { useState } from 'react';
import Item from './item';
import itemsData from './items.json';
import CategoryWrapper from './category-wrapper';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');
  const [items, setItems] = useState(() =>
    [...itemsData].sort((a, b) => (a.name > b.name ? 1 : -1))
  );
  const [groupedItems, setGroupedItems] = useState({});

  const handleNameSort = () => {
    const sortedItems = [...itemsData].sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    setItems(sortedItems);
    setSortBy('name');
  };

  const handleCategorySort = () => {
    const sortedItems = [...itemsData].sort((a, b) =>
      a.category > b.category ? 1 : -1
    );
    setItems(sortedItems);
    setSortBy('category');
  };

  const handleCategoryGroup = () => {
    const sortedItems = [...itemsData].sort((a, b) =>
      a.category > b.category ? 1 : -1
    );
    const _groupedItems = sortedItems.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});
    setGroupedItems(_groupedItems);
    setSortBy('group-category');
  };

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button
          className={`p-2 my-4 rounded font-bol ${
            sortBy === 'name' ? 'bg-yellow-500' : 'bg-gray-500'
          }`}
          onClick={handleNameSort}
        >
          Sort by Name
        </button>
        <button
          className={`p-2 my-4 rounded font-bol ${
            sortBy === 'category' ? 'bg-yellow-500' : 'bg-gray-500'
          }`}
          onClick={handleCategorySort}
        >
          Sort by Category
        </button>
        <button
          className={`p-2 my-4 rounded font-bol ${
            sortBy === 'group-category' ? 'bg-yellow-500' : 'bg-gray-500'
          }`}
          onClick={handleCategoryGroup}
        >
          Group by Category
        </button>
      </div>
      {sortBy === 'group-category' ? (
        <div className="space-y-4">
          {Object.entries(groupedItems).map(([category, items]) => (
            <CategoryWrapper key={category} category={category} items={items} />
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
