import React from "react";
import "./style.css";

interface Props {
  arrayProp: string[];
}

const MealIngredients: React.FC<Props> = ({ arrayProp }) => {
  return (
    <div>
      <h2>Ingredients:</h2>
      <ul>
        {arrayProp.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default MealIngredients;