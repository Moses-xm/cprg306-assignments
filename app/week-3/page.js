import ItemList from './item-list';

export default function Page() {
  return (
    <main className="mx-auto max-w-md p-4">
      <h1 className="text-4xl font-bold">Shopping List</h1>
      <ItemList />
    </main>
  );
}
