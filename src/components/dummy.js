import { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const Recipis= () => {
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

  const handleSelectChange = (e) => {
    const selectedName = e.target.value;
    const recipe = recipeList.find((recipe) => recipe.name.toString() === selectedName);
    setSelectedRecipe(recipe);
  };

  return (
    <>
      <Navbar />
      <h2>Recipes List</h2>
      <label htmlFor="recipe">Select a recipe by ID:</label>
      <select name="recipeSelect" onChange={handleSelectChange}>
        <option value="">select the name</option>
        {recipeList.map((recipe) => (
          <option key={recipe.name} value={recipe.name}>
            {recipe.name}
          </option>
        ))}
      </select>

      {selectedRecipe && (
        <div>
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

export default Recipis;
