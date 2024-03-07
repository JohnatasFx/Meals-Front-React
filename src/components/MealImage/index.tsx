import React from "react";
import "./style.css";

interface MealImageProps {
  title: string | undefined;
  imageUrl: string;
}

const MealImage: React.FC<MealImageProps> = ({imageUrl , title}) => {
  return (
    <div className="meal-image">
      <img src={imageUrl} alt="Meal" /> 
      <h4>{`${title}`}</h4>
      <div className="overlay"></div>
    </div>
  );
};

export default MealImage;
