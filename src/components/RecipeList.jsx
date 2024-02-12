import Recipe from './Recipe';

function RecipeList({
  currentRecipes,
  currentCategory,
  onSetSingleRecipe,
  onToggleRecipes,
  onToggleSingleRecipe,
  backgroundColor,
}) {
  // window.onpopstate = e => {
  //   e.previentDefault();
  //   onToggleRecipes();
  // };

  return (
    <div
      className="recipe-list"
      style={{
        background: `linear-gradient(to bottom left, ${backgroundColor}, #333)`,
      }}
    >
      <button onClick={onToggleRecipes} className="back-btn">
        &#8592; back
      </button>
      <h3
        className="category-heading"
        style={{
          background: `linear-gradient(to bottom left, ${backgroundColor}, #333)`,
        }}
      >
        {currentCategory}
      </h3>
      <ul className="category-item-container section-center">
        {currentRecipes.map(recipe => (
          <Recipe
            recipe={recipe}
            key={recipe.id}
            onSetSingleRecipe={onSetSingleRecipe}
            onToggleSingleRecipe={onToggleSingleRecipe}
            backgroundColor={backgroundColor}
          />
        ))}
      </ul>
    </div>
  );
}
export default RecipeList;
