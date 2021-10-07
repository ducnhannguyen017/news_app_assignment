import Category from "components/User/Category/Category";
import Header from "components/User/Header/Header";
import Navbar from "components/User/Navbar/Navbar";
import { categories, listPost } from "data";
import React from "react";
//import for data

function CategoryNews({ match }) {
  const oneCategory = categories.filter(
    (element) => element.id === Number(match.params.id)
  );
  console.log(oneCategory);
  return (
    <>
      <Header />
      <Navbar categories={categories} />
      <Category categories={oneCategory} listPost={listPost} />
    </>
  );
}

export default CategoryNews;
