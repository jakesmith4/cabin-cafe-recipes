import RecipeCategory from './RecipeCategory';
import { recipes } from '../data';

const recipeCategorys = [...new Set(recipes.map(recipe => recipe.category))];

function RecipeCategoryList({
  onSetCurrentRecipes,
  onSetCurrentCategory,
  headingHeight,
}) {
  return (
    <div
      className="recipe-category-container"
      style={{ minHeight: `calc(100vh - ${headingHeight + 1}px)` }}
    >
      <div className="recipe-developer-container">
        <div>
          <img
            src="src/img/app/cabin-cafe-chef.jpg"
            alt="Allen Smith"
            className="recipe-developer"
          />
          <h4>recipe developer</h4>
          <span>Allen Smith</span>
        </div>
      </div>
      <div className="recipe-category-list-container">
        <ul className="recipe-category-list">
          {recipeCategorys.map(recipe => (
            <RecipeCategory
              recipe={recipe}
              key={recipe}
              onSetCurrentRecipes={onSetCurrentRecipes}
              onSetCurrentCategory={onSetCurrentCategory}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default RecipeCategoryList;
