import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "components/Admin/Navbar/Navbar";
import CustomContainer from "components/Admin/CustomContainer/CustomContainer";
import { MenuItem, TextField } from "@material-ui/core";

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
}));

export default function EditCategory({ match, type }) {
  const classes = useStyles();
  const [currency, setCurrency] = useState(1);
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <>
      <div className={classes.root}>
        <Navbar />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <CustomContainer headerText="Edit Category">
            <h2>Name</h2>
            <TextField
              xs={10}
              id="filled-basic"
              variant="filled"
              style={{ marginBottom: "15px" }}
            />
            <h2>Category</h2>
            <TextField
              xs={2}
              id="filled-select-currency"
              select
              value={currency}
              onChange={handleChange}
              variant="filled"
            >
              {[1, 2, 3].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </CustomContainer>
        </main>
      </div>
    </>
  );
}
