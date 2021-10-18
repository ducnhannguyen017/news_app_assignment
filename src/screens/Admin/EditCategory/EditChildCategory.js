import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "components/Admin/Navbar/Navbar";
import CustomContainer from "components/Admin/CustomContainer/CustomContainer";
import { Button, MenuItem, TextField } from "@material-ui/core";
import { categoryState } from "app/selectors/Selectors";
import { useDispatch, useSelector } from "react-redux";
import { requestUpdateChildCategory } from "api/api";
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

export default function EditChildCategory({ match, type }) {
  console.log(match);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [childForm, setChildForm] = useState({
    name: "",
    update_parent_id: "",
  });
  const { name, update_parent_id } = childForm;
  const category = useSelector(categoryState);
  //------------
  console.log(category);
  const parentCategory = (id) =>
    category.isLoading
      ? { name: "" }
      : category.data.data.filter((element) => element.id === id)[0];

  const childCategory = (parentId, childId) =>
    parentCategory(parentId).category_child === undefined
      ? { name: "" }
      : parentCategory(parentId).category_child.filter(
          (element) => element.id === childId
        )[0];

  console.log(
    childCategory(Number(match.params.parentId), Number(match.params.childId))
  );
  console.log(parentCategory(Number(match.params.parentId)));

  useEffect(() => {
    setChildForm({
      name: childCategory(
        Number(match.params.parentId),
        Number(match.params.childId)
      ).name,
      update_parent_id: match.params.parentId,
    });
  }, [match.params, category]);
  console.log(childForm);

  const handleChange = (e) => {
    setChildForm({ ...childForm, [e.target.name]: e.target.value });
  };

  const handleClickEdit = async () => {
    try {
      const res = await requestUpdateChildCategory({
        ...childForm,
        child_id: match.params.childId,
      });
      res.status === Number(1) ? alert(res.message) : alert("Lỗi");
      dispatch(getCategory());
      history.push("/admin");
    } catch (error) {
      alert("Lỗi");
    }
  };
  console.log({
    ...childForm,
    child_id: match.params.childId,
  });
  return (
    <>
      <div className={classes.root}>
        <Navbar />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <CustomContainer headerText="Edit Category">
            <div>
              <h2>Name</h2>
              <TextField
                xs={10}
                id="filled-basic"
                variant="filled"
                className={classes.textField}
                name="name"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div>
              <h2>Parent Category</h2>
              {category.isLoading ? null : (
                <TextField
                  xs={2}
                  id="filled-select-currency"
                  select
                  name="update_parent_id"
                  value={update_parent_id}
                  onChange={handleChange}
                  variant="filled"
                  className={classes.textField}
                >
                  {category.data.data.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {String(option.name)}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleClickEdit}
              >
                Done
              </Button>
            </div>
          </CustomContainer>
        </main>
      </div>
    </>
  );
}
