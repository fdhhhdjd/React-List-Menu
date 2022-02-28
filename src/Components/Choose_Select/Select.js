import React, { useEffect, useState } from "react";
import "./Select.css";
import { Link } from "react-router-dom";
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};
const Select = () => {
  const [isActive, setIsActive] = useState(false);
  const [select, setSelect] = useState(getLocalStorage());
  const options = [
    {
      id: 1,
      name: "Choose Item ✍️",
      path: "categories",
    },
    {
      id: 2,
      name: "Categories",
      path: "categories",
    },
    {
      id: 3,
      name: "Choose Image",
      path: "images",
    },
    {
      id: 4,
      name: "particle effect button  ",
      path: "button",
    },
    {
      id: 5,
      name: "Alphabet Auto",
      path: "alphabet_auto",
    },
    {
      id: 6,
      name: "React Router Dom ",
      path: "router",
    },
    {
      id: 7,
      name: "Carousel bootstrap ",
      path: "carousel",
    },
    {
      id: 8,
      name: "Api infinite scroll  ",
      path: "infinite",
    },
    {
      id: 9,
      name: "Url Choose Image ",
      path: "url",
    },
    {
      id: 10,
      name: "Show Image Movie Tab",
      path: "movie",
    },
    {
      id: 11,
      name: "Route Locations",
      path: "router_location",
    },
    {
      id: 12,
      name: "slider full",
      path: "slider",
    },
    {
      id: 13,
      name: "Copy Color",
      path: "copycolor",
    },
    {
      id: 14,
      name: "Choose Img",
      path: "img",
    },
    {
      id: 15,
      name: "theme Context",
      path: "themeContext",
    },
    {
      id: 16,
      name: "Search Width",
      path: "search",
    },
    {
      id: 17,
      name: "Css Beautiful",
      path: "css",
    },
    {
      id: 18,
      name: "form No libary",
      path: "form",
    },
    {
      id: 18,
      name: "Table",
      path: "table",
    },
  ];
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(select));
  }, [select]);
  return (
    <>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
          {select}
          <span className="fas fa-caret-down"></span>
        </div>
        {isActive && (
          <div className="dropdown-content">
            {options.map((item) => (
              <>
                <div
                  className="dropdown-item"
                  key={item}
                  onClick={(e) => {
                    setSelect(item.name);
                    setIsActive(false);
                  }}
                >
                  <strong>
                    <Link to={`${item.path}`} className="Link-options">
                      {item.name}
                    </Link>
                  </strong>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Select;
