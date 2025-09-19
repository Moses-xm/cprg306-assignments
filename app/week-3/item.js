export default function Item({ name, quantity, category }) {
  return (
    <ul className="bg-slate-800 my-4 p-2 w-96">
      <li className="font-bold text-2xl">{name}</li>
      <li className="text-lg">
        Buy {quantity} in {category}
      </li>
    </ul>
  );
}
