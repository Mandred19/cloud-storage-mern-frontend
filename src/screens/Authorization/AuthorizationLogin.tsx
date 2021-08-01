import React, {FC, FormEvent, ReactElement, useState} from 'react';
import { Link } from 'react-router-dom';

import {Button, Container, createStyles, makeStyles, TextField, Theme, Typography} from '@material-ui/core';

import {inputChangeEventType, inputChangeHandler} from '../../helpers/inputChangeHandler';
import {betweenChildrenMixin} from '../../theme/styleMixins';

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    margin: 'auto',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexFlow: 'column nowrap',
  },
  body: {
    marginBottom: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexFlow: 'column nowrap',
    ...betweenChildrenMixin({marginBottom: theme.spacing()}),
  },
}));

const AuthorizationLogin: FC = (): ReactElement => {
  const classes = useStyles();

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const logIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.warn(login, password);
    setLogin('');
    setPassword('');
  };

  return (
    <Container component={'section'} maxWidth={'xs'} className={classes.container}>
      <div className={classes.header}>
        <Typography variant={'h5'} className={classes.title}>
          Log in to storage
        </Typography>
      </div>

      <form onSubmit={logIn} className={classes.body} autoComplete="off">
        <TextField
          onChange={(e: inputChangeEventType) => inputChangeHandler(e, setLogin)}
          value={login}
          type={'text'}
          variant={'outlined'}
          className={classes.input}
          autoFocus
          fullWidth
          label={'Phone, email, or username'}
          placeholder={'Phone, email, or username'}/>

        <TextField
          onChange={(e: inputChangeEventType) => inputChangeHandler(e, setPassword)}
          value={password}
          type={'password'}
          variant={'outlined'}
          className={classes.input}
          fullWidth
          label={'Password'}
          placeholder={'Password'}/>

        <Button type={'submit'} variant={'contained'} color={'primary'} fullWidth>
          Log in
        </Button>
      </form>

      <div className={classes.footer}>
        <Typography variant={'body2'}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          I don't have an account
        </Typography>

        <Link to={'/sign-up'} className={'router-link'}>
          <Typography color={'primary'} variant={'button'}>
            Sign up
          </Typography>
        </Link>
      </div>
    </Container>
  );
};

export default AuthorizationLogin;