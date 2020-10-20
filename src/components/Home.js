import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';
import { Drawer, Container, CssBaseline } from '@material-ui/core';
import Navbar from './_Navbar';
import TableMaker from './_Table';
import HeaderMaker from './_Header';

// class Home extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {}
// }

const App = () => {
  const classes = useStyles();
  const itemsList = ['Page-1', 'Page-2', 'Page-3', 'Page-4', 'Page-5'];

  return (
    <div className={clsx('App', classes.root)}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Navbar items={itemsList} base="/home"></Navbar>
      </Drawer>

      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            {itemsList.map((item, i) => (
              <Route path={`/home/${item}`} component={() => <HeaderMaker text={item} />} key={i} />
            ))}
          </Switch>
          <TableMaker />
        </Container>
      </main>
    </div>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: '#535454',
    color: '#fff',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default App;
