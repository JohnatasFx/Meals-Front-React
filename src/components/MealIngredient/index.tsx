import React from "react";
import "./style.css";
import Ingredients from "../../interfaces/iIngredients";
import Measures from "../../interfaces/iMeasures";

interface MealImageProps {
  ingredients: Ingredients[];
  measures: Measures[];
}

const MealImage: React.FC<MealImageProps> = ({ ingredients, measures }) => {
  // Verifica se os arrays de ingredientes e medidas têm o mesmo comprimento
  if (ingredients.length !== measures.length) {
    throw new Error("Número de ingredientes e medidas não corresponde");
  }

  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index}>
          {ingredient[`strIngredient${index + 1}` as keyof Ingredients]} - {measures[index][`strMeasure${index + 1}` as keyof Measures]} {/* Renderiza o nome do ingrediente e sua medida */}
        </li>
      ))}
    </ul>
  );
};

export default MealImage;