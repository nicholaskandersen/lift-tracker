import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../Actions/workOut";
import {
  Grid,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  withStyles,
  Fab
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

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

const WorkOut = ({ classes, ...props }) => {
  useEffect(() => {
    props.fetchAllWorkOuts();
  }, []);

  return (
    <Paper className={classes.paper} elevation={3}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <div>
        <h1>Workouts</h1>
      </div>
      <Grid container>
        <Grid item xs={12}>
          <TableContainer>
            <Table>
              <TableHead className={classes.root}>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Sport</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.workOutList.map((record, index) => {
                  return (
                    <TableRow key={index} hover>
                      <TableCell>{record.name}</TableCell>
                      <TableCell>{record.description}</TableCell>
                      <TableCell>{record.sport}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Paper>
  );
};

const mapStateToProps = state => ({
  workOutList: state.workOut.list
});

const mapActionToProps = {
  fetchAllWorkOuts: actions.fetchAll
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(WorkOut));
