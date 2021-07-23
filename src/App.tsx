import React, {FC, ReactElement} from 'react';
import {BrowserRouter} from 'react-router-dom';

import Router from './router';

import {Container} from '@material-ui/core';

import {createStyles, makeStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.default,
  },
}));

const App: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <Container component={'section'} maxWidth={false} className={classes.container}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </Container>
  );
};

export default App;
