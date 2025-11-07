'use client';

import { useEffect, useState } from 'react';

async function fetchMealIdeas(ingredient) {
  if (!ingredient) {
    return [];
  }

  const normalizedIngredient = ingredient.trim().toLowerCase();

  if (!normalizedIngredient) {
    return [];
  }

  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(normalizedIngredient)}`
    );

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    if (data && Array.isArray(data.meals)) {
      return data.meals;
    }

    return [];
  } catch (error) {
    console.error('Failed to fetch meal ideas', error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function loadMealIdeas() {
      if (!ingredient) {
        setMeals([]);
        return;
      }

      const ideas = await fetchMealIdeas(ingredient);
      if (!ignore) {
        setMeals(ideas);
      }
    }

    loadMealIdeas();
    return () => {
      ignore = true;
    };
  }, [ingredient]);

  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-4 shadow-lg text-white">
      <h2 className="mb-1 text-2xl font-semibold">Meal Ideas</h2>
      {ingredient ? (
        <p className="mb-4 text-sm text-slate-300">
          Ingredient: <span className="font-semibold text-white">{ingredient}</span>
        </p>
      ) : (
        <p className="mb-4 text-sm text-slate-300">
          Choose an item from your shopping list to discover matching meals.
        </p>
      )}
      {!ingredient ? (
        <p className="text-slate-300">No ingredient selected yet.</p>
      ) : meals.length === 0 ? (
        <p className="text-slate-300">No meal ideas found for {ingredient}.</p>
      ) : (
        <ul className="space-y-3">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="flex items-center gap-3 rounded-md border border-slate-800 bg-slate-950/60 p-3"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="h-16 w-16 rounded object-cover"
                loading="lazy"
              />
              <span className="font-medium">{meal.strMeal}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
