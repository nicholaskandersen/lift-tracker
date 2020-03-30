import React from "react";
import { Button, Typography, TextField, withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const LoginTwo = props => {
  return (
    <div>
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
    </div>
  );
};

export default Login;
