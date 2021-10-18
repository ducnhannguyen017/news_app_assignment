import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "components/Admin/Navbar/Navbar";
import CustomContainer from "components/Admin/CustomContainer/CustomContainer";
import { Button, TextField } from "@material-ui/core";
import { categoryState } from "app/selectors/Selectors";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import { requestUpdateParentCategory } from "api/api";
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

export default function EditParentCategory({ match, type }) {
  const classes = useStyles();
  const history = useHistory();
  const [parentName, setParentName] = useState("");
  const category = useSelector(categoryState);
  const dispatch = useDispatch();
  //------------
  console.log(category);
  const parentCategory = (id) =>
    category.isLoading
      ? { name: "" }
      : category.data.data.filter((element) => element.id === id)[0].name;

  console.log(parentCategory(Number(match.params.id)));
  useEffect(() => {
    setParentName(parentCategory(Number(match.params.id)));
  }, [match.params.id]);

  const handleClickEdit = async () => {
    try {
      const res = await requestUpdateParentCategory({
        name: parentName,
        parent_id: match.params.id,
      });
      res.status === Number(1) ? alert(res.message) : alert("Lỗi");
      dispatch(getCategory());
      history.push("/admin");
    } catch (error) {
      alert("Lỗi");
    }
  };

  const handleChange = (e) => {
    setParentName(e.target.value);
  };
  console.log(parentName);
  return (
    <>
      <div className={classes.root}>
        <Navbar />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <CustomContainer headerText="Edit Parent Category">
            <div>
              <h2>Name</h2>
              <TextField
                xs={10}
                id="filled-basic"
                variant="filled"
                className={classes.textField}
                name="name"
                value={parentName}
                onChange={handleChange}
              />
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
          <Link to="/admin">
            <ArrowBackIcon /> Quay lại
          </Link>
        </main>
      </div>
    </>
  );
}
