import { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import { usePage, useTypography, useButton } from '../styles/styles';
import { CustomTable } from './CustomTable';
import { CreateUpdateNews } from './CreateUpdateNews';

export const HomePage = ({ state }) => {
  const paper = usePage();
  const button = useButton();
  const typography = useTypography();
  const [userAction, setUserAction] = useState('');

  const toPressed = () => {setUserAction('add')};

  return (
    <Paper className={paper.homePage}>

      <Typography variant="h1" className={typography.h1}>
        Welcome to the News Posts App
      </Typography>

      {
        userAction
          &&
          <CreateUpdateNews userAction={userAction} setUserAction={setUserAction} />
      }

      <CustomTable array={state} setUserAction={setUserAction} />

      {
        !userAction
          &&
          <Button
            onClick={toPressed}
            variant="contained"
            className={button.button}
          >
            Create new one news
          </Button>
      }

    </Paper>
  );
}
