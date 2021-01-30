import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, makeStyles, Button, IconButton, Link, Drawer, MenuItem } from '@material-ui/core'; //also Link
import MenuIcon from '@material-ui/icons/Menu';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Container from '@material-ui/core/Container';

const headersData = [
  {
    label: 'About',
    to: 'about',
  },
  {
    label: 'Work',
    to: 'work',
  },
  {
    label: 'Resume',
    to: 'https://stas-docs.s3.eu-central-1.amazonaws.com/StasTarasenkoCV_Eng.pdf',
  },
  {
    label: 'Contact',
    to: 'contact',
  },
];

const useStyles = makeStyles(() => ({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: '#000000',
    background: '-webkit-linear-gradient(to right, #434343, #000000)',
    background: 'linear-gradient(to right, #434343, #000000)',
    height: '70px',
    paddingRight: '10px',
    paddingLeft: '10px',
    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: 'Work Sans, sans-serif',
    fontSize: '30px',
    fontWeight: 800,
    color: '#FFFEFE',
    textAlign: 'left',
    // textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
      cursor: 'pointer',
    },
  },
  menuButton: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    size: '18px',
    marginLeft: '38px',
    '& navLink active': {
      color: 'red',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  drawerContainer: {
    background: '#e3eeff',
    height: '100%',

    '& li': {
      color: 'black',
      fontSize: '1rem',
      fontWeight: 500,
    },

    padding: '20px 30px',
  },
  drawerHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    background: 'black',
    height: '70px',
    width: '100%',
  },
  drawerIcon: {
    color: 'white',
    fontSize: '2.5rem',
  },
  active: {
    // fontWeight: 800,
    // color: 'red',
  },
}));

const Header = () => {
  const classes = useStyles();
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

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        {HeaderLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={classes.toolbar}>
        <div>{HeaderLogo}</div>
        <IconButton
          {...{
            edge: 'start',
            color: 'inherit',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon className={classes.drawerIcon} />
        </IconButton>

        <Drawer
          {...{
            anchor: 'right',
            open: drawerOpen,
            onClose: handleDrawerClose,
            transitionDuration: 500,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton
              {...{
                edge: 'start',
                onClick: handleDrawerClose,
              }}
            >
              <ArrowForwardIosIcon className={classes.drawerIcon} />
            </IconButton>
          </div>
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, to }) => {
      return (
        <Link
          {...{
            component: Link,
            href: to,
            color: 'inherit',
            style: { textDecoration: 'none' },
            key: label,
          }}
          target={label === 'Resume' ? '_blank' : '_self'}
        >
          <MenuItem>
            {label !== 'Resume' ? (
              <ScrollLink
                className={classes.navLink}
                activeClass={classes.active}
                to={to}
                spy
                offset={-100}
                smooth
                duration={800}
              >
                {label}
              </ScrollLink>
            ) : (
              label
            )}
          </MenuItem>
        </Link>
      );
    });
  };

  const HeaderLogo = (
    <Typography variant='h4'>
      <ScrollLink className={classes.logo} to='main' smooth duration={800}>
        STar@s
      </ScrollLink>
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, to }) => {
      return (
        <Button
          {...{
            key: label,
            color: 'inherit',
            href: to,
            component: Link,
            className: classes.menuButton,
          }}
          target={label === 'Resume' ? '_blank' : '_self'}
        >
          {label !== 'Resume' ? (
            <ScrollLink
              className={classes.navLink}
              activeClass={classes.active}
              to={to}
              spy
              offset={-100}
              smooth={true}
              duration={800}
            >
              {label}
            </ScrollLink>
          ) : (
            label
          )}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={classes.header}>
        <Container maxWidth='lg'>{mobileView ? displayMobile() : displayDesktop()}</Container>
      </AppBar>
    </header>
  );
};

export default Header;
