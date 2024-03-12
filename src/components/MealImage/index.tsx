import React from "react";
import "./style.css";

interface MealImageProps {
  title: string | undefined;
  imageUrl: string;
  imageSource: string;
}

const MealImage: React.FC<MealImageProps> = ({imageUrl , title, imageSource}) => {
  const shouldDisplayImageSource = imageSource && imageSource !== "" && imageSource !== "null";
    

  return (
    <div className="meal-image">
      <img src={imageUrl} alt="Meal" /> 
      <h4>{`${title}`}</h4>
      <div className="overlay"></div>
      {shouldDisplayImageSource ? <p className="area">{imageSource}</p> : null}
    </div>
  );
};

export default MealImage;
