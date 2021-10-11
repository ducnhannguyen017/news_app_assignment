import Category from "components/User/Category/Category";
import Header from "components/User/Header/Header";
import Navbar from "components/User/Navbar/Navbar";
import React, { useEffect } from "react";
import { categories, listPost } from "data";
import { requestCategory } from "../../../api/api";
import { connect } from "react-redux";
import { getCategory } from "app/action";
export const Home = (props) => {
  console.log("ewqedwiheiuwq");
  console.log(props);
  useEffect(() => {
    // getData();
    props.getCategory();
  }, []);
  const getData = async () => {
    try {
      let res = await requestCategory();
      console.log(res);
    } catch (error) {
      console.log("error");
    } finally {
    }
  };
  return (
    <>
      <Header />
      <Navbar categories={categories} />
      <Category categories={categories} listPost={listPost} />
    </>
  );
};

const mapStateToProps = (state) => ({
  categoryState: state.categoryState,
});

const mapDispatchToProps = {
  getCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
