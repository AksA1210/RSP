import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cards from './Cards';
function RecipeDashboard() {
  return (
    <>
      <Cards />
    </>
  );
}

/*const RecipeDashboard = () => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: 'Recipe 1',
      description: 'This is recipe 1.',
      category: 'recommended'
    },
    {
      id: 2,
      name: 'Recipe 2',
      description: 'This is recipe 2.',
      category: 'trending'
    },
    {
      id: 3,
      name: 'Recipe 3',
      description: 'This is recipe 3.',
      category: 'fresh'
    },
    {
      id: 4,
      name: 'Recipe 4',
      description: 'This is recipe 4.',
      category: 'recent'
    },
    {
      id: 5,
      name: 'Recipe 5',
      description: 'This is recipe 5.',
      category: 'uploads'
    },
    {
      id: 6,
      name: 'Recipe 6',
      description: 'This is recipe 6.',
      category: 'uploads'
    },
    {
      id: 7,
      name: 'Recipe 7',
      description: 'This is recipe 7.',
      category: 'uploads'
    }
  ]);

  const renderRecipeCards = (category) => {
    const filteredRecipes = recipes.filter(recipe => recipe.category === category);
    const rows = [];

    for (let i = 0; i < filteredRecipes.length; i += 3) {
      const row = filteredRecipes.slice(i, i + 3).map(recipe => (
        <div key={recipe.id} className="recipe-card">
          <h3>{recipe.name}</h3>
          <p>{recipe.description}</p>
        </div>
      ));

      rows.push(
        <div key={i} className="recipe-row">
          {row}
        </div>
      );
    }

    return rows;
  };

  const handleBrowseMoreClick = (category) => {
    // Navigate to the next page with more recipes for this category
  };

  return (
    <div className="recipe-dashboard">
      <div className="recipe-category-row">
        <h2>Recommended/For you</h2>
        {renderRecipeCards('recommended')}
        <button onClick={() => handleBrowseMoreClick('recommended')}>Browse More Recipes</button>
      </div>
      <div className="recipe-category-row">
        <h2>Trending</h2>
        {renderRecipeCards('trending')}
        <button onClick={() => handleBrowseMoreClick('trending')}>Browse More Recipes</button>
      </div>
      <div className="recipe-category-row">
        <h2>Fresh Uploads</h2>
        {renderRecipeCards('fresh')}
        <button onClick={() => handleBrowseMoreClick('fresh')}>Browse More Recipes</button>
      </div>
      <div className="recipe-category-row">
        <h2>Recently viewed</h2>
        {renderRecipeCards('recent')}
        <button onClick={() => handleBrowseMoreClick('recent')}>Browse More Recipes</button>
      </div>
      <div className="recipe-category-row">
        <h2>My uploads</h2>
        {renderRecipeCards('uploads')}
        <button onClick={() => handleBrowseMoreClick('uploads')}>Browse More Recipes</button>
      </div>
    </div>
  );
};*/


export default RecipeDashboard;
