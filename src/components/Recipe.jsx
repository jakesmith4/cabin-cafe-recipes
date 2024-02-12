function Recipe({
  recipe,
  onSetSingleRecipe,
  onToggleSingleRecipe,
  backgroundColor,
}) {
  function handleClick(recipe) {
    onToggleSingleRecipe();
    onSetSingleRecipe(recipe);
  }

  const currentIngredients = recipe.ingredientData.map(data => data.ingredient);

  return (
    <li onClick={() => handleClick(recipe)} className="category-item">
      <img src={recipe.img} alt="" className="category-img" />
      <div
        className="category-item-info"
        style={{
          background: `linear-gradient(to bottom left, ${backgroundColor}, #333)`,
        }}
      >
        <h3 className="category-item-heading">{recipe.name}</h3>
        <ul className="category-item-list">
          {currentIngredients.map(ingredient => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        <p className="category-item-text">{recipe.instructions}</p>
      </div>
    </li>
  );
}
export default Recipe;
