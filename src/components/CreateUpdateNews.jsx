import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { usePage, useTypography, useButton } from '../styles/styles';
import { NewsForm } from "./NewsForm";

export const CreateUpdateNews = ({ userAction, setUserAction }) => {
  const paper = usePage();
  const typography = useTypography();
  const button = useButton();

  const oneNews = {
    title: '',
    description: '',
    posted: `${new Date().toLocaleDateString()}`,
  };

  return (
    <Paper className={paper.updatingPage}>

      <Typography variant="h2" className={typography.h2}>
        {
          userAction === 'update'
           ? 'You can update the news information'
           : 'Create new one news'
        }
      </Typography>

      <NewsForm
        oneNews={oneNews}
        operation={userAction}
      />

      <Button
        onClick={() => setUserAction('')}
        variant="contained"
        className={button.button}
      >
        Back to the news list
      </Button>

    </Paper>
  );
}
