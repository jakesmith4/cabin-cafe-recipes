import RecipeCategory from './RecipeCategory';
import { recipes } from '../data';
import recipeDeveloperImg from '../img/app/cabin-cafe-chef.jpg';
import recipeCategoryHeroImg from '../img/app/recipe-category-hero.jpg';

const recipeCategorys = [...new Set(recipes.map(recipe => recipe.category))];

function RecipeCategoryList({
  onSetCurrentRecipes,
  onSetCurrentCategory,
  headingHeight,
}) {
  return (
    <div
      className="recipe-category-container"
      style={{
        minHeight: `calc(100vh - ${headingHeight + 1}px)`,
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${recipeCategoryHeroImg}) no-repeat`,
      }}
    >
      <div className="recipe-developer-container">
        <div>
          <img
            src={recipeDeveloperImg}
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
