import React, { Component } from "react";
import {
  Button,
  Typography,
  TextField,
  AppBar,
  Toolbar,
  Drawer
} from "@material-ui/core";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <Drawer variant="permanent" anchor="left">
        <Typography>Nick Andersen</Typography>
        <Typography>Workouts</Typography>
      </Drawer>
    );
  }
}

export default Sidebar;
