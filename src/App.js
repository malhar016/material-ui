import {
  AppBar,
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";

import React from "react";

const App = (props) => {
  return (
    <AppBar sx={{ background: "green" }}>
      <Toolbar>
        <Grid container>
          <Grid item xs={2}>
            <Typography>Hello</Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default App;
