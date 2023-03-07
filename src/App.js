import { Box } from "@mui/material";

import React from "react";
import Navbar from "./Navbar";

const links = ["FORM", "MODELS", "COMPONENTS"];

const App = (props) => {
  return (
    <Box>
      <Navbar links={links} />
    </Box>
  );
};

export default App;
