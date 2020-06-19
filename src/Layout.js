/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import Link from '../src/Link';
import Copyright from '../src/Copyright';

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({disableHysteresis: true, threshold: 50});
    return (<Slide appear={false} direction="down" in={!trigger}>
            {children}
            </Slide>
  );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Layout(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const { title, ...other } = props;

    return (<React.Fragment>
              <HideOnScroll {...props}>
                <AppBar color="transparent" style={{boxShadow: 'none'}}
                        position="fixed"
                        className={clsx(classes.appBar, {
                            [classes.appBarShift]: open,
                        })}>
                  <Toolbar>
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      onClick={handleDrawerOpen}
                      edge="start"
                      className={clsx(classes.menuButton, open && classes.hide)}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="primary">
                      Edward A. Roualdes
                    </Typography>

                  </Toolbar>
                </AppBar>
              </HideOnScroll>
              <Toolbar />

              <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
              >
                <div className={classes.drawerHeader}>
                  <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                  </IconButton>
                </div>
                <Divider />
                <List>
                  <ListItem button component={Link} href="/">
                    <ListItemText>Home</ListItemText>
                  </ListItem>

                  <ListItem button component={Link} href="/projects">
                    <ListItemText>Projects</ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText>Teaching</ListItemText>
                  </ListItem>

                    <List component="div" disablePadding>
                      <ListItem button component={Link} href="/math105">
                        <ListItemIcon/>
                        <ListItemText primary="Math 105"/>
                      </ListItem>
                      <ListItem button component={Link} href="/math314">
                        <ListItemIcon/>
                        <ListItemText primary="Math 314" />
                      </ListItem>
                      <ListItem button component={Link} href="/math315">
                        <ListItemIcon/>
                        <ListItemText primary="Math 315" />
                      </ListItem>
                    </List>

                </List>
              </Drawer>

              <Container maxWidth="sm">
                <Box>
                  {props.children}
                </Box>
              </Container>
            </React.Fragment>
           );
}
