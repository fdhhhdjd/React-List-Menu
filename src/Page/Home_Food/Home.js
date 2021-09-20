import React, { useState, useEffect } from "react";
import "./Home.css";
// import logo from "../../images/logo1.png";
import logo from "../../logo1.png";
import Categories from "../../Components/Categories/Categories";
import items from "../../data/Data";
import Menu from "../Menu/Menu";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
const Home = () => {
  const [menuItem, setMenuItem] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItem(items);
      return;
    }
    const menuItems = items.filter((item) => item.category === category);
    setMenuItem(menuItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <img src={logo} alt="logo" className="logo" />
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItem} />
      </section>
    </main>
  );
};

export default Home;
