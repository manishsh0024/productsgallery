import React, { useState } from 'react';

const CategoryNavigation = () => {
  // State to manage the active category (being hovered)
  const [activeCategory, setActiveCategory] = useState(null);

  // Dummy data for categories
  const categories = ['Category1'];

  return (
    <div>
      <ul className="category-nav">
        {categories.map((category, index) => (
          <li
            key={index}
            onMouseEnter={() => setActiveCategory(category)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            {category}
            {activeCategory === category && (
              <div className="sub-categories">
                {/* Sub-categories with clickable links */}
                <a href="/subcategory1">Sub-category 1</a>
                <a href="/subcategory2">Sub-category 2</a>
                <a href="/subcategory3">Sub-category 3</a>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryNavigation;
