import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "screens/User/Home/Home";
import Detail from "screens/User/Detail/Detail";
import CategoryNews from "screens/User/CategoryNews/CategoryNews";
import AdminHome from "screens/Admin/AllCategory/AllCategory";
import AllPosts from "screens/Admin/AllPosts/AllPosts";
import SignIn from "./Auth/SignIn";
import EditPost from "screens/Admin/EditPost/EditPost";
import EditParentCategory from "./Admin/EditCategory/EditParentCategory";
import EditChildCategory from "./Admin/EditCategory/EditChildCategory";

function RootRoute() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home"></Redirect>
        <Route exact path="/home" component={Home}></Route>
        <Route path="/home/:id" component={CategoryNews}></Route>
        <Route path="/detail/:id" component={Detail}></Route>

        <Route exact path="/admin" component={AdminHome}></Route>
        <Route
          path="/admin/edit-parent/:id"
          component={EditParentCategory}
        ></Route>
        <Route
          path="/admin/edit-child/:parentId/:childId"
          component={EditChildCategory}
        ></Route>
        <Route path="/admin/edit-post/:id" component={EditPost}></Route>
        <Route path="/admin/post-list" component={AllPosts}></Route>

        <Route path="/auth" component={SignIn}></Route>
      </Switch>
    </Router>
  );
}

export default RootRoute;
