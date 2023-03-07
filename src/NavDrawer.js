import { MenuRounded } from "@mui/icons-material";
import {
  Drawer,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

const NavDrawer = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Grid item xs={isOpen ? 8 : 10}>
        <IconButton
          sx={{ float: "right" }}
          color="inherit"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <MenuRounded />
        </IconButton>
      </Grid>
      <Drawer
        PaperProps={{ sx: { background: "rgba(36,0,19,1)" } }}
        hideBackdrop
        anchor="right"
        open={isOpen}
      >
        <List>
          {links.map((link, idx) => (
            <ListItemButton key={idx} onClick={() => setIsOpen(!isOpen)}>
              <ListItemIcon>
                <ListItemText sx={{ color: "white" }}>{link}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default NavDrawer;
