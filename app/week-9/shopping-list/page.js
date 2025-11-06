'use client';
import { useUserAuth } from "../_utils/auth-context";
import { useState } from 'react';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import NewItem from './new-item';
import itemsData from './items.json';

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    if (!item) {
      setSelectedItemName('');
      return;
    }

    const cleanedName = item.name
      .split(',')[0]
      .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '')
      .replace(/\s{2,}/g, ' ')
      .trim();

    setSelectedItemName(cleanedName);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-black px-4 py-8 text-white">
        <p>Please log in to view your shopping list.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black px-4 py-8 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold tracking-wide md:text-5xl">Shopping List</h1>
        <div className="mt-8 flex flex-col gap-4 md:flex-row">
          <div>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          <div>
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </main>
  );
}
