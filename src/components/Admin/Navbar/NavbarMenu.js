import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BarChartIcon from "@material-ui/icons/BarChart";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <ListItem button>
      <Link to="/admin" style={{ display: "flex" }}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Category" />
      </Link>
    </ListItem>
    <ListItem button>
      <Link to="/admin/post-list" style={{ display: "flex" }}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Posts" />
      </Link>
    </ListItem>
  </div>
);
