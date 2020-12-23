import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import Container from "@material-ui/core/Container";

const headersData = [
  {
    label: "About",
    href: "#",
  },
  {
    label: "Work",
    href: "#",
  },
  {
    label: "Resume",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    // background: "#232526",
    // background:
    //   "-webkit-linear-gradient(to right, #414345, #232526)" /* Chrome 10-25, Safari 5.1-6 */,
    // background:
    //   "linear-gradient(to right, #414345, #232526)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
    background: "#000000",
    background: "-webkit-linear-gradient(to right, #434343, #000000)",
    background: "linear-gradient(to right, #434343, #000000)",

    paddingRight: "80px",
    paddingLeft: "100px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontSize: "30px",
    fontWeight: 800,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

const Header = () => {
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {HeaderLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{HeaderLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: NavLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const HeaderLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      STar@s
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: NavLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        <Container maxWidth="lg">
          {mobileView ? displayMobile() : displayDesktop()}
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;
