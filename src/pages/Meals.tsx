import "./styles/meals.css";
import { useEffect, useState } from "react";
//import { api } from "../lib/api";
import Meal from "../interfaces/iMeal";
import Header from "../components/Header";
import axios from "axios";

const getMeal = async () => {
  try {
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
    const data = response.data;
    console.log(data);
    return data.meals[0];
  } catch (error) {
    console.error("Ocorreu um erro ao buscar a refeição:", error);
    return null;
  }
};

export default function Meals() {
  const [meal, setMeal] = useState<Meal | null>(null);

  useEffect(() => {
    const fetchMeal = async () => {
      const response = await getMeal();
      setMeal(response);
    };
    fetchMeal();
  }, []);

  //   const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setSearch(event.target.value);
  //     if (event.target.value !== "") {
  //       const results = books.filter((book) => {
  //         return book.nomeLivro.toLowerCase().includes(event.target.value.toLowerCase());
  //       });
  //       setFilteredBooks(results);
  //     } else {
  //       setFilteredBooks(books);
  //     }
  //   }

  return (
    <main>
      <Header />
      <div id="content">
        <div className="title-content">
          <h1>Refeição</h1>
        </div>

        <div className="meal-content">
          <h2>{meal ? meal.strMeal : "Carregando..."}</h2>
        </div>
      </div>
    </main>
  );
}
