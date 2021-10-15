import "./App.css";
import "screens/User/Home/home.css";
import RootRoute from "screens/RootRoute";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategory, getPost } from "app/action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getPost());
  }, [dispatch]);

  return <RootRoute />;
}

export default App;
