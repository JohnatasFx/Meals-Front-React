import "./styles/meals.css";
import { useEffect, useState } from "react";
import { api } from "../lib/api";
import Meal from "../interfaces/iMeal";
import Header from "../components/Header";
import MealImage from "../components/MealImage";
import MealIngredients from "../components/MealIngredients";
import MealInstructions from "../components/MealInstructions";
import MealVideo from "../components/MealVideo";
import MealInfo from "../components/MealInfo";
import MealFooter from "../components/MealFooter";

const getMeal = async () => {
  try {
    const response = await api.get("/random.php");
    const data = response.data;
    console.log(data);
    const result = data.meals[0];
    return result;
  } catch (error) {
    console.error("Ocorreu um erro ao buscar a refeição:", error);
    return null;
  }
};

export default function Meals() {
  const [meal, setMeal] = useState<Meal>();
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [measures, setMeasures] = useState<string[]>([]);
  const [video, setVideo] = useState<string>();

  useEffect(() => {
    const fetchMeal = async () => {
      const response = await getMeal();
      setMeal(response);
    };
    fetchMeal();
  }, []);

  useEffect(() => {
    if (meal) {
      const newIngredients = [
        meal.strIngredient1,
        meal.strIngredient2,
        meal.strIngredient3,
        meal.strIngredient4,
        meal.strIngredient5,
        meal.strIngredient6,
        meal.strIngredient7,
        meal.strIngredient8,
        meal.strIngredient9,
        meal.strIngredient10,
        meal.strIngredient11,
        meal.strIngredient12,
        meal.strIngredient13,
        meal.strIngredient14,
        meal.strIngredient15,
        meal.strIngredient16,
        meal.strIngredient17,
        meal.strIngredient18,
        meal.strIngredient19,
        meal.strIngredient20,
      ].filter(Boolean); // Filtra valores nulos e vazios

      setIngredients(newIngredients);
    }
  }, [meal]);

  console.log(ingredients);

  useEffect(() => {
    if (meal) {
      const newMeasures = [
        meal.strMeasure1,
        meal.strMeasure2,
        meal.strMeasure3,
        meal.strMeasure4,
        meal.strMeasure5,
        meal.strMeasure6,
        meal.strMeasure7,
        meal.strMeasure8,
        meal.strMeasure9,
        meal.strMeasure10,
        meal.strMeasure11,
        meal.strMeasure12,
        meal.strMeasure13,
        meal.strMeasure14,
        meal.strMeasure15,
        meal.strMeasure16,
        meal.strMeasure17,
        meal.strMeasure18,
        meal.strMeasure19,
        meal.strMeasure20,
      ].filter(Boolean); // Filtra valores nulos e vazios

      setMeasures(newMeasures);
    }
  }, [meal]);

  useEffect(() => {
    if (meal) {
      const videoLink = meal.strYoutube;
      // Extrair o ID do vídeo do link completo
      const videoId = extractVideoId(videoLink);
      // Função para extrair o ID do vídeo do link completo
      function extractVideoId(link: string) {
        // Procurar o índice do parâmetro "v="
        const index = link.indexOf("v=");
        if (index !== -1) {
          // Extrair o ID do vídeo a partir do índice encontrado
          let videoId = link.substring(index + 2);
          // Verificar se há outros parâmetros na URL e remover, se houver
          const ampersandIndex = videoId.indexOf("&");
          if (ampersandIndex !== -1) {
            videoId = videoId.substring(0, ampersandIndex);
          }
          return videoId;
        } else {
          // Caso "v=" não seja encontrado, o link não é válido
          return null;
        }
      }

      if (videoId !== null) {
        setVideo(videoId);
      }
    }
  }, [meal]);

  console.log(measures);

  const title = meal?.strMeal;

  return (
    <main>
      <Header />
      <div id="content">
        <div className="title-content">
          {/* <h1>Refeição</h1> */}
          <h1>{meal?.strMeal}</h1>
        </div>

        <div className="meal-content">
          <div className="apresent">
            <div className="meal-image">
              <MealImage title={title} imageUrl={`${meal?.strMealThumb}`} imageSource={`${meal?.strImageSource}`} />
            </div>

            <div className="meal-info">
              <MealInfo
                area={`${meal?.strArea}`}
                categoria={`${meal?.strCategory}`}
                drink={`${meal?.strDrinkAlternate}`}
              />
            </div>
          </div>

          <div className="meal-ingredients">
            <MealIngredients arrayProp={ingredients} arrayProp2={measures} />
          </div>

          <div className="meal-instructions">
            <MealInstructions instructions={`${meal?.strInstructions}`} source={`${meal?.strSource}`}/>
          </div>

          <div className="meal-video">
            <MealVideo videoId={`${video}`} videoURL={`${meal?.strYoutube}`}/>
          </div>

          <div className="meal-footer">
            <MealFooter tags={`${meal?.strTags}`} dateModified={meal?.dateModified} creativeCommonsConfirmed={`${meal?.strCreativeCommonsConfirmed}`}/>
          </div>
        </div>
      </div>
    </main>
  );
}
