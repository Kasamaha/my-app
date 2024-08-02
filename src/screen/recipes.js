



import { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import "./recipies.css"; // Import the CSS file

const Recipies = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

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
      
      <div className="grid-container">
        {recipeList.map((eachRecipe) => (
          <div key={eachRecipe.id} className="card">
            <h4>{eachRecipe.name}</h4>
            <h4>{eachRecipe.cuisine}</h4>
            <img src={eachRecipe.image} height={150} width={150} alt={eachRecipe.name} />
            <h4>Rating: {eachRecipe.rating}</h4>
            <button><Link to={`/${eachRecipe.cuisine}/${eachRecipe.id}`}>See more</Link></button>
          </div>
        ))}
      </div>

      {selectedRecipe && (
        <div className="selected-recipe">
          <h4>{selectedRecipe.id}</h4>
          <h4>{selectedRecipe.name}</h4>
          <h4>{selectedRecipe.cuisine}</h4>
          <img src={selectedRecipe.image} height={300} width={300} alt={selectedRecipe.name} />
          <h4>Rating: {selectedRecipe.rating}</h4>
          <button><Link to={`/${selectedRecipe.cuisine}/${selectedRecipe.id}`}>See more</Link></button>
        </div>
      )}
    </>
  );
};

export default Recipies;
