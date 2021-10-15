import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "components/Admin/Navbar/Navbar";
import Category from "components/Admin/Category/Category";
// import { categories } from "data";
import CustomContainer from "components/Admin/CustomContainer/CustomContainer";
import { Button, MenuItem, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { categoryState } from "app/selectors/Selectors";
import {
  requestAddParentCategory,
  requestAddChildCategory,
  requestRemoveParentCategory,
  requestRemoveChildCategory,
} from "api/api";
import { getCategory } from "app/action";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  textField: {
    marginBottom: "15px",
    width: "100%",
  },
}));

export default function AdminHome() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [categorySelected, setCategorySelected] = useState(0);
  const [nameCategory, setNameCategory] = useState("");

  const { isLoading, data } = useSelector(categoryState);
  const [category, setCategory] = useState(isLoading ? {} : data);
  console.log(data);
  useEffect(() => {
    setCategory(data);
  }, [data]);

  const addCategory = async () => {
    try {
      if (nameCategory === "") {
        alert("Hãy Nhập Name Category");
      } else {
        if (categorySelected === 0) {
          const res = await requestAddParentCategory({ name: nameCategory });
          res.status === Number(1) ? alert(res.message) : alert("Lỗi");
          dispatch(getCategory());
        } else {
          const res = await requestAddChildCategory({
            name: nameCategory,
            parent_id: categorySelected,
          });
          res.status === Number(1) ? alert(res.message) : alert("Lỗi");
          dispatch(getCategory());
        }
      }
    } catch (error) {
      alert("Lỗi");
    }
  };

  const handleChange = (event) => {
    setCategorySelected(event.target.value);
  };
  const handleChangeNameCategory = (event) => {
    setNameCategory(event.target.value);
  };

  const handleClickDelete = async (row, type) => {
    try {
      var choice = window.confirm("Do you want delete this category");
      if (choice) {
        if (type === "parent") {
          const res = await requestRemoveParentCategory({ parent_id: row.id });
          res.status === Number(1) ? alert(res.message) : alert("Lỗi");
        } else {
          const res = await requestRemoveChildCategory({ child_id: row.id });
          res.status === Number(1) ? alert(res.message) : alert("Lỗi");
        }
      }
      dispatch(getCategory());
    } catch (error) {
      console.log("Lỗi");
    }
  };

  return (
    <>
      <div className={classes.root}>
        <Navbar />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <CustomContainer headerText="Parent Category">
            {category.data === undefined ? null : (
              <Category
                handleClickDelete={handleClickDelete}
                categories={category.data}
              />
            )}
          </CustomContainer>
          <CustomContainer headerText="Add Category">
            <div>
              <h2>Name</h2>
              <TextField
                xs={10}
                id="filled-basic"
                variant="filled"
                className={classes.textField}
                onChange={handleChangeNameCategory}
                value={nameCategory}
              />
            </div>
            <div>
              <h2>Category</h2>
              {isLoading ? null : (
                <TextField
                  xs={2}
                  id="filled-select-currency"
                  select
                  value={categorySelected}
                  onChange={handleChange}
                  variant="filled"
                  className={classes.textField}
                >
                  <MenuItem key={0} value={0}>
                    Parent Category
                  </MenuItem>
                  {data.data.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {String(option.name)}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            </div>
            <div>
              <Button onClick={addCategory} variant="contained" color="primary">
                add
              </Button>
            </div>
          </CustomContainer>
        </main>
      </div>
    </>
  );
}
