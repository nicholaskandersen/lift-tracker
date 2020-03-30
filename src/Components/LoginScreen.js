import React from "react";
import {
  Button,
  Typography,
  TextField,
  withStyles,
  Paper
} from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    "& .MuiTableCell-head": {
      fontSize: "1.25rem"
    }
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2)
  }
});

const LoginScreen = ({ classes, ...props }) => {
  return (
    <Paper className={classes.paper} elevation={3}>
      <div>
        <Typography variant="h6">Username</Typography>
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="username"
          variant="outlined"
        ></TextField>
      </div>
      <div>
        <Typography variant="h6">Password</Typography>
      </div>
      <div>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
      </div>
      <div>
        <Link to="/workouts">
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Link>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(LoginScreen);
