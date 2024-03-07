import React from "react";
import "./style.css";

interface Props {
  arrayProp: string[];
  arrayProp2: string[];
}

const MealIngredients: React.FC<Props> = ({ arrayProp, arrayProp2 }) => {
  return (
    <div className="meal-ingredients">
      <h2>Ingredients:</h2>
      <ul>
        {/* Mapeia os arrays simultaneamente */}
        {arrayProp.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              id={`checkbox-${index}`}
              name={`checkbox-${index}`}
            />
            <label htmlFor={`checkbox-${index}`}>
              {item} - {arrayProp2[index]}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIngredients;
