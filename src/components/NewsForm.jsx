import { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { useNewsForm, useButton } from '../styles/styles';
import { AlertMessage } from './AlertMessage';
import { NewsFormField } from './NewsFormField';
// import { updateNews, addNews, sendToServer } from '../controllers/api';

export const NewsForm = ({ oneNews, operation }) => {
  const newsForm = useNewsForm();
  const button = useButton();

  const [newTitle, setNewTitle] = useState(oneNews.title);
  const [newDescription, setNewDescription] = useState(oneNews.description);
  const [newPosted, setNewPosted] = useState(oneNews.posted);
  const [serverResponse, setServerResponse] = useState(false);
  const [trySubmit, setTrySubmit] = useState(false);

  const updateNewsInfo = () => {
    if (!newTitle || !newPosted) {
      window.alert('Please, fill necessary information')
      return;
    }
    if (operation === 'update') {
      setTrySubmit(true);
      // sendToServer(
      //   {
      //     action: 'update',
      //     body: {
      //       id: oneNews.id,
      //       title: newTitle,
      //       posted: newPosted,
      //     },
      //   }
      // );
      // updateNews(oneNews.id, {
      //   title: newTitle,
      //   posted: newPosted,
      // }).then((promise) => {
      //   setServerResponse(promise === 200);
      //   setTimeout(() => {
      //     setServerResponse(false);
      //     setTrySubmit(false);
      //   }, 2000);
      // });
    }
    if (operation === 'add') {
      setTrySubmit(true);
      // sendToServer(
      //   {
      //     action: 'add',
      //     body: {
      //       id: '',
      //       title: newTitle,
      //       posted: newPosted,
      //     },
      //   }
      // )
      // addNews({
      //   title: newTitle,
      //   posted: newPosted,
      // }).then((promise) => {
      //   setServerResponse(promise === 200);
      //   setTimeout(() => {
      //     setServerResponse(false);
      //     setTrySubmit(false);
      //   }, 2000);
      // });
    }
  };

  return (
    <form className={newsForm.form} noValidate autoComplete="off">

      <NewsFormField title='Title' value ={newTitle} callback={setNewTitle} />
      <NewsFormField title='Description' value={newDescription} callback={setNewDescription} />
      <NewsFormField title='Updated' value={newPosted} callback={setNewPosted} />

      <Button
        onClick={() => updateNewsInfo()}
        variant="contained"
        className={button.button}
      >
        Update information

        <AlertMessage trySubmit={trySubmit} serverResponse={serverResponse} />

      </Button>

    </form>
  );
}
