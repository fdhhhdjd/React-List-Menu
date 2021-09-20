import React from "react";

const Categories = ({ categories, activeCategory, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            className={`${
              activeCategory === category ? "filter-btn active" : "filter-btn"
            }`}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
