import "./styles/meals.css";
import { useEffect, useState } from "react";
import { api } from "../lib/api";
import Meal from "../interfaces/iMeal";
import Header from "../components/Header";
import MealImage from "../components/MealImage";
import MealIngredient from "../components/MealIngredient";
import Ingredients from "../interfaces/iIngredients";
import Measures from "../interfaces/iMeasures";

const getMeal = async () => {
  try {
    const response = await api.get("/random.php");
    const data = response.data;
    console.log(data);
    return data.meals[0];
  } catch (error) {
    console.error("Ocorreu um erro ao buscar a refeição:", error);
    return null;
  }
};

export default function Meals() {
  const [meal, setMeal] = useState<Meal | null>(null);
  const [ingredients, setIngredients] = useState<Ingredients[]>([]);
  
  const [measures, setMeasures] = useState<Measures[]>([]);

  useEffect(() => {
    const fetchMeal = async () => {
      const response = await getMeal();
      setMeal(response);

      const extractedIngredients: Ingredients = {
        strIngredient1: response?.strIngredient1 || "",
        strIngredient2: response?.strIngredient2 || "",
        strIngredient3: response?.strIngredient3 || "",
        strIngredient4: response?.strIngredient4 || "",
        strIngredient5: response?.strIngredient5 || "",
        strIngredient6: response?.strIngredient6 || "",
        strIngredient7: response?.strIngredient7 || "",
        strIngredient8: response?.strIngredient8 || "",
        strIngredient9: response?.strIngredient9 || "",
        strIngredient10: response?.strIngredient10 || "",
        strIngredient11: response?.strIngredient11 || "",
        strIngredient12: response?.strIngredient12 || "",
        strIngredient13: response?.strIngredient13 || "",
        strIngredient14: response?.strIngredient14 || "",
        strIngredient15: response?.strIngredient15 || "",
        strIngredient16: response?.strIngredient16 || "",
        strIngredient17: response?.strIngredient17 || "",
        strIngredient18: response?.strIngredient18 || "",
        strIngredient19: response?.strIngredient19 || "",
        strIngredient20: response?.strIngredient20 || "",
      };

      const extractedMeasures: Measures = {
        strMeasure1: response?.strMeasure1 || "",
        strMeasure2: response?.strMeasure2 || "",
        strMeasure3: response?.strMeasure3 || "",
        strMeasure4: response?.strMeasure4 || "",
        strMeasure5: response?.strMeasure5 || "",
        strMeasure6: response?.strMeasure6 || "",
        strMeasure7: response?.strMeasure7 || "",
        strMeasure8: response?.strMeasure8 || "",
        strMeasure9: response?.strMeasure9 || "",
        strMeasure10: response?.strMeasure10 || "",
        strMeasure11: response?.strMeasure11 || "",
        strMeasure12: response?.strMeasure12 || "",
        strMeasure13: response?.strMeasure13 || "",
        strMeasure14: response?.strMeasure14 || "",
        strMeasure15: response?.strMeasure15 || "",
        strMeasure16: response?.strMeasure16 || "",
        strMeasure17: response?.strMeasure17 || "",
        strMeasure18: response?.strMeasure18 || "",
        strMeasure19: response?.strMeasure19 || "",
        strMeasure20: response?.strMeasure20 || "",
      };

      setIngredients([extractedIngredients]);

      setMeasures([extractedMeasures]);
    };
    fetchMeal();
  }, []);

  return (
    <main>
      <Header />
      <div id="content">
        <div className="title-content">
          {/* <h1>Refeição</h1> */}
          <h1>{meal?.strMeal}</h1>
        </div>

        <div className="meal-content">
          <MealImage imageUrl={`${meal?.strMealThumb}`} />
          <MealIngredient ingredients={ingredients} measures={measures} />
        </div>
      </div>
    </main>
  );
}
