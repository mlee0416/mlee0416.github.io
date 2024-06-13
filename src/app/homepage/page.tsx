"use client";
import React from "react";
import {
  Box,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Link from "next/link";

const TOP_MENU_LIST = [
  {
    name: "Resume",
    route: "/resume",
  },
  {
    name: "Projects",
    route: "/projects",
  },
  {
    name: "About Me",
    route: "/aboutme",
  },
];
const BOTTOM_MENU_LIST = [
  {
    name: "Sign Out",
    route: "/signout",
  },
];
export default function Homepage() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 200, height: "100vh", borderRight: "1px solid #E5E5E5" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {TOP_MENU_LIST.map((menuItem) => (
          <Link href={menuItem.route} key={menuItem.name}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={menuItem.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {BOTTOM_MENU_LIST.map((menuItem) => (
          <Link href={menuItem.route} key={menuItem.name}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={menuItem.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
  return <div>{DrawerList}</div>;
}
