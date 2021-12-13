import { useState, useContext } from 'react';

import Button from '@material-ui/core/Button';

import { useNewsForm, useButton } from '../styles/styles';
import { AlertMessage } from './AlertMessage';
import { NewsFormField } from './CreateUpdateField';

import { actions } from '../controllers/actions';
import { requests } from '../controllers/api';
import { StateContext} from '../controllers/StateContext';

/**   MAIN FUNCTION COMPONENT  */
export const NewsForm = ({ oneNews }) => {
  const context = useContext(StateContext);

  const newsForm = useNewsForm();
  const button = useButton();

  const [newTitle, setNewTitle] = useState(oneNews.title);
  const [newDescription, setNewDescription] = useState(oneNews.description);
  const [newPosted, setNewPosted] = useState(oneNews.posted);
  const [serverResponse, setServerResponse] = useState(false);
  const [trySubmit, setTrySubmit] = useState(false);

  const changedNews = {
    id: oneNews.id,
    title: newTitle,
    description: newDescription,
    posted: newPosted,
  };

  const pressedButton = () => {
    setTrySubmit(true);
    setServerResponse(true);
    if (oneNews.id) {
      requests(actions.update(changedNews), context.setNews);
    } else {
      requests(actions.append(changedNews), context.setNews);
    }
  };

  return (
    <form className={newsForm.form} noValidate autoComplete="off">

      <NewsFormField title='Title' value ={newTitle} callback={setNewTitle} />
      <NewsFormField title='Description' value={newDescription} callback={setNewDescription} />
      <NewsFormField title='Updated' value={newPosted} callback={setNewPosted} />

      <Button
        onClick={pressedButton}
        variant="contained"
        className={button.button}
      >
        Update information

        <AlertMessage trySubmit={trySubmit} serverResponse={serverResponse} />

      </Button>

    </form>
  );
}
