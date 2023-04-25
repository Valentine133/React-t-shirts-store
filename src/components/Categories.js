import React, { useState } from "react";

const Categories = ({ value, onChangeCategory }) => {

  // const onChangeCategory = (index) => {
  //   setActiveIndex(index)
  // }

  const categories = ['All', 'Games', 'Movies', 'IT', 'Comics'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li 
            key={categoryName} 
            onClick={() => onChangeCategory(i)} 
            className={value === i ? 'active': ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories;