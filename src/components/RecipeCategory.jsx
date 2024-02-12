function RecipeCategory({ recipe, onSetCurrentRecipes, onSetCurrentCategory }) {
  function handleClick() {
    onSetCurrentRecipes(recipe);
    onSetCurrentCategory(recipe);
  }

  return <li onClick={() => handleClick(recipe)}>{recipe}</li>;
}
export default RecipeCategory;
