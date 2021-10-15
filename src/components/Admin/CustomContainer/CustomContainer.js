import { Container, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));
function CustomContainer(props) {
  const classes = useStyles();
  const { children, headerText } = props;

  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <h2 style={{ fontSize: "25px" }}>
          <b>{headerText}</b>
        </h2>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>{children}</Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default CustomContainer;
