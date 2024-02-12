import { useRef, useState, useEffect } from 'react';
import { recipes } from './data';
import RecipeCategoryList from './components/RecipeCategoryList';
import RecipeList from './components/RecipeList';
import SingleRecipe from './components/SingleRecipe';

export default function App() {
  const [showCategorys, setShowCategorys] = useState(true);
  const [showRecipes, setShowRecipes] = useState(false);
  const [showSingleRecipe, setShowSingleRecipe] = useState(false);

  const [currentRecipes, setCurrentRecipes] = useState(recipes);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentSingleRecipe, setCurrentSingleRecipe] = useState(null);

  let backgroundColor;

  function handleSetCurrentRecipes(recipe) {
    setCurrentRecipes(recipes.filter(item => item.category === recipe));
    handleToggleRecipes();
  }

  function handleSetCurrentCategory(recipe) {
    setCurrentCategory(recipe);
  }

  function handleToggleRecipes() {
    setShowCategorys(categorys => !categorys);
    setShowRecipes(recipes => !recipes);
  }

  function handleSetSingleRecipe(recipe) {
    setCurrentSingleRecipe(recipe);
  }

  function handleToggleSingleRecipe() {
    setShowRecipes(recipe => !recipe);
    setShowSingleRecipe(singleRecipe => !singleRecipe);
  }

  // Get Height Of H1 Element
  const [height, setHeight] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    setHeight(elementRef.current.offsetHeight);
  }, []);

  if (currentCategory === 'entrees') backgroundColor = '#b36e06';
  if (currentCategory === 'sides') backgroundColor = '#5f7082';

  return (
    <div className="App">
      <h1
        className={
          showRecipes || showSingleRecipe ? 'heading fixed-heading' : 'heading'
        }
        ref={elementRef}
      >
        Cabin Cafe Recipes
      </h1>
      {showCategorys && (
        <RecipeCategoryList
          headingHeight={height}
          onSetCurrentRecipes={handleSetCurrentRecipes}
          onSetCurrentCategory={handleSetCurrentCategory}
        />
      )}
      {showRecipes && (
        <RecipeList
          currentRecipes={currentRecipes}
          currentCategory={currentCategory}
          onSetSingleRecipe={handleSetSingleRecipe}
          onToggleRecipes={handleToggleRecipes}
          onToggleSingleRecipe={handleToggleSingleRecipe}
          backgroundColor={backgroundColor}
        />
      )}
      {showSingleRecipe && (
        <SingleRecipe
          currentSingleRecipe={currentSingleRecipe}
          onToggleSingleRecipe={handleToggleSingleRecipe}
          backgroundColor={backgroundColor}
        />
      )}
    </div>
  );
}
