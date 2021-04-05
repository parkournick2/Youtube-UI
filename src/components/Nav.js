import React from "react";
import {
  Button,
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  Drawer,
  ListItem,
  Divider,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { AccountCircle, PlayCircleFilledWhite } from "@material-ui/icons";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import YouTubeIcon from "@material-ui/icons/YouTube";
import AppsIcon from "@material-ui/icons/Apps";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import Home from "../pages/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    color: 'white',
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: "240px",
    flexShrink: 0,
  },
  drawerPaper: {
    paddingTop: "64px",
    width: "240px",
    border: "none",
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  grow: {
    flexGrow: "1",
  },
  listItemText: {
    fontSize: '14px',
  },
  listItem: {
    padding: '8px',
  }
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <YouTubeIcon color="primary" fontSize="large" />
          <Typography className={classes.title}>YouTube</Typography>
          <div className={classes.grow} />
          <IconButton className={classes.icon} color="inherit">
            <VideoCallIcon />
          </IconButton>
          <IconButton className={classes.icon} color="inherit">
            <AppsIcon />
          </IconButton>
          <IconButton className={classes.icon} color="inherit">
            <MoreVertIcon />
          </IconButton>
          <Button
            startIcon={<AccountCircle />}
            variant="outlined"
            color="secondary"
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem className={classes.listItem} button key={"Inicio"}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText classes={{primary: classes.listItemText}} primary="Inicio" />
          </ListItem>
          <ListItem className={classes.listItem} button key={"Explorar"}>
            <ListItemIcon>
              <ExploreIcon />
            </ListItemIcon>
            <ListItemText classes={{primary: classes.listItemText}} primary="Explorar" />
          </ListItem>
          <ListItem className={classes.listItem} button key={"Inscrições"}>
            <ListItemIcon>
              <SubscriptionsIcon />
            </ListItemIcon>
            <ListItemText classes={{primary: classes.listItemText}} primary="Inscrições" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem className={classes.listItem} button key={"Biblioteca"}>
            <ListItemIcon>
              <VideoLibraryIcon />
            </ListItemIcon>
            <ListItemText classes={{primary: classes.listItemText}} primary="Biblioteca" />
          </ListItem>
          <ListItem className={classes.listItem} button key={"Histórico"}>
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText classes={{primary: classes.listItemText}} primary="Histórico" />
          </ListItem>
        </List>
      </Drawer>
      <Home />
    </div>
  );
}
