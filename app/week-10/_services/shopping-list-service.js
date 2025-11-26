import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  const shoppingListCol = collection(db, "users", userId, "items");
  const snapshot = await getDocs(shoppingListCol);
  const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return items;
}

export async function addItem(userId, item) {
  const shoppingListCol = collection(db, "users", userId, "items");
  const newItemRef = await addDoc(shoppingListCol, item);
  return newItemRef.id;
}
