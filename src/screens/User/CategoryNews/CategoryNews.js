import { categoryState, postState } from "app/selectors/Selectors";
import Category from "components/User/Category/Category";
import Header from "components/User/Header/Header";
import Navbar from "components/User/Navbar/Navbar";
import React from "react";
import { useSelector } from "react-redux";
//import for data

function CategoryNews({ match }) {
  const category = useSelector(categoryState);
  const post = useSelector(postState);
  const oneCategory = category.data.data.filter(
    (element) => element.id === Number(match.params.id)
  );
  return (
    <>
      <>
        <Header />
        {category.isLoading ? null : <Navbar categories={category.data.data} />}
        {/* <Navbar categories={categories} /> */}
        {post.isLoading ? null : (
          <Category categories={oneCategory} listPost={post.data.data} />
        )}
      </>
    </>
  );
}

export default CategoryNews;
