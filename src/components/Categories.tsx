import React, { memo } from "react";

type CategoriesProps = {
  value: number;
  onChangeCategory: (i: number) => void;
}

const categories = ['All', 'Games', 'Movies', 'IT', 'Comics'];

const Categories: React.FC<CategoriesProps> = memo(({ value, onChangeCategory }) => {

  // const onChangeCategory = (index) => {
  //   setActiveIndex(index)
  // }

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
})

export default Categories;