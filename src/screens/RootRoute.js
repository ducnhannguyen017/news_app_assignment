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

function RootRoute() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home"></Redirect>
        <Route exact path="/home" component={Home}></Route>
        <Route path="/home/:id" component={CategoryNews}></Route>
        <Route exact path="/detail" component={Detail}></Route>
        <Route path="/detail/:id" component={Detail}></Route>

        <Route exact path="/admin" component={AdminHome}></Route>
        <Route path="/admin/post-list" component={AllPosts}></Route>
      </Switch>
    </Router>
  );
}

export default RootRoute;
