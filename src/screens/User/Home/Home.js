import Category from "components/User/Category/Category";
import Header from "components/User/Header/Header";
import Navbar from "components/User/Navbar/Navbar";
import React from "react";
import { useSelector } from "react-redux";
import { categoryState, postState } from "app/selectors/Selectors";
import Footer from "components/UI/Footer/Footer";
function Home(props) {
  const category = useSelector(categoryState);
  const post = useSelector(postState);
  return (
    <>
      <Header />
      {category.isLoading ? null : <Navbar categories={category.data.data} />}
      {/* <Navbar categories={categories} /> */}
      {post.isLoading || category.data.data === undefined ? null : (
        <Category
          type="notFull"
          categories={category.data.data}
          listPost={post.data.data}
        />
      )}
      <Footer />
    </>
  );
}

export default Home;
