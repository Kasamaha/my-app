
import { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const Recipes = () => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const { status, data } = await axios.get("https://dummyjson.com/recipes");
      if (status === 200) {
        setRecipeList(data.recipes); 
      }
    } catch (err) {
      console.error("Error fetching recipes:", err);
    }
  };

  return (
    <>
      <Navbar />
      <h2>Recipes List</h2>
      {recipeList.map((eachRecipe, index) => {
        const { name, image, rating ,id,cuisine} = eachRecipe;
        return (
          <div key={index}>
            <h4>{id}</h4>
            <h4>{name}</h4>
            <h4>{cuisine}</h4>
            <img src={image} height={300} width={300} />
            <h4>Rating: {rating}</h4>
            <button><Link to={`/${cuisine}/${id}`}>see more</Link></button>
          </div>
        );
      })}
    </>
  );
};

export default Recipes;
