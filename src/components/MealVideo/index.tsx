import React from "react";
import "./style.css";

interface Props {
  videoId: string;
  videoURL: string;
}

const MealVideo: React.FC<Props> = ({ videoId, videoURL }) => {
  return (
    <div>
      {/* <h2>Assistir: "${meal.strMeal}"</h2> */}
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
      ></iframe>
      <p>
        Link do vídeo: <a href="${meal.strYoutube}"> {videoURL}</a>
      </p>
    </div>
  );
};

export default MealVideo;
