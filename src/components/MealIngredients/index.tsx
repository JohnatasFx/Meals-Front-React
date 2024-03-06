import React from "react";
import "./style.css";

interface Props {
  arrayProp: string[];
  arrayProp2: string[];
}

const MealIngredients: React.FC<Props> = ({ arrayProp, arrayProp2 }) => {
  return (
    <div>
      <h2>Ingredients:</h2>
      <ul>
        {/* Mapeia os arrays simultaneamente */}
        {arrayProp.map((item, index) => (
          <li key={index}>
            {item} - {arrayProp2[index]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIngredients;