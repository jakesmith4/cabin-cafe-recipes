import RecipeCategory from './RecipeCategory';
import { recipes } from '../data';
import recipeDeveloperImg from '../img/app/cabin-cafe-chef.jpg';
import recipeCategoryHeroImg from '../img/app/recipe-category-hero.jpg';
import appDeveloperImg from '../img/app/app-developer.jpg';

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
      <div className="app-developer-container">
        <h5 className="app-developer-heading">App Developer</h5>
        <a
          href="https://www.facebook.com/profile.php?id=100000047980515"
          target="_blank"
        >
          <img
            src={appDeveloperImg}
            alt="Jacob Smith"
            className="app-developer"
          />
          <span className="app-developer-name">Jacob Smith</span>
        </a>
      </div>
    </div>
  );
}
export default RecipeCategoryList;
