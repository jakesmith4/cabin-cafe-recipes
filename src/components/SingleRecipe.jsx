import { FaClock, FaBurn, FaUtensils } from 'react-icons/fa';

function SingleRecipe({
  currentSingleRecipe,
  onToggleSingleRecipe,
  backgroundColor,
}) {
  const currentIngredientsData = currentSingleRecipe.ingredientData.map(
    data => data
  );

  return (
    <div>
      <button onClick={onToggleSingleRecipe} className="back-btn">
        &#8592; back
      </button>
      <div className="single-recipe-img-data">
        <img
          src={currentSingleRecipe.img}
          alt={currentSingleRecipe.name}
          className="single-recipe-img"
        />
        <div className="single-recipe-float" style={{ color: backgroundColor }}>
          <h3>{currentSingleRecipe.name}</h3>
          <span className="single-recipe-float-ingredients-length">
            {
              currentSingleRecipe.ingredientData.map(data => data.ingredient)
                .length
            }
          </span>
          <span>ingredients</span>
          <ul className="single-recipe-icons">
            <li className="single-recipe-icons-item">
              <FaClock />
              <span>{currentSingleRecipe.time}</span>
            </li>
            <li className="single-recipe-icons-item">
              <FaBurn />
              <span>{currentSingleRecipe.calories} calories</span>
            </li>
            <li className="single-recipe-icons-item">
              <FaUtensils />
              <span>serves {currentSingleRecipe.serves}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="single-recipe-info section-center">
        <div>
          <h4
            className="single-recipe-heading"
            style={{ color: backgroundColor }}
          >
            ingredients:
          </h4>
          <ul className="single-recipe-data">
            {currentIngredientsData.map(data => (
              <li key={data.ingredient}>
                <img
                  src={data.url}
                  // src="img/cabin-cafe-chef.jpg"
                  alt={data.ingredient}
                  className="single-recipe-data-img"
                />
                <span className="single-recipe-data-info">
                  {data.ingredient}
                </span>
              </li>
            ))}
          </ul>
          <div className="single-recipe-instructions">
            <h4
              className="single-recipe-heading"
              style={{ color: backgroundColor }}
            >
              cooking instructions:
            </h4>
            <p className="single-recipe-text">
              {currentSingleRecipe.instructions}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SingleRecipe;
