import React, {FC, FormEvent, ReactElement, useState} from 'react';
import {Link} from 'react-router-dom';

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

const AuthorizationRegistration: FC = (): ReactElement => {
  const classes = useStyles();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const signUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.warn(name, email);
    setName('');
    setEmail('');
  };

  return (
    <Container component={'section'} maxWidth={'xs'} className={classes.container}>
      <div className={classes.header}>
        <Typography variant={'h5'} className={classes.title}>
          Create your account
        </Typography>
      </div>

      <form onSubmit={signUp} autoComplete="off" className={classes.body}>
        <TextField
          onChange={(e: inputChangeEventType) => inputChangeHandler(e, setName)}
          value={name}
          type={'text'}
          variant={'outlined'}
          className={classes.input}
          autoFocus
          fullWidth
          label={'Name'}
          placeholder={'Name'}/>

        <TextField
          onChange={(e: inputChangeEventType) => inputChangeHandler(e, setEmail)}
          value={email}
          type={'email'}
          variant={'outlined'}
          className={classes.input}
          fullWidth
          label={'Email'}
          placeholder={'Email'}/>

        <Button type={'submit'} variant={'contained'} color={'primary'} fullWidth>
          Sign up
        </Button>
      </form>

      <div className={classes.footer}>
        <Typography variant={'body2'}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          I already have an account
        </Typography>

        <Link to={'/log-in'} className={'router-link'}>
          <Typography color={'primary'} variant={'button'}>
            Log in
          </Typography>
        </Link>
      </div>
    </Container>
  );
};

export default AuthorizationRegistration;