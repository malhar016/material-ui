import styled from "@emotion/styled";
import { MenuBook } from "@mui/icons-material";
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import React, { useState } from "react";
import NavDrawer from "./NavDrawer";

const StyledButton = styled(Button)`
  margin-left: 1rem;
  background: rgba(67, 42, 191, 1);
`;

const Navbar = ({ links }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (e, value) => {
    setTabIndex(value);
  };

  return (
    <AppBar
      sx={{
        backgroundImage:
          "linear-gradient(90deg, rgba(36,0,19,1) 7%, rgba(67,42,191,1) 39%, rgba(0,207,255,1) 64%, rgba(0,74,255,1) 88%)",
      }}
    >
      <Toolbar>
        <Grid sx={{ placeItems: "center" }} container>
          <Grid item xs={2}>
            <Typography>
              <MenuBook />
            </Typography>
          </Grid>
          {isSmallScreen ? (
            <NavDrawer links={links} />
          ) : (
            <>
              <Grid item xs={6}>
                <Tabs
                  indicatorColor="secondary"
                  textColor="inherit"
                  value={tabIndex}
                  onChange={handleChange}
                >
                  {links.map((link, idx) => (
                    <Tab key={idx} label={link}></Tab>
                  ))}
                </Tabs>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={3}>
                <Box sx={{ justifyContent: "flex-end" }} display="flex">
                  <StyledButton color="secondary" variant="contained">
                    Login
                  </StyledButton>
                  <StyledButton color="secondary" variant="contained">
                    SignUp
                  </StyledButton>
                </Box>
              </Grid>
            </>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
