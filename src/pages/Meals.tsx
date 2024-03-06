import "./styles/meals.css";
import { useEffect, useState } from "react";
import { api } from "../lib/api";
import Meal from "../interfaces/iMeal";
import Header from "../components/Header";
import MealImage from "../components/MealImage";
import MealIngredients from "../components/MealIngredients";

const getMeal = async () => {
  try {
    const response = await api.get("/random.php");
    const data = response.data;
    const result = data.meals[0];
    return result;
  } catch (error) {
    console.error("Ocorreu um erro ao buscar a refeição:", error);
    return null;
  }
};

export default function Meals() {

  const [meal, setMeal] = useState<Meal>();
  const [ingredients, setIngredients] = useState<string[]>([]);

  useEffect(() => {
    const fetchMeal = async () => {
      const response = await getMeal();
      setMeal(response);
    };
    fetchMeal();
  }, []);

  useEffect(() => {
    if (meal) {

      const newIngredients: string[] = [];
      newIngredients.push(meal?.strIngredient1);
      newIngredients.push(meal?.strIngredient2);
      newIngredients.push(meal?.strIngredient3);
      newIngredients.push(meal?.strIngredient4);
      newIngredients.push(meal?.strIngredient5);
      newIngredients.push(meal?.strIngredient6);
      newIngredients.push(meal?.strIngredient7);
      newIngredients.push(meal?.strIngredient8);
      newIngredients.push(meal?.strIngredient9);
      newIngredients.push(meal?.strIngredient10);
      newIngredients.push(meal?.strIngredient11);
      newIngredients.push(meal?.strIngredient12);
      newIngredients.push(meal?.strIngredient13);
      newIngredients.push(meal?.strIngredient14);
      newIngredients.push(meal?.strIngredient15);
      newIngredients.push(meal?.strIngredient16);
      newIngredients.push(meal?.strIngredient17);
      newIngredients.push(meal?.strIngredient18);
      newIngredients.push(meal?.strIngredient19);
      newIngredients.push(meal?.strIngredient20);

      setIngredients(newIngredients);
    }
  }, [meal]);

  console.log(ingredients);

  return (
    <main>
      <Header />
      <div id="content">
        <div className="title-content">
          {/* <h1>Refeição</h1> */}
          <h1>{meal?.strMeal}</h1>
        </div>

        <div className="meal-content">
          <div className="meal-image">
            <MealImage imageUrl={`${meal?.strMealThumb}`} />
          </div>

          <div className="meal-ingredients">
            <MealIngredients arrayProp={ingredients} />
          </div>
        </div>
      </div>
    </main>
  );
}
