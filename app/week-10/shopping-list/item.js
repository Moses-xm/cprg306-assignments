export default function Item({ item, onSelect }) {
  const { name, quantity, category } = item;

  const handleSelect = () => {
    if (typeof onSelect === 'function') {
      onSelect(item);
    }
  };

  return (
    <ul
      onClick={handleSelect}
      className="bg-slate-800 my-2 w-96 cursor-pointer rounded p-2 hover:bg-slate-700"
    >
      <li className="text-2xl font-bold">{name}</li>
      <li className="text-lg">
        Buy {quantity} in {category}
      </li>
    </ul>
  );
}
