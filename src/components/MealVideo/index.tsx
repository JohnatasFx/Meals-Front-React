import React from "react";
import "./style.css";

interface Props {
  videoURL: string;
}

const MealVideo: React.FC<Props> = ({ videoURL }) => {
  return (
    <div>
      {/* <h2>Assistir: "${meal.strMeal}"</h2> */}
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoURL}`}
        allowFullScreen
      ></iframe>
      <p>
        Link do vídeo: <a href="${meal.strYoutube}"> </a>
      </p>
    </div>
  );
};

export default MealVideo;
