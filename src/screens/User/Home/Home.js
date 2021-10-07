import Category from "components/User/Category/Category";
import Header from "components/User/Header/Header";
import Navbar from "components/User/Navbar/Navbar";
import React from "react";
import { categories, listPost } from "data";
//import for data

function Home() {
  return (
    <>
      <Header />
      <Navbar categories={categories} />
      <Category categories={categories} listPost={listPost} />
    </>
  );
}

export default Home;
