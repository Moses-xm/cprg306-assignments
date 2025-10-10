export default function Item({ item }) {
  const { name, quantity, category } = item;
  return (
    <ul className="bg-slate-800 my-2 p-2 w-96">
      <li className="font-bold text-2xl">{name}</li>
      <li className="text-lg">
        Buy {quantity} in {category}
      </li>
    </ul>
  );
}
