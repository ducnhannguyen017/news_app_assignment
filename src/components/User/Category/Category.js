import React from "react";
import CategoryCard from "./CategoryCard";

function Category(props) {
  const { categories, listPost } = props;
  return (
    <>
      {categories.map((category) => (
        <CategoryCard
          listPost={listPost.data}
          category={category}
          key={category.id}
          categoryParentId={category.id}
        />
      ))}
    </>
  );
}

export default Category;
