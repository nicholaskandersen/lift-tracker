import React, { Component } from "react";
import {
  Button,
  Typography,
  TextField,
  AppBar,
  Toolbar
} from "@material-ui/core";
import { Link } from "react-router-dom";

class MainHeader extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Lift Tracker</Typography>
          <Button color="inherit"></Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default MainHeader;
