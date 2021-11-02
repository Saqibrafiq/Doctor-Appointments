import { Link } from 'react-router-dom';

import { AppBar, Button, Hidden, Toolbar } from '@material-ui/core';

import { MenuDesk } from '../MenuDesk/MenuDesk';
import { MenuMobile } from '../MenuMobile/MenuMobile';

import { useStyles } from './styles';

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Button component={Link} to='/' className={classes.logo}>
            <h1>Home</h1>
          </Button>
          <Hidden mdUp>
            <MenuMobile />
          </Hidden>
          <Hidden mdDown>
            <MenuDesk />
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};
