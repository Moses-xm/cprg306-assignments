import Item from './item';

export default function CategoryWrapper({ items, category }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="font-bold text-blue-500 text-lg capitalize mb-2">
        {category}
      </h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <Item key={item.id} item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
