import React from "react";
import CategoryCard from "./CategoryCard";

function Category(props) {
  const { categories, listPost, type } = props;
  return (
    <>
      {categories === null
        ? null
        : categories.map((category) => (
            <CategoryCard
              listPost={listPost.data}
              category={category}
              key={category.id}
              categoryParentId={category.id}
              type={type}
            />
          ))}
    </>
  );
}

export default Category;
