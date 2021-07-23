import React, {FC, ReactElement} from 'react';
import {Link} from 'react-router-dom';

import {Button, Container, Typography} from '@material-ui/core';
import theme from '../../theme';

import {createStyles, makeStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    margin: 'auto',
  },
  buttonsBlockColumn: {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  button: {
    marginBottom: theme.spacing(2),
  },
}));

const Authorization: FC = (): ReactElement => {
  const classes = useStyles();

  return (
    <Container component={'section'} maxWidth={'xs'} className={classes.container}>
      <Typography variant={'h3'} style={{marginBottom: theme.spacing(3)}} noWrap align={'center'}>
        Cloud storage
      </Typography>

      <div className={classes.buttonsBlockColumn}>
        <Link to={'/sign-up'}>
          <Button variant={'contained'} color={'primary'} fullWidth className={classes.button}>
            Sign up
          </Button>
        </Link>

        <Link to={'/log-in'}>
          <Button variant={'outlined'} fullWidth className={classes.button}>
            Log in
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Authorization;