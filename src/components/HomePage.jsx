import { useState, useContext } from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { StateContext} from '../controllers/StateContext';
import { usePage, useTypography, useButton } from '../styles/styles';
import { CustomTable } from './CustomTable';
import { CreateUpdateNews } from './CreateUpdateNews';

const newOneNews = {
  id: '',
  title: '',
  description: '',
  posted: `${new Date().toLocaleDateString()}`,
};

/**   MAIN FUNCTION COMPONENT  */
export const HomePage = () => {
  const value = useContext(StateContext);

  const paper = usePage();
  const button = useButton();
  const typography = useTypography();

  const [userAction, setUserAction] = useState('');
  const [userPicksId, setUserPicksId] = useState('');

  const oneNews = (
    userPicksId
      ? (value.news).find(item => item.id === userPicksId)
      : newOneNews
  );

  const pressedButton = () => {
    setUserAction('add');
    setUserPicksId('');
  };

  return (
    <Paper className={paper.homePage}>

      <Typography variant="h1" className={typography.h1}>
        Welcome to the News Posts App
      </Typography>

      {
        userAction
          &&
          <CreateUpdateNews userAction={userAction} setUserAction={setUserAction} oneNews={oneNews} />
      }

      <CustomTable setUserAction={setUserAction} setUserPicksId={setUserPicksId}/>

      {
        !userAction
          &&
          <Button
            onClick={pressedButton}
            variant="contained"
            className={button.button}
          >
            Create new one news
          </Button>
      }

    </Paper>
  );
};
