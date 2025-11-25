'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import NewItem from './new-item';
import { useUserAuth } from '../_utils/auth-context';
import { getItems, addItem } from '../_services/shopping-list-service';

export default function Page() {
  const { user } = useUserAuth();

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');

  const loadItems = async () => {
    if (!user) return;
    const fetchedItems = await getItems(user.uid);
    setItems(fetchedItems);
  }

  useEffect(()=>{
    loadItems();
  },[user])

  const handleAddItem = async (newItem) => {
    const id = await addItem(user.uid, newItem);
    setItems(prev => [...prev, { id, ...newItem }]);
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
        <p className="mb-2">Please log in to view your shopping list.</p>
        <Link href="/week-10" style={{ color: 'green' }}>
          Go to Landing Page
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black px-4 py-8 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold tracking-wide md:text-5xl">
          Shopping List
        </h1>
        <div className="mt-8 flex flex-col gap-4 md:flex-row">
          <div>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          <div>
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
        <Link
          href="/week-10"
          style={{ color: 'green', marginTop: '20px', display: 'inline-block' }}
        >
          Go to Landing Page
        </Link>
      </div>
    </main>
  );
}
