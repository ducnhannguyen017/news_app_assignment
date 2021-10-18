import { Link, Typography } from "@material-ui/core";
import React from "react";

function Footer() {
  return (
    <Typography
      style={{ margin: "50px 0 20px 0" }}
      variant="body2"
      color="textSecondary"
      align="center"
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Footer;
