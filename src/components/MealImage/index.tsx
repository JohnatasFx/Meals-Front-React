import React from "react";
import "./style.css";

interface MealImageProps {
  imageUrl: string;
}

const MealImage: React.FC<MealImageProps> = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="Meal" />
    </div>
  );
};

export default MealImage;
